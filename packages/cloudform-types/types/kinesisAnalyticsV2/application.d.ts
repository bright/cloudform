import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CustomArtifactConfiguration {
    MavenReference?: MavenReference;
    S3ContentLocation?: S3ContentLocation;
    ArtifactType: Value<string>;
    constructor(properties: CustomArtifactConfiguration);
}
export declare class S3ContentLocation {
    BucketARN?: Value<string>;
    FileKey?: Value<string>;
    ObjectVersion?: Value<string>;
    constructor(properties: S3ContentLocation);
}
export declare class DeployAsApplicationConfiguration {
    S3ContentLocation: S3ContentBaseLocation;
    constructor(properties: DeployAsApplicationConfiguration);
}
export declare class PropertyGroup {
    PropertyMap?: {
        [key: string]: any;
    };
    PropertyGroupId?: Value<string>;
    constructor(properties: PropertyGroup);
}
export declare class MappingParameters {
    JSONMappingParameters?: JSONMappingParameters;
    CSVMappingParameters?: CSVMappingParameters;
    constructor(properties: MappingParameters);
}
export declare class InputParallelism {
    Count?: Value<number>;
    constructor(properties: InputParallelism);
}
export declare class FlinkApplicationConfiguration {
    CheckpointConfiguration?: CheckpointConfiguration;
    ParallelismConfiguration?: ParallelismConfiguration;
    MonitoringConfiguration?: MonitoringConfiguration;
    constructor(properties: FlinkApplicationConfiguration);
}
export declare class Input {
    NamePrefix: Value<string>;
    InputSchema: InputSchema;
    KinesisStreamsInput?: KinesisStreamsInput;
    KinesisFirehoseInput?: KinesisFirehoseInput;
    InputProcessingConfiguration?: InputProcessingConfiguration;
    InputParallelism?: InputParallelism;
    constructor(properties: Input);
}
export declare class ApplicationSnapshotConfiguration {
    SnapshotsEnabled: Value<boolean>;
    constructor(properties: ApplicationSnapshotConfiguration);
}
export declare class KinesisFirehoseInput {
    ResourceARN: Value<string>;
    constructor(properties: KinesisFirehoseInput);
}
export declare class InputSchema {
    RecordEncoding?: Value<string>;
    RecordColumns: List<RecordColumn>;
    RecordFormat: RecordFormat;
    constructor(properties: InputSchema);
}
export declare class ParallelismConfiguration {
    ConfigurationType: Value<string>;
    ParallelismPerKPU?: Value<number>;
    AutoScalingEnabled?: Value<boolean>;
    Parallelism?: Value<number>;
    constructor(properties: ParallelismConfiguration);
}
export declare class MonitoringConfiguration {
    ConfigurationType: Value<string>;
    MetricsLevel?: Value<string>;
    LogLevel?: Value<string>;
    constructor(properties: MonitoringConfiguration);
}
export declare type CustomArtifactsConfiguration = List<CustomArtifactConfiguration>;
export declare class SqlApplicationConfiguration {
    Inputs?: List<Input>;
    constructor(properties: SqlApplicationConfiguration);
}
export declare class InputProcessingConfiguration {
    InputLambdaProcessor?: InputLambdaProcessor;
    constructor(properties: InputProcessingConfiguration);
}
export declare class ApplicationCodeConfiguration {
    CodeContentType: Value<string>;
    CodeContent: CodeContent;
    constructor(properties: ApplicationCodeConfiguration);
}
export declare class ZeppelinApplicationConfiguration {
    CatalogConfiguration?: CatalogConfiguration;
    MonitoringConfiguration?: ZeppelinMonitoringConfiguration;
    DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration;
    CustomArtifactsConfiguration?: CustomArtifactsConfiguration;
    constructor(properties: ZeppelinApplicationConfiguration);
}
export declare class MavenReference {
    ArtifactId: Value<string>;
    Version: Value<string>;
    GroupId: Value<string>;
    constructor(properties: MavenReference);
}
export declare class KinesisStreamsInput {
    ResourceARN: Value<string>;
    constructor(properties: KinesisStreamsInput);
}
export declare class CheckpointConfiguration {
    ConfigurationType: Value<string>;
    CheckpointInterval?: Value<number>;
    MinPauseBetweenCheckpoints?: Value<number>;
    CheckpointingEnabled?: Value<boolean>;
    constructor(properties: CheckpointConfiguration);
}
export declare class ZeppelinMonitoringConfiguration {
    LogLevel?: Value<string>;
    constructor(properties: ZeppelinMonitoringConfiguration);
}
export declare class S3ContentBaseLocation {
    BucketARN: Value<string>;
    BasePath: Value<string>;
    constructor(properties: S3ContentBaseLocation);
}
export declare class InputLambdaProcessor {
    ResourceARN: Value<string>;
    constructor(properties: InputLambdaProcessor);
}
export declare class RecordColumn {
    Mapping?: Value<string>;
    SqlType: Value<string>;
    Name: Value<string>;
    constructor(properties: RecordColumn);
}
export declare class CSVMappingParameters {
    RecordRowDelimiter: Value<string>;
    RecordColumnDelimiter: Value<string>;
    constructor(properties: CSVMappingParameters);
}
export declare class RecordFormat {
    MappingParameters?: MappingParameters;
    RecordFormatType: Value<string>;
    constructor(properties: RecordFormat);
}
export declare class GlueDataCatalogConfiguration {
    DatabaseARN?: Value<string>;
    constructor(properties: GlueDataCatalogConfiguration);
}
export declare class JSONMappingParameters {
    RecordRowPath: Value<string>;
    constructor(properties: JSONMappingParameters);
}
export declare class CodeContent {
    ZipFileContent?: Value<string>;
    S3ContentLocation?: S3ContentLocation;
    TextContent?: Value<string>;
    constructor(properties: CodeContent);
}
export declare class ApplicationConfiguration {
    ApplicationCodeConfiguration?: ApplicationCodeConfiguration;
    EnvironmentProperties?: EnvironmentProperties;
    FlinkApplicationConfiguration?: FlinkApplicationConfiguration;
    SqlApplicationConfiguration?: SqlApplicationConfiguration;
    ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
    ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;
    constructor(properties: ApplicationConfiguration);
}
export declare class EnvironmentProperties {
    PropertyGroups?: List<PropertyGroup>;
    constructor(properties: EnvironmentProperties);
}
export declare class CatalogConfiguration {
    GlueDataCatalogConfiguration?: GlueDataCatalogConfiguration;
    constructor(properties: CatalogConfiguration);
}
export interface ApplicationProperties {
    ApplicationName?: Value<string>;
    RuntimeEnvironment: Value<string>;
    ApplicationMode?: Value<string>;
    ApplicationConfiguration?: ApplicationConfiguration;
    ApplicationDescription?: Value<string>;
    Tags?: List<ResourceTag>;
    ServiceExecutionRole: Value<string>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static CustomArtifactConfiguration: typeof CustomArtifactConfiguration;
    static S3ContentLocation: typeof S3ContentLocation;
    static DeployAsApplicationConfiguration: typeof DeployAsApplicationConfiguration;
    static PropertyGroup: typeof PropertyGroup;
    static MappingParameters: typeof MappingParameters;
    static InputParallelism: typeof InputParallelism;
    static FlinkApplicationConfiguration: typeof FlinkApplicationConfiguration;
    static Input: typeof Input;
    static ApplicationSnapshotConfiguration: typeof ApplicationSnapshotConfiguration;
    static KinesisFirehoseInput: typeof KinesisFirehoseInput;
    static InputSchema: typeof InputSchema;
    static ParallelismConfiguration: typeof ParallelismConfiguration;
    static MonitoringConfiguration: typeof MonitoringConfiguration;
    static SqlApplicationConfiguration: typeof SqlApplicationConfiguration;
    static InputProcessingConfiguration: typeof InputProcessingConfiguration;
    static ApplicationCodeConfiguration: typeof ApplicationCodeConfiguration;
    static ZeppelinApplicationConfiguration: typeof ZeppelinApplicationConfiguration;
    static MavenReference: typeof MavenReference;
    static KinesisStreamsInput: typeof KinesisStreamsInput;
    static CheckpointConfiguration: typeof CheckpointConfiguration;
    static ZeppelinMonitoringConfiguration: typeof ZeppelinMonitoringConfiguration;
    static S3ContentBaseLocation: typeof S3ContentBaseLocation;
    static InputLambdaProcessor: typeof InputLambdaProcessor;
    static RecordColumn: typeof RecordColumn;
    static CSVMappingParameters: typeof CSVMappingParameters;
    static RecordFormat: typeof RecordFormat;
    static GlueDataCatalogConfiguration: typeof GlueDataCatalogConfiguration;
    static JSONMappingParameters: typeof JSONMappingParameters;
    static CodeContent: typeof CodeContent;
    static ApplicationConfiguration: typeof ApplicationConfiguration;
    static EnvironmentProperties: typeof EnvironmentProperties;
    static CatalogConfiguration: typeof CatalogConfiguration;
    constructor(properties: ApplicationProperties);
}
