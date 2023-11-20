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
exports.ServerlessConfig = exports.ProductionVariant = exports.ExplainerConfig = exports.DataCaptureConfig = exports.ClarifyTextConfig = exports.ClarifyShapConfig = exports.ClarifyShapBaselineConfig = exports.ClarifyInferenceConfig = exports.ClarifyExplainerConfig = exports.CaptureOption = exports.CaptureContentTypeHeader = exports.AsyncInferenceOutputConfig = exports.AsyncInferenceNotificationConfig = exports.AsyncInferenceConfig = exports.AsyncInferenceClientConfig = void 0;
const resource_1 = require("../resource");
class AsyncInferenceClientConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AsyncInferenceClientConfig = AsyncInferenceClientConfig;
class AsyncInferenceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AsyncInferenceConfig = AsyncInferenceConfig;
class AsyncInferenceNotificationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AsyncInferenceNotificationConfig = AsyncInferenceNotificationConfig;
class AsyncInferenceOutputConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AsyncInferenceOutputConfig = AsyncInferenceOutputConfig;
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
class ClarifyExplainerConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClarifyExplainerConfig = ClarifyExplainerConfig;
class ClarifyInferenceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClarifyInferenceConfig = ClarifyInferenceConfig;
class ClarifyShapBaselineConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClarifyShapBaselineConfig = ClarifyShapBaselineConfig;
class ClarifyShapConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClarifyShapConfig = ClarifyShapConfig;
class ClarifyTextConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClarifyTextConfig = ClarifyTextConfig;
class DataCaptureConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataCaptureConfig = DataCaptureConfig;
class ExplainerConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExplainerConfig = ExplainerConfig;
class ProductionVariant {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProductionVariant = ProductionVariant;
class ServerlessConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServerlessConfig = ServerlessConfig;
class EndpointConfig extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::EndpointConfig', properties);
    }
}
exports.default = EndpointConfig;
EndpointConfig.AsyncInferenceClientConfig = AsyncInferenceClientConfig;
EndpointConfig.AsyncInferenceConfig = AsyncInferenceConfig;
EndpointConfig.AsyncInferenceNotificationConfig = AsyncInferenceNotificationConfig;
EndpointConfig.AsyncInferenceOutputConfig = AsyncInferenceOutputConfig;
EndpointConfig.CaptureContentTypeHeader = CaptureContentTypeHeader;
EndpointConfig.CaptureOption = CaptureOption;
EndpointConfig.ClarifyExplainerConfig = ClarifyExplainerConfig;
EndpointConfig.ClarifyInferenceConfig = ClarifyInferenceConfig;
EndpointConfig.ClarifyShapBaselineConfig = ClarifyShapBaselineConfig;
EndpointConfig.ClarifyShapConfig = ClarifyShapConfig;
EndpointConfig.ClarifyTextConfig = ClarifyTextConfig;
EndpointConfig.DataCaptureConfig = DataCaptureConfig;
EndpointConfig.ExplainerConfig = ExplainerConfig;
EndpointConfig.ProductionVariant = ProductionVariant;
EndpointConfig.ServerlessConfig = ServerlessConfig;
