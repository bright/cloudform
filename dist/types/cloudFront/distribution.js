"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Cookies extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::Cookies', properties, dependsOn);
    }
}
exports.Cookies = Cookies;
class LambdaFunctionAssociation extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::LambdaFunctionAssociation', properties, dependsOn);
    }
}
exports.LambdaFunctionAssociation = LambdaFunctionAssociation;
class CustomOriginConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::CustomOriginConfig', properties, dependsOn);
    }
}
exports.CustomOriginConfig = CustomOriginConfig;
class ForwardedValues extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::ForwardedValues', properties, dependsOn);
    }
}
exports.ForwardedValues = ForwardedValues;
class CacheBehavior extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::CacheBehavior', properties, dependsOn);
    }
}
exports.CacheBehavior = CacheBehavior;
class LegacyCustomOrigin extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::LegacyCustomOrigin', properties, dependsOn);
    }
}
exports.LegacyCustomOrigin = LegacyCustomOrigin;
class DefaultCacheBehavior extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::DefaultCacheBehavior', properties, dependsOn);
    }
}
exports.DefaultCacheBehavior = DefaultCacheBehavior;
class Restrictions extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::Restrictions', properties, dependsOn);
    }
}
exports.Restrictions = Restrictions;
class Origin extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::Origin', properties, dependsOn);
    }
}
exports.Origin = Origin;
class GeoRestriction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::GeoRestriction', properties, dependsOn);
    }
}
exports.GeoRestriction = GeoRestriction;
class ViewerCertificate extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::ViewerCertificate', properties, dependsOn);
    }
}
exports.ViewerCertificate = ViewerCertificate;
class S3OriginConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::S3OriginConfig', properties, dependsOn);
    }
}
exports.S3OriginConfig = S3OriginConfig;
class CustomErrorResponse extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::CustomErrorResponse', properties, dependsOn);
    }
}
exports.CustomErrorResponse = CustomErrorResponse;
class Logging extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::Logging', properties, dependsOn);
    }
}
exports.Logging = Logging;
class DistributionConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::DistributionConfig', properties, dependsOn);
    }
}
exports.DistributionConfig = DistributionConfig;
class LegacyS3Origin extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::LegacyS3Origin', properties, dependsOn);
    }
}
exports.LegacyS3Origin = LegacyS3Origin;
class OriginCustomHeader extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::OriginCustomHeader', properties, dependsOn);
    }
}
exports.OriginCustomHeader = OriginCustomHeader;
class Distribution extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::Distribution', properties, dependsOn);
    }
}
exports.default = Distribution;
