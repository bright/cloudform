import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ElasticsearchDestinationConfigurationProperties {
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
}
export declare class ElasticsearchDestinationConfiguration extends ResourceBase {
    constructor(properties: ElasticsearchDestinationConfigurationProperties, dependsOn?: Value<string>);
}
export interface ElasticsearchBufferingHintsProperties {
    IntervalInSeconds: Value<number>;
    SizeInMBs: Value<number>;
}
export declare class ElasticsearchBufferingHints extends ResourceBase {
    constructor(properties: ElasticsearchBufferingHintsProperties, dependsOn?: Value<string>);
}
export interface EncryptionConfigurationProperties {
    KMSEncryptionConfig?: KMSEncryptionConfig;
    NoEncryptionConfig?: Value<string>;
}
export declare class EncryptionConfiguration extends ResourceBase {
    constructor(properties: EncryptionConfigurationProperties, dependsOn?: Value<string>);
}
export interface CloudWatchLoggingOptionsProperties {
    Enabled?: Value<boolean>;
    LogGroupName?: Value<string>;
    LogStreamName?: Value<string>;
}
export declare class CloudWatchLoggingOptions extends ResourceBase {
    constructor(properties: CloudWatchLoggingOptionsProperties, dependsOn?: Value<string>);
}
export interface ProcessingConfigurationProperties {
    Enabled: Value<boolean>;
    Processors: Processor[];
}
export declare class ProcessingConfiguration extends ResourceBase {
    constructor(properties: ProcessingConfigurationProperties, dependsOn?: Value<string>);
}
export interface BufferingHintsProperties {
    IntervalInSeconds: Value<number>;
    SizeInMBs: Value<number>;
}
export declare class BufferingHints extends ResourceBase {
    constructor(properties: BufferingHintsProperties, dependsOn?: Value<string>);
}
export interface KinesisStreamSourceConfigurationProperties {
    KinesisStreamARN: Value<string>;
    RoleARN: Value<string>;
}
export declare class KinesisStreamSourceConfiguration extends ResourceBase {
    constructor(properties: KinesisStreamSourceConfigurationProperties, dependsOn?: Value<string>);
}
export interface ProcessorParameterProperties {
    ParameterName: Value<string>;
    ParameterValue: Value<string>;
}
export declare class ProcessorParameter extends ResourceBase {
    constructor(properties: ProcessorParameterProperties, dependsOn?: Value<string>);
}
export interface ProcessorProperties {
    Parameters: ProcessorParameter[];
    Type: Value<string>;
}
export declare class Processor extends ResourceBase {
    constructor(properties: ProcessorProperties, dependsOn?: Value<string>);
}
export interface CopyCommandProperties {
    CopyOptions?: Value<string>;
    DataTableColumns?: Value<string>;
    DataTableName: Value<string>;
}
export declare class CopyCommand extends ResourceBase {
    constructor(properties: CopyCommandProperties, dependsOn?: Value<string>);
}
export interface S3DestinationConfigurationProperties {
    BucketARN: Value<string>;
    BufferingHints: BufferingHints;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    CompressionFormat: Value<string>;
    EncryptionConfiguration?: EncryptionConfiguration;
    Prefix?: Value<string>;
    RoleARN: Value<string>;
}
export declare class S3DestinationConfiguration extends ResourceBase {
    constructor(properties: S3DestinationConfigurationProperties, dependsOn?: Value<string>);
}
export interface ElasticsearchRetryOptionsProperties {
    DurationInSeconds: Value<number>;
}
export declare class ElasticsearchRetryOptions extends ResourceBase {
    constructor(properties: ElasticsearchRetryOptionsProperties, dependsOn?: Value<string>);
}
export interface KMSEncryptionConfigProperties {
    AWSKMSKeyARN: Value<string>;
}
export declare class KMSEncryptionConfig extends ResourceBase {
    constructor(properties: KMSEncryptionConfigProperties, dependsOn?: Value<string>);
}
export interface ExtendedS3DestinationConfigurationProperties {
    BucketARN: Value<string>;
    BufferingHints: BufferingHints;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    CompressionFormat: Value<string>;
    EncryptionConfiguration?: EncryptionConfiguration;
    Prefix: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    RoleARN: Value<string>;
    S3BackupConfiguration?: S3DestinationConfiguration;
    S3BackupMode?: Value<string>;
}
export declare class ExtendedS3DestinationConfiguration extends ResourceBase {
    constructor(properties: ExtendedS3DestinationConfigurationProperties, dependsOn?: Value<string>);
}
export interface RedshiftDestinationConfigurationProperties {
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    ClusterJDBCURL: Value<string>;
    CopyCommand: CopyCommand;
    Password: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    RoleARN: Value<string>;
    S3Configuration: S3DestinationConfiguration;
    Username: Value<string>;
}
export declare class RedshiftDestinationConfiguration extends ResourceBase {
    constructor(properties: RedshiftDestinationConfigurationProperties, dependsOn?: Value<string>);
}
export interface DeliveryStreamProperties {
    DeliveryStreamName?: Value<string>;
    DeliveryStreamType?: Value<string>;
    ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
    ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;
    KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;
    RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
    S3DestinationConfiguration?: S3DestinationConfiguration;
}
export default class DeliveryStream extends ResourceBase {
    constructor(properties: DeliveryStreamProperties, dependsOn?: Value<string>);
}
