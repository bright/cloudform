import { Value } from "./dataTypes";
export default interface Resource {
    Type: string;
    Properties?: {
        [key: string]: any;
    };
    DependsOn?: Value<string>;
}
export declare class ResourceBase {
    Type: string;
    Properties: {
        [key: string]: any;
    };
    DependsOn: Value<string>;
    constructor(Type: string, Properties?: {
        [key: string]: any;
    }, DependsOn?: Value<string>);
}
export declare class ResourceTag {
    Key: Value<string>;
    Value: Value<string>;
    constructor(Key: Value<string>, Value: Value<string>);
}
