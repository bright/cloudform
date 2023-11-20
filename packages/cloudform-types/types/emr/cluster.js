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
exports.VolumeSpecification = exports.StepConfig = exports.SpotProvisioningSpecification = exports.SimpleScalingPolicyConfiguration = exports.ScriptBootstrapActionConfig = exports.ScalingTrigger = exports.ScalingRule = exports.ScalingConstraints = exports.ScalingAction = exports.PlacementType = exports.OnDemandProvisioningSpecification = exports.MetricDimension = exports.ManagedScalingPolicy = exports.KeyValue = exports.KerberosAttributes = exports.JobFlowInstancesConfig = exports.InstanceTypeConfig = exports.InstanceGroupConfig = exports.InstanceFleetProvisioningSpecifications = exports.InstanceFleetConfig = exports.HadoopJarStepConfig = exports.EbsConfiguration = exports.EbsBlockDeviceConfig = exports.Configuration = exports.ComputeLimits = exports.CloudWatchAlarmDefinition = exports.BootstrapActionConfig = exports.AutoTerminationPolicy = exports.AutoScalingPolicy = exports.Application = void 0;
const resource_1 = require("../resource");
class Application {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Application = Application;
class AutoScalingPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutoScalingPolicy = AutoScalingPolicy;
class AutoTerminationPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutoTerminationPolicy = AutoTerminationPolicy;
class BootstrapActionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BootstrapActionConfig = BootstrapActionConfig;
class CloudWatchAlarmDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchAlarmDefinition = CloudWatchAlarmDefinition;
class ComputeLimits {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComputeLimits = ComputeLimits;
class Configuration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Configuration = Configuration;
class EbsBlockDeviceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EbsBlockDeviceConfig = EbsBlockDeviceConfig;
class EbsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EbsConfiguration = EbsConfiguration;
class HadoopJarStepConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HadoopJarStepConfig = HadoopJarStepConfig;
class InstanceFleetConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceFleetConfig = InstanceFleetConfig;
class InstanceFleetProvisioningSpecifications {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceFleetProvisioningSpecifications = InstanceFleetProvisioningSpecifications;
class InstanceGroupConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceGroupConfig = InstanceGroupConfig;
class InstanceTypeConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceTypeConfig = InstanceTypeConfig;
class JobFlowInstancesConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JobFlowInstancesConfig = JobFlowInstancesConfig;
class KerberosAttributes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KerberosAttributes = KerberosAttributes;
class KeyValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyValue = KeyValue;
class ManagedScalingPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ManagedScalingPolicy = ManagedScalingPolicy;
class MetricDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDimension = MetricDimension;
class OnDemandProvisioningSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnDemandProvisioningSpecification = OnDemandProvisioningSpecification;
class PlacementType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PlacementType = PlacementType;
class ScalingAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingAction = ScalingAction;
class ScalingConstraints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingConstraints = ScalingConstraints;
class ScalingRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingRule = ScalingRule;
class ScalingTrigger {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingTrigger = ScalingTrigger;
class ScriptBootstrapActionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScriptBootstrapActionConfig = ScriptBootstrapActionConfig;
class SimpleScalingPolicyConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SimpleScalingPolicyConfiguration = SimpleScalingPolicyConfiguration;
class SpotProvisioningSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpotProvisioningSpecification = SpotProvisioningSpecification;
class StepConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StepConfig = StepConfig;
class VolumeSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VolumeSpecification = VolumeSpecification;
class Cluster extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EMR::Cluster', properties);
    }
}
exports.default = Cluster;
Cluster.Application = Application;
Cluster.AutoScalingPolicy = AutoScalingPolicy;
Cluster.AutoTerminationPolicy = AutoTerminationPolicy;
Cluster.BootstrapActionConfig = BootstrapActionConfig;
Cluster.CloudWatchAlarmDefinition = CloudWatchAlarmDefinition;
Cluster.ComputeLimits = ComputeLimits;
Cluster.Configuration = Configuration;
Cluster.EbsBlockDeviceConfig = EbsBlockDeviceConfig;
Cluster.EbsConfiguration = EbsConfiguration;
Cluster.HadoopJarStepConfig = HadoopJarStepConfig;
Cluster.InstanceFleetConfig = InstanceFleetConfig;
Cluster.InstanceFleetProvisioningSpecifications = InstanceFleetProvisioningSpecifications;
Cluster.InstanceGroupConfig = InstanceGroupConfig;
Cluster.InstanceTypeConfig = InstanceTypeConfig;
Cluster.JobFlowInstancesConfig = JobFlowInstancesConfig;
Cluster.KerberosAttributes = KerberosAttributes;
Cluster.KeyValue = KeyValue;
Cluster.ManagedScalingPolicy = ManagedScalingPolicy;
Cluster.MetricDimension = MetricDimension;
Cluster.OnDemandProvisioningSpecification = OnDemandProvisioningSpecification;
Cluster.PlacementType = PlacementType;
Cluster.ScalingAction = ScalingAction;
Cluster.ScalingConstraints = ScalingConstraints;
Cluster.ScalingRule = ScalingRule;
Cluster.ScalingTrigger = ScalingTrigger;
Cluster.ScriptBootstrapActionConfig = ScriptBootstrapActionConfig;
Cluster.SimpleScalingPolicyConfiguration = SimpleScalingPolicyConfiguration;
Cluster.SpotProvisioningSpecification = SpotProvisioningSpecification;
Cluster.StepConfig = StepConfig;
Cluster.VolumeSpecification = VolumeSpecification;
