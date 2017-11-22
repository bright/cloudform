"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CloudFrontOriginAccessIdentityConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::CloudFrontOriginAccessIdentityConfig', properties, dependsOn);
    }
}
exports.CloudFrontOriginAccessIdentityConfig = CloudFrontOriginAccessIdentityConfig;
class CloudFrontOriginAccessIdentity extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::CloudFrontOriginAccessIdentity', properties, dependsOn);
    }
}
exports.default = CloudFrontOriginAccessIdentity;
