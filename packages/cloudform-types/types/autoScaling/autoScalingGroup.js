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
exports.VCpuCountRequest = exports.TotalLocalStorageGBRequest = exports.TagProperty = exports.NotificationConfiguration = exports.NetworkInterfaceCountRequest = exports.NetworkBandwidthGbpsRequest = exports.MixedInstancesPolicy = exports.MetricsCollection = exports.MemoryMiBRequest = exports.MemoryGiBPerVCpuRequest = exports.LifecycleHookSpecification = exports.LaunchTemplateSpecification = exports.LaunchTemplateOverrides = exports.LaunchTemplate = exports.InstancesDistribution = exports.InstanceRequirements = exports.BaselineEbsBandwidthMbpsRequest = exports.AcceleratorTotalMemoryMiBRequest = exports.AcceleratorCountRequest = void 0;
const resource_1 = require("../resource");
class AcceleratorCountRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AcceleratorCountRequest = AcceleratorCountRequest;
class AcceleratorTotalMemoryMiBRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AcceleratorTotalMemoryMiBRequest = AcceleratorTotalMemoryMiBRequest;
class BaselineEbsBandwidthMbpsRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BaselineEbsBandwidthMbpsRequest = BaselineEbsBandwidthMbpsRequest;
class InstanceRequirements {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceRequirements = InstanceRequirements;
class InstancesDistribution {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstancesDistribution = InstancesDistribution;
class LaunchTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplate = LaunchTemplate;
class LaunchTemplateOverrides {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplateOverrides = LaunchTemplateOverrides;
class LaunchTemplateSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplateSpecification = LaunchTemplateSpecification;
class LifecycleHookSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LifecycleHookSpecification = LifecycleHookSpecification;
class MemoryGiBPerVCpuRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemoryGiBPerVCpuRequest = MemoryGiBPerVCpuRequest;
class MemoryMiBRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemoryMiBRequest = MemoryMiBRequest;
class MetricsCollection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricsCollection = MetricsCollection;
class MixedInstancesPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MixedInstancesPolicy = MixedInstancesPolicy;
class NetworkBandwidthGbpsRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkBandwidthGbpsRequest = NetworkBandwidthGbpsRequest;
class NetworkInterfaceCountRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkInterfaceCountRequest = NetworkInterfaceCountRequest;
class NotificationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationConfiguration = NotificationConfiguration;
class TagProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagProperty = TagProperty;
class TotalLocalStorageGBRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TotalLocalStorageGBRequest = TotalLocalStorageGBRequest;
class VCpuCountRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VCpuCountRequest = VCpuCountRequest;
class AutoScalingGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AutoScaling::AutoScalingGroup', properties);
    }
}
exports.default = AutoScalingGroup;
AutoScalingGroup.AcceleratorCountRequest = AcceleratorCountRequest;
AutoScalingGroup.AcceleratorTotalMemoryMiBRequest = AcceleratorTotalMemoryMiBRequest;
AutoScalingGroup.BaselineEbsBandwidthMbpsRequest = BaselineEbsBandwidthMbpsRequest;
AutoScalingGroup.InstanceRequirements = InstanceRequirements;
AutoScalingGroup.InstancesDistribution = InstancesDistribution;
AutoScalingGroup.LaunchTemplate = LaunchTemplate;
AutoScalingGroup.LaunchTemplateOverrides = LaunchTemplateOverrides;
AutoScalingGroup.LaunchTemplateSpecification = LaunchTemplateSpecification;
AutoScalingGroup.LifecycleHookSpecification = LifecycleHookSpecification;
AutoScalingGroup.MemoryGiBPerVCpuRequest = MemoryGiBPerVCpuRequest;
AutoScalingGroup.MemoryMiBRequest = MemoryMiBRequest;
AutoScalingGroup.MetricsCollection = MetricsCollection;
AutoScalingGroup.MixedInstancesPolicy = MixedInstancesPolicy;
AutoScalingGroup.NetworkBandwidthGbpsRequest = NetworkBandwidthGbpsRequest;
AutoScalingGroup.NetworkInterfaceCountRequest = NetworkInterfaceCountRequest;
AutoScalingGroup.NotificationConfiguration = NotificationConfiguration;
AutoScalingGroup.TagProperty = TagProperty;
AutoScalingGroup.TotalLocalStorageGBRequest = TotalLocalStorageGBRequest;
AutoScalingGroup.VCpuCountRequest = VCpuCountRequest;
