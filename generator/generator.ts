import * as fs from 'fs'
import {camelCase, forEach, pickBy, filter, uniq, map} from 'lodash'

const fetch = require('node-fetch')

const url = 'https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json'

function adjustedCamelCase(input) {
    return input === 'IoT' ? 'iot' : camelCase(input)
}

function determineTypeScriptType(property, propertyName, typeSuffix) {
    if (property[typeSuffix] === 'List') {
        return `List<${determineTypeScriptType(property, propertyName, 'ItemType')}>`
    }
    if (property[typeSuffix] === 'Map') {
        return `{[key: string]: ${determineTypeScriptType(property, propertyName, 'ItemType')}}`
    }
    if (property[typeSuffix]) {
        return property[typeSuffix]
    }

    let primitiveType = property['Primitive' + typeSuffix].toLowerCase()
    if (primitiveType === 'json') {
        return 'any'
    }
    if (['integer', 'double', 'long'].includes(primitiveType)) {
        primitiveType = 'number'
    }
    if (primitiveType === 'timestamp') {
        primitiveType = 'string' // TODO consider Date.toISOString()
    }
    return `Value<${primitiveType}>`
}

function propertiesEntries(properties) {
    return map(properties, (property, propertyName) => {
        if (propertyName === 'Tags') {
            return `Tags?: ResourceTag[]`
        }

        return `${propertyName}${property.Required ? '' : '?'}: ${determineTypeScriptType(property, propertyName, 'Type')}`
    })
}

function generateInnerClass(name, properties) {
    return `export class ${name} {
${propertiesEntries(properties).map(e => `    ${e}`).join('\n')}

    constructor(properties: ${name}) {
        Object.assign(this, properties)
    }
}`
}

function generateTopLevelClass(namespace, name, properties) {
    return `export interface ${name}Properties {
${propertiesEntries(properties).map(e => `    ${e}`).join('\n')}
}

export default class ${name} extends ResourceBase {
    constructor(properties: ${name}Properties) {
        super('AWS::${namespace}::${name}', properties)
    }
}`
}

function hasTags(properties) {
    return Object.keys(properties).includes('Tags')
}

function generateFile(fileHeader, namespace, resourceName, properties, innerTypes) {
    let innerHasTags = false
    const innerTypesTemplates = map(innerTypes, (innerType, innerTypeFullName) => {
        const [, innerTypeName] = innerTypeFullName.split('.')
        innerHasTags = innerHasTags || hasTags(innerType.Properties)
        return generateInnerClass(innerTypeName, innerType.Properties)
    })

    const resourceImports = ['ResourceBase']
    if (innerHasTags || hasTags(properties)) {
        resourceImports.push('ResourceTag')
    }

    const generatedClass = generateTopLevelClass(namespace, resourceName, properties)

    const template = `${fileHeader}
   
import {${resourceImports.join(', ')}} from '../resource'
import {Value, List} from '../dataTypes'

${innerTypesTemplates.join('\n\n')}

${generatedClass}
`

    if (!fs.existsSync(`./types/${adjustedCamelCase(namespace)}`)) {
        fs.mkdirSync(`./types/${adjustedCamelCase(namespace)}`)
    }

    fs.writeFileSync(`./types/${adjustedCamelCase(namespace)}/${camelCase(resourceName)}.ts`, template, {encoding: 'utf8'})
}

function generateIndexFile(fileHeader, namespace, resourceNames) {
    const imports = resourceNames.map(resourceName => `import ${resourceName} from './${camelCase(resourceName)}'`)

    const template = `${fileHeader}
   
${imports.join('\n')} 

export default {
${resourceNames.map(t => `  ${t}`).join(',\n')}
}
`

    fs.writeFileSync(`./types/${adjustedCamelCase(namespace)}/index.ts`, template, {encoding: 'utf8'})
}

function generateGrandIndexFile(fileHeader, indexContent) {
    const imports = []

    forEach(indexContent, (dependentResourceNames, namespace) => {
        imports.push('\n' + `import ${namespace}_ from './${adjustedCamelCase(namespace)}'`)
        imports.push(`export const ${namespace} = ${namespace}_` + '\n')
        dependentResourceNames.forEach(resourceName => imports.push(`import ${namespace}${resourceName} from './${adjustedCamelCase(namespace)}/${camelCase(resourceName)}'`))
    })

    const template = `${fileHeader}
   
${imports.join('\n')} 

export default {
${Object.keys(indexContent).map(t => `  ${t}`).join(',\n')}
}
`

    fs.writeFileSync('./types/index.ts', template, {encoding: 'utf8'})
}

fetch(url)
    .then(res => res.json())
    .then(schema => {
        const fileHeader = `/* Generated from ${url}, version ${schema.ResourceSpecificationVersion} */`
        const indexContent = {}

        forEach(schema.ResourceTypes, (resource, resourceFullName) => {
            const [, namespace, resourceName] = resourceFullName.split('::')
            const properties = resource.Properties || {}
            const resourcePropertyTypes = pickBy(schema.PropertyTypes, (propertyType, propertyFullName) => propertyFullName.startsWith(resourceFullName + '.'))

            indexContent[namespace] = indexContent[namespace] || []
            indexContent[namespace].push(resourceName)

            generateFile(fileHeader, namespace, resourceName, properties, resourcePropertyTypes)
        })

        forEach(indexContent, (resourceNames, namespace) => {
            generateIndexFile(fileHeader, namespace, resourceNames)
        })

        generateGrandIndexFile(fileHeader, indexContent)
    })