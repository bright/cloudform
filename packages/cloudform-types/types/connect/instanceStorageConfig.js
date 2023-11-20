"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Config = exports.KinesisVideoStreamConfig = exports.KinesisStreamConfig = exports.KinesisFirehoseConfig = exports.EncryptionConfig = void 0;
const resource_1 = require("../resource");
class EncryptionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionConfig = EncryptionConfig;
class KinesisFirehoseConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisFirehoseConfig = KinesisFirehoseConfig;
class KinesisStreamConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisStreamConfig = KinesisStreamConfig;
class KinesisVideoStreamConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisVideoStreamConfig = KinesisVideoStreamConfig;
class S3Config {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Config = S3Config;
class InstanceStorageConfig extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Connect::InstanceStorageConfig', properties);
    }
}
exports.default = InstanceStorageConfig;
InstanceStorageConfig.EncryptionConfig = EncryptionConfig;
InstanceStorageConfig.KinesisFirehoseConfig = KinesisFirehoseConfig;
InstanceStorageConfig.KinesisStreamConfig = KinesisStreamConfig;
InstanceStorageConfig.KinesisVideoStreamConfig = KinesisVideoStreamConfig;
InstanceStorageConfig.S3Config = S3Config;
