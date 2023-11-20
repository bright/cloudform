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

export class AmazonOpenSearchServerlessBufferingHints {
    IntervalInSeconds?: Value<number>
    SizeInMBs?: Value<number>

    constructor(properties: AmazonOpenSearchServerlessBufferingHints) {
        Object.assign(this, properties)
    }
}

export class AmazonOpenSearchServerlessDestinationConfiguration {
    IndexName!: Value<string>
    S3Configuration!: S3DestinationConfiguration
    BufferingHints?: AmazonOpenSearchServerlessBufferingHints
    RetryOptions?: AmazonOpenSearchServerlessRetryOptions
    CollectionEndpoint?: Value<string>
    VpcConfiguration?: VpcConfiguration
    ProcessingConfiguration?: ProcessingConfiguration
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    RoleARN!: Value<string>
    S3BackupMode?: Value<string>

    constructor(properties: AmazonOpenSearchServerlessDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class AmazonOpenSearchServerlessRetryOptions {
    DurationInSeconds?: Value<number>

    constructor(properties: AmazonOpenSearchServerlessRetryOptions) {
        Object.assign(this, properties)
    }
}

export class AmazonopensearchserviceBufferingHints {
    IntervalInSeconds?: Value<number>
    SizeInMBs?: Value<number>

    constructor(properties: AmazonopensearchserviceBufferingHints) {
        Object.assign(this, properties)
    }
}

export class AmazonopensearchserviceDestinationConfiguration {
    TypeName?: Value<string>
    IndexRotationPeriod?: Value<string>
    ProcessingConfiguration?: ProcessingConfiguration
    ClusterEndpoint?: Value<string>
    DomainARN?: Value<string>
    RoleARN!: Value<string>
    S3BackupMode?: Value<string>
    IndexName!: Value<string>
    DocumentIdOptions?: DocumentIdOptions
    S3Configuration!: S3DestinationConfiguration
    BufferingHints?: AmazonopensearchserviceBufferingHints
    RetryOptions?: AmazonopensearchserviceRetryOptions
    VpcConfiguration?: VpcConfiguration
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions

    constructor(properties: AmazonopensearchserviceDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class AmazonopensearchserviceRetryOptions {
    DurationInSeconds?: Value<number>

    constructor(properties: AmazonopensearchserviceRetryOptions) {
        Object.assign(this, properties)
    }
}

export class AuthenticationConfiguration {
    Connectivity!: Value<string>
    RoleARN!: Value<string>

    constructor(properties: AuthenticationConfiguration) {
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

export class CloudWatchLoggingOptions {
    LogStreamName?: Value<string>
    Enabled?: Value<boolean>
    LogGroupName?: Value<string>

    constructor(properties: CloudWatchLoggingOptions) {
        Object.assign(this, properties)
    }
}

export class CopyCommand {
    DataTableName!: Value<string>
    CopyOptions?: Value<string>
    DataTableColumns?: Value<string>

    constructor(properties: CopyCommand) {
        Object.assign(this, properties)
    }
}

export class DataFormatConversionConfiguration {
    InputFormatConfiguration?: InputFormatConfiguration
    Enabled?: Value<boolean>
    SchemaConfiguration?: SchemaConfiguration
    OutputFormatConfiguration?: OutputFormatConfiguration

    constructor(properties: DataFormatConversionConfiguration) {
        Object.assign(this, properties)
    }
}

export class DeliveryStreamEncryptionConfigurationInput {
    KeyType!: Value<string>
    KeyARN?: Value<string>

    constructor(properties: DeliveryStreamEncryptionConfigurationInput) {
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

export class DocumentIdOptions {
    DefaultDocumentIdFormat!: Value<string>

    constructor(properties: DocumentIdOptions) {
        Object.assign(this, properties)
    }
}

export class DynamicPartitioningConfiguration {
    Enabled?: Value<boolean>
    RetryOptions?: RetryOptions

    constructor(properties: DynamicPartitioningConfiguration) {
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

export class ElasticsearchDestinationConfiguration {
    TypeName?: Value<string>
    IndexRotationPeriod?: Value<string>
    ProcessingConfiguration?: ProcessingConfiguration
    ClusterEndpoint?: Value<string>
    DomainARN?: Value<string>
    RoleARN!: Value<string>
    S3BackupMode?: Value<string>
    IndexName!: Value<string>
    DocumentIdOptions?: DocumentIdOptions
    S3Configuration!: S3DestinationConfiguration
    BufferingHints?: ElasticsearchBufferingHints
    RetryOptions?: ElasticsearchRetryOptions
    VpcConfiguration?: VpcConfiguration
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions

    constructor(properties: ElasticsearchDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchRetryOptions {
    DurationInSeconds?: Value<number>

    constructor(properties: ElasticsearchRetryOptions) {
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

export class ExtendedS3DestinationConfiguration {
    ErrorOutputPrefix?: Value<string>
    S3BackupConfiguration?: S3DestinationConfiguration
    BucketARN!: Value<string>
    CompressionFormat?: Value<string>
    DataFormatConversionConfiguration?: DataFormatConversionConfiguration
    EncryptionConfiguration?: EncryptionConfiguration
    DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration
    Prefix?: Value<string>
    ProcessingConfiguration?: ProcessingConfiguration
    RoleARN!: Value<string>
    S3BackupMode?: Value<string>
    BufferingHints?: BufferingHints
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions

    constructor(properties: ExtendedS3DestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class HiveJsonSerDe {
    TimestampFormats?: List<Value<string>>

    constructor(properties: HiveJsonSerDe) {
        Object.assign(this, properties)
    }
}

export class HttpEndpointCommonAttribute {
    AttributeValue!: Value<string>
    AttributeName!: Value<string>

    constructor(properties: HttpEndpointCommonAttribute) {
        Object.assign(this, properties)
    }
}

export class HttpEndpointConfiguration {
    AccessKey?: Value<string>
    Url!: Value<string>
    Name?: Value<string>

    constructor(properties: HttpEndpointConfiguration) {
        Object.assign(this, properties)
    }
}

export class HttpEndpointDestinationConfiguration {
    RequestConfiguration?: HttpEndpointRequestConfiguration
    S3Configuration!: S3DestinationConfiguration
    BufferingHints?: BufferingHints
    RetryOptions?: RetryOptions
    EndpointConfiguration!: HttpEndpointConfiguration
    ProcessingConfiguration?: ProcessingConfiguration
    RoleARN?: Value<string>
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    S3BackupMode?: Value<string>

    constructor(properties: HttpEndpointDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class HttpEndpointRequestConfiguration {
    CommonAttributes?: List<HttpEndpointCommonAttribute>
    ContentEncoding?: Value<string>

    constructor(properties: HttpEndpointRequestConfiguration) {
        Object.assign(this, properties)
    }
}

export class InputFormatConfiguration {
    Deserializer?: Deserializer

    constructor(properties: InputFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class KMSEncryptionConfig {
    AWSKMSKeyARN!: Value<string>

    constructor(properties: KMSEncryptionConfig) {
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

export class MSKSourceConfiguration {
    AuthenticationConfiguration!: AuthenticationConfiguration
    MSKClusterARN!: Value<string>
    TopicName!: Value<string>

    constructor(properties: MSKSourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class OpenXJsonSerDe {
    ConvertDotsInJsonKeysToUnderscores?: Value<boolean>
    ColumnToJsonKeyMappings?: {[key: string]: Value<string>}
    CaseInsensitive?: Value<boolean>

    constructor(properties: OpenXJsonSerDe) {
        Object.assign(this, properties)
    }
}

export class OrcSerDe {
    PaddingTolerance?: Value<number>
    Compression?: Value<string>
    StripeSizeBytes?: Value<number>
    BloomFilterColumns?: List<Value<string>>
    BloomFilterFalsePositiveProbability?: Value<number>
    EnablePadding?: Value<boolean>
    FormatVersion?: Value<string>
    RowIndexStride?: Value<number>
    BlockSizeBytes?: Value<number>
    DictionaryKeyThreshold?: Value<number>

    constructor(properties: OrcSerDe) {
        Object.assign(this, properties)
    }
}

export class OutputFormatConfiguration {
    Serializer?: Serializer

    constructor(properties: OutputFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export class ParquetSerDe {
    Compression?: Value<string>
    BlockSizeBytes?: Value<number>
    EnableDictionaryCompression?: Value<boolean>
    PageSizeBytes?: Value<number>
    MaxPaddingBytes?: Value<number>
    WriterVersion?: Value<string>

    constructor(properties: ParquetSerDe) {
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

export class Processor {
    Type!: Value<string>
    Parameters?: List<ProcessorParameter>

    constructor(properties: Processor) {
        Object.assign(this, properties)
    }
}

export class ProcessorParameter {
    ParameterValue!: Value<string>
    ParameterName!: Value<string>

    constructor(properties: ProcessorParameter) {
        Object.assign(this, properties)
    }
}

export class RedshiftDestinationConfiguration {
    S3BackupConfiguration?: S3DestinationConfiguration
    S3Configuration!: S3DestinationConfiguration
    Username!: Value<string>
    CopyCommand!: CopyCommand
    RetryOptions?: RedshiftRetryOptions
    ProcessingConfiguration?: ProcessingConfiguration
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    ClusterJDBCURL!: Value<string>
    RoleARN!: Value<string>
    Password!: Value<string>
    S3BackupMode?: Value<string>

    constructor(properties: RedshiftDestinationConfiguration) {
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

export class S3DestinationConfiguration {
    ErrorOutputPrefix?: Value<string>
    BucketARN!: Value<string>
    BufferingHints?: BufferingHints
    CompressionFormat?: Value<string>
    EncryptionConfiguration?: EncryptionConfiguration
    Prefix?: Value<string>
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    RoleARN!: Value<string>

    constructor(properties: S3DestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class SchemaConfiguration {
    VersionId?: Value<string>
    TableName?: Value<string>
    DatabaseName?: Value<string>
    Region?: Value<string>
    CatalogId?: Value<string>
    RoleARN?: Value<string>

    constructor(properties: SchemaConfiguration) {
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

export class SplunkDestinationConfiguration {
    HECEndpoint!: Value<string>
    S3Configuration!: S3DestinationConfiguration
    HECToken!: Value<string>
    RetryOptions?: SplunkRetryOptions
    HECEndpointType!: Value<string>
    HECAcknowledgmentTimeoutInSeconds?: Value<number>
    ProcessingConfiguration?: ProcessingConfiguration
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    S3BackupMode?: Value<string>

    constructor(properties: SplunkDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class SplunkRetryOptions {
    DurationInSeconds?: Value<number>

    constructor(properties: SplunkRetryOptions) {
        Object.assign(this, properties)
    }
}

export class VpcConfiguration {
    SubnetIds!: List<Value<string>>
    SecurityGroupIds!: List<Value<string>>
    RoleARN!: Value<string>

    constructor(properties: VpcConfiguration) {
        Object.assign(this, properties)
    }
}

export interface DeliveryStreamProperties {
    DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput
    HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration
    KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration
    DeliveryStreamType?: Value<string>
    RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration
    AmazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfiguration
    MSKSourceConfiguration?: MSKSourceConfiguration
    SplunkDestinationConfiguration?: SplunkDestinationConfiguration
    ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration
    AmazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfiguration
    ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration
    S3DestinationConfiguration?: S3DestinationConfiguration
    DeliveryStreamName?: Value<string>
    Tags?: List<ResourceTag>
}

export default class DeliveryStream extends ResourceBase<DeliveryStreamProperties> {
    static AmazonOpenSearchServerlessBufferingHints = AmazonOpenSearchServerlessBufferingHints
    static AmazonOpenSearchServerlessDestinationConfiguration = AmazonOpenSearchServerlessDestinationConfiguration
    static AmazonOpenSearchServerlessRetryOptions = AmazonOpenSearchServerlessRetryOptions
    static AmazonopensearchserviceBufferingHints = AmazonopensearchserviceBufferingHints
    static AmazonopensearchserviceDestinationConfiguration = AmazonopensearchserviceDestinationConfiguration
    static AmazonopensearchserviceRetryOptions = AmazonopensearchserviceRetryOptions
    static AuthenticationConfiguration = AuthenticationConfiguration
    static BufferingHints = BufferingHints
    static CloudWatchLoggingOptions = CloudWatchLoggingOptions
    static CopyCommand = CopyCommand
    static DataFormatConversionConfiguration = DataFormatConversionConfiguration
    static DeliveryStreamEncryptionConfigurationInput = DeliveryStreamEncryptionConfigurationInput
    static Deserializer = Deserializer
    static DocumentIdOptions = DocumentIdOptions
    static DynamicPartitioningConfiguration = DynamicPartitioningConfiguration
    static ElasticsearchBufferingHints = ElasticsearchBufferingHints
    static ElasticsearchDestinationConfiguration = ElasticsearchDestinationConfiguration
    static ElasticsearchRetryOptions = ElasticsearchRetryOptions
    static EncryptionConfiguration = EncryptionConfiguration
    static ExtendedS3DestinationConfiguration = ExtendedS3DestinationConfiguration
    static HiveJsonSerDe = HiveJsonSerDe
    static HttpEndpointCommonAttribute = HttpEndpointCommonAttribute
    static HttpEndpointConfiguration = HttpEndpointConfiguration
    static HttpEndpointDestinationConfiguration = HttpEndpointDestinationConfiguration
    static HttpEndpointRequestConfiguration = HttpEndpointRequestConfiguration
    static InputFormatConfiguration = InputFormatConfiguration
    static KMSEncryptionConfig = KMSEncryptionConfig
    static KinesisStreamSourceConfiguration = KinesisStreamSourceConfiguration
    static MSKSourceConfiguration = MSKSourceConfiguration
    static OpenXJsonSerDe = OpenXJsonSerDe
    static OrcSerDe = OrcSerDe
    static OutputFormatConfiguration = OutputFormatConfiguration
    static ParquetSerDe = ParquetSerDe
    static ProcessingConfiguration = ProcessingConfiguration
    static Processor = Processor
    static ProcessorParameter = ProcessorParameter
    static RedshiftDestinationConfiguration = RedshiftDestinationConfiguration
    static RedshiftRetryOptions = RedshiftRetryOptions
    static RetryOptions = RetryOptions
    static S3DestinationConfiguration = S3DestinationConfiguration
    static SchemaConfiguration = SchemaConfiguration
    static Serializer = Serializer
    static SplunkDestinationConfiguration = SplunkDestinationConfiguration
    static SplunkRetryOptions = SplunkRetryOptions
    static VpcConfiguration = VpcConfiguration

    constructor(properties?: DeliveryStreamProperties) {
        super('AWS::KinesisFirehose::DeliveryStream', properties || {})
    }
}
