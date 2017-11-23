"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
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
class CacheBehavior {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CacheBehavior = CacheBehavior;
class LegacyCustomOrigin {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LegacyCustomOrigin = LegacyCustomOrigin;
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
class DistributionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DistributionConfig = DistributionConfig;
class LegacyS3Origin {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LegacyS3Origin = LegacyS3Origin;
class OriginCustomHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OriginCustomHeader = OriginCustomHeader;
class Distribution extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CloudFront::Distribution', properties);
    }
}
exports.default = Distribution;
