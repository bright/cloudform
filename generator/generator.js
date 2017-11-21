"use strict";
exports.__esModule = true;
var fs = require("fs");
var lodash_1 = require("lodash");
var schema = JSON.parse(fs.readFileSync('./generator/CloudFormationV1.schema', 'utf8'));
var resources = schema['root-schema-object'].properties.Resources['child-schemas'];
function adjustedCamelCase(input) {
    return input === 'IoT' ? 'iot' : lodash_1.camelCase(input);
}
function trySingular(property, name) {
    if (property['array-type'] === 'Object' && name[name.length - 1] === 's') {
        return name.substr(0, name.length - 1);
    }
    return name;
}
function getLocalTypeNameFromRef(ref) {
    return ref.split('::')[2];
}
function getRefLocalTypeNameIfAvailable(property) {
    var refTypes = property['resource-ref-type'];
    if (refTypes) {
        if (typeof (refTypes) === 'string') {
            return getLocalTypeNameFromRef(refTypes);
        }
        return '(' + refTypes.map(function (refType) { return getLocalTypeNameFromRef(refType); }).join(' | ') + ')';
    }
}
function determineTypeScriptType(property, propertyName, schemaType) {
    if (schemaType === 'Json' || schemaType === 'Policy') {
        return 'any';
    }
    if (schemaType === 'Reference') {
        return 'Value<string>';
    }
    if (property['allowed-values']) {
        return "Value<" + propertyName + ">";
    }
    if (schemaType === 'Array') {
        return determineTypeScriptType(property, propertyName, property['array-type']) + '[]';
    }
    if (schemaType === 'Object') {
        return getRefLocalTypeNameIfAvailable(property) || trySingular(property, propertyName);
    }
    if (schemaType === 'Named-Array') {
        return "{[key: string]: any}";
    }
    return "Value<" + schemaType.toLowerCase() + ">";
}
function isNestedType(name, property) {
    return !!property.properties && name !== 'Tags' && !property['resource-ref-type'];
}
function generateFile(namespace, resource, properties) {
    var nestedProperties = Object.keys(properties).filter(function (name) { return isNestedType(name, properties[name]); });
    var nestedImportNames = [];
    for (var _i = 0, nestedProperties_1 = nestedProperties; _i < nestedProperties_1.length; _i++) {
        var nestedResource = nestedProperties_1[_i];
        var emittedName = trySingular(properties[nestedResource], nestedResource);
        nestedImportNames.push(emittedName);
        generateFile(namespace, emittedName, properties[nestedResource].properties);
    }
    var resourceImports = ['ResourceBase'];
    if (Object.keys(properties).includes('Tags')) {
        resourceImports.push('ResourceTag');
    }
    var resourceRefTypes = lodash_1.filter(properties, function (property) { return property.type === 'Object' || property['array-type'] === 'Object'; })
        .map(function (property) { return getRefLocalTypeNameIfAvailable(property); })
        .filter(function (refType) { return !!refType; });
    var localImports = lodash_1.uniq(nestedImportNames.concat(resourceRefTypes))
        .map(function (name) { return "import " + name + " from './" + lodash_1.camelCase(name) + "'"; });
    var enums = Object.keys(properties)
        .filter(function (name) { return properties[name]['allowed-values']; })
        .map(function (name) {
        var values = properties[name]['allowed-values'];
        return "export type " + name + " = " + values.map(JSON.stringify).join(' | ');
    });
    var propertiesEntries = Object.keys(properties)
        .map(function (propertyName) {
        var property = properties[propertyName];
        if (propertyName === 'Tags') {
            return "Tags?: ResourceTag[]";
        }
        return "" + propertyName + (property.required ? '' : '?') + ": " + determineTypeScriptType(property, propertyName, property.type);
    });
    var template = "import {" + resourceImports.join(', ') + "} from '../resource'\nimport {Value} from '../internal'\n" + localImports.join('\n') + "\n\n" + enums.join('\n') + "\n\nexport interface " + resource + "Properties {\n" + propertiesEntries.map(function (e) { return "    " + e; }).join('\n') + "\n}\n\nexport default class " + resource + " extends ResourceBase {\n    constructor(properties: " + resource + "Properties, dependsOn?: Value<string>) {\n        super('AWS::" + namespace + "::" + resource + "', properties, dependsOn)\n    }\n}";
    if (!fs.existsSync("./types/" + adjustedCamelCase(namespace))) {
        fs.mkdirSync("./types/" + adjustedCamelCase(namespace));
    }
    fs.writeFileSync("./types/" + adjustedCamelCase(namespace) + "/" + lodash_1.camelCase(resource) + ".ts", template, { encoding: 'utf8' });
}
for (var _i = 0, _a = Object.keys(resources); _i < _a.length; _i++) {
    var key = _a[_i];
    var value = resources[key];
    var _b = key.split('::'), namespace = _b[1], resource = _b[2];
    var properties = value.properties.Properties.properties || [];
    generateFile(namespace, resource, properties);
}
