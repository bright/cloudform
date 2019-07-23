"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Cookies {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Cookies = Cookies;
class LambdaFunctionAssociation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaFunctionAssociation = LambdaFunctionAssociation;
class CacheBehavior {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CacheBehavior = CacheBehavior;
class DefaultCacheBehavior {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultCacheBehavior = DefaultCacheBehavior;
class Restrictions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Restrictions = Restrictions;
class Origin {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Origin = Origin;
class DistributionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DistributionConfig = DistributionConfig;
class OriginCustomHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OriginCustomHeader = OriginCustomHeader;
class CustomOriginConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomOriginConfig = CustomOriginConfig;
class ForwardedValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ForwardedValues = ForwardedValues;
class GeoRestriction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeoRestriction = GeoRestriction;
class ViewerCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ViewerCertificate = ViewerCertificate;
class S3OriginConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3OriginConfig = S3OriginConfig;
class CustomErrorResponse {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomErrorResponse = CustomErrorResponse;
class Logging {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Logging = Logging;
class Distribution extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CloudFront::Distribution', properties);
    }
}
Distribution.Cookies = Cookies;
Distribution.LambdaFunctionAssociation = LambdaFunctionAssociation;
Distribution.CacheBehavior = CacheBehavior;
Distribution.DefaultCacheBehavior = DefaultCacheBehavior;
Distribution.Restrictions = Restrictions;
Distribution.Origin = Origin;
Distribution.DistributionConfig = DistributionConfig;
Distribution.OriginCustomHeader = OriginCustomHeader;
Distribution.CustomOriginConfig = CustomOriginConfig;
Distribution.ForwardedValues = ForwardedValues;
Distribution.GeoRestriction = GeoRestriction;
Distribution.ViewerCertificate = ViewerCertificate;
Distribution.S3OriginConfig = S3OriginConfig;
Distribution.CustomErrorResponse = CustomErrorResponse;
Distribution.Logging = Logging;
exports.default = Distribution;
