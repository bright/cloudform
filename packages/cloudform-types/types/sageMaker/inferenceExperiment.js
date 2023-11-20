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
exports.ShadowModelVariantConfig = exports.ShadowModeConfig = exports.RealTimeInferenceConfig = exports.ModelVariantConfig = exports.ModelInfrastructureConfig = exports.InferenceExperimentSchedule = exports.EndpointMetadata = exports.DataStorageConfig = exports.CaptureContentTypeHeader = void 0;
const resource_1 = require("../resource");
class CaptureContentTypeHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptureContentTypeHeader = CaptureContentTypeHeader;
class DataStorageConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataStorageConfig = DataStorageConfig;
class EndpointMetadata {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EndpointMetadata = EndpointMetadata;
class InferenceExperimentSchedule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InferenceExperimentSchedule = InferenceExperimentSchedule;
class ModelInfrastructureConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelInfrastructureConfig = ModelInfrastructureConfig;
class ModelVariantConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelVariantConfig = ModelVariantConfig;
class RealTimeInferenceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RealTimeInferenceConfig = RealTimeInferenceConfig;
class ShadowModeConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ShadowModeConfig = ShadowModeConfig;
class ShadowModelVariantConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ShadowModelVariantConfig = ShadowModelVariantConfig;
class InferenceExperiment extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::InferenceExperiment', properties);
    }
}
exports.default = InferenceExperiment;
InferenceExperiment.CaptureContentTypeHeader = CaptureContentTypeHeader;
InferenceExperiment.DataStorageConfig = DataStorageConfig;
InferenceExperiment.EndpointMetadata = EndpointMetadata;
InferenceExperiment.InferenceExperimentSchedule = InferenceExperimentSchedule;
InferenceExperiment.ModelInfrastructureConfig = ModelInfrastructureConfig;
InferenceExperiment.ModelVariantConfig = ModelVariantConfig;
InferenceExperiment.RealTimeInferenceConfig = RealTimeInferenceConfig;
InferenceExperiment.ShadowModeConfig = ShadowModeConfig;
InferenceExperiment.ShadowModelVariantConfig = ShadowModelVariantConfig;
