"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class StepScalingPolicyConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::StepScalingPolicyConfiguration', properties, dependsOn);
    }
}
exports.StepScalingPolicyConfiguration = StepScalingPolicyConfiguration;
class MetricDimension extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::MetricDimension', properties, dependsOn);
    }
}
exports.MetricDimension = MetricDimension;
class StepAdjustment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::StepAdjustment', properties, dependsOn);
    }
}
exports.StepAdjustment = StepAdjustment;
class PredefinedMetricSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::PredefinedMetricSpecification', properties, dependsOn);
    }
}
exports.PredefinedMetricSpecification = PredefinedMetricSpecification;
class CustomizedMetricSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::CustomizedMetricSpecification', properties, dependsOn);
    }
}
exports.CustomizedMetricSpecification = CustomizedMetricSpecification;
class TargetTrackingScalingPolicyConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::TargetTrackingScalingPolicyConfiguration', properties, dependsOn);
    }
}
exports.TargetTrackingScalingPolicyConfiguration = TargetTrackingScalingPolicyConfiguration;
class ScalingPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::ScalingPolicy', properties, dependsOn);
    }
}
exports.default = ScalingPolicy;
