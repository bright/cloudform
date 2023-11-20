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
exports.VCpuCount = exports.TotalLocalStorageGB = exports.TagSpecification = exports.SpotOptions = exports.PrivateIpAdd = exports.PrivateDnsNameOptions = exports.Placement = exports.NetworkInterfaceCount = exports.NetworkInterface = exports.NetworkBandwidthGbps = exports.Monitoring = exports.MetadataOptions = exports.MemoryMiB = exports.MemoryGiBPerVCpu = exports.MaintenanceOptions = exports.LicenseSpecification = exports.LaunchTemplateTagSpecification = exports.LaunchTemplateElasticInferenceAccelerator = exports.LaunchTemplateData = exports.Ipv6PrefixSpecification = exports.Ipv6Add = exports.Ipv4PrefixSpecification = exports.InstanceRequirements = exports.InstanceMarketOptions = exports.IamInstanceProfile = exports.HibernationOptions = exports.EnclaveOptions = exports.ElasticGpuSpecification = exports.Ebs = exports.CreditSpecification = exports.CpuOptions = exports.CapacityReservationTarget = exports.CapacityReservationSpecification = exports.BlockDeviceMapping = exports.BaselineEbsBandwidthMbps = exports.AcceleratorTotalMemoryMiB = exports.AcceleratorCount = void 0;
const resource_1 = require("../resource");
class AcceleratorCount {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AcceleratorCount = AcceleratorCount;
class AcceleratorTotalMemoryMiB {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AcceleratorTotalMemoryMiB = AcceleratorTotalMemoryMiB;
class BaselineEbsBandwidthMbps {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BaselineEbsBandwidthMbps = BaselineEbsBandwidthMbps;
class BlockDeviceMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlockDeviceMapping = BlockDeviceMapping;
class CapacityReservationSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityReservationSpecification = CapacityReservationSpecification;
class CapacityReservationTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityReservationTarget = CapacityReservationTarget;
class CpuOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CpuOptions = CpuOptions;
class CreditSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CreditSpecification = CreditSpecification;
class Ebs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ebs = Ebs;
class ElasticGpuSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticGpuSpecification = ElasticGpuSpecification;
class EnclaveOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EnclaveOptions = EnclaveOptions;
class HibernationOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HibernationOptions = HibernationOptions;
class IamInstanceProfile {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IamInstanceProfile = IamInstanceProfile;
class InstanceMarketOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceMarketOptions = InstanceMarketOptions;
class InstanceRequirements {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceRequirements = InstanceRequirements;
class Ipv4PrefixSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ipv4PrefixSpecification = Ipv4PrefixSpecification;
class Ipv6Add {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ipv6Add = Ipv6Add;
class Ipv6PrefixSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ipv6PrefixSpecification = Ipv6PrefixSpecification;
class LaunchTemplateData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplateData = LaunchTemplateData;
class LaunchTemplateElasticInferenceAccelerator {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplateElasticInferenceAccelerator = LaunchTemplateElasticInferenceAccelerator;
class LaunchTemplateTagSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplateTagSpecification = LaunchTemplateTagSpecification;
class LicenseSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LicenseSpecification = LicenseSpecification;
class MaintenanceOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceOptions = MaintenanceOptions;
class MemoryGiBPerVCpu {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemoryGiBPerVCpu = MemoryGiBPerVCpu;
class MemoryMiB {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemoryMiB = MemoryMiB;
class MetadataOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetadataOptions = MetadataOptions;
class Monitoring {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Monitoring = Monitoring;
class NetworkBandwidthGbps {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkBandwidthGbps = NetworkBandwidthGbps;
class NetworkInterface {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkInterface = NetworkInterface;
class NetworkInterfaceCount {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkInterfaceCount = NetworkInterfaceCount;
class Placement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Placement = Placement;
class PrivateDnsNameOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrivateDnsNameOptions = PrivateDnsNameOptions;
class PrivateIpAdd {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrivateIpAdd = PrivateIpAdd;
class SpotOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpotOptions = SpotOptions;
class TagSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagSpecification = TagSpecification;
class TotalLocalStorageGB {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TotalLocalStorageGB = TotalLocalStorageGB;
class VCpuCount {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VCpuCount = VCpuCount;
class LaunchTemplate extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EC2::LaunchTemplate', properties);
    }
}
exports.default = LaunchTemplate;
LaunchTemplate.AcceleratorCount = AcceleratorCount;
LaunchTemplate.AcceleratorTotalMemoryMiB = AcceleratorTotalMemoryMiB;
LaunchTemplate.BaselineEbsBandwidthMbps = BaselineEbsBandwidthMbps;
LaunchTemplate.BlockDeviceMapping = BlockDeviceMapping;
LaunchTemplate.CapacityReservationSpecification = CapacityReservationSpecification;
LaunchTemplate.CapacityReservationTarget = CapacityReservationTarget;
LaunchTemplate.CpuOptions = CpuOptions;
LaunchTemplate.CreditSpecification = CreditSpecification;
LaunchTemplate.Ebs = Ebs;
LaunchTemplate.ElasticGpuSpecification = ElasticGpuSpecification;
LaunchTemplate.EnclaveOptions = EnclaveOptions;
LaunchTemplate.HibernationOptions = HibernationOptions;
LaunchTemplate.IamInstanceProfile = IamInstanceProfile;
LaunchTemplate.InstanceMarketOptions = InstanceMarketOptions;
LaunchTemplate.InstanceRequirements = InstanceRequirements;
LaunchTemplate.Ipv4PrefixSpecification = Ipv4PrefixSpecification;
LaunchTemplate.Ipv6Add = Ipv6Add;
LaunchTemplate.Ipv6PrefixSpecification = Ipv6PrefixSpecification;
LaunchTemplate.LaunchTemplateData = LaunchTemplateData;
LaunchTemplate.LaunchTemplateElasticInferenceAccelerator = LaunchTemplateElasticInferenceAccelerator;
LaunchTemplate.LaunchTemplateTagSpecification = LaunchTemplateTagSpecification;
LaunchTemplate.LicenseSpecification = LicenseSpecification;
LaunchTemplate.MaintenanceOptions = MaintenanceOptions;
LaunchTemplate.MemoryGiBPerVCpu = MemoryGiBPerVCpu;
LaunchTemplate.MemoryMiB = MemoryMiB;
LaunchTemplate.MetadataOptions = MetadataOptions;
LaunchTemplate.Monitoring = Monitoring;
LaunchTemplate.NetworkBandwidthGbps = NetworkBandwidthGbps;
LaunchTemplate.NetworkInterface = NetworkInterface;
LaunchTemplate.NetworkInterfaceCount = NetworkInterfaceCount;
LaunchTemplate.Placement = Placement;
LaunchTemplate.PrivateDnsNameOptions = PrivateDnsNameOptions;
LaunchTemplate.PrivateIpAdd = PrivateIpAdd;
LaunchTemplate.SpotOptions = SpotOptions;
LaunchTemplate.TagSpecification = TagSpecification;
LaunchTemplate.TotalLocalStorageGB = TotalLocalStorageGB;
LaunchTemplate.VCpuCount = VCpuCount;
