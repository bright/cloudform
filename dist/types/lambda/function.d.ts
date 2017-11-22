import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface VpcConfigProperties {
    SecurityGroupIds: Value<string>[];
    SubnetIds: Value<string>[];
}
export declare class VpcConfig extends ResourceBase {
    constructor(properties: VpcConfigProperties, dependsOn?: Value<string>);
}
export interface DeadLetterConfigProperties {
    TargetArn?: Value<string>;
}
export declare class DeadLetterConfig extends ResourceBase {
    constructor(properties: DeadLetterConfigProperties, dependsOn?: Value<string>);
}
export interface TracingConfigProperties {
    Mode?: Value<string>;
}
export declare class TracingConfig extends ResourceBase {
    constructor(properties: TracingConfigProperties, dependsOn?: Value<string>);
}
export interface CodeProperties {
    S3Bucket?: Value<string>;
    S3Key?: Value<string>;
    S3ObjectVersion?: Value<string>;
    ZipFile?: Value<string>;
}
export declare class Code extends ResourceBase {
    constructor(properties: CodeProperties, dependsOn?: Value<string>);
}
export interface EnvironmentProperties {
    Variables?: {
        [key: string]: Value<string>;
    };
}
export declare class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string>);
}
export interface FunctionProperties {
    Code: Code;
    DeadLetterConfig?: DeadLetterConfig;
    Description?: Value<string>;
    Environment?: Environment;
    FunctionName?: Value<string>;
    Handler: Value<string>;
    KmsKeyArn?: Value<string>;
    MemorySize?: Value<number>;
    Role: Value<string>;
    Runtime: Value<string>;
    Tags?: ResourceTag[];
    Timeout?: Value<number>;
    TracingConfig?: TracingConfig;
    VpcConfig?: VpcConfig;
}
export default class Function extends ResourceBase {
    constructor(properties: FunctionProperties, dependsOn?: Value<string>);
}
