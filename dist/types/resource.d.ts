import { Value } from "./internal";
export default interface Resource {
    Type: string;
    Properties?: {
        [key: string]: any;
    };
}
export declare class ResourceBase {
    Type: string;
    Properties: {
        [key: string]: any;
    };
    constructor(Type: string, Properties?: {
        [key: string]: any;
    });
}
export declare class ResourceTag {
    Key: Value<string>;
    Value: Value<string>;
    constructor(Key: Value<string>, Value: Value<string>);
}
