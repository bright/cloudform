/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class OrcSerDe {
    BlockSizeBytes?: Value<number>
    BloomFilterColumns?: List<Value<string>>
    BloomFilterFalsePositiveProbability?: Value<number>
    Compression?: Value<string>
    DictionaryKeyThreshold?: Value<number>
    EnablePadding?: Value<boolean>
    FormatVersion?: Value<string>
    PaddingTolerance?: Value<number>
    RowIndexStride?: Value<number>
    StripeSizeBytes?: Value<number>

    constructor(properties: OrcSerDe) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchBufferingHints {
    IntervalInSeconds?: Value<number>
    SizeInMBs?: Value<number>

    constructor(properties: ElasticsearchBufferingHints) {
        Object.assign(this, properties)
    }
}

export class SplunkDestinationConfiguration {
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    HECAcknowledgmentTimeoutInSeconds?: Value<number>
    HECEndpoint!: Value<string>
    HECEndpointType!: Value<string>
    HECToken!: Value<string>
    ProcessingConfiguration?: ProcessingConfiguration
    RetryOptions?: SplunkRetryOptions
    S3BackupMode?: Value<string>
    S3Configuration!: S3DestinationConfiguration

    constructor(properties: SplunkDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class EncryptionConfiguration {
    KMSEncryptionConfig?: KMSEncryptionConfig
    NoEncryptionConfig?: Value<string>

    constructor(properties: EncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class CloudWatchLoggingOptions {
    Enabled?: Value<boolean>
    LogGroupName?: Value<string>
    LogStreamName?: Value<string>

    constructor(properties: CloudWatchLoggingOptions) {
        Object.assign(this, properties)
    }
}

export class InputFormatConfiguration {
    Deserializer?: Deserializer

    constructor(properties: InputFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class ProcessingConfiguration {
    Enabled?: Value<boolean>
    Processors?: List<Processor>

    constructor(properties: ProcessingConfiguration) {
        Object.assign(this, properties)
    }
}

export class BufferingHints {
    IntervalInSeconds?: Value<number>
    SizeInMBs?: Value<number>

    constructor(properties: BufferingHints) {
        Object.assign(this, properties)
    }
}

export class ProcessorParameter {
    ParameterName!: Value<string>
    ParameterValue!: Value<string>

    constructor(properties: ProcessorParameter) {
        Object.assign(this, properties)
    }
}

export class HiveJsonSerDe {
    TimestampFormats?: List<Value<string>>

    constructor(properties: HiveJsonSerDe) {
        Object.assign(this, properties)
    }
}

export class Processor {
    Parameters?: List<ProcessorParameter>
    Type!: Value<string>

    constructor(properties: Processor) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchRetryOptions {
    DurationInSeconds?: Value<number>

    constructor(properties: ElasticsearchRetryOptions) {
        Object.assign(this, properties)
    }
}

export class DataFormatConversionConfiguration {
    Enabled?: Value<boolean>
    InputFormatConfiguration?: InputFormatConfiguration
    OutputFormatConfiguration?: OutputFormatConfiguration
    SchemaConfiguration?: SchemaConfiguration

    constructor(properties: DataFormatConversionConfiguration) {
        Object.assign(this, properties)
    }
}

export class KMSEncryptionConfig {
    AWSKMSKeyARN!: Value<string>

    constructor(properties: KMSEncryptionConfig) {
        Object.assign(this, properties)
    }
}

export class OutputFormatConfiguration {
    Serializer?: Serializer

    constructor(properties: OutputFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchDestinationConfiguration {
    BufferingHints?: ElasticsearchBufferingHints
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    DomainARN?: Value<string>
    IndexName!: Value<string>
    IndexRotationPeriod?: Value<string>
    ProcessingConfiguration?: ProcessingConfiguration
    RetryOptions?: ElasticsearchRetryOptions
    RoleARN!: Value<string>
    S3BackupMode?: Value<string>
    S3Configuration!: S3DestinationConfiguration
    ClusterEndpoint?: Value<string>
    TypeName?: Value<string>
    VpcConfiguration?: VpcConfiguration

    constructor(properties: ElasticsearchDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class SchemaConfiguration {
    CatalogId?: Value<string>
    DatabaseName?: Value<string>
    Region?: Value<string>
    RoleARN?: Value<string>
    TableName?: Value<string>
    VersionId?: Value<string>

    constructor(properties: SchemaConfiguration) {
        Object.assign(this, properties)
    }
}

export class SplunkRetryOptions {
    DurationInSeconds?: Value<number>

    constructor(properties: SplunkRetryOptions) {
        Object.assign(this, properties)
    }
}

export class Deserializer {
    HiveJsonSerDe?: HiveJsonSerDe
    OpenXJsonSerDe?: OpenXJsonSerDe

    constructor(properties: Deserializer) {
        Object.assign(this, properties)
    }
}

export class KinesisStreamSourceConfiguration {
    KinesisStreamARN!: Value<string>
    RoleARN!: Value<string>

    constructor(properties: KinesisStreamSourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class RedshiftRetryOptions {
    DurationInSeconds?: Value<number>

    constructor(properties: RedshiftRetryOptions) {
        Object.assign(this, properties)
    }
}

export class ParquetSerDe {
    BlockSizeBytes?: Value<number>
    Compression?: Value<string>
    EnableDictionaryCompression?: Value<boolean>
    MaxPaddingBytes?: Value<number>
    PageSizeBytes?: Value<number>
    WriterVersion?: Value<string>

    constructor(properties: ParquetSerDe) {
        Object.assign(this, properties)
    }
}

export class Serializer {
    OrcSerDe?: OrcSerDe
    ParquetSerDe?: ParquetSerDe

    constructor(properties: Serializer) {
        Object.assign(this, properties)
    }
}

export class CopyCommand {
    CopyOptions?: Value<string>
    DataTableColumns?: Value<string>
    DataTableName!: Value<string>

    constructor(properties: CopyCommand) {
        Object.assign(this, properties)
    }
}

export class OpenXJsonSerDe {
    CaseInsensitive?: Value<boolean>
    ColumnToJsonKeyMappings?: {[key: string]: Value<string>}
    ConvertDotsInJsonKeysToUnderscores?: Value<boolean>

    constructor(properties: OpenXJsonSerDe) {
        Object.assign(this, properties)
    }
}

export class S3DestinationConfiguration {
    BucketARN!: Value<string>
    BufferingHints?: BufferingHints
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    CompressionFormat?: Value<string>
    EncryptionConfiguration?: EncryptionConfiguration
    ErrorOutputPrefix?: Value<string>
    Prefix?: Value<string>
    RoleARN!: Value<string>

    constructor(properties: S3DestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class VpcConfiguration {
    RoleARN!: Value<string>
    SubnetIds!: List<Value<string>>
    SecurityGroupIds!: List<Value<string>>

    constructor(properties: VpcConfiguration) {
        Object.assign(this, properties)
    }
}

export class ExtendedS3DestinationConfiguration {
    BucketARN!: Value<string>
    BufferingHints?: BufferingHints
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    CompressionFormat?: Value<string>
    DataFormatConversionConfiguration?: DataFormatConversionConfiguration
    EncryptionConfiguration?: EncryptionConfiguration
    ErrorOutputPrefix?: Value<string>
    Prefix?: Value<string>
    ProcessingConfiguration?: ProcessingConfiguration
    RoleARN!: Value<string>
    S3BackupConfiguration?: S3DestinationConfiguration
    S3BackupMode?: Value<string>

    constructor(properties: ExtendedS3DestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class RedshiftDestinationConfiguration {
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    ClusterJDBCURL!: Value<string>
    CopyCommand!: CopyCommand
    Password!: Value<string>
    ProcessingConfiguration?: ProcessingConfiguration
    RetryOptions?: RedshiftRetryOptions
    RoleARN!: Value<string>
    S3BackupConfiguration?: S3DestinationConfiguration
    S3BackupMode?: Value<string>
    S3Configuration!: S3DestinationConfiguration
    Username!: Value<string>

    constructor(properties: RedshiftDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export interface DeliveryStreamProperties {
    DeliveryStreamName?: Value<string>
    DeliveryStreamType?: Value<string>
    ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration
    ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration
    KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration
    RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration
    S3DestinationConfiguration?: S3DestinationConfiguration
    SplunkDestinationConfiguration?: SplunkDestinationConfiguration
}

export default class DeliveryStream extends ResourceBase<DeliveryStreamProperties> {
    static OrcSerDe = OrcSerDe
    static ElasticsearchBufferingHints = ElasticsearchBufferingHints
    static SplunkDestinationConfiguration = SplunkDestinationConfiguration
    static EncryptionConfiguration = EncryptionConfiguration
    static CloudWatchLoggingOptions = CloudWatchLoggingOptions
    static InputFormatConfiguration = InputFormatConfiguration
    static ProcessingConfiguration = ProcessingConfiguration
    static BufferingHints = BufferingHints
    static ProcessorParameter = ProcessorParameter
    static HiveJsonSerDe = HiveJsonSerDe
    static Processor = Processor
    static ElasticsearchRetryOptions = ElasticsearchRetryOptions
    static DataFormatConversionConfiguration = DataFormatConversionConfiguration
    static KMSEncryptionConfig = KMSEncryptionConfig
    static OutputFormatConfiguration = OutputFormatConfiguration
    static ElasticsearchDestinationConfiguration = ElasticsearchDestinationConfiguration
    static SchemaConfiguration = SchemaConfiguration
    static SplunkRetryOptions = SplunkRetryOptions
    static Deserializer = Deserializer
    static KinesisStreamSourceConfiguration = KinesisStreamSourceConfiguration
    static RedshiftRetryOptions = RedshiftRetryOptions
    static ParquetSerDe = ParquetSerDe
    static Serializer = Serializer
    static CopyCommand = CopyCommand
    static OpenXJsonSerDe = OpenXJsonSerDe
    static S3DestinationConfiguration = S3DestinationConfiguration
    static VpcConfiguration = VpcConfiguration
    static ExtendedS3DestinationConfiguration = ExtendedS3DestinationConfiguration
    static RedshiftDestinationConfiguration = RedshiftDestinationConfiguration

    constructor(properties?: DeliveryStreamProperties) {
        super('AWS::KinesisFirehose::DeliveryStream', properties || {})
    }
}
