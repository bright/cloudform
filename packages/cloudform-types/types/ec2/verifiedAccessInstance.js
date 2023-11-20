"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifiedAccessTrustProvider = exports.VerifiedAccessLogs = exports.S3 = exports.KinesisDataFirehose = exports.CloudWatchLogs = void 0;
const resource_1 = require("../resource");
class CloudWatchLogs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLogs = CloudWatchLogs;
class KinesisDataFirehose {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisDataFirehose = KinesisDataFirehose;
class S3 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3 = S3;
class VerifiedAccessLogs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VerifiedAccessLogs = VerifiedAccessLogs;
class VerifiedAccessTrustProvider {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VerifiedAccessTrustProvider = VerifiedAccessTrustProvider;
class VerifiedAccessInstance extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EC2::VerifiedAccessInstance', properties || {});
    }
}
exports.default = VerifiedAccessInstance;
VerifiedAccessInstance.CloudWatchLogs = CloudWatchLogs;
VerifiedAccessInstance.KinesisDataFirehose = KinesisDataFirehose;
VerifiedAccessInstance.S3 = S3;
VerifiedAccessInstance.VerifiedAccessLogs = VerifiedAccessLogs;
VerifiedAccessInstance.VerifiedAccessTrustProvider = VerifiedAccessTrustProvider;
