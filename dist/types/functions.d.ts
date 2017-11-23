import { CFFunction, Value } from "./dataTypes";
export declare function Base64(value: Value<string>): CFFunction;
export declare function FindInMap(mapName: Value<string>, topLevelKey: Value<string>, secondLevelKey: Value<string>): CFFunction;
export declare function GetAtt(logicalNameOfResource: Value<string>, attributeName: Value<string>): CFFunction;
export declare function GetAZs(region: Value<string>): CFFunction;
export declare function ImportValue(sharedValueToImport: Value<any>): CFFunction;
export declare function Join(delimiter: Value<string>, values: Value<any>[]): CFFunction;
export declare function Select(index: Value<number>, listOfObjects: Value<any>[]): CFFunction;
export declare function Split(delimiter: Value<string>, sourceString: Value<string>): CFFunction;
export declare function Sub(string: Value<string>, vars: {
    [key: string]: Value<any>;
}): CFFunction;
export declare function Ref(logicalName: Value<string>): CFFunction;
