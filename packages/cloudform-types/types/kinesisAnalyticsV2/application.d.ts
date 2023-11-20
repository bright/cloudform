import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ApplicationCodeConfiguration {
    CodeContentType: Value<string>;
    CodeContent: CodeContent;
    constructor(properties: ApplicationCodeConfiguration);
}
export declare class ApplicationConfiguration {
    ApplicationCodeConfiguration?: ApplicationCodeConfiguration;
    EnvironmentProperties?: EnvironmentProperties;
    FlinkApplicationConfiguration?: FlinkApplicationConfiguration;
    SqlApplicationConfiguration?: SqlApplicationConfiguration;
    ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
    VpcConfigurations?: List<VpcConfiguration>;
    ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;
    constructor(properties: ApplicationConfiguration);
}
export declare class ApplicationMaintenanceConfiguration {
    ApplicationMaintenanceWindowStartTime: Value<string>;
    constructor(properties: ApplicationMaintenanceConfiguration);
}
export declare class ApplicationRestoreConfiguration {
    SnapshotName?: Value<string>;
    ApplicationRestoreType: Value<string>;
    constructor(properties: ApplicationRestoreConfiguration);
}
export declare class ApplicationSnapshotConfiguration {
    SnapshotsEnabled: Value<boolean>;
    constructor(properties: ApplicationSnapshotConfiguration);
}
export declare class CSVMappingParameters {
    RecordRowDelimiter: Value<string>;
    RecordColumnDelimiter: Value<string>;
    constructor(properties: CSVMappingParameters);
}
export declare class CatalogConfiguration {
    GlueDataCatalogConfiguration?: GlueDataCatalogConfiguration;
    constructor(properties: CatalogConfiguration);
}
export declare class CheckpointConfiguration {
    ConfigurationType: Value<string>;
    CheckpointInterval?: Value<number>;
    MinPauseBetweenCheckpoints?: Value<number>;
    CheckpointingEnabled?: Value<boolean>;
    constructor(properties: CheckpointConfiguration);
}
export declare class CodeContent {
    ZipFileContent?: Value<string>;
    S3ContentLocation?: S3ContentLocation;
    TextContent?: Value<string>;
    constructor(properties: CodeContent);
}
export declare class CustomArtifactConfiguration {
    MavenReference?: MavenReference;
    S3ContentLocation?: S3ContentLocation;
    ArtifactType: Value<string>;
    constructor(properties: CustomArtifactConfiguration);
}
export declare class DeployAsApplicationConfiguration {
    S3ContentLocation: S3ContentBaseLocation;
    constructor(properties: DeployAsApplicationConfiguration);
}
export declare class EnvironmentProperties {
    PropertyGroups?: List<PropertyGroup>;
    constructor(properties: EnvironmentProperties);
}
export declare class FlinkApplicationConfiguration {
    CheckpointConfiguration?: CheckpointConfiguration;
    ParallelismConfiguration?: ParallelismConfiguration;
    MonitoringConfiguration?: MonitoringConfiguration;
    constructor(properties: FlinkApplicationConfiguration);
}
export declare class FlinkRunConfiguration {
    AllowNonRestoredState?: Value<boolean>;
    constructor(properties: FlinkRunConfiguration);
}
export declare class GlueDataCatalogConfiguration {
    DatabaseARN?: Value<string>;
    constructor(properties: GlueDataCatalogConfiguration);
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
export declare class InputLambdaProcessor {
    ResourceARN: Value<string>;
    constructor(properties: InputLambdaProcessor);
}
export declare class InputParallelism {
    Count?: Value<number>;
    constructor(properties: InputParallelism);
}
export declare class InputProcessingConfiguration {
    InputLambdaProcessor?: InputLambdaProcessor;
    constructor(properties: InputProcessingConfiguration);
}
export declare class InputSchema {
    RecordEncoding?: Value<string>;
    RecordColumns: List<RecordColumn>;
    RecordFormat: RecordFormat;
    constructor(properties: InputSchema);
}
export declare class JSONMappingParameters {
    RecordRowPath: Value<string>;
    constructor(properties: JSONMappingParameters);
}
export declare class KinesisFirehoseInput {
    ResourceARN: Value<string>;
    constructor(properties: KinesisFirehoseInput);
}
export declare class KinesisStreamsInput {
    ResourceARN: Value<string>;
    constructor(properties: KinesisStreamsInput);
}
export declare class MappingParameters {
    JSONMappingParameters?: JSONMappingParameters;
    CSVMappingParameters?: CSVMappingParameters;
    constructor(properties: MappingParameters);
}
export declare class MavenReference {
    ArtifactId: Value<string>;
    Version: Value<string>;
    GroupId: Value<string>;
    constructor(properties: MavenReference);
}
export declare class MonitoringConfiguration {
    ConfigurationType: Value<string>;
    MetricsLevel?: Value<string>;
    LogLevel?: Value<string>;
    constructor(properties: MonitoringConfiguration);
}
export declare class ParallelismConfiguration {
    ConfigurationType: Value<string>;
    ParallelismPerKPU?: Value<number>;
    AutoScalingEnabled?: Value<boolean>;
    Parallelism?: Value<number>;
    constructor(properties: ParallelismConfiguration);
}
export declare class PropertyGroup {
    PropertyMap?: {
        [key: string]: Value<string>;
    };
    PropertyGroupId?: Value<string>;
    constructor(properties: PropertyGroup);
}
export declare class RecordColumn {
    Mapping?: Value<string>;
    SqlType: Value<string>;
    Name: Value<string>;
    constructor(properties: RecordColumn);
}
export declare class RecordFormat {
    MappingParameters?: MappingParameters;
    RecordFormatType: Value<string>;
    constructor(properties: RecordFormat);
}
export declare class RunConfiguration {
    FlinkRunConfiguration?: FlinkRunConfiguration;
    ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
    constructor(properties: RunConfiguration);
}
export declare class S3ContentBaseLocation {
    BucketARN: Value<string>;
    BasePath?: Value<string>;
    constructor(properties: S3ContentBaseLocation);
}
export declare class S3ContentLocation {
    BucketARN: Value<string>;
    FileKey: Value<string>;
    ObjectVersion?: Value<string>;
    constructor(properties: S3ContentLocation);
}
export declare class SqlApplicationConfiguration {
    Inputs?: List<Input>;
    constructor(properties: SqlApplicationConfiguration);
}
export declare class VpcConfiguration {
    SecurityGroupIds: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    constructor(properties: VpcConfiguration);
}
export declare class ZeppelinApplicationConfiguration {
    CatalogConfiguration?: CatalogConfiguration;
    MonitoringConfiguration?: ZeppelinMonitoringConfiguration;
    DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration;
    CustomArtifactsConfiguration?: List<CustomArtifactConfiguration>;
    constructor(properties: ZeppelinApplicationConfiguration);
}
export declare class ZeppelinMonitoringConfiguration {
    LogLevel?: Value<string>;
    constructor(properties: ZeppelinMonitoringConfiguration);
}
export interface ApplicationProperties {
    ApplicationName?: Value<string>;
    RuntimeEnvironment: Value<string>;
    RunConfiguration?: RunConfiguration;
    ApplicationMode?: Value<string>;
    ApplicationMaintenanceConfiguration?: ApplicationMaintenanceConfiguration;
    ApplicationConfiguration?: ApplicationConfiguration;
    ApplicationDescription?: Value<string>;
    Tags?: List<ResourceTag>;
    ServiceExecutionRole: Value<string>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static ApplicationCodeConfiguration: typeof ApplicationCodeConfiguration;
    static ApplicationConfiguration: typeof ApplicationConfiguration;
    static ApplicationMaintenanceConfiguration: typeof ApplicationMaintenanceConfiguration;
    static ApplicationRestoreConfiguration: typeof ApplicationRestoreConfiguration;
    static ApplicationSnapshotConfiguration: typeof ApplicationSnapshotConfiguration;
    static CSVMappingParameters: typeof CSVMappingParameters;
    static CatalogConfiguration: typeof CatalogConfiguration;
    static CheckpointConfiguration: typeof CheckpointConfiguration;
    static CodeContent: typeof CodeContent;
    static CustomArtifactConfiguration: typeof CustomArtifactConfiguration;
    static DeployAsApplicationConfiguration: typeof DeployAsApplicationConfiguration;
    static EnvironmentProperties: typeof EnvironmentProperties;
    static FlinkApplicationConfiguration: typeof FlinkApplicationConfiguration;
    static FlinkRunConfiguration: typeof FlinkRunConfiguration;
    static GlueDataCatalogConfiguration: typeof GlueDataCatalogConfiguration;
    static Input: typeof Input;
    static InputLambdaProcessor: typeof InputLambdaProcessor;
    static InputParallelism: typeof InputParallelism;
    static InputProcessingConfiguration: typeof InputProcessingConfiguration;
    static InputSchema: typeof InputSchema;
    static JSONMappingParameters: typeof JSONMappingParameters;
    static KinesisFirehoseInput: typeof KinesisFirehoseInput;
    static KinesisStreamsInput: typeof KinesisStreamsInput;
    static MappingParameters: typeof MappingParameters;
    static MavenReference: typeof MavenReference;
    static MonitoringConfiguration: typeof MonitoringConfiguration;
    static ParallelismConfiguration: typeof ParallelismConfiguration;
    static PropertyGroup: typeof PropertyGroup;
    static RecordColumn: typeof RecordColumn;
    static RecordFormat: typeof RecordFormat;
    static RunConfiguration: typeof RunConfiguration;
    static S3ContentBaseLocation: typeof S3ContentBaseLocation;
    static S3ContentLocation: typeof S3ContentLocation;
    static SqlApplicationConfiguration: typeof SqlApplicationConfiguration;
    static VpcConfiguration: typeof VpcConfiguration;
    static ZeppelinApplicationConfiguration: typeof ZeppelinApplicationConfiguration;
    static ZeppelinMonitoringConfiguration: typeof ZeppelinMonitoringConfiguration;
    constructor(properties: ApplicationProperties);
}
