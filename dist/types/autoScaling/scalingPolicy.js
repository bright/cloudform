"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MetricDimension extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::MetricDimension', properties, dependsOn);
    }
}
exports.MetricDimension = MetricDimension;
class CustomizedMetricSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::CustomizedMetricSpecification', properties, dependsOn);
    }
}
exports.CustomizedMetricSpecification = CustomizedMetricSpecification;
class PredefinedMetricSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::PredefinedMetricSpecification', properties, dependsOn);
    }
}
exports.PredefinedMetricSpecification = PredefinedMetricSpecification;
class TargetTrackingConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::TargetTrackingConfiguration', properties, dependsOn);
    }
}
exports.TargetTrackingConfiguration = TargetTrackingConfiguration;
class StepAdjustment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::StepAdjustment', properties, dependsOn);
    }
}
exports.StepAdjustment = StepAdjustment;
class ScalingPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::ScalingPolicy', properties, dependsOn);
    }
}
exports.default = ScalingPolicy;
