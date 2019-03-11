"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class InstanceGroupConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceGroupConfig = InstanceGroupConfig;
class SpotProvisioningSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpotProvisioningSpecification = SpotProvisioningSpecification;
class BootstrapActionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BootstrapActionConfig = BootstrapActionConfig;
class ScalingConstraints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingConstraints = ScalingConstraints;
class InstanceFleetConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceFleetConfig = InstanceFleetConfig;
class JobFlowInstancesConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JobFlowInstancesConfig = JobFlowInstancesConfig;
class ScalingAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingAction = ScalingAction;
class StepConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StepConfig = StepConfig;
class KerberosAttributes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KerberosAttributes = KerberosAttributes;
class SimpleScalingPolicyConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SimpleScalingPolicyConfiguration = SimpleScalingPolicyConfiguration;
class Application {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Application = Application;
class EbsBlockDeviceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EbsBlockDeviceConfig = EbsBlockDeviceConfig;
class PlacementType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PlacementType = PlacementType;
class Configuration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Configuration = Configuration;
class ScriptBootstrapActionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScriptBootstrapActionConfig = ScriptBootstrapActionConfig;
class CloudWatchAlarmDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchAlarmDefinition = CloudWatchAlarmDefinition;
class EbsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EbsConfiguration = EbsConfiguration;
class ScalingRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingRule = ScalingRule;
class KeyValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyValue = KeyValue;
class InstanceTypeConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceTypeConfig = InstanceTypeConfig;
class MetricDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDimension = MetricDimension;
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
class InstanceFleetProvisioningSpecifications {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceFleetProvisioningSpecifications = InstanceFleetProvisioningSpecifications;
class HadoopJarStepConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HadoopJarStepConfig = HadoopJarStepConfig;
class ScalingTrigger {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingTrigger = ScalingTrigger;
class Cluster extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EMR::Cluster', properties);
    }
}
Cluster.InstanceGroupConfig = InstanceGroupConfig;
Cluster.SpotProvisioningSpecification = SpotProvisioningSpecification;
Cluster.BootstrapActionConfig = BootstrapActionConfig;
Cluster.ScalingConstraints = ScalingConstraints;
Cluster.InstanceFleetConfig = InstanceFleetConfig;
Cluster.JobFlowInstancesConfig = JobFlowInstancesConfig;
Cluster.ScalingAction = ScalingAction;
Cluster.StepConfig = StepConfig;
Cluster.KerberosAttributes = KerberosAttributes;
Cluster.SimpleScalingPolicyConfiguration = SimpleScalingPolicyConfiguration;
Cluster.Application = Application;
Cluster.EbsBlockDeviceConfig = EbsBlockDeviceConfig;
Cluster.PlacementType = PlacementType;
Cluster.Configuration = Configuration;
Cluster.ScriptBootstrapActionConfig = ScriptBootstrapActionConfig;
Cluster.CloudWatchAlarmDefinition = CloudWatchAlarmDefinition;
Cluster.EbsConfiguration = EbsConfiguration;
Cluster.ScalingRule = ScalingRule;
Cluster.KeyValue = KeyValue;
Cluster.InstanceTypeConfig = InstanceTypeConfig;
Cluster.MetricDimension = MetricDimension;
Cluster.VolumeSpecification = VolumeSpecification;
Cluster.AutoScalingPolicy = AutoScalingPolicy;
Cluster.InstanceFleetProvisioningSpecifications = InstanceFleetProvisioningSpecifications;
Cluster.HadoopJarStepConfig = HadoopJarStepConfig;
Cluster.ScalingTrigger = ScalingTrigger;
exports.default = Cluster;
