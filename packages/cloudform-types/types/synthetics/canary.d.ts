import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Code {
    S3Bucket?: Value<string>;
    S3Key?: Value<string>;
    S3ObjectVersion?: Value<string>;
    Script?: Value<string>;
    Handler?: Value<string>;
    constructor(properties: Code);
}
export declare class VPCConfig {
    VpcId?: Value<string>;
    SubnetIds: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: VPCConfig);
}
export declare class RunConfig {
    TimeoutInSeconds: Value<number>;
    MemoryInMB?: Value<number>;
    constructor(properties: RunConfig);
}
export declare class Schedule {
    Expression: Value<string>;
    DurationInSeconds?: Value<string>;
    constructor(properties: Schedule);
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
    static Code: typeof Code;
    static VPCConfig: typeof VPCConfig;
    static RunConfig: typeof RunConfig;
    static Schedule: typeof Schedule;
    constructor(properties: CanaryProperties);
}
