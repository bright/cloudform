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
exports.VCpuCountRangeRequest = exports.TotalLocalStorageGBRequest = exports.TargetCapacitySpecificationRequest = exports.TagSpecification = exports.SpotOptionsRequest = exports.Placement = exports.OnDemandOptionsRequest = exports.NetworkInterfaceCountRequest = exports.NetworkBandwidthGbpsRequest = exports.MemoryMiBRequest = exports.MemoryGiBPerVCpuRequest = exports.MaintenanceStrategies = exports.InstanceRequirementsRequest = exports.FleetLaunchTemplateSpecificationRequest = exports.FleetLaunchTemplateOverridesRequest = exports.FleetLaunchTemplateConfigRequest = exports.CapacityReservationOptionsRequest = exports.CapacityRebalance = exports.BaselineEbsBandwidthMbpsRequest = exports.AcceleratorTotalMemoryMiBRequest = exports.AcceleratorCountRequest = void 0;
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
class CapacityRebalance {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityRebalance = CapacityRebalance;
class CapacityReservationOptionsRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityReservationOptionsRequest = CapacityReservationOptionsRequest;
class FleetLaunchTemplateConfigRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FleetLaunchTemplateConfigRequest = FleetLaunchTemplateConfigRequest;
class FleetLaunchTemplateOverridesRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FleetLaunchTemplateOverridesRequest = FleetLaunchTemplateOverridesRequest;
class FleetLaunchTemplateSpecificationRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FleetLaunchTemplateSpecificationRequest = FleetLaunchTemplateSpecificationRequest;
class InstanceRequirementsRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceRequirementsRequest = InstanceRequirementsRequest;
class MaintenanceStrategies {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceStrategies = MaintenanceStrategies;
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
class OnDemandOptionsRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnDemandOptionsRequest = OnDemandOptionsRequest;
class Placement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Placement = Placement;
class SpotOptionsRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpotOptionsRequest = SpotOptionsRequest;
class TagSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagSpecification = TagSpecification;
class TargetCapacitySpecificationRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetCapacitySpecificationRequest = TargetCapacitySpecificationRequest;
class TotalLocalStorageGBRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TotalLocalStorageGBRequest = TotalLocalStorageGBRequest;
class VCpuCountRangeRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VCpuCountRangeRequest = VCpuCountRangeRequest;
class EC2Fleet extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EC2::EC2Fleet', properties);
    }
}
exports.default = EC2Fleet;
EC2Fleet.AcceleratorCountRequest = AcceleratorCountRequest;
EC2Fleet.AcceleratorTotalMemoryMiBRequest = AcceleratorTotalMemoryMiBRequest;
EC2Fleet.BaselineEbsBandwidthMbpsRequest = BaselineEbsBandwidthMbpsRequest;
EC2Fleet.CapacityRebalance = CapacityRebalance;
EC2Fleet.CapacityReservationOptionsRequest = CapacityReservationOptionsRequest;
EC2Fleet.FleetLaunchTemplateConfigRequest = FleetLaunchTemplateConfigRequest;
EC2Fleet.FleetLaunchTemplateOverridesRequest = FleetLaunchTemplateOverridesRequest;
EC2Fleet.FleetLaunchTemplateSpecificationRequest = FleetLaunchTemplateSpecificationRequest;
EC2Fleet.InstanceRequirementsRequest = InstanceRequirementsRequest;
EC2Fleet.MaintenanceStrategies = MaintenanceStrategies;
EC2Fleet.MemoryGiBPerVCpuRequest = MemoryGiBPerVCpuRequest;
EC2Fleet.MemoryMiBRequest = MemoryMiBRequest;
EC2Fleet.NetworkBandwidthGbpsRequest = NetworkBandwidthGbpsRequest;
EC2Fleet.NetworkInterfaceCountRequest = NetworkInterfaceCountRequest;
EC2Fleet.OnDemandOptionsRequest = OnDemandOptionsRequest;
EC2Fleet.Placement = Placement;
EC2Fleet.SpotOptionsRequest = SpotOptionsRequest;
EC2Fleet.TagSpecification = TagSpecification;
EC2Fleet.TargetCapacitySpecificationRequest = TargetCapacitySpecificationRequest;
EC2Fleet.TotalLocalStorageGBRequest = TotalLocalStorageGBRequest;
EC2Fleet.VCpuCountRangeRequest = VCpuCountRangeRequest;
