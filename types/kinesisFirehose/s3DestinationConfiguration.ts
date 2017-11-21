import {ResourceBase} from '../resource'
import {Value} from '../internal'
import BufferingHints from './bufferingHints'
import EncryptionConfiguration from './encryptionConfiguration'
import CloudWatchLoggingOptions from './cloudWatchLoggingOptions'

export type CompressionFormat = "*" | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy"

export interface S3DestinationConfigurationProperties {
    BucketARN: Value<string>
    BufferingHints: BufferingHints
    CompressionFormat?: Value<CompressionFormat>
    EncryptionConfiguration?: EncryptionConfiguration
    Prefix?: Value<string>
    RoleARN: Value<string>
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
}

export default class S3DestinationConfiguration extends ResourceBase {
    constructor(properties: S3DestinationConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::S3DestinationConfiguration', properties, dependsOn)
    }
}