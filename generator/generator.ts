import * as fs from 'fs'
import {camelCase, filter, uniq} from 'lodash'

const schema = JSON.parse(fs.readFileSync('./generator/CloudFormationV1.schema', 'utf8'))
const resources = schema['root-schema-object'].properties.Resources['child-schemas']

function adjustedCamelCase(input) {
    return input === 'IoT' ? 'iot' : camelCase(input)
}

function trySingular(property, name) {
    if (property['array-type'] === 'Object' && name[name.length - 1] === 's') {
        return name.substr(0, name.length - 1)
    }
    return name
}

function getLocalTypeNameFromRef(ref) {
    return ref.split('::')[2]
}

function getRefLocalTypeNameIfAvailable(property) {
    let refTypes = property['resource-ref-type']

    if (refTypes) {
        if (typeof(refTypes) === 'string') {
            return getLocalTypeNameFromRef(refTypes)
        }

        return '(' + refTypes.map(refType => getLocalTypeNameFromRef(refType)).join(' | ') + ')'
    }
}

function determineTypeScriptType(property, propertyName, schemaType) {
    if (schemaType === 'Json' || schemaType === 'Policy') {
        return 'any'
    }
    if (schemaType === 'Reference') {
        return 'Value<string>'
    }
    if (property['allowed-values']) {
        return `Value<${propertyName}>`
    }
    if (schemaType === 'Array') {
        return determineTypeScriptType(property, propertyName, property['array-type']) + '[]'
    }
    if (schemaType === 'Object') {
        return getRefLocalTypeNameIfAvailable(property) || trySingular(property, propertyName)
    }
    if (schemaType === 'Named-Array') {
        return `{[key: string]: any}`
    }
    return `Value<${schemaType.toLowerCase()}>`
}

function isNestedType(name, property) {
    return !!property.properties && name !== 'Tags' && !property['resource-ref-type']
}

function generateFile(namespace, resource, properties) {
    const nestedProperties = Object.keys(properties).filter(name => isNestedType(name, properties[name]))

    const nestedImportNames = []
    for (let nestedResource of nestedProperties) {
        let emittedName = trySingular(properties[nestedResource], nestedResource)
        nestedImportNames.push(emittedName)
        generateFile(namespace, emittedName, properties[nestedResource].properties)
    }

    const resourceImports = ['ResourceBase']
    if (Object.keys(properties).includes('Tags')) {
        resourceImports.push('ResourceTag')
    }

    const resourceRefTypes = filter(properties, property => property.type === 'Object' || property['array-type'] === 'Object')
        .map(property => getRefLocalTypeNameIfAvailable(property))
        .filter(refType => !!refType)

    const localImports = uniq(nestedImportNames.concat(resourceRefTypes))
        .map(name => `import ${name} from './${camelCase(name)}'`)

    const enums = Object.keys(properties)
        .filter(name => properties[name]['allowed-values'])
        .map(name => {
            const values = properties[name]['allowed-values']
            return `export type ${name} = ${values.map(JSON.stringify).join(' | ')}`
        })

    const propertiesEntries = Object.keys(properties)
        .map(propertyName => {
            const property = properties[propertyName] as any

            if (propertyName === 'Tags') {
                return `Tags?: ResourceTag[]`
            }

            return `${propertyName}${property.required ? '' : '?'}: ${determineTypeScriptType(property, propertyName, property.type)}`
        })

    const template = `import {${resourceImports.join(', ')}} from '../resource'
import {Value} from '../internal'
${localImports.join('\n')}

${enums.join('\n')}

export interface ${resource}Properties {
${propertiesEntries.map(e => `    ${e}`).join('\n')}
}

export default class ${resource} extends ResourceBase {
    constructor(properties: ${resource}Properties, dependsOn?: Value<string>) {
        super('AWS::${namespace}::${resource}', properties, dependsOn)
    }
}`

    if (!fs.existsSync(`./types/${adjustedCamelCase(namespace)}`)) {
        fs.mkdirSync(`./types/${adjustedCamelCase(namespace)}`)
    }

    fs.writeFileSync(`./types/${adjustedCamelCase(namespace)}/${camelCase(resource)}.ts`, template, {encoding: 'utf8'})
}

for (let key of Object.keys(resources)) {
    const value = resources[key]
    const [, namespace, resource] = key.split('::')
    const properties = value.properties.Properties.properties || []

    generateFile(namespace, resource, properties)
}
