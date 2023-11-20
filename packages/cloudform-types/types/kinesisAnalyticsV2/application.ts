/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ApplicationCodeConfiguration {
    CodeContentType!: Value<string>
    CodeContent!: CodeContent

    constructor(properties: ApplicationCodeConfiguration) {
        Object.assign(this, properties)
    }
}

export class ApplicationConfiguration {
    ApplicationCodeConfiguration?: ApplicationCodeConfiguration
    EnvironmentProperties?: EnvironmentProperties
    FlinkApplicationConfiguration?: FlinkApplicationConfiguration
    SqlApplicationConfiguration?: SqlApplicationConfiguration
    ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration
    VpcConfigurations?: List<VpcConfiguration>
    ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration

    constructor(properties: ApplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class ApplicationMaintenanceConfiguration {
    ApplicationMaintenanceWindowStartTime!: Value<string>

    constructor(properties: ApplicationMaintenanceConfiguration) {
        Object.assign(this, properties)
    }
}

export class ApplicationRestoreConfiguration {
    SnapshotName?: Value<string>
    ApplicationRestoreType!: Value<string>

    constructor(properties: ApplicationRestoreConfiguration) {
        Object.assign(this, properties)
    }
}

export class ApplicationSnapshotConfiguration {
    SnapshotsEnabled!: Value<boolean>

    constructor(properties: ApplicationSnapshotConfiguration) {
        Object.assign(this, properties)
    }
}

export class CSVMappingParameters {
    RecordRowDelimiter!: Value<string>
    RecordColumnDelimiter!: Value<string>

    constructor(properties: CSVMappingParameters) {
        Object.assign(this, properties)
    }
}

export class CatalogConfiguration {
    GlueDataCatalogConfiguration?: GlueDataCatalogConfiguration

    constructor(properties: CatalogConfiguration) {
        Object.assign(this, properties)
    }
}

export class CheckpointConfiguration {
    ConfigurationType!: Value<string>
    CheckpointInterval?: Value<number>
    MinPauseBetweenCheckpoints?: Value<number>
    CheckpointingEnabled?: Value<boolean>

    constructor(properties: CheckpointConfiguration) {
        Object.assign(this, properties)
    }
}

export class CodeContent {
    ZipFileContent?: Value<string>
    S3ContentLocation?: S3ContentLocation
    TextContent?: Value<string>

    constructor(properties: CodeContent) {
        Object.assign(this, properties)
    }
}

export class CustomArtifactConfiguration {
    MavenReference?: MavenReference
    S3ContentLocation?: S3ContentLocation
    ArtifactType!: Value<string>

    constructor(properties: CustomArtifactConfiguration) {
        Object.assign(this, properties)
    }
}

export class DeployAsApplicationConfiguration {
    S3ContentLocation!: S3ContentBaseLocation

    constructor(properties: DeployAsApplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class EnvironmentProperties {
    PropertyGroups?: List<PropertyGroup>

    constructor(properties: EnvironmentProperties) {
        Object.assign(this, properties)
    }
}

export class FlinkApplicationConfiguration {
    CheckpointConfiguration?: CheckpointConfiguration
    ParallelismConfiguration?: ParallelismConfiguration
    MonitoringConfiguration?: MonitoringConfiguration

    constructor(properties: FlinkApplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class FlinkRunConfiguration {
    AllowNonRestoredState?: Value<boolean>

    constructor(properties: FlinkRunConfiguration) {
        Object.assign(this, properties)
    }
}

export class GlueDataCatalogConfiguration {
    DatabaseARN?: Value<string>

    constructor(properties: GlueDataCatalogConfiguration) {
        Object.assign(this, properties)
    }
}

export class Input {
    NamePrefix!: Value<string>
    InputSchema!: InputSchema
    KinesisStreamsInput?: KinesisStreamsInput
    KinesisFirehoseInput?: KinesisFirehoseInput
    InputProcessingConfiguration?: InputProcessingConfiguration
    InputParallelism?: InputParallelism

    constructor(properties: Input) {
        Object.assign(this, properties)
    }
}

export class InputLambdaProcessor {
    ResourceARN!: Value<string>

    constructor(properties: InputLambdaProcessor) {
        Object.assign(this, properties)
    }
}

export class InputParallelism {
    Count?: Value<number>

    constructor(properties: InputParallelism) {
        Object.assign(this, properties)
    }
}

export class InputProcessingConfiguration {
    InputLambdaProcessor?: InputLambdaProcessor

    constructor(properties: InputProcessingConfiguration) {
        Object.assign(this, properties)
    }
}

export class InputSchema {
    RecordEncoding?: Value<string>
    RecordColumns!: List<RecordColumn>
    RecordFormat!: RecordFormat

    constructor(properties: InputSchema) {
        Object.assign(this, properties)
    }
}

export class JSONMappingParameters {
    RecordRowPath!: Value<string>

    constructor(properties: JSONMappingParameters) {
        Object.assign(this, properties)
    }
}

export class KinesisFirehoseInput {
    ResourceARN!: Value<string>

    constructor(properties: KinesisFirehoseInput) {
        Object.assign(this, properties)
    }
}

export class KinesisStreamsInput {
    ResourceARN!: Value<string>

    constructor(properties: KinesisStreamsInput) {
        Object.assign(this, properties)
    }
}

export class MappingParameters {
    JSONMappingParameters?: JSONMappingParameters
    CSVMappingParameters?: CSVMappingParameters

    constructor(properties: MappingParameters) {
        Object.assign(this, properties)
    }
}

export class MavenReference {
    ArtifactId!: Value<string>
    Version!: Value<string>
    GroupId!: Value<string>

    constructor(properties: MavenReference) {
        Object.assign(this, properties)
    }
}

export class MonitoringConfiguration {
    ConfigurationType!: Value<string>
    MetricsLevel?: Value<string>
    LogLevel?: Value<string>

    constructor(properties: MonitoringConfiguration) {
        Object.assign(this, properties)
    }
}

export class ParallelismConfiguration {
    ConfigurationType!: Value<string>
    ParallelismPerKPU?: Value<number>
    AutoScalingEnabled?: Value<boolean>
    Parallelism?: Value<number>

    constructor(properties: ParallelismConfiguration) {
        Object.assign(this, properties)
    }
}

export class PropertyGroup {
    PropertyMap?: {[key: string]: Value<string>}
    PropertyGroupId?: Value<string>

    constructor(properties: PropertyGroup) {
        Object.assign(this, properties)
    }
}

export class RecordColumn {
    Mapping?: Value<string>
    SqlType!: Value<string>
    Name!: Value<string>

    constructor(properties: RecordColumn) {
        Object.assign(this, properties)
    }
}

export class RecordFormat {
    MappingParameters?: MappingParameters
    RecordFormatType!: Value<string>

    constructor(properties: RecordFormat) {
        Object.assign(this, properties)
    }
}

export class RunConfiguration {
    FlinkRunConfiguration?: FlinkRunConfiguration
    ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration

    constructor(properties: RunConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3ContentBaseLocation {
    BucketARN!: Value<string>
    BasePath?: Value<string>

    constructor(properties: S3ContentBaseLocation) {
        Object.assign(this, properties)
    }
}

export class S3ContentLocation {
    BucketARN!: Value<string>
    FileKey!: Value<string>
    ObjectVersion?: Value<string>

    constructor(properties: S3ContentLocation) {
        Object.assign(this, properties)
    }
}

export class SqlApplicationConfiguration {
    Inputs?: List<Input>

    constructor(properties: SqlApplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class VpcConfiguration {
    SecurityGroupIds!: List<Value<string>>
    SubnetIds!: List<Value<string>>

    constructor(properties: VpcConfiguration) {
        Object.assign(this, properties)
    }
}

export class ZeppelinApplicationConfiguration {
    CatalogConfiguration?: CatalogConfiguration
    MonitoringConfiguration?: ZeppelinMonitoringConfiguration
    DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration
    CustomArtifactsConfiguration?: List<CustomArtifactConfiguration>

    constructor(properties: ZeppelinApplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class ZeppelinMonitoringConfiguration {
    LogLevel?: Value<string>

    constructor(properties: ZeppelinMonitoringConfiguration) {
        Object.assign(this, properties)
    }
}

export interface ApplicationProperties {
    ApplicationName?: Value<string>
    RuntimeEnvironment: Value<string>
    RunConfiguration?: RunConfiguration
    ApplicationMode?: Value<string>
    ApplicationMaintenanceConfiguration?: ApplicationMaintenanceConfiguration
    ApplicationConfiguration?: ApplicationConfiguration
    ApplicationDescription?: Value<string>
    Tags?: List<ResourceTag>
    ServiceExecutionRole: Value<string>
}

export default class Application extends ResourceBase<ApplicationProperties> {
    static ApplicationCodeConfiguration = ApplicationCodeConfiguration
    static ApplicationConfiguration = ApplicationConfiguration
    static ApplicationMaintenanceConfiguration = ApplicationMaintenanceConfiguration
    static ApplicationRestoreConfiguration = ApplicationRestoreConfiguration
    static ApplicationSnapshotConfiguration = ApplicationSnapshotConfiguration
    static CSVMappingParameters = CSVMappingParameters
    static CatalogConfiguration = CatalogConfiguration
    static CheckpointConfiguration = CheckpointConfiguration
    static CodeContent = CodeContent
    static CustomArtifactConfiguration = CustomArtifactConfiguration
    static DeployAsApplicationConfiguration = DeployAsApplicationConfiguration
    static EnvironmentProperties = EnvironmentProperties
    static FlinkApplicationConfiguration = FlinkApplicationConfiguration
    static FlinkRunConfiguration = FlinkRunConfiguration
    static GlueDataCatalogConfiguration = GlueDataCatalogConfiguration
    static Input = Input
    static InputLambdaProcessor = InputLambdaProcessor
    static InputParallelism = InputParallelism
    static InputProcessingConfiguration = InputProcessingConfiguration
    static InputSchema = InputSchema
    static JSONMappingParameters = JSONMappingParameters
    static KinesisFirehoseInput = KinesisFirehoseInput
    static KinesisStreamsInput = KinesisStreamsInput
    static MappingParameters = MappingParameters
    static MavenReference = MavenReference
    static MonitoringConfiguration = MonitoringConfiguration
    static ParallelismConfiguration = ParallelismConfiguration
    static PropertyGroup = PropertyGroup
    static RecordColumn = RecordColumn
    static RecordFormat = RecordFormat
    static RunConfiguration = RunConfiguration
    static S3ContentBaseLocation = S3ContentBaseLocation
    static S3ContentLocation = S3ContentLocation
    static SqlApplicationConfiguration = SqlApplicationConfiguration
    static VpcConfiguration = VpcConfiguration
    static ZeppelinApplicationConfiguration = ZeppelinApplicationConfiguration
    static ZeppelinMonitoringConfiguration = ZeppelinMonitoringConfiguration

    constructor(properties: ApplicationProperties) {
        super('AWS::KinesisAnalyticsV2::Application', properties)
    }
}
