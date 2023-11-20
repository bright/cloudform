"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetTrackingConfiguration = exports.TagFilter = exports.ScalingInstruction = exports.PredefinedScalingMetricSpecification = exports.PredefinedLoadMetricSpecification = exports.MetricDimension = exports.CustomizedScalingMetricSpecification = exports.CustomizedLoadMetricSpecification = exports.ApplicationSource = void 0;
const resource_1 = require("../resource");
class ApplicationSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApplicationSource = ApplicationSource;
class CustomizedLoadMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomizedLoadMetricSpecification = CustomizedLoadMetricSpecification;
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
class PredefinedLoadMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredefinedLoadMetricSpecification = PredefinedLoadMetricSpecification;
class PredefinedScalingMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredefinedScalingMetricSpecification = PredefinedScalingMetricSpecification;
class ScalingInstruction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingInstruction = ScalingInstruction;
class TagFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagFilter = TagFilter;
class TargetTrackingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetTrackingConfiguration = TargetTrackingConfiguration;
class ScalingPlan extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AutoScalingPlans::ScalingPlan', properties);
    }
}
exports.default = ScalingPlan;
ScalingPlan.ApplicationSource = ApplicationSource;
ScalingPlan.CustomizedLoadMetricSpecification = CustomizedLoadMetricSpecification;
ScalingPlan.CustomizedScalingMetricSpecification = CustomizedScalingMetricSpecification;
ScalingPlan.MetricDimension = MetricDimension;
ScalingPlan.PredefinedLoadMetricSpecification = PredefinedLoadMetricSpecification;
ScalingPlan.PredefinedScalingMetricSpecification = PredefinedScalingMetricSpecification;
ScalingPlan.ScalingInstruction = ScalingInstruction;
ScalingPlan.TagFilter = TagFilter;
ScalingPlan.TargetTrackingConfiguration = TargetTrackingConfiguration;
