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
exports.PipelineTag = exports.PipelineObject = exports.ParameterValue = exports.ParameterObject = exports.ParameterAttribute = exports.Field = void 0;
const resource_1 = require("../resource");
class Field {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Field = Field;
class ParameterAttribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterAttribute = ParameterAttribute;
class ParameterObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterObject = ParameterObject;
class ParameterValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParameterValue = ParameterValue;
class PipelineObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipelineObject = PipelineObject;
class PipelineTag {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipelineTag = PipelineTag;
class Pipeline extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DataPipeline::Pipeline', properties);
    }
}
exports.default = Pipeline;
Pipeline.Field = Field;
Pipeline.ParameterAttribute = ParameterAttribute;
Pipeline.ParameterObject = ParameterObject;
Pipeline.ParameterValue = ParameterValue;
Pipeline.PipelineObject = PipelineObject;
Pipeline.PipelineTag = PipelineTag;
