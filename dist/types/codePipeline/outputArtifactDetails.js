"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class OutputArtifactDetails extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::OutputArtifactDetails', properties, dependsOn);
    }
}
exports.default = OutputArtifactDetails;
