"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EbsBlockDeviceConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::EbsBlockDeviceConfig', properties, dependsOn);
    }
}
exports.EbsBlockDeviceConfig = EbsBlockDeviceConfig;
class Configuration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::Configuration', properties, dependsOn);
    }
}
exports.Configuration = Configuration;
class MetricDimension extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::MetricDimension', properties, dependsOn);
    }
}
exports.MetricDimension = MetricDimension;
class SimpleScalingPolicyConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::SimpleScalingPolicyConfiguration', properties, dependsOn);
    }
}
exports.SimpleScalingPolicyConfiguration = SimpleScalingPolicyConfiguration;
class ScalingRule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::ScalingRule', properties, dependsOn);
    }
}
exports.ScalingRule = ScalingRule;
class ScalingAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::ScalingAction', properties, dependsOn);
    }
}
exports.ScalingAction = ScalingAction;
class ScalingTrigger extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::ScalingTrigger', properties, dependsOn);
    }
}
exports.ScalingTrigger = ScalingTrigger;
class ScalingConstraints extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::ScalingConstraints', properties, dependsOn);
    }
}
exports.ScalingConstraints = ScalingConstraints;
class CloudWatchAlarmDefinition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::CloudWatchAlarmDefinition', properties, dependsOn);
    }
}
exports.CloudWatchAlarmDefinition = CloudWatchAlarmDefinition;
class VolumeSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::VolumeSpecification', properties, dependsOn);
    }
}
exports.VolumeSpecification = VolumeSpecification;
class AutoScalingPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::AutoScalingPolicy', properties, dependsOn);
    }
}
exports.AutoScalingPolicy = AutoScalingPolicy;
class EbsConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::EbsConfiguration', properties, dependsOn);
    }
}
exports.EbsConfiguration = EbsConfiguration;
class InstanceGroupConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::InstanceGroupConfig', properties, dependsOn);
    }
}
exports.default = InstanceGroupConfig;
