import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Execution {
    IsolationMode?: Value<string>;
    RunAs?: RunAs;
    constructor(properties: Execution);
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
export declare class Environment {
    Variables?: {
        [key: string]: any;
    };
    Execution?: Execution;
    ResourceAccessPolicies?: List<ResourceAccessPolicy>;
    AccessSysfs?: Value<boolean>;
    constructor(properties: Environment);
}
export declare class FunctionDefinitionVersion {
    DefaultConfig?: DefaultConfig;
    Functions: List<Function>;
    constructor(properties: FunctionDefinitionVersion);
}
export declare class RunAs {
    Uid?: Value<number>;
    Gid?: Value<number>;
    constructor(properties: RunAs);
}
export declare class DefaultConfig {
    Execution: Execution;
    constructor(properties: DefaultConfig);
}
export declare class Function {
    FunctionArn: Value<string>;
    FunctionConfiguration: FunctionConfiguration;
    Id: Value<string>;
    constructor(properties: Function);
}
export declare class ResourceAccessPolicy {
    ResourceId: Value<string>;
    Permission?: Value<string>;
    constructor(properties: ResourceAccessPolicy);
}
export interface FunctionDefinitionProperties {
    InitialVersion?: FunctionDefinitionVersion;
    Name: Value<string>;
}
export default class FunctionDefinition extends ResourceBase<FunctionDefinitionProperties> {
    static Execution: typeof Execution;
    static FunctionConfiguration: typeof FunctionConfiguration;
    static Environment: typeof Environment;
    static FunctionDefinitionVersion: typeof FunctionDefinitionVersion;
    static RunAs: typeof RunAs;
    static DefaultConfig: typeof DefaultConfig;
    static Function: typeof Function;
    static ResourceAccessPolicy: typeof ResourceAccessPolicy;
    constructor(properties: FunctionDefinitionProperties);
}
