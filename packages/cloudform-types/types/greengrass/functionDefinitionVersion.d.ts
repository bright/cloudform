import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DefaultConfig {
    Execution: Execution;
    constructor(properties: DefaultConfig);
}
export declare class Environment {
    Variables?: {
        [key: string]: any;
    };
    Execution?: Execution;
    ResourceAccessPolicies?: List<ResourceAccessPolicy>;
    AccessSysfs?: Value<boolean>;
    constructor(properties: Environment);
}
export declare class Execution {
    IsolationMode?: Value<string>;
    RunAs?: RunAs;
    constructor(properties: Execution);
}
export declare class Function {
    FunctionArn: Value<string>;
    FunctionConfiguration: FunctionConfiguration;
    Id: Value<string>;
    constructor(properties: Function);
}
export declare class FunctionConfiguration {
    MemorySize?: Value<number>;
    Pinned?: Value<boolean>;
    ExecArgs?: Value<string>;
    Timeout?: Value<number>;
    EncodingType?: Value<string>;
    Environment?: Environment;
    Executable?: Value<string>;
    constructor(properties: FunctionConfiguration);
}
export declare class ResourceAccessPolicy {
    ResourceId: Value<string>;
    Permission?: Value<string>;
    constructor(properties: ResourceAccessPolicy);
}
export declare class RunAs {
    Uid?: Value<number>;
    Gid?: Value<number>;
    constructor(properties: RunAs);
}
export interface FunctionDefinitionVersionProperties {
    DefaultConfig?: DefaultConfig;
    Functions: List<Function>;
    FunctionDefinitionId: Value<string>;
}
export default class FunctionDefinitionVersion extends ResourceBase<FunctionDefinitionVersionProperties> {
    static DefaultConfig: typeof DefaultConfig;
    static Environment: typeof Environment;
    static Execution: typeof Execution;
    static Function: typeof Function;
    static FunctionConfiguration: typeof FunctionConfiguration;
    static ResourceAccessPolicy: typeof ResourceAccessPolicy;
    static RunAs: typeof RunAs;
    constructor(properties: FunctionDefinitionVersionProperties);
}
