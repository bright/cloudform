"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PipelineObject extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::PipelineObject', properties, dependsOn);
    }
}
exports.default = PipelineObject;
