"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ScheduledAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::ScheduledAction', properties, dependsOn);
    }
}
exports.ScheduledAction = ScheduledAction;
class ScalableTargetAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::ScalableTargetAction', properties, dependsOn);
    }
}
exports.ScalableTargetAction = ScalableTargetAction;
class ScalableTarget extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::ScalableTarget', properties, dependsOn);
    }
}
exports.default = ScalableTarget;
