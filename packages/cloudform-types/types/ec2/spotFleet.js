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
class SpotFleetTagSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpotFleetTagSpecification = SpotFleetTagSpecification;
class PrivateIpAddressSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrivateIpAddressSpecification = PrivateIpAddressSpecification;
class SpotPlacement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpotPlacement = SpotPlacement;
class EbsBlockDevice {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EbsBlockDevice = EbsBlockDevice;
class LoadBalancersConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoadBalancersConfig = LoadBalancersConfig;
class FleetLaunchTemplateSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FleetLaunchTemplateSpecification = FleetLaunchTemplateSpecification;
class TargetGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetGroup = TargetGroup;
class LaunchTemplateOverrides {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplateOverrides = LaunchTemplateOverrides;
class SpotFleetMonitoring {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpotFleetMonitoring = SpotFleetMonitoring;
class ClassicLoadBalancer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClassicLoadBalancer = ClassicLoadBalancer;
class LaunchTemplateConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplateConfig = LaunchTemplateConfig;
class IamInstanceProfileSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IamInstanceProfileSpecification = IamInstanceProfileSpecification;
class InstanceNetworkInterfaceSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceNetworkInterfaceSpecification = InstanceNetworkInterfaceSpecification;
class SpotFleetLaunchSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpotFleetLaunchSpecification = SpotFleetLaunchSpecification;
class ClassicLoadBalancersConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClassicLoadBalancersConfig = ClassicLoadBalancersConfig;
class SpotFleetRequestConfigData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpotFleetRequestConfigData = SpotFleetRequestConfigData;
class InstanceIpv6Address {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceIpv6Address = InstanceIpv6Address;
class TargetGroupsConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetGroupsConfig = TargetGroupsConfig;
class GroupIdentifier {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GroupIdentifier = GroupIdentifier;
class BlockDeviceMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlockDeviceMapping = BlockDeviceMapping;
class SpotFleet extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EC2::SpotFleet', properties);
    }
}
SpotFleet.SpotFleetTagSpecification = SpotFleetTagSpecification;
SpotFleet.PrivateIpAddressSpecification = PrivateIpAddressSpecification;
SpotFleet.SpotPlacement = SpotPlacement;
SpotFleet.EbsBlockDevice = EbsBlockDevice;
SpotFleet.LoadBalancersConfig = LoadBalancersConfig;
SpotFleet.FleetLaunchTemplateSpecification = FleetLaunchTemplateSpecification;
SpotFleet.TargetGroup = TargetGroup;
SpotFleet.LaunchTemplateOverrides = LaunchTemplateOverrides;
SpotFleet.SpotFleetMonitoring = SpotFleetMonitoring;
SpotFleet.ClassicLoadBalancer = ClassicLoadBalancer;
SpotFleet.LaunchTemplateConfig = LaunchTemplateConfig;
SpotFleet.IamInstanceProfileSpecification = IamInstanceProfileSpecification;
SpotFleet.InstanceNetworkInterfaceSpecification = InstanceNetworkInterfaceSpecification;
SpotFleet.SpotFleetLaunchSpecification = SpotFleetLaunchSpecification;
SpotFleet.ClassicLoadBalancersConfig = ClassicLoadBalancersConfig;
SpotFleet.SpotFleetRequestConfigData = SpotFleetRequestConfigData;
SpotFleet.InstanceIpv6Address = InstanceIpv6Address;
SpotFleet.TargetGroupsConfig = TargetGroupsConfig;
SpotFleet.GroupIdentifier = GroupIdentifier;
SpotFleet.BlockDeviceMapping = BlockDeviceMapping;
exports.default = SpotFleet;
