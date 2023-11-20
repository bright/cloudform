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
exports.TargetTrackingConfiguration = exports.StepAdjustment = exports.PredictiveScalingPredefinedScalingMetric = exports.PredictiveScalingPredefinedMetricPair = exports.PredictiveScalingPredefinedLoadMetric = exports.PredictiveScalingMetricSpecification = exports.PredictiveScalingCustomizedScalingMetric = exports.PredictiveScalingCustomizedLoadMetric = exports.PredictiveScalingCustomizedCapacityMetric = exports.PredictiveScalingConfiguration = exports.PredefinedMetricSpecification = exports.MetricStat = exports.MetricDimension = exports.MetricDataQuery = exports.Metric = exports.CustomizedMetricSpecification = void 0;
const resource_1 = require("../resource");
class CustomizedMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomizedMetricSpecification = CustomizedMetricSpecification;
class Metric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Metric = Metric;
class MetricDataQuery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDataQuery = MetricDataQuery;
class MetricDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDimension = MetricDimension;
class MetricStat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricStat = MetricStat;
class PredefinedMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredefinedMetricSpecification = PredefinedMetricSpecification;
class PredictiveScalingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredictiveScalingConfiguration = PredictiveScalingConfiguration;
class PredictiveScalingCustomizedCapacityMetric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredictiveScalingCustomizedCapacityMetric = PredictiveScalingCustomizedCapacityMetric;
class PredictiveScalingCustomizedLoadMetric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredictiveScalingCustomizedLoadMetric = PredictiveScalingCustomizedLoadMetric;
class PredictiveScalingCustomizedScalingMetric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredictiveScalingCustomizedScalingMetric = PredictiveScalingCustomizedScalingMetric;
class PredictiveScalingMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredictiveScalingMetricSpecification = PredictiveScalingMetricSpecification;
class PredictiveScalingPredefinedLoadMetric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredictiveScalingPredefinedLoadMetric = PredictiveScalingPredefinedLoadMetric;
class PredictiveScalingPredefinedMetricPair {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredictiveScalingPredefinedMetricPair = PredictiveScalingPredefinedMetricPair;
class PredictiveScalingPredefinedScalingMetric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredictiveScalingPredefinedScalingMetric = PredictiveScalingPredefinedScalingMetric;
class StepAdjustment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StepAdjustment = StepAdjustment;
class TargetTrackingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetTrackingConfiguration = TargetTrackingConfiguration;
class ScalingPolicy extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AutoScaling::ScalingPolicy', properties);
    }
}
exports.default = ScalingPolicy;
ScalingPolicy.CustomizedMetricSpecification = CustomizedMetricSpecification;
ScalingPolicy.Metric = Metric;
ScalingPolicy.MetricDataQuery = MetricDataQuery;
ScalingPolicy.MetricDimension = MetricDimension;
ScalingPolicy.MetricStat = MetricStat;
ScalingPolicy.PredefinedMetricSpecification = PredefinedMetricSpecification;
ScalingPolicy.PredictiveScalingConfiguration = PredictiveScalingConfiguration;
ScalingPolicy.PredictiveScalingCustomizedCapacityMetric = PredictiveScalingCustomizedCapacityMetric;
ScalingPolicy.PredictiveScalingCustomizedLoadMetric = PredictiveScalingCustomizedLoadMetric;
ScalingPolicy.PredictiveScalingCustomizedScalingMetric = PredictiveScalingCustomizedScalingMetric;
ScalingPolicy.PredictiveScalingMetricSpecification = PredictiveScalingMetricSpecification;
ScalingPolicy.PredictiveScalingPredefinedLoadMetric = PredictiveScalingPredefinedLoadMetric;
ScalingPolicy.PredictiveScalingPredefinedMetricPair = PredictiveScalingPredefinedMetricPair;
ScalingPolicy.PredictiveScalingPredefinedScalingMetric = PredictiveScalingPredefinedScalingMetric;
ScalingPolicy.StepAdjustment = StepAdjustment;
ScalingPolicy.TargetTrackingConfiguration = TargetTrackingConfiguration;
