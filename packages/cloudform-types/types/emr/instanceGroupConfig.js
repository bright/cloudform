"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EbsBlockDeviceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EbsBlockDeviceConfig = EbsBlockDeviceConfig;
class ScalingAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingAction = ScalingAction;
class ScalingTrigger {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingTrigger = ScalingTrigger;
class VolumeSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VolumeSpecification = VolumeSpecification;
class AutoScalingPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutoScalingPolicy = AutoScalingPolicy;
class EbsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EbsConfiguration = EbsConfiguration;
class Configuration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Configuration = Configuration;
class MetricDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDimension = MetricDimension;
class SimpleScalingPolicyConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SimpleScalingPolicyConfiguration = SimpleScalingPolicyConfiguration;
class ScalingRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingRule = ScalingRule;
class ScalingConstraints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingConstraints = ScalingConstraints;
class CloudWatchAlarmDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchAlarmDefinition = CloudWatchAlarmDefinition;
class InstanceGroupConfig extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EMR::InstanceGroupConfig', properties);
    }
}
InstanceGroupConfig.EbsBlockDeviceConfig = EbsBlockDeviceConfig;
InstanceGroupConfig.ScalingAction = ScalingAction;
InstanceGroupConfig.ScalingTrigger = ScalingTrigger;
InstanceGroupConfig.VolumeSpecification = VolumeSpecification;
InstanceGroupConfig.AutoScalingPolicy = AutoScalingPolicy;
InstanceGroupConfig.EbsConfiguration = EbsConfiguration;
InstanceGroupConfig.Configuration = Configuration;
InstanceGroupConfig.MetricDimension = MetricDimension;
InstanceGroupConfig.SimpleScalingPolicyConfiguration = SimpleScalingPolicyConfiguration;
InstanceGroupConfig.ScalingRule = ScalingRule;
InstanceGroupConfig.ScalingConstraints = ScalingConstraints;
InstanceGroupConfig.CloudWatchAlarmDefinition = CloudWatchAlarmDefinition;
exports.default = InstanceGroupConfig;
