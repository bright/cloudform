"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ScalingPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::ScalingPolicy', properties, dependsOn);
    }
}
exports.default = ScalingPolicy;
