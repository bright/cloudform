import { ResourceBase } from '../resource';
import { Value } from '../internal';
import BufferingHints from './bufferingHints';
import EncryptionConfiguration from './encryptionConfiguration';
import CloudWatchLoggingOptions from './cloudWatchLoggingOptions';
export declare type CompressionFormat = "*" | "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy";
export interface S3ConfigurationProperties {
    BucketARN: Value<string>;
    BufferingHints: BufferingHints;
    CompressionFormat?: Value<CompressionFormat>;
    EncryptionConfiguration?: EncryptionConfiguration;
    Prefix?: Value<string>;
    RoleARN: Value<string>;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export default class S3Configuration extends ResourceBase {
    constructor(properties: S3ConfigurationProperties, dependsOn?: Value<string>);
}
