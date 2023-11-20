import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ArtifactConfig {
    S3Encryption?: S3Encryption;
    constructor(properties: ArtifactConfig);
}
export declare class BaseScreenshot {
    IgnoreCoordinates?: List<Value<string>>;
    ScreenshotName: Value<string>;
    constructor(properties: BaseScreenshot);
}
export declare class Code {
    Script?: Value<string>;
    S3ObjectVersion?: Value<string>;
    S3Bucket?: Value<string>;
    S3Key?: Value<string>;
    Handler: Value<string>;
    SourceLocationArn?: Value<string>;
    constructor(properties: Code);
}
export declare class RunConfig {
    TimeoutInSeconds?: Value<number>;
    EnvironmentVariables?: {
        [key: string]: Value<string>;
    };
    MemoryInMB?: Value<number>;
    ActiveTracing?: Value<boolean>;
    constructor(properties: RunConfig);
}
export declare class S3Encryption {
    KmsKeyArn?: Value<string>;
    EncryptionMode?: Value<string>;
    constructor(properties: S3Encryption);
}
export declare class Schedule {
    DurationInSeconds?: Value<string>;
    Expression: Value<string>;
    constructor(properties: Schedule);
}
export declare class VPCConfig {
    VpcId?: Value<string>;
    SubnetIds: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: VPCConfig);
}
export declare class VisualReference {
    BaseScreenshots?: List<BaseScreenshot>;
    BaseCanaryRunId: Value<string>;
    constructor(properties: VisualReference);
}
export interface CanaryProperties {
    VisualReference?: VisualReference;
    ArtifactConfig?: ArtifactConfig;
    SuccessRetentionPeriod?: Value<number>;
    RuntimeVersion: Value<string>;
    VPCConfig?: VPCConfig;
    RunConfig?: RunConfig;
    FailureRetentionPeriod?: Value<number>;
    Code: Code;
    Name: Value<string>;
    ExecutionRoleArn: Value<string>;
    Schedule: Schedule;
    ArtifactS3Location: Value<string>;
    Tags?: List<ResourceTag>;
    StartCanaryAfterCreation?: Value<boolean>;
}
export default class Canary extends ResourceBase<CanaryProperties> {
    static ArtifactConfig: typeof ArtifactConfig;
    static BaseScreenshot: typeof BaseScreenshot;
    static Code: typeof Code;
    static RunConfig: typeof RunConfig;
    static S3Encryption: typeof S3Encryption;
    static Schedule: typeof Schedule;
    static VPCConfig: typeof VPCConfig;
    static VisualReference: typeof VisualReference;
    constructor(properties: CanaryProperties);
}
