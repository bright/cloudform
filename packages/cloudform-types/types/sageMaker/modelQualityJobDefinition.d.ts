import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BatchTransformInput {
    DatasetFormat: DatasetFormat;
    S3DataDistributionType?: Value<string>;
    StartTimeOffset?: Value<string>;
    EndTimeOffset?: Value<string>;
    ProbabilityThresholdAttribute?: Value<number>;
    InferenceAttribute?: Value<string>;
    DataCapturedDestinationS3Uri: Value<string>;
    S3InputMode?: Value<string>;
    LocalPath: Value<string>;
    ProbabilityAttribute?: Value<string>;
    constructor(properties: BatchTransformInput);
}
export declare class ClusterConfig {
    InstanceCount: Value<number>;
    VolumeSizeInGB: Value<number>;
    VolumeKmsKeyId?: Value<string>;
    InstanceType: Value<string>;
    constructor(properties: ClusterConfig);
}
export declare class ConstraintsResource {
    S3Uri?: Value<string>;
    constructor(properties: ConstraintsResource);
}
export declare class Csv {
    Header?: Value<boolean>;
    constructor(properties: Csv);
}
export declare class DatasetFormat {
    Parquet?: Value<boolean>;
    Csv?: Csv;
    Json?: Json;
    constructor(properties: DatasetFormat);
}
export declare class EndpointInput {
    S3DataDistributionType?: Value<string>;
    StartTimeOffset?: Value<string>;
    EndTimeOffset?: Value<string>;
    ProbabilityThresholdAttribute?: Value<number>;
    EndpointName: Value<string>;
    InferenceAttribute?: Value<string>;
    S3InputMode?: Value<string>;
    LocalPath: Value<string>;
    ProbabilityAttribute?: Value<string>;
    constructor(properties: EndpointInput);
}
export declare class Json {
    Line?: Value<boolean>;
    constructor(properties: Json);
}
export declare class ModelQualityAppSpecification {
    ContainerEntrypoint?: List<Value<string>>;
    ProblemType: Value<string>;
    PostAnalyticsProcessorSourceUri?: Value<string>;
    RecordPreprocessorSourceUri?: Value<string>;
    Environment?: {
        [key: string]: Value<string>;
    };
    ImageUri: Value<string>;
    ContainerArguments?: List<Value<string>>;
    constructor(properties: ModelQualityAppSpecification);
}
export declare class ModelQualityBaselineConfig {
    ConstraintsResource?: ConstraintsResource;
    BaseliningJobName?: Value<string>;
    constructor(properties: ModelQualityBaselineConfig);
}
export declare class ModelQualityJobInput {
    GroundTruthS3Input: MonitoringGroundTruthS3Input;
    BatchTransformInput?: BatchTransformInput;
    EndpointInput?: EndpointInput;
    constructor(properties: ModelQualityJobInput);
}
export declare class MonitoringGroundTruthS3Input {
    S3Uri: Value<string>;
    constructor(properties: MonitoringGroundTruthS3Input);
}
export declare class MonitoringOutput {
    S3Output: S3Output;
    constructor(properties: MonitoringOutput);
}
export declare class MonitoringOutputConfig {
    KmsKeyId?: Value<string>;
    MonitoringOutputs: List<MonitoringOutput>;
    constructor(properties: MonitoringOutputConfig);
}
export declare class MonitoringResources {
    ClusterConfig: ClusterConfig;
    constructor(properties: MonitoringResources);
}
export declare class NetworkConfig {
    EnableNetworkIsolation?: Value<boolean>;
    EnableInterContainerTrafficEncryption?: Value<boolean>;
    VpcConfig?: VpcConfig;
    constructor(properties: NetworkConfig);
}
export declare class S3Output {
    S3Uri: Value<string>;
    LocalPath: Value<string>;
    S3UploadMode?: Value<string>;
    constructor(properties: S3Output);
}
export declare class StoppingCondition {
    MaxRuntimeInSeconds: Value<number>;
    constructor(properties: StoppingCondition);
}
export declare class VpcConfig {
    Subnets: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface ModelQualityJobDefinitionProperties {
    ModelQualityAppSpecification: ModelQualityAppSpecification;
    EndpointName?: Value<string>;
    StoppingCondition?: StoppingCondition;
    ModelQualityBaselineConfig?: ModelQualityBaselineConfig;
    JobDefinitionName?: Value<string>;
    ModelQualityJobInput: ModelQualityJobInput;
    JobResources: MonitoringResources;
    NetworkConfig?: NetworkConfig;
    ModelQualityJobOutputConfig: MonitoringOutputConfig;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ModelQualityJobDefinition extends ResourceBase<ModelQualityJobDefinitionProperties> {
    static BatchTransformInput: typeof BatchTransformInput;
    static ClusterConfig: typeof ClusterConfig;
    static ConstraintsResource: typeof ConstraintsResource;
    static Csv: typeof Csv;
    static DatasetFormat: typeof DatasetFormat;
    static EndpointInput: typeof EndpointInput;
    static Json: typeof Json;
    static ModelQualityAppSpecification: typeof ModelQualityAppSpecification;
    static ModelQualityBaselineConfig: typeof ModelQualityBaselineConfig;
    static ModelQualityJobInput: typeof ModelQualityJobInput;
    static MonitoringGroundTruthS3Input: typeof MonitoringGroundTruthS3Input;
    static MonitoringOutput: typeof MonitoringOutput;
    static MonitoringOutputConfig: typeof MonitoringOutputConfig;
    static MonitoringResources: typeof MonitoringResources;
    static NetworkConfig: typeof NetworkConfig;
    static S3Output: typeof S3Output;
    static StoppingCondition: typeof StoppingCondition;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: ModelQualityJobDefinitionProperties);
}
