import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AmazonOpenSearchServerlessBufferingHints {
    IntervalInSeconds?: Value<number>;
    SizeInMBs?: Value<number>;
    constructor(properties: AmazonOpenSearchServerlessBufferingHints);
}
export declare class AmazonOpenSearchServerlessDestinationConfiguration {
    IndexName: Value<string>;
    S3Configuration: S3DestinationConfiguration;
    BufferingHints?: AmazonOpenSearchServerlessBufferingHints;
    RetryOptions?: AmazonOpenSearchServerlessRetryOptions;
    CollectionEndpoint?: Value<string>;
    VpcConfiguration?: VpcConfiguration;
    ProcessingConfiguration?: ProcessingConfiguration;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    RoleARN: Value<string>;
    S3BackupMode?: Value<string>;
    constructor(properties: AmazonOpenSearchServerlessDestinationConfiguration);
}
export declare class AmazonOpenSearchServerlessRetryOptions {
    DurationInSeconds?: Value<number>;
    constructor(properties: AmazonOpenSearchServerlessRetryOptions);
}
export declare class AmazonopensearchserviceBufferingHints {
    IntervalInSeconds?: Value<number>;
    SizeInMBs?: Value<number>;
    constructor(properties: AmazonopensearchserviceBufferingHints);
}
export declare class AmazonopensearchserviceDestinationConfiguration {
    TypeName?: Value<string>;
    IndexRotationPeriod?: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    ClusterEndpoint?: Value<string>;
    DomainARN?: Value<string>;
    RoleARN: Value<string>;
    S3BackupMode?: Value<string>;
    IndexName: Value<string>;
    DocumentIdOptions?: DocumentIdOptions;
    S3Configuration: S3DestinationConfiguration;
    BufferingHints?: AmazonopensearchserviceBufferingHints;
    RetryOptions?: AmazonopensearchserviceRetryOptions;
    VpcConfiguration?: VpcConfiguration;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    constructor(properties: AmazonopensearchserviceDestinationConfiguration);
}
export declare class AmazonopensearchserviceRetryOptions {
    DurationInSeconds?: Value<number>;
    constructor(properties: AmazonopensearchserviceRetryOptions);
}
export declare class AuthenticationConfiguration {
    Connectivity: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: AuthenticationConfiguration);
}
export declare class BufferingHints {
    IntervalInSeconds?: Value<number>;
    SizeInMBs?: Value<number>;
    constructor(properties: BufferingHints);
}
export declare class CloudWatchLoggingOptions {
    LogStreamName?: Value<string>;
    Enabled?: Value<boolean>;
    LogGroupName?: Value<string>;
    constructor(properties: CloudWatchLoggingOptions);
}
export declare class CopyCommand {
    DataTableName: Value<string>;
    CopyOptions?: Value<string>;
    DataTableColumns?: Value<string>;
    constructor(properties: CopyCommand);
}
export declare class DataFormatConversionConfiguration {
    InputFormatConfiguration?: InputFormatConfiguration;
    Enabled?: Value<boolean>;
    SchemaConfiguration?: SchemaConfiguration;
    OutputFormatConfiguration?: OutputFormatConfiguration;
    constructor(properties: DataFormatConversionConfiguration);
}
export declare class DeliveryStreamEncryptionConfigurationInput {
    KeyType: Value<string>;
    KeyARN?: Value<string>;
    constructor(properties: DeliveryStreamEncryptionConfigurationInput);
}
export declare class Deserializer {
    HiveJsonSerDe?: HiveJsonSerDe;
    OpenXJsonSerDe?: OpenXJsonSerDe;
    constructor(properties: Deserializer);
}
export declare class DocumentIdOptions {
    DefaultDocumentIdFormat: Value<string>;
    constructor(properties: DocumentIdOptions);
}
export declare class DynamicPartitioningConfiguration {
    Enabled?: Value<boolean>;
    RetryOptions?: RetryOptions;
    constructor(properties: DynamicPartitioningConfiguration);
}
export declare class ElasticsearchBufferingHints {
    IntervalInSeconds?: Value<number>;
    SizeInMBs?: Value<number>;
    constructor(properties: ElasticsearchBufferingHints);
}
export declare class ElasticsearchDestinationConfiguration {
    TypeName?: Value<string>;
    IndexRotationPeriod?: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    ClusterEndpoint?: Value<string>;
    DomainARN?: Value<string>;
    RoleARN: Value<string>;
    S3BackupMode?: Value<string>;
    IndexName: Value<string>;
    DocumentIdOptions?: DocumentIdOptions;
    S3Configuration: S3DestinationConfiguration;
    BufferingHints?: ElasticsearchBufferingHints;
    RetryOptions?: ElasticsearchRetryOptions;
    VpcConfiguration?: VpcConfiguration;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    constructor(properties: ElasticsearchDestinationConfiguration);
}
export declare class ElasticsearchRetryOptions {
    DurationInSeconds?: Value<number>;
    constructor(properties: ElasticsearchRetryOptions);
}
export declare class EncryptionConfiguration {
    KMSEncryptionConfig?: KMSEncryptionConfig;
    NoEncryptionConfig?: Value<string>;
    constructor(properties: EncryptionConfiguration);
}
export declare class ExtendedS3DestinationConfiguration {
    ErrorOutputPrefix?: Value<string>;
    S3BackupConfiguration?: S3DestinationConfiguration;
    BucketARN: Value<string>;
    CompressionFormat?: Value<string>;
    DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
    EncryptionConfiguration?: EncryptionConfiguration;
    DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
    Prefix?: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    RoleARN: Value<string>;
    S3BackupMode?: Value<string>;
    BufferingHints?: BufferingHints;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    constructor(properties: ExtendedS3DestinationConfiguration);
}
export declare class HiveJsonSerDe {
    TimestampFormats?: List<Value<string>>;
    constructor(properties: HiveJsonSerDe);
}
export declare class HttpEndpointCommonAttribute {
    AttributeValue: Value<string>;
    AttributeName: Value<string>;
    constructor(properties: HttpEndpointCommonAttribute);
}
export declare class HttpEndpointConfiguration {
    AccessKey?: Value<string>;
    Url: Value<string>;
    Name?: Value<string>;
    constructor(properties: HttpEndpointConfiguration);
}
export declare class HttpEndpointDestinationConfiguration {
    RequestConfiguration?: HttpEndpointRequestConfiguration;
    S3Configuration: S3DestinationConfiguration;
    BufferingHints?: BufferingHints;
    RetryOptions?: RetryOptions;
    EndpointConfiguration: HttpEndpointConfiguration;
    ProcessingConfiguration?: ProcessingConfiguration;
    RoleARN?: Value<string>;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    S3BackupMode?: Value<string>;
    constructor(properties: HttpEndpointDestinationConfiguration);
}
export declare class HttpEndpointRequestConfiguration {
    CommonAttributes?: List<HttpEndpointCommonAttribute>;
    ContentEncoding?: Value<string>;
    constructor(properties: HttpEndpointRequestConfiguration);
}
export declare class InputFormatConfiguration {
    Deserializer?: Deserializer;
    constructor(properties: InputFormatConfiguration);
}
export declare class KMSEncryptionConfig {
    AWSKMSKeyARN: Value<string>;
    constructor(properties: KMSEncryptionConfig);
}
export declare class KinesisStreamSourceConfiguration {
    KinesisStreamARN: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: KinesisStreamSourceConfiguration);
}
export declare class MSKSourceConfiguration {
    AuthenticationConfiguration: AuthenticationConfiguration;
    MSKClusterARN: Value<string>;
    TopicName: Value<string>;
    constructor(properties: MSKSourceConfiguration);
}
export declare class OpenXJsonSerDe {
    ConvertDotsInJsonKeysToUnderscores?: Value<boolean>;
    ColumnToJsonKeyMappings?: {
        [key: string]: Value<string>;
    };
    CaseInsensitive?: Value<boolean>;
    constructor(properties: OpenXJsonSerDe);
}
export declare class OrcSerDe {
    PaddingTolerance?: Value<number>;
    Compression?: Value<string>;
    StripeSizeBytes?: Value<number>;
    BloomFilterColumns?: List<Value<string>>;
    BloomFilterFalsePositiveProbability?: Value<number>;
    EnablePadding?: Value<boolean>;
    FormatVersion?: Value<string>;
    RowIndexStride?: Value<number>;
    BlockSizeBytes?: Value<number>;
    DictionaryKeyThreshold?: Value<number>;
    constructor(properties: OrcSerDe);
}
export declare class OutputFormatConfiguration {
    Serializer?: Serializer;
    constructor(properties: OutputFormatConfiguration);
}
export declare class ParquetSerDe {
    Compression?: Value<string>;
    BlockSizeBytes?: Value<number>;
    EnableDictionaryCompression?: Value<boolean>;
    PageSizeBytes?: Value<number>;
    MaxPaddingBytes?: Value<number>;
    WriterVersion?: Value<string>;
    constructor(properties: ParquetSerDe);
}
export declare class ProcessingConfiguration {
    Enabled?: Value<boolean>;
    Processors?: List<Processor>;
    constructor(properties: ProcessingConfiguration);
}
export declare class Processor {
    Type: Value<string>;
    Parameters?: List<ProcessorParameter>;
    constructor(properties: Processor);
}
export declare class ProcessorParameter {
    ParameterValue: Value<string>;
    ParameterName: Value<string>;
    constructor(properties: ProcessorParameter);
}
export declare class RedshiftDestinationConfiguration {
    S3BackupConfiguration?: S3DestinationConfiguration;
    S3Configuration: S3DestinationConfiguration;
    Username: Value<string>;
    CopyCommand: CopyCommand;
    RetryOptions?: RedshiftRetryOptions;
    ProcessingConfiguration?: ProcessingConfiguration;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    ClusterJDBCURL: Value<string>;
    RoleARN: Value<string>;
    Password: Value<string>;
    S3BackupMode?: Value<string>;
    constructor(properties: RedshiftDestinationConfiguration);
}
export declare class RedshiftRetryOptions {
    DurationInSeconds?: Value<number>;
    constructor(properties: RedshiftRetryOptions);
}
export declare class RetryOptions {
    DurationInSeconds?: Value<number>;
    constructor(properties: RetryOptions);
}
export declare class S3DestinationConfiguration {
    ErrorOutputPrefix?: Value<string>;
    BucketARN: Value<string>;
    BufferingHints?: BufferingHints;
    CompressionFormat?: Value<string>;
    EncryptionConfiguration?: EncryptionConfiguration;
    Prefix?: Value<string>;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    RoleARN: Value<string>;
    constructor(properties: S3DestinationConfiguration);
}
export declare class SchemaConfiguration {
    VersionId?: Value<string>;
    TableName?: Value<string>;
    DatabaseName?: Value<string>;
    Region?: Value<string>;
    CatalogId?: Value<string>;
    RoleARN?: Value<string>;
    constructor(properties: SchemaConfiguration);
}
export declare class Serializer {
    OrcSerDe?: OrcSerDe;
    ParquetSerDe?: ParquetSerDe;
    constructor(properties: Serializer);
}
export declare class SplunkDestinationConfiguration {
    HECEndpoint: Value<string>;
    S3Configuration: S3DestinationConfiguration;
    HECToken: Value<string>;
    RetryOptions?: SplunkRetryOptions;
    HECEndpointType: Value<string>;
    HECAcknowledgmentTimeoutInSeconds?: Value<number>;
    ProcessingConfiguration?: ProcessingConfiguration;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    S3BackupMode?: Value<string>;
    constructor(properties: SplunkDestinationConfiguration);
}
export declare class SplunkRetryOptions {
    DurationInSeconds?: Value<number>;
    constructor(properties: SplunkRetryOptions);
}
export declare class VpcConfiguration {
    SubnetIds: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    RoleARN: Value<string>;
    constructor(properties: VpcConfiguration);
}
export interface DeliveryStreamProperties {
    DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
    HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;
    KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;
    DeliveryStreamType?: Value<string>;
    RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
    AmazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfiguration;
    MSKSourceConfiguration?: MSKSourceConfiguration;
    SplunkDestinationConfiguration?: SplunkDestinationConfiguration;
    ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;
    AmazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfiguration;
    ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
    S3DestinationConfiguration?: S3DestinationConfiguration;
    DeliveryStreamName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class DeliveryStream extends ResourceBase<DeliveryStreamProperties> {
    static AmazonOpenSearchServerlessBufferingHints: typeof AmazonOpenSearchServerlessBufferingHints;
    static AmazonOpenSearchServerlessDestinationConfiguration: typeof AmazonOpenSearchServerlessDestinationConfiguration;
    static AmazonOpenSearchServerlessRetryOptions: typeof AmazonOpenSearchServerlessRetryOptions;
    static AmazonopensearchserviceBufferingHints: typeof AmazonopensearchserviceBufferingHints;
    static AmazonopensearchserviceDestinationConfiguration: typeof AmazonopensearchserviceDestinationConfiguration;
    static AmazonopensearchserviceRetryOptions: typeof AmazonopensearchserviceRetryOptions;
    static AuthenticationConfiguration: typeof AuthenticationConfiguration;
    static BufferingHints: typeof BufferingHints;
    static CloudWatchLoggingOptions: typeof CloudWatchLoggingOptions;
    static CopyCommand: typeof CopyCommand;
    static DataFormatConversionConfiguration: typeof DataFormatConversionConfiguration;
    static DeliveryStreamEncryptionConfigurationInput: typeof DeliveryStreamEncryptionConfigurationInput;
    static Deserializer: typeof Deserializer;
    static DocumentIdOptions: typeof DocumentIdOptions;
    static DynamicPartitioningConfiguration: typeof DynamicPartitioningConfiguration;
    static ElasticsearchBufferingHints: typeof ElasticsearchBufferingHints;
    static ElasticsearchDestinationConfiguration: typeof ElasticsearchDestinationConfiguration;
    static ElasticsearchRetryOptions: typeof ElasticsearchRetryOptions;
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static ExtendedS3DestinationConfiguration: typeof ExtendedS3DestinationConfiguration;
    static HiveJsonSerDe: typeof HiveJsonSerDe;
    static HttpEndpointCommonAttribute: typeof HttpEndpointCommonAttribute;
    static HttpEndpointConfiguration: typeof HttpEndpointConfiguration;
    static HttpEndpointDestinationConfiguration: typeof HttpEndpointDestinationConfiguration;
    static HttpEndpointRequestConfiguration: typeof HttpEndpointRequestConfiguration;
    static InputFormatConfiguration: typeof InputFormatConfiguration;
    static KMSEncryptionConfig: typeof KMSEncryptionConfig;
    static KinesisStreamSourceConfiguration: typeof KinesisStreamSourceConfiguration;
    static MSKSourceConfiguration: typeof MSKSourceConfiguration;
    static OpenXJsonSerDe: typeof OpenXJsonSerDe;
    static OrcSerDe: typeof OrcSerDe;
    static OutputFormatConfiguration: typeof OutputFormatConfiguration;
    static ParquetSerDe: typeof ParquetSerDe;
    static ProcessingConfiguration: typeof ProcessingConfiguration;
    static Processor: typeof Processor;
    static ProcessorParameter: typeof ProcessorParameter;
    static RedshiftDestinationConfiguration: typeof RedshiftDestinationConfiguration;
    static RedshiftRetryOptions: typeof RedshiftRetryOptions;
    static RetryOptions: typeof RetryOptions;
    static S3DestinationConfiguration: typeof S3DestinationConfiguration;
    static SchemaConfiguration: typeof SchemaConfiguration;
    static Serializer: typeof Serializer;
    static SplunkDestinationConfiguration: typeof SplunkDestinationConfiguration;
    static SplunkRetryOptions: typeof SplunkRetryOptions;
    static VpcConfiguration: typeof VpcConfiguration;
    constructor(properties?: DeliveryStreamProperties);
}
