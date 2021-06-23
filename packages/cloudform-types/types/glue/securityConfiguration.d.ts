import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EncryptionConfiguration {
    S3Encryptions?: S3Encryptions;
    CloudWatchEncryption?: CloudWatchEncryption;
    JobBookmarksEncryption?: JobBookmarksEncryption;
    constructor(properties: EncryptionConfiguration);
}
export declare class JobBookmarksEncryption {
    KmsKeyArn?: Value<string>;
    JobBookmarksEncryptionMode?: Value<string>;
    constructor(properties: JobBookmarksEncryption);
}
export declare type S3Encryptions = List<S3Encryption>;
export declare class S3Encryption {
    KmsKeyArn?: Value<string>;
    S3EncryptionMode?: Value<string>;
    constructor(properties: S3Encryption);
}
export declare class CloudWatchEncryption {
    KmsKeyArn?: Value<string>;
    CloudWatchEncryptionMode?: Value<string>;
    constructor(properties: CloudWatchEncryption);
}
export interface SecurityConfigurationProperties {
    EncryptionConfiguration: EncryptionConfiguration;
    Name: Value<string>;
}
export default class SecurityConfiguration extends ResourceBase<SecurityConfigurationProperties> {
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static JobBookmarksEncryption: typeof JobBookmarksEncryption;
    static S3Encryption: typeof S3Encryption;
    static CloudWatchEncryption: typeof CloudWatchEncryption;
    constructor(properties: SecurityConfigurationProperties);
}
