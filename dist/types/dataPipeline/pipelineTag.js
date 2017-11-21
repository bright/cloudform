"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PipelineTag extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::PipelineTag', properties, dependsOn);
    }
}
exports.default = PipelineTag;
