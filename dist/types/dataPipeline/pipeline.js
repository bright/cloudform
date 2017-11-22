"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ParameterAttribute extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::ParameterAttribute', properties, dependsOn);
    }
}
exports.ParameterAttribute = ParameterAttribute;
class PipelineTag extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::PipelineTag', properties, dependsOn);
    }
}
exports.PipelineTag = PipelineTag;
class ParameterObject extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::ParameterObject', properties, dependsOn);
    }
}
exports.ParameterObject = ParameterObject;
class PipelineObject extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::PipelineObject', properties, dependsOn);
    }
}
exports.PipelineObject = PipelineObject;
class ParameterValue extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::ParameterValue', properties, dependsOn);
    }
}
exports.ParameterValue = ParameterValue;
class Field extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::Field', properties, dependsOn);
    }
}
exports.Field = Field;
class Pipeline extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::Pipeline', properties, dependsOn);
    }
}
exports.default = Pipeline;
