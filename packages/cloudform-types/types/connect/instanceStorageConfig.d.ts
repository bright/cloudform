import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class EncryptionConfig {
    EncryptionType: Value<string>;
    KeyId: Value<string>;
    constructor(properties: EncryptionConfig);
}
export declare class KinesisFirehoseConfig {
    FirehoseArn: Value<string>;
    constructor(properties: KinesisFirehoseConfig);
}
export declare class KinesisStreamConfig {
    StreamArn: Value<string>;
    constructor(properties: KinesisStreamConfig);
}
export declare class KinesisVideoStreamConfig {
    Prefix: Value<string>;
    RetentionPeriodHours: Value<number>;
    EncryptionConfig?: EncryptionConfig;
    constructor(properties: KinesisVideoStreamConfig);
}
export declare class S3Config {
    BucketName: Value<string>;
    BucketPrefix: Value<string>;
    EncryptionConfig?: EncryptionConfig;
    constructor(properties: S3Config);
}
export interface InstanceStorageConfigProperties {
    KinesisStreamConfig?: KinesisStreamConfig;
    S3Config?: S3Config;
    StorageType: Value<string>;
    InstanceArn: Value<string>;
    ResourceType: Value<string>;
    KinesisVideoStreamConfig?: KinesisVideoStreamConfig;
    KinesisFirehoseConfig?: KinesisFirehoseConfig;
}
export default class InstanceStorageConfig extends ResourceBase<InstanceStorageConfigProperties> {
    static EncryptionConfig: typeof EncryptionConfig;
    static KinesisFirehoseConfig: typeof KinesisFirehoseConfig;
    static KinesisStreamConfig: typeof KinesisStreamConfig;
    static KinesisVideoStreamConfig: typeof KinesisVideoStreamConfig;
    static S3Config: typeof S3Config;
    constructor(properties: InstanceStorageConfigProperties);
}
