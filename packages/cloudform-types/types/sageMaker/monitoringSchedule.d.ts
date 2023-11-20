import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BaselineConfig {
    StatisticsResource?: StatisticsResource;
    ConstraintsResource?: ConstraintsResource;
    constructor(properties: BaselineConfig);
}
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
export declare class MonitoringAppSpecification {
    ContainerEntrypoint?: List<Value<string>>;
    PostAnalyticsProcessorSourceUri?: Value<string>;
    RecordPreprocessorSourceUri?: Value<string>;
    ImageUri: Value<string>;
    ContainerArguments?: List<Value<string>>;
    constructor(properties: MonitoringAppSpecification);
}
export declare class MonitoringExecutionSummary {
    ScheduledTime: Value<string>;
    EndpointName?: Value<string>;
    MonitoringScheduleName: Value<string>;
    ProcessingJobArn?: Value<string>;
    FailureReason?: Value<string>;
    CreationTime: Value<string>;
    LastModifiedTime: Value<string>;
    MonitoringExecutionStatus: Value<string>;
    constructor(properties: MonitoringExecutionSummary);
}
export declare class MonitoringInput {
    BatchTransformInput?: BatchTransformInput;
    EndpointInput?: EndpointInput;
    constructor(properties: MonitoringInput);
}
export declare class MonitoringJobDefinition {
    MonitoringInputs: List<MonitoringInput>;
    MonitoringResources: MonitoringResources;
    BaselineConfig?: BaselineConfig;
    StoppingCondition?: StoppingCondition;
    MonitoringAppSpecification: MonitoringAppSpecification;
    NetworkConfig?: NetworkConfig;
    Environment?: {
        [key: string]: Value<string>;
    };
    MonitoringOutputConfig: MonitoringOutputConfig;
    RoleArn: Value<string>;
    constructor(properties: MonitoringJobDefinition);
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
export declare class MonitoringScheduleConfig {
    ScheduleConfig?: ScheduleConfig;
    MonitoringJobDefinition?: MonitoringJobDefinition;
    MonitoringJobDefinitionName?: Value<string>;
    MonitoringType?: Value<string>;
    constructor(properties: MonitoringScheduleConfig);
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
export declare class ScheduleConfig {
    ScheduleExpression: Value<string>;
    DataAnalysisStartTime?: Value<string>;
    DataAnalysisEndTime?: Value<string>;
    constructor(properties: ScheduleConfig);
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
export interface MonitoringScheduleProperties {
    MonitoringScheduleStatus?: Value<string>;
    MonitoringScheduleConfig: MonitoringScheduleConfig;
    MonitoringScheduleName: Value<string>;
    EndpointName?: Value<string>;
    FailureReason?: Value<string>;
    LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
    Tags?: List<ResourceTag>;
}
export default class MonitoringSchedule extends ResourceBase<MonitoringScheduleProperties> {
    static BaselineConfig: typeof BaselineConfig;
    static BatchTransformInput: typeof BatchTransformInput;
    static ClusterConfig: typeof ClusterConfig;
    static ConstraintsResource: typeof ConstraintsResource;
    static Csv: typeof Csv;
    static DatasetFormat: typeof DatasetFormat;
    static EndpointInput: typeof EndpointInput;
    static Json: typeof Json;
    static MonitoringAppSpecification: typeof MonitoringAppSpecification;
    static MonitoringExecutionSummary: typeof MonitoringExecutionSummary;
    static MonitoringInput: typeof MonitoringInput;
    static MonitoringJobDefinition: typeof MonitoringJobDefinition;
    static MonitoringOutput: typeof MonitoringOutput;
    static MonitoringOutputConfig: typeof MonitoringOutputConfig;
    static MonitoringResources: typeof MonitoringResources;
    static MonitoringScheduleConfig: typeof MonitoringScheduleConfig;
    static NetworkConfig: typeof NetworkConfig;
    static S3Output: typeof S3Output;
    static ScheduleConfig: typeof ScheduleConfig;
    static StatisticsResource: typeof StatisticsResource;
    static StoppingCondition: typeof StoppingCondition;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: MonitoringScheduleProperties);
}
