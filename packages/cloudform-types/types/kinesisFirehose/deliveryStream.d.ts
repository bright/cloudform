import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class OrcSerDe {
    BlockSizeBytes?: Value<number>;
    BloomFilterColumns?: List<Value<string>>;
    BloomFilterFalsePositiveProbability?: Value<number>;
    Compression?: Value<string>;
    DictionaryKeyThreshold?: Value<number>;
    EnablePadding?: Value<boolean>;
    FormatVersion?: Value<string>;
    PaddingTolerance?: Value<number>;
    RowIndexStride?: Value<number>;
    StripeSizeBytes?: Value<number>;
    constructor(properties: OrcSerDe);
}
export declare class ElasticsearchBufferingHints {
    IntervalInSeconds: Value<number>;
    SizeInMBs: Value<number>;
    constructor(properties: ElasticsearchBufferingHints);
}
export declare class SplunkDestinationConfiguration {
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    HECAcknowledgmentTimeoutInSeconds?: Value<number>;
    HECEndpoint: Value<string>;
    HECEndpointType: Value<string>;
    HECToken: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    RetryOptions?: SplunkRetryOptions;
    S3BackupMode?: Value<string>;
    S3Configuration: S3DestinationConfiguration;
    constructor(properties: SplunkDestinationConfiguration);
}
export declare class EncryptionConfiguration {
    KMSEncryptionConfig?: KMSEncryptionConfig;
    NoEncryptionConfig?: Value<string>;
    constructor(properties: EncryptionConfiguration);
}
export declare class CloudWatchLoggingOptions {
    Enabled?: Value<boolean>;
    LogGroupName?: Value<string>;
    LogStreamName?: Value<string>;
    constructor(properties: CloudWatchLoggingOptions);
}
export declare class InputFormatConfiguration {
    Deserializer: Deserializer;
    constructor(properties: InputFormatConfiguration);
}
export declare class ProcessingConfiguration {
    Enabled?: Value<boolean>;
    Processors?: List<Processor>;
    constructor(properties: ProcessingConfiguration);
}
export declare class BufferingHints {
    IntervalInSeconds: Value<number>;
    SizeInMBs: Value<number>;
    constructor(properties: BufferingHints);
}
export declare class ProcessorParameter {
    ParameterName: Value<string>;
    ParameterValue: Value<string>;
    constructor(properties: ProcessorParameter);
}
export declare class HiveJsonSerDe {
    TimestampFormats?: List<Value<string>>;
    constructor(properties: HiveJsonSerDe);
}
export declare class Processor {
    Parameters: List<ProcessorParameter>;
    Type: Value<string>;
    constructor(properties: Processor);
}
export declare class ElasticsearchRetryOptions {
    DurationInSeconds: Value<number>;
    constructor(properties: ElasticsearchRetryOptions);
}
export declare class DataFormatConversionConfiguration {
    Enabled: Value<boolean>;
    InputFormatConfiguration: InputFormatConfiguration;
    OutputFormatConfiguration: OutputFormatConfiguration;
    SchemaConfiguration: SchemaConfiguration;
    constructor(properties: DataFormatConversionConfiguration);
}
export declare class KMSEncryptionConfig {
    AWSKMSKeyARN: Value<string>;
    constructor(properties: KMSEncryptionConfig);
}
export declare class OutputFormatConfiguration {
    Serializer: Serializer;
    constructor(properties: OutputFormatConfiguration);
}
export declare class ElasticsearchDestinationConfiguration {
    BufferingHints: ElasticsearchBufferingHints;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    DomainARN: Value<string>;
    IndexName: Value<string>;
    IndexRotationPeriod: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    RetryOptions: ElasticsearchRetryOptions;
    RoleARN: Value<string>;
    S3BackupMode: Value<string>;
    S3Configuration: S3DestinationConfiguration;
    TypeName: Value<string>;
    constructor(properties: ElasticsearchDestinationConfiguration);
}
export declare class SchemaConfiguration {
    CatalogId: Value<string>;
    DatabaseName: Value<string>;
    Region: Value<string>;
    RoleARN: Value<string>;
    TableName: Value<string>;
    VersionId: Value<string>;
    constructor(properties: SchemaConfiguration);
}
export declare class SplunkRetryOptions {
    DurationInSeconds: Value<number>;
    constructor(properties: SplunkRetryOptions);
}
export declare class Deserializer {
    HiveJsonSerDe?: HiveJsonSerDe;
    OpenXJsonSerDe?: OpenXJsonSerDe;
    constructor(properties: Deserializer);
}
export declare class KinesisStreamSourceConfiguration {
    KinesisStreamARN: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: KinesisStreamSourceConfiguration);
}
export declare class ParquetSerDe {
    BlockSizeBytes?: Value<number>;
    Compression?: Value<string>;
    EnableDictionaryCompression?: Value<boolean>;
    MaxPaddingBytes?: Value<number>;
    PageSizeBytes?: Value<number>;
    WriterVersion?: Value<string>;
    constructor(properties: ParquetSerDe);
}
export declare class Serializer {
    OrcSerDe?: OrcSerDe;
    ParquetSerDe?: ParquetSerDe;
    constructor(properties: Serializer);
}
export declare class CopyCommand {
    CopyOptions?: Value<string>;
    DataTableColumns?: Value<string>;
    DataTableName: Value<string>;
    constructor(properties: CopyCommand);
}
export declare class OpenXJsonSerDe {
    CaseInsensitive?: Value<boolean>;
    ColumnToJsonKeyMappings?: {
        [key: string]: Value<string>;
    };
    ConvertDotsInJsonKeysToUnderscores?: Value<boolean>;
    constructor(properties: OpenXJsonSerDe);
}
export declare class S3DestinationConfiguration {
    BucketARN: Value<string>;
    BufferingHints: BufferingHints;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    CompressionFormat: Value<string>;
    EncryptionConfiguration?: EncryptionConfiguration;
    ErrorOutputPrefix?: Value<string>;
    Prefix?: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: S3DestinationConfiguration);
}
export declare class ExtendedS3DestinationConfiguration {
    BucketARN: Value<string>;
    BufferingHints: BufferingHints;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    CompressionFormat: Value<string>;
    DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
    EncryptionConfiguration?: EncryptionConfiguration;
    ErrorOutputPrefix?: Value<string>;
    Prefix?: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    RoleARN: Value<string>;
    S3BackupConfiguration?: S3DestinationConfiguration;
    S3BackupMode?: Value<string>;
    constructor(properties: ExtendedS3DestinationConfiguration);
}
export declare class RedshiftDestinationConfiguration {
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    ClusterJDBCURL: Value<string>;
    CopyCommand: CopyCommand;
    Password: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    RoleARN: Value<string>;
    S3Configuration: S3DestinationConfiguration;
    Username: Value<string>;
    constructor(properties: RedshiftDestinationConfiguration);
}
export interface DeliveryStreamProperties {
    DeliveryStreamName?: Value<string>;
    DeliveryStreamType?: Value<string>;
    ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
    ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;
    KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;
    RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
    S3DestinationConfiguration?: S3DestinationConfiguration;
    SplunkDestinationConfiguration?: SplunkDestinationConfiguration;
}
export default class DeliveryStream extends ResourceBase<DeliveryStreamProperties> {
    static OrcSerDe: typeof OrcSerDe;
    static ElasticsearchBufferingHints: typeof ElasticsearchBufferingHints;
    static SplunkDestinationConfiguration: typeof SplunkDestinationConfiguration;
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static CloudWatchLoggingOptions: typeof CloudWatchLoggingOptions;
    static InputFormatConfiguration: typeof InputFormatConfiguration;
    static ProcessingConfiguration: typeof ProcessingConfiguration;
    static BufferingHints: typeof BufferingHints;
    static ProcessorParameter: typeof ProcessorParameter;
    static HiveJsonSerDe: typeof HiveJsonSerDe;
    static Processor: typeof Processor;
    static ElasticsearchRetryOptions: typeof ElasticsearchRetryOptions;
    static DataFormatConversionConfiguration: typeof DataFormatConversionConfiguration;
    static KMSEncryptionConfig: typeof KMSEncryptionConfig;
    static OutputFormatConfiguration: typeof OutputFormatConfiguration;
    static ElasticsearchDestinationConfiguration: typeof ElasticsearchDestinationConfiguration;
    static SchemaConfiguration: typeof SchemaConfiguration;
    static SplunkRetryOptions: typeof SplunkRetryOptions;
    static Deserializer: typeof Deserializer;
    static KinesisStreamSourceConfiguration: typeof KinesisStreamSourceConfiguration;
    static ParquetSerDe: typeof ParquetSerDe;
    static Serializer: typeof Serializer;
    static CopyCommand: typeof CopyCommand;
    static OpenXJsonSerDe: typeof OpenXJsonSerDe;
    static S3DestinationConfiguration: typeof S3DestinationConfiguration;
    static ExtendedS3DestinationConfiguration: typeof ExtendedS3DestinationConfiguration;
    static RedshiftDestinationConfiguration: typeof RedshiftDestinationConfiguration;
    constructor(properties?: DeliveryStreamProperties);
}
