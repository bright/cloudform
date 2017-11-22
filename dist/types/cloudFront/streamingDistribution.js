"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class TrustedSigners extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::TrustedSigners', properties, dependsOn);
    }
}
exports.TrustedSigners = TrustedSigners;
class S3Origin extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::S3Origin', properties, dependsOn);
    }
}
exports.S3Origin = S3Origin;
class Logging extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::Logging', properties, dependsOn);
    }
}
exports.Logging = Logging;
class StreamingDistributionConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::StreamingDistributionConfig', properties, dependsOn);
    }
}
exports.StreamingDistributionConfig = StreamingDistributionConfig;
class StreamingDistribution extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::StreamingDistribution', properties, dependsOn);
    }
}
exports.default = StreamingDistribution;
