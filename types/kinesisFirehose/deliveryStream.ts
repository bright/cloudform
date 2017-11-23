/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface ElasticsearchDestinationConfigurationProperties {
    BufferingHints: ElasticsearchBufferingHints
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    DomainARN: Value<string>
    IndexName: Value<string>
    IndexRotationPeriod: Value<string>
    ProcessingConfiguration?: ProcessingConfiguration
    RetryOptions: ElasticsearchRetryOptions
    RoleARN: Value<string>
    S3BackupMode: Value<string>
    S3Configuration: S3DestinationConfiguration
    TypeName: Value<string>
}

export class ElasticsearchDestinationConfiguration extends ResourceBase {
    constructor(properties: ElasticsearchDestinationConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::ElasticsearchDestinationConfiguration', properties, dependsOn)
    }
}

export interface ElasticsearchBufferingHintsProperties {
    IntervalInSeconds: Value<number>
    SizeInMBs: Value<number>
}

export class ElasticsearchBufferingHints extends ResourceBase {
    constructor(properties: ElasticsearchBufferingHintsProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::ElasticsearchBufferingHints', properties, dependsOn)
    }
}

export interface EncryptionConfigurationProperties {
    KMSEncryptionConfig?: KMSEncryptionConfig
    NoEncryptionConfig?: Value<string>
}

export class EncryptionConfiguration extends ResourceBase {
    constructor(properties: EncryptionConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::EncryptionConfiguration', properties, dependsOn)
    }
}

export interface CloudWatchLoggingOptionsProperties {
    Enabled?: Value<boolean>
    LogGroupName?: Value<string>
    LogStreamName?: Value<string>
}

export class CloudWatchLoggingOptions extends ResourceBase {
    constructor(properties: CloudWatchLoggingOptionsProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::CloudWatchLoggingOptions', properties, dependsOn)
    }
}

export interface ProcessingConfigurationProperties {
    Enabled: Value<boolean>
    Processors: Processor[]
}

export class ProcessingConfiguration extends ResourceBase {
    constructor(properties: ProcessingConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::ProcessingConfiguration', properties, dependsOn)
    }
}

export interface BufferingHintsProperties {
    IntervalInSeconds: Value<number>
    SizeInMBs: Value<number>
}

export class BufferingHints extends ResourceBase {
    constructor(properties: BufferingHintsProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::BufferingHints', properties, dependsOn)
    }
}

export interface KinesisStreamSourceConfigurationProperties {
    KinesisStreamARN: Value<string>
    RoleARN: Value<string>
}

export class KinesisStreamSourceConfiguration extends ResourceBase {
    constructor(properties: KinesisStreamSourceConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::KinesisStreamSourceConfiguration', properties, dependsOn)
    }
}

export interface ProcessorParameterProperties {
    ParameterName: Value<string>
    ParameterValue: Value<string>
}

export class ProcessorParameter extends ResourceBase {
    constructor(properties: ProcessorParameterProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::ProcessorParameter', properties, dependsOn)
    }
}

export interface ProcessorProperties {
    Parameters: ProcessorParameter[]
    Type: Value<string>
}

export class Processor extends ResourceBase {
    constructor(properties: ProcessorProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::Processor', properties, dependsOn)
    }
}

export interface CopyCommandProperties {
    CopyOptions?: Value<string>
    DataTableColumns?: Value<string>
    DataTableName: Value<string>
}

export class CopyCommand extends ResourceBase {
    constructor(properties: CopyCommandProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::CopyCommand', properties, dependsOn)
    }
}

export interface S3DestinationConfigurationProperties {
    BucketARN: Value<string>
    BufferingHints: BufferingHints
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    CompressionFormat: Value<string>
    EncryptionConfiguration?: EncryptionConfiguration
    Prefix?: Value<string>
    RoleARN: Value<string>
}

export class S3DestinationConfiguration extends ResourceBase {
    constructor(properties: S3DestinationConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::S3DestinationConfiguration', properties, dependsOn)
    }
}

export interface ElasticsearchRetryOptionsProperties {
    DurationInSeconds: Value<number>
}

export class ElasticsearchRetryOptions extends ResourceBase {
    constructor(properties: ElasticsearchRetryOptionsProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::ElasticsearchRetryOptions', properties, dependsOn)
    }
}

export interface KMSEncryptionConfigProperties {
    AWSKMSKeyARN: Value<string>
}

export class KMSEncryptionConfig extends ResourceBase {
    constructor(properties: KMSEncryptionConfigProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::KMSEncryptionConfig', properties, dependsOn)
    }
}

export interface ExtendedS3DestinationConfigurationProperties {
    BucketARN: Value<string>
    BufferingHints: BufferingHints
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    CompressionFormat: Value<string>
    EncryptionConfiguration?: EncryptionConfiguration
    Prefix: Value<string>
    ProcessingConfiguration?: ProcessingConfiguration
    RoleARN: Value<string>
    S3BackupConfiguration?: S3DestinationConfiguration
    S3BackupMode?: Value<string>
}

export class ExtendedS3DestinationConfiguration extends ResourceBase {
    constructor(properties: ExtendedS3DestinationConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::ExtendedS3DestinationConfiguration', properties, dependsOn)
    }
}

export interface RedshiftDestinationConfigurationProperties {
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    ClusterJDBCURL: Value<string>
    CopyCommand: CopyCommand
    Password: Value<string>
    ProcessingConfiguration?: ProcessingConfiguration
    RoleARN: Value<string>
    S3Configuration: S3DestinationConfiguration
    Username: Value<string>
}

export class RedshiftDestinationConfiguration extends ResourceBase {
    constructor(properties: RedshiftDestinationConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::RedshiftDestinationConfiguration', properties, dependsOn)
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
}

export default class DeliveryStream extends ResourceBase {
    constructor(properties: DeliveryStreamProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::DeliveryStream', properties, dependsOn)
    }
}