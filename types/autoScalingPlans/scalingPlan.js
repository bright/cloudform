"use strict";
/* Generated from:
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ApplicationSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApplicationSource = ApplicationSource;
class ScalingInstruction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingInstruction = ScalingInstruction;
class TargetTrackingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetTrackingConfiguration = TargetTrackingConfiguration;
class CustomizedScalingMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomizedScalingMetricSpecification = CustomizedScalingMetricSpecification;
class MetricDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDimension = MetricDimension;
class PredefinedScalingMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredefinedScalingMetricSpecification = PredefinedScalingMetricSpecification;
class TagFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagFilter = TagFilter;
class ScalingPlan extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AutoScalingPlans::ScalingPlan', properties);
    }
}
ScalingPlan.ApplicationSource = ApplicationSource;
ScalingPlan.ScalingInstruction = ScalingInstruction;
ScalingPlan.TargetTrackingConfiguration = TargetTrackingConfiguration;
ScalingPlan.CustomizedScalingMetricSpecification = CustomizedScalingMetricSpecification;
ScalingPlan.MetricDimension = MetricDimension;
ScalingPlan.PredefinedScalingMetricSpecification = PredefinedScalingMetricSpecification;
ScalingPlan.TagFilter = TagFilter;
exports.default = ScalingPlan;
