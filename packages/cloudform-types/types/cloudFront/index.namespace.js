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
exports.CloudFront = void 0;
const cachePolicy_1 = require("./cachePolicy");
const cloudFrontOriginAccessIdentity_1 = require("./cloudFrontOriginAccessIdentity");
const continuousDeploymentPolicy_1 = require("./continuousDeploymentPolicy");
const distribution_1 = require("./distribution");
const function_1 = require("./function");
const keyGroup_1 = require("./keyGroup");
const monitoringSubscription_1 = require("./monitoringSubscription");
const originAccessControl_1 = require("./originAccessControl");
const originRequestPolicy_1 = require("./originRequestPolicy");
const publicKey_1 = require("./publicKey");
const realtimeLogConfig_1 = require("./realtimeLogConfig");
const responseHeadersPolicy_1 = require("./responseHeadersPolicy");
const streamingDistribution_1 = require("./streamingDistribution");
var CloudFront;
(function (CloudFront) {
    CloudFront.CachePolicy = cachePolicy_1.default;
    CloudFront.CloudFrontOriginAccessIdentity = cloudFrontOriginAccessIdentity_1.default;
    CloudFront.ContinuousDeploymentPolicy = continuousDeploymentPolicy_1.default;
    CloudFront.Distribution = distribution_1.default;
    CloudFront.Function = function_1.default;
    CloudFront.KeyGroup = keyGroup_1.default;
    CloudFront.MonitoringSubscription = monitoringSubscription_1.default;
    CloudFront.OriginAccessControl = originAccessControl_1.default;
    CloudFront.OriginRequestPolicy = originRequestPolicy_1.default;
    CloudFront.PublicKey = publicKey_1.default;
    CloudFront.RealtimeLogConfig = realtimeLogConfig_1.default;
    CloudFront.ResponseHeadersPolicy = responseHeadersPolicy_1.default;
    CloudFront.StreamingDistribution = streamingDistribution_1.default;
})(CloudFront = exports.CloudFront || (exports.CloudFront = {}));
