"use strict";
exports.__esModule = true;
var fs = require("fs");
var lodash_1 = require("lodash");
var fetch = require('node-fetch');
var url = 'https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json';
function adjustedCamelCase(input) {
    return input === 'IoT' ? 'iot' : lodash_1.camelCase(input);
}
function determineTypeScriptType(property, propertyName, typeSuffix) {
    if (property[typeSuffix] === 'List') {
        return determineTypeScriptType(property, propertyName, 'ItemType') + '[]';
    }
    if (property[typeSuffix] === 'Map') {
        return "{[key: string]: " + determineTypeScriptType(property, propertyName, 'ItemType') + "}";
    }
    if (property[typeSuffix]) {
        return property[typeSuffix];
    }
    var primitiveType = property['Primitive' + typeSuffix].toLowerCase();
    if (primitiveType === 'json') {
        return 'any';
    }
    if (['integer', 'double', 'long'].includes(primitiveType)) {
        primitiveType = 'number';
    }
    if (primitiveType === 'timestamp') {
        primitiveType = 'string'; // TODO consider Date.toISOString()
    }
    return "Value<" + primitiveType + ">";
}
function generateClass(namespace, name, properties, isDefault) {
    if (isDefault === void 0) { isDefault = false; }
    var propertiesEntries = lodash_1.map(properties, function (property, propertyName) {
        if (propertyName === 'Tags') {
            return "Tags?: ResourceTag[]";
        }
        return "" + propertyName + (property.Required ? '' : '?') + ": " + determineTypeScriptType(property, propertyName, 'Type');
    });
    return "export interface " + name + "Properties {\n" + propertiesEntries.map(function (e) { return "    " + e; }).join('\n') + "\n}\n\nexport " + (isDefault ? 'default ' : '') + "class " + name + " extends ResourceBase {\n    constructor(properties: " + name + "Properties, dependsOn?: Value<string>) {\n        super('AWS::" + namespace + "::" + name + "', properties, dependsOn)\n    }\n}";
}
function hasTags(properties) {
    return Object.keys(properties).includes('Tags');
}
function generateFile(schema, namespace, resourceName, properties, innerTypes) {
    var innerHasTags = false;
    var innerTypesTemplates = lodash_1.map(innerTypes, function (innerType, innerTypeFullName) {
        var _a = innerTypeFullName.split('.'), innerTypeName = _a[1];
        innerHasTags = innerHasTags || hasTags(innerType.Properties);
        return generateClass(namespace, innerTypeName, innerType.Properties);
    });
    var resourceImports = ['ResourceBase'];
    if (innerHasTags || hasTags(properties)) {
        resourceImports.push('ResourceTag');
    }
    var generatedClass = generateClass(namespace, resourceName, properties, true);
    var template = "/* Generated from " + url + ", version " + schema.ResourceSpecificationVersion + " */\n   \nimport {" + resourceImports.join(', ') + "} from '../resource'\nimport {Value} from '../internal'\n\n" + innerTypesTemplates.join('\n\n') + "\n\n" + generatedClass;
    if (!fs.existsSync("./types/" + adjustedCamelCase(namespace))) {
        fs.mkdirSync("./types/" + adjustedCamelCase(namespace));
    }
    fs.writeFileSync("./types/" + adjustedCamelCase(namespace) + "/" + lodash_1.camelCase(resourceName) + ".ts", template, { encoding: 'utf8' });
}
fetch(url)
    .then(function (res) { return res.json(); })
    .then(function (schema) {
    lodash_1.forEach(schema.ResourceTypes, function (resource, resourceFullName) {
        var _a = resourceFullName.split('::'), namespace = _a[1], resourceName = _a[2];
        var properties = resource.Properties || {};
        var resourcePropertyTypes = lodash_1.pickBy(schema.PropertyTypes, function (propertyType, propertyFullName) { return propertyFullName.startsWith(resourceFullName + '.'); });
        generateFile(schema, namespace, resourceName, properties, resourcePropertyTypes);
    });
});
