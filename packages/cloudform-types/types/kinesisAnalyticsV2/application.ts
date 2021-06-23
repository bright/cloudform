/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CustomArtifactConfiguration {
    MavenReference?: MavenReference
    S3ContentLocation?: S3ContentLocation
    ArtifactType!: Value<string>

    constructor(properties: CustomArtifactConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3ContentLocation {
    BucketARN?: Value<string>
    FileKey?: Value<string>
    ObjectVersion?: Value<string>

    constructor(properties: S3ContentLocation) {
        Object.assign(this, properties)
    }
}

export class DeployAsApplicationConfiguration {
    S3ContentLocation!: S3ContentBaseLocation

    constructor(properties: DeployAsApplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class PropertyGroup {
    PropertyMap?: {[key: string]: any}
    PropertyGroupId?: Value<string>

    constructor(properties: PropertyGroup) {
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

export class InputParallelism {
    Count?: Value<number>

    constructor(properties: InputParallelism) {
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

export class ApplicationSnapshotConfiguration {
    SnapshotsEnabled!: Value<boolean>

    constructor(properties: ApplicationSnapshotConfiguration) {
        Object.assign(this, properties)
    }
}

export class KinesisFirehoseInput {
    ResourceARN!: Value<string>

    constructor(properties: KinesisFirehoseInput) {
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

export class ParallelismConfiguration {
    ConfigurationType!: Value<string>
    ParallelismPerKPU?: Value<number>
    AutoScalingEnabled?: Value<boolean>
    Parallelism?: Value<number>

    constructor(properties: ParallelismConfiguration) {
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

export type CustomArtifactsConfiguration = List<CustomArtifactConfiguration>

export class SqlApplicationConfiguration {
    Inputs?: List<Input>

    constructor(properties: SqlApplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class InputProcessingConfiguration {
    InputLambdaProcessor?: InputLambdaProcessor

    constructor(properties: InputProcessingConfiguration) {
        Object.assign(this, properties)
    }
}

export class ApplicationCodeConfiguration {
    CodeContentType!: Value<string>
    CodeContent!: CodeContent

    constructor(properties: ApplicationCodeConfiguration) {
        Object.assign(this, properties)
    }
}

export class ZeppelinApplicationConfiguration {
    CatalogConfiguration?: CatalogConfiguration
    MonitoringConfiguration?: ZeppelinMonitoringConfiguration
    DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration
    CustomArtifactsConfiguration?: CustomArtifactsConfiguration

    constructor(properties: ZeppelinApplicationConfiguration) {
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

export class KinesisStreamsInput {
    ResourceARN!: Value<string>

    constructor(properties: KinesisStreamsInput) {
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

export class ZeppelinMonitoringConfiguration {
    LogLevel?: Value<string>

    constructor(properties: ZeppelinMonitoringConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3ContentBaseLocation {
    BucketARN!: Value<string>
    BasePath!: Value<string>

    constructor(properties: S3ContentBaseLocation) {
        Object.assign(this, properties)
    }
}

export class InputLambdaProcessor {
    ResourceARN!: Value<string>

    constructor(properties: InputLambdaProcessor) {
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

export class CSVMappingParameters {
    RecordRowDelimiter!: Value<string>
    RecordColumnDelimiter!: Value<string>

    constructor(properties: CSVMappingParameters) {
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

export class GlueDataCatalogConfiguration {
    DatabaseARN?: Value<string>

    constructor(properties: GlueDataCatalogConfiguration) {
        Object.assign(this, properties)
    }
}

export class JSONMappingParameters {
    RecordRowPath!: Value<string>

    constructor(properties: JSONMappingParameters) {
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

export class ApplicationConfiguration {
    ApplicationCodeConfiguration?: ApplicationCodeConfiguration
    EnvironmentProperties?: EnvironmentProperties
    FlinkApplicationConfiguration?: FlinkApplicationConfiguration
    SqlApplicationConfiguration?: SqlApplicationConfiguration
    ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration
    ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration

    constructor(properties: ApplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class EnvironmentProperties {
    PropertyGroups?: List<PropertyGroup>

    constructor(properties: EnvironmentProperties) {
        Object.assign(this, properties)
    }
}

export class CatalogConfiguration {
    GlueDataCatalogConfiguration?: GlueDataCatalogConfiguration

    constructor(properties: CatalogConfiguration) {
        Object.assign(this, properties)
    }
}

export interface ApplicationProperties {
    ApplicationName?: Value<string>
    RuntimeEnvironment: Value<string>
    ApplicationMode?: Value<string>
    ApplicationConfiguration?: ApplicationConfiguration
    ApplicationDescription?: Value<string>
    Tags?: List<ResourceTag>
    ServiceExecutionRole: Value<string>
}

export default class Application extends ResourceBase<ApplicationProperties> {
    static CustomArtifactConfiguration = CustomArtifactConfiguration
    static S3ContentLocation = S3ContentLocation
    static DeployAsApplicationConfiguration = DeployAsApplicationConfiguration
    static PropertyGroup = PropertyGroup
    static MappingParameters = MappingParameters
    static InputParallelism = InputParallelism
    static FlinkApplicationConfiguration = FlinkApplicationConfiguration
    static Input = Input
    static ApplicationSnapshotConfiguration = ApplicationSnapshotConfiguration
    static KinesisFirehoseInput = KinesisFirehoseInput
    static InputSchema = InputSchema
    static ParallelismConfiguration = ParallelismConfiguration
    static MonitoringConfiguration = MonitoringConfiguration
    static SqlApplicationConfiguration = SqlApplicationConfiguration
    static InputProcessingConfiguration = InputProcessingConfiguration
    static ApplicationCodeConfiguration = ApplicationCodeConfiguration
    static ZeppelinApplicationConfiguration = ZeppelinApplicationConfiguration
    static MavenReference = MavenReference
    static KinesisStreamsInput = KinesisStreamsInput
    static CheckpointConfiguration = CheckpointConfiguration
    static ZeppelinMonitoringConfiguration = ZeppelinMonitoringConfiguration
    static S3ContentBaseLocation = S3ContentBaseLocation
    static InputLambdaProcessor = InputLambdaProcessor
    static RecordColumn = RecordColumn
    static CSVMappingParameters = CSVMappingParameters
    static RecordFormat = RecordFormat
    static GlueDataCatalogConfiguration = GlueDataCatalogConfiguration
    static JSONMappingParameters = JSONMappingParameters
    static CodeContent = CodeContent
    static ApplicationConfiguration = ApplicationConfiguration
    static EnvironmentProperties = EnvironmentProperties
    static CatalogConfiguration = CatalogConfiguration

    constructor(properties: ApplicationProperties) {
        super('AWS::KinesisAnalyticsV2::Application', properties)
    }
}
