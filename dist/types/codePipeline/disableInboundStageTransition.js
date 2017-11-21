"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DisableInboundStageTransition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::DisableInboundStageTransition', properties, dependsOn);
    }
}
exports.default = DisableInboundStageTransition;
