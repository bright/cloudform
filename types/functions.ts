import {CFFunction, Value, List} from "./dataTypes"

export function Base64(value: Value<string>) {
    return new CFFunction('Fn::Base64', value)
}

export function FindInMap(mapName: Value<string>, topLevelKey: Value<string>, secondLevelKey: Value<string>) {
    return new CFFunction('Fn::FindInMap', [mapName, topLevelKey, secondLevelKey])
}

export function GetAtt(logicalNameOfResource: Value<string>, attributeName: Value<string>) {
    return new CFFunction('Fn::GetAtt', [logicalNameOfResource, attributeName])
}

export function GetAZs(region: Value<string> = '') {
    return new CFFunction('Fn::GetAZs', region)
}

export function ImportValue(sharedValueToImport: Value<any>) {
    return new CFFunction('Fn::ImportValue', sharedValueToImport)
}

export function Join(delimiter: Value<string>, values: List<any>) {
    return new CFFunction('Fn::Join', [delimiter, values])
}

export function Select(index: Value<number>, listOfObjects: List<any>) {
    return new CFFunction('Fn::Select', [index, listOfObjects])
}

export function Split(delimiter: Value<string>, sourceString: Value<string>) {
    return new CFFunction('Fn::Split', [delimiter, sourceString])
}

export function Sub(string: Value<string>, vars: {[key: string]: Value<any>}) {
    return new CFFunction('Fn::Sub', [string, vars])
}

export function Ref(logicalName: Value<string>) {
    return new CFFunction('Ref', logicalName)
}
