"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CaptureContentTypeHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptureContentTypeHeader = CaptureContentTypeHeader;
class CaptureOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptureOption = CaptureOption;
class ProductionVariant {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProductionVariant = ProductionVariant;
class DataCaptureConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataCaptureConfig = DataCaptureConfig;
class EndpointConfig extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::EndpointConfig', properties);
    }
}
exports.default = EndpointConfig;
EndpointConfig.CaptureContentTypeHeader = CaptureContentTypeHeader;
EndpointConfig.CaptureOption = CaptureOption;
EndpointConfig.ProductionVariant = ProductionVariant;
EndpointConfig.DataCaptureConfig = DataCaptureConfig;
