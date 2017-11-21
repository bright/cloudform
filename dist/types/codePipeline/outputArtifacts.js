"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class OutputArtifacts extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::OutputArtifacts', properties, dependsOn);
    }
}
exports.default = OutputArtifacts;
