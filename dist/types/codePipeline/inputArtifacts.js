"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class InputArtifacts extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::InputArtifacts', properties, dependsOn);
    }
}
exports.default = InputArtifacts;
