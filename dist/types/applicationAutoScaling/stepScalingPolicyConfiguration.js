"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class StepScalingPolicyConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::StepScalingPolicyConfiguration', properties, dependsOn);
    }
}
exports.default = StepScalingPolicyConfiguration;
