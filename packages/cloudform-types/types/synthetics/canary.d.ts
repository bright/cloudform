import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VPCConfig {
    VpcId?: Value<string>;
    SubnetIds: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: VPCConfig);
}
export declare class Schedule {
    Expression: Value<string>;
    DurationInSeconds?: Value<string>;
    constructor(properties: Schedule);
}
export declare class Code {
    S3Bucket?: Value<string>;
    S3Key?: Value<string>;
    S3ObjectVersion?: Value<string>;
    Script?: Value<string>;
    Handler: Value<string>;
    constructor(properties: Code);
}
export declare class RunConfig {
    TimeoutInSeconds?: Value<number>;
    MemoryInMB?: Value<number>;
    ActiveTracing?: Value<boolean>;
    EnvironmentVariables?: {
        [key: string]: Value<string>;
    };
    constructor(properties: RunConfig);
}
export interface CanaryProperties {
    Name: Value<string>;
    Code: Code;
    ArtifactS3Location: Value<string>;
    Schedule: Schedule;
    ExecutionRoleArn: Value<string>;
    RuntimeVersion: Value<string>;
    SuccessRetentionPeriod?: Value<number>;
    FailureRetentionPeriod?: Value<number>;
    Tags?: List<ResourceTag>;
    VPCConfig?: VPCConfig;
    RunConfig?: RunConfig;
    StartCanaryAfterCreation: Value<boolean>;
}
export default class Canary extends ResourceBase<CanaryProperties> {
    static VPCConfig: typeof VPCConfig;
    static Schedule: typeof Schedule;
    static Code: typeof Code;
    static RunConfig: typeof RunConfig;
    constructor(properties: CanaryProperties);
}
