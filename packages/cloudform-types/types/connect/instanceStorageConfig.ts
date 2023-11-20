/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class EncryptionConfig {
    EncryptionType!: Value<string>
    KeyId!: Value<string>

    constructor(properties: EncryptionConfig) {
        Object.assign(this, properties)
    }
}

export class KinesisFirehoseConfig {
    FirehoseArn!: Value<string>

    constructor(properties: KinesisFirehoseConfig) {
        Object.assign(this, properties)
    }
}

export class KinesisStreamConfig {
    StreamArn!: Value<string>

    constructor(properties: KinesisStreamConfig) {
        Object.assign(this, properties)
    }
}

export class KinesisVideoStreamConfig {
    Prefix!: Value<string>
    RetentionPeriodHours!: Value<number>
    EncryptionConfig?: EncryptionConfig

    constructor(properties: KinesisVideoStreamConfig) {
        Object.assign(this, properties)
    }
}

export class S3Config {
    BucketName!: Value<string>
    BucketPrefix!: Value<string>
    EncryptionConfig?: EncryptionConfig

    constructor(properties: S3Config) {
        Object.assign(this, properties)
    }
}

export interface InstanceStorageConfigProperties {
    KinesisStreamConfig?: KinesisStreamConfig
    S3Config?: S3Config
    StorageType: Value<string>
    InstanceArn: Value<string>
    ResourceType: Value<string>
    KinesisVideoStreamConfig?: KinesisVideoStreamConfig
    KinesisFirehoseConfig?: KinesisFirehoseConfig
}

export default class InstanceStorageConfig extends ResourceBase<InstanceStorageConfigProperties> {
    static EncryptionConfig = EncryptionConfig
    static KinesisFirehoseConfig = KinesisFirehoseConfig
    static KinesisStreamConfig = KinesisStreamConfig
    static KinesisVideoStreamConfig = KinesisVideoStreamConfig
    static S3Config = S3Config

    constructor(properties: InstanceStorageConfigProperties) {
        super('AWS::Connect::InstanceStorageConfig', properties)
    }
}
