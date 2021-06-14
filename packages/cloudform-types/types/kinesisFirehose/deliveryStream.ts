/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class EncryptionConfiguration {
    NoEncryptionConfig?: Value<string>

    constructor(properties: EncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class InputFormatConfiguration {


    constructor(properties: InputFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class HiveJsonSerDe {


    constructor(properties: HiveJsonSerDe) {
        Object.assign(this, properties)
    }
}

export class Processor {
    Type!: Value<string>

    constructor(properties: Processor) {
        Object.assign(this, properties)
    }
}

export class DataFormatConversionConfiguration {
    Enabled?: Value<boolean>

    constructor(properties: DataFormatConversionConfiguration) {
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

export class HttpEndpointRequestConfiguration {
    ContentEncoding?: Value<string>

    constructor(properties: HttpEndpointRequestConfiguration) {
        Object.assign(this, properties)
    }
}

export class HttpEndpointConfiguration {
    Url!: Value<string>
    AccessKey?: Value<string>
    Name?: Value<string>

    constructor(properties: HttpEndpointConfiguration) {
        Object.assign(this, properties)
    }
}

export class Serializer {


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
    ConvertDotsInJsonKeysToUnderscores?: Value<boolean>

    constructor(properties: OpenXJsonSerDe) {
        Object.assign(this, properties)
    }
}

export class OrcSerDe {
    BlockSizeBytes?: Value<number>
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
    HECAcknowledgmentTimeoutInSeconds?: Value<number>
    HECEndpoint!: Value<string>
    HECEndpointType!: Value<string>
    HECToken!: Value<string>
    S3BackupMode?: Value<string>

    constructor(properties: SplunkDestinationConfiguration) {
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

export class ProcessingConfiguration {
    Enabled?: Value<boolean>

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

export class DeliveryStreamEncryptionConfigurationInput {
    KeyARN?: Value<string>
    KeyType!: Value<string>

    constructor(properties: DeliveryStreamEncryptionConfigurationInput) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchRetryOptions {
    DurationInSeconds?: Value<number>

    constructor(properties: ElasticsearchRetryOptions) {
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


    constructor(properties: OutputFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchDestinationConfiguration {
    DomainARN?: Value<string>
    IndexName!: Value<string>
    IndexRotationPeriod?: Value<string>
    RoleARN!: Value<string>
    S3BackupMode?: Value<string>
    ClusterEndpoint?: Value<string>
    TypeName?: Value<string>

    constructor(properties: ElasticsearchDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class Deserializer {


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

export class RetryOptions {
    DurationInSeconds?: Value<number>

    constructor(properties: RetryOptions) {
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

export class S3DestinationConfiguration {
    BucketARN!: Value<string>
    CompressionFormat?: Value<string>
    ErrorOutputPrefix?: Value<string>
    Prefix?: Value<string>
    RoleARN!: Value<string>

    constructor(properties: S3DestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class VpcConfiguration {
    RoleARN!: Value<string>

    constructor(properties: VpcConfiguration) {
        Object.assign(this, properties)
    }
}

export class ExtendedS3DestinationConfiguration {
    BucketARN!: Value<string>
    CompressionFormat?: Value<string>
    ErrorOutputPrefix?: Value<string>
    Prefix?: Value<string>
    RoleARN!: Value<string>
    S3BackupMode?: Value<string>

    constructor(properties: ExtendedS3DestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class RedshiftDestinationConfiguration {
    ClusterJDBCURL!: Value<string>
    Password!: Value<string>
    RoleARN!: Value<string>
    S3BackupMode?: Value<string>
    Username!: Value<string>

    constructor(properties: RedshiftDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class HttpEndpointCommonAttribute {
    AttributeName!: Value<string>
    AttributeValue!: Value<string>

    constructor(properties: HttpEndpointCommonAttribute) {
        Object.assign(this, properties)
    }
}

export class HttpEndpointDestinationConfiguration {
    RoleARN?: Value<string>
    S3BackupMode?: Value<string>

    constructor(properties: HttpEndpointDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export interface DeliveryStreamProperties {
    DeliveryStreamName?: Value<string>
    DeliveryStreamType?: Value<string>
}

export default class DeliveryStream extends ResourceBase<DeliveryStreamProperties> {
    static EncryptionConfiguration = EncryptionConfiguration
    static InputFormatConfiguration = InputFormatConfiguration
    static HiveJsonSerDe = HiveJsonSerDe
    static Processor = Processor
    static DataFormatConversionConfiguration = DataFormatConversionConfiguration
    static SchemaConfiguration = SchemaConfiguration
    static SplunkRetryOptions = SplunkRetryOptions
    static HttpEndpointRequestConfiguration = HttpEndpointRequestConfiguration
    static HttpEndpointConfiguration = HttpEndpointConfiguration
    static Serializer = Serializer
    static CopyCommand = CopyCommand
    static OpenXJsonSerDe = OpenXJsonSerDe
    static OrcSerDe = OrcSerDe
    static ElasticsearchBufferingHints = ElasticsearchBufferingHints
    static SplunkDestinationConfiguration = SplunkDestinationConfiguration
    static CloudWatchLoggingOptions = CloudWatchLoggingOptions
    static ProcessingConfiguration = ProcessingConfiguration
    static BufferingHints = BufferingHints
    static ProcessorParameter = ProcessorParameter
    static DeliveryStreamEncryptionConfigurationInput = DeliveryStreamEncryptionConfigurationInput
    static ElasticsearchRetryOptions = ElasticsearchRetryOptions
    static KMSEncryptionConfig = KMSEncryptionConfig
    static OutputFormatConfiguration = OutputFormatConfiguration
    static ElasticsearchDestinationConfiguration = ElasticsearchDestinationConfiguration
    static Deserializer = Deserializer
    static KinesisStreamSourceConfiguration = KinesisStreamSourceConfiguration
    static RedshiftRetryOptions = RedshiftRetryOptions
    static RetryOptions = RetryOptions
    static ParquetSerDe = ParquetSerDe
    static S3DestinationConfiguration = S3DestinationConfiguration
    static VpcConfiguration = VpcConfiguration
    static ExtendedS3DestinationConfiguration = ExtendedS3DestinationConfiguration
    static RedshiftDestinationConfiguration = RedshiftDestinationConfiguration
    static HttpEndpointCommonAttribute = HttpEndpointCommonAttribute
    static HttpEndpointDestinationConfiguration = HttpEndpointDestinationConfiguration

    constructor(properties?: DeliveryStreamProperties) {
        super('AWS::KinesisFirehose::DeliveryStream', properties || {})
    }
}
