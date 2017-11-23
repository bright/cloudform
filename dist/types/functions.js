"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function Base64(value) {
    return new dataTypes_1.CFFunction('Fn::Base64', value);
}
exports.Base64 = Base64;
function FindInMap(mapName, topLevelKey, secondLevelKey) {
    return new dataTypes_1.CFFunction('Fn::FindInMap', [mapName, topLevelKey, secondLevelKey]);
}
exports.FindInMap = FindInMap;
function GetAtt(logicalNameOfResource, attributeName) {
    return new dataTypes_1.CFFunction('Fn::GetAtt', [logicalNameOfResource, attributeName]);
}
exports.GetAtt = GetAtt;
function GetAZs(region = '') {
    return new dataTypes_1.CFFunction('Fn::GetAZs', region);
}
exports.GetAZs = GetAZs;
function ImportValue(sharedValueToImport) {
    return new dataTypes_1.CFFunction('Fn::ImportValue', sharedValueToImport);
}
exports.ImportValue = ImportValue;
function Join(delimiter, values) {
    return new dataTypes_1.CFFunction('Fn::Join', [delimiter, values]);
}
exports.Join = Join;
function Select(index, listOfObjects) {
    return new dataTypes_1.CFFunction('Fn::Select', [index, listOfObjects]);
}
exports.Select = Select;
function Split(delimiter, sourceString) {
    return new dataTypes_1.CFFunction('Fn::Split', [delimiter, sourceString]);
}
exports.Split = Split;
function Sub(string, vars) {
    return new dataTypes_1.CFFunction('Fn::Sub', [string, vars]);
}
exports.Sub = Sub;
function Ref(logicalName) {
    return new dataTypes_1.CFFunction('Ref', logicalName);
}
exports.Ref = Ref;
