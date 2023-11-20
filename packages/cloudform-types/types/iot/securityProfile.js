"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticalThreshold = exports.MetricValue = exports.MetricToRetain = exports.MetricDimension = exports.MachineLearningDetectionConfig = exports.BehaviorCriteria = exports.Behavior = exports.AlertTarget = void 0;
const resource_1 = require("../resource");
class AlertTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AlertTarget = AlertTarget;
class Behavior {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Behavior = Behavior;
class BehaviorCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BehaviorCriteria = BehaviorCriteria;
class MachineLearningDetectionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MachineLearningDetectionConfig = MachineLearningDetectionConfig;
class MetricDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDimension = MetricDimension;
class MetricToRetain {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricToRetain = MetricToRetain;
class MetricValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricValue = MetricValue;
class StatisticalThreshold {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatisticalThreshold = StatisticalThreshold;
class SecurityProfile extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoT::SecurityProfile', properties || {});
    }
}
exports.default = SecurityProfile;
SecurityProfile.AlertTarget = AlertTarget;
SecurityProfile.Behavior = Behavior;
SecurityProfile.BehaviorCriteria = BehaviorCriteria;
SecurityProfile.MachineLearningDetectionConfig = MachineLearningDetectionConfig;
SecurityProfile.MetricDimension = MetricDimension;
SecurityProfile.MetricToRetain = MetricToRetain;
SecurityProfile.MetricValue = MetricValue;
SecurityProfile.StatisticalThreshold = StatisticalThreshold;
