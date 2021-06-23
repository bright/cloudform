import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class FunctionConfig {
    Comment: Value<string>;
    Runtime: Value<string>;
    constructor(properties: FunctionConfig);
}
export declare class FunctionMetadata {
    FunctionARN?: Value<string>;
    constructor(properties: FunctionMetadata);
}
export interface FunctionProperties {
    AutoPublish?: Value<boolean>;
    FunctionCode?: Value<string>;
    FunctionConfig?: FunctionConfig;
    FunctionMetadata?: FunctionMetadata;
    Name: Value<string>;
}
export default class Function extends ResourceBase<FunctionProperties> {
    static FunctionConfig: typeof FunctionConfig;
    static FunctionMetadata: typeof FunctionMetadata;
    constructor(properties: FunctionProperties);
}
