import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BatchTransformInput {
    DatasetFormat: DatasetFormat;
    S3DataDistributionType?: Value<string>;
    DataCapturedDestinationS3Uri: Value<string>;
    S3InputMode?: Value<string>;
    LocalPath: Value<string>;
    ExcludeFeaturesAttribute?: Value<string>;
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
export declare class DataQualityAppSpecification {
    ContainerEntrypoint?: List<Value<string>>;
    PostAnalyticsProcessorSourceUri?: Value<string>;
    RecordPreprocessorSourceUri?: Value<string>;
    Environment?: {
        [key: string]: Value<string>;
    };
    ImageUri: Value<string>;
    ContainerArguments?: List<Value<string>>;
    constructor(properties: DataQualityAppSpecification);
}
export declare class DataQualityBaselineConfig {
    StatisticsResource?: StatisticsResource;
    ConstraintsResource?: ConstraintsResource;
    BaseliningJobName?: Value<string>;
    constructor(properties: DataQualityBaselineConfig);
}
export declare class DataQualityJobInput {
    BatchTransformInput?: BatchTransformInput;
    EndpointInput?: EndpointInput;
    constructor(properties: DataQualityJobInput);
}
export declare class DatasetFormat {
    Parquet?: Value<boolean>;
    Csv?: Csv;
    Json?: Json;
    constructor(properties: DatasetFormat);
}
export declare class EndpointInput {
    S3DataDistributionType?: Value<string>;
    EndpointName: Value<string>;
    S3InputMode?: Value<string>;
    LocalPath: Value<string>;
    ExcludeFeaturesAttribute?: Value<string>;
    constructor(properties: EndpointInput);
}
export declare class Json {
    Line?: Value<boolean>;
    constructor(properties: Json);
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
export declare class StatisticsResource {
    S3Uri?: Value<string>;
    constructor(properties: StatisticsResource);
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
export interface DataQualityJobDefinitionProperties {
    DataQualityJobInput: DataQualityJobInput;
    DataQualityAppSpecification: DataQualityAppSpecification;
    EndpointName?: Value<string>;
    StoppingCondition?: StoppingCondition;
    JobDefinitionName?: Value<string>;
    JobResources: MonitoringResources;
    NetworkConfig?: NetworkConfig;
    DataQualityJobOutputConfig: MonitoringOutputConfig;
    DataQualityBaselineConfig?: DataQualityBaselineConfig;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class DataQualityJobDefinition extends ResourceBase<DataQualityJobDefinitionProperties> {
    static BatchTransformInput: typeof BatchTransformInput;
    static ClusterConfig: typeof ClusterConfig;
    static ConstraintsResource: typeof ConstraintsResource;
    static Csv: typeof Csv;
    static DataQualityAppSpecification: typeof DataQualityAppSpecification;
    static DataQualityBaselineConfig: typeof DataQualityBaselineConfig;
    static DataQualityJobInput: typeof DataQualityJobInput;
    static DatasetFormat: typeof DatasetFormat;
    static EndpointInput: typeof EndpointInput;
    static Json: typeof Json;
    static MonitoringOutput: typeof MonitoringOutput;
    static MonitoringOutputConfig: typeof MonitoringOutputConfig;
    static MonitoringResources: typeof MonitoringResources;
    static NetworkConfig: typeof NetworkConfig;
    static S3Output: typeof S3Output;
    static StatisticsResource: typeof StatisticsResource;
    static StoppingCondition: typeof StoppingCondition;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: DataQualityJobDefinitionProperties);
}
