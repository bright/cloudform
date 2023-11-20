"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentDeliveryConfiguration = exports.SecretsManagerAccessTokenConfiguration = exports.HttpConfiguration = exports.DefaultSegmentDeliveryConfiguration = exports.AccessConfiguration = void 0;
const resource_1 = require("../resource");
class AccessConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessConfiguration = AccessConfiguration;
class DefaultSegmentDeliveryConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultSegmentDeliveryConfiguration = DefaultSegmentDeliveryConfiguration;
class HttpConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpConfiguration = HttpConfiguration;
class SecretsManagerAccessTokenConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SecretsManagerAccessTokenConfiguration = SecretsManagerAccessTokenConfiguration;
class SegmentDeliveryConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SegmentDeliveryConfiguration = SegmentDeliveryConfiguration;
class SourceLocation extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MediaTailor::SourceLocation', properties);
    }
}
exports.default = SourceLocation;
SourceLocation.AccessConfiguration = AccessConfiguration;
SourceLocation.DefaultSegmentDeliveryConfiguration = DefaultSegmentDeliveryConfiguration;
SourceLocation.HttpConfiguration = HttpConfiguration;
SourceLocation.SecretsManagerAccessTokenConfiguration = SecretsManagerAccessTokenConfiguration;
SourceLocation.SegmentDeliveryConfiguration = SegmentDeliveryConfiguration;
