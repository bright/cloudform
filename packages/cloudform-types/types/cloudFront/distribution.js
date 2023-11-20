"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewerCertificate = exports.StatusCodes = exports.S3OriginConfig = exports.Restrictions = exports.OriginShield = exports.OriginGroups = exports.OriginGroupMembers = exports.OriginGroupMember = exports.OriginGroupFailoverCriteria = exports.OriginGroup = exports.OriginCustomHeader = exports.Origin = exports.Logging = exports.LegacyS3Origin = exports.LegacyCustomOrigin = exports.LambdaFunctionAssociation = exports.GeoRestriction = exports.FunctionAssociation = exports.ForwardedValues = exports.DistributionConfig = exports.DefaultCacheBehavior = exports.CustomOriginConfig = exports.CustomErrorResponse = exports.Cookies = exports.CacheBehavior = void 0;
const resource_1 = require("../resource");
class CacheBehavior {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CacheBehavior = CacheBehavior;
class Cookies {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Cookies = Cookies;
class CustomErrorResponse {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomErrorResponse = CustomErrorResponse;
class CustomOriginConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomOriginConfig = CustomOriginConfig;
class DefaultCacheBehavior {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultCacheBehavior = DefaultCacheBehavior;
class DistributionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DistributionConfig = DistributionConfig;
class ForwardedValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ForwardedValues = ForwardedValues;
class FunctionAssociation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FunctionAssociation = FunctionAssociation;
class GeoRestriction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeoRestriction = GeoRestriction;
class LambdaFunctionAssociation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaFunctionAssociation = LambdaFunctionAssociation;
class LegacyCustomOrigin {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LegacyCustomOrigin = LegacyCustomOrigin;
class LegacyS3Origin {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LegacyS3Origin = LegacyS3Origin;
class Logging {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Logging = Logging;
class Origin {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Origin = Origin;
class OriginCustomHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OriginCustomHeader = OriginCustomHeader;
class OriginGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OriginGroup = OriginGroup;
class OriginGroupFailoverCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OriginGroupFailoverCriteria = OriginGroupFailoverCriteria;
class OriginGroupMember {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OriginGroupMember = OriginGroupMember;
class OriginGroupMembers {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OriginGroupMembers = OriginGroupMembers;
class OriginGroups {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OriginGroups = OriginGroups;
class OriginShield {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OriginShield = OriginShield;
class Restrictions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Restrictions = Restrictions;
class S3OriginConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3OriginConfig = S3OriginConfig;
class StatusCodes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatusCodes = StatusCodes;
class ViewerCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ViewerCertificate = ViewerCertificate;
class Distribution extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CloudFront::Distribution', properties);
    }
}
exports.default = Distribution;
Distribution.CacheBehavior = CacheBehavior;
Distribution.Cookies = Cookies;
Distribution.CustomErrorResponse = CustomErrorResponse;
Distribution.CustomOriginConfig = CustomOriginConfig;
Distribution.DefaultCacheBehavior = DefaultCacheBehavior;
Distribution.DistributionConfig = DistributionConfig;
Distribution.ForwardedValues = ForwardedValues;
Distribution.FunctionAssociation = FunctionAssociation;
Distribution.GeoRestriction = GeoRestriction;
Distribution.LambdaFunctionAssociation = LambdaFunctionAssociation;
Distribution.LegacyCustomOrigin = LegacyCustomOrigin;
Distribution.LegacyS3Origin = LegacyS3Origin;
Distribution.Logging = Logging;
Distribution.Origin = Origin;
Distribution.OriginCustomHeader = OriginCustomHeader;
Distribution.OriginGroup = OriginGroup;
Distribution.OriginGroupFailoverCriteria = OriginGroupFailoverCriteria;
Distribution.OriginGroupMember = OriginGroupMember;
Distribution.OriginGroupMembers = OriginGroupMembers;
Distribution.OriginGroups = OriginGroups;
Distribution.OriginShield = OriginShield;
Distribution.Restrictions = Restrictions;
Distribution.S3OriginConfig = S3OriginConfig;
Distribution.StatusCodes = StatusCodes;
Distribution.ViewerCertificate = ViewerCertificate;
