"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CustomizedScalingMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomizedScalingMetricSpecification = CustomizedScalingMetricSpecification;
class TagFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagFilter = TagFilter;
class CustomizedLoadMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomizedLoadMetricSpecification = CustomizedLoadMetricSpecification;
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
class PredefinedLoadMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredefinedLoadMetricSpecification = PredefinedLoadMetricSpecification;
class ScalingPlan extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AutoScalingPlans::ScalingPlan', properties);
    }
}
ScalingPlan.CustomizedScalingMetricSpecification = CustomizedScalingMetricSpecification;
ScalingPlan.TagFilter = TagFilter;
ScalingPlan.CustomizedLoadMetricSpecification = CustomizedLoadMetricSpecification;
ScalingPlan.ApplicationSource = ApplicationSource;
ScalingPlan.ScalingInstruction = ScalingInstruction;
ScalingPlan.TargetTrackingConfiguration = TargetTrackingConfiguration;
ScalingPlan.MetricDimension = MetricDimension;
ScalingPlan.PredefinedScalingMetricSpecification = PredefinedScalingMetricSpecification;
ScalingPlan.PredefinedLoadMetricSpecification = PredefinedLoadMetricSpecification;
exports.default = ScalingPlan;
