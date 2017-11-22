"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class IamInstanceProfileSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::IamInstanceProfileSpecification', properties, dependsOn);
    }
}
exports.IamInstanceProfileSpecification = IamInstanceProfileSpecification;
class InstanceNetworkInterfaceSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::InstanceNetworkInterfaceSpecification', properties, dependsOn);
    }
}
exports.InstanceNetworkInterfaceSpecification = InstanceNetworkInterfaceSpecification;
class PrivateIpAddressSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::PrivateIpAddressSpecification', properties, dependsOn);
    }
}
exports.PrivateIpAddressSpecification = PrivateIpAddressSpecification;
class SpotFleetLaunchSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::SpotFleetLaunchSpecification', properties, dependsOn);
    }
}
exports.SpotFleetLaunchSpecification = SpotFleetLaunchSpecification;
class SpotPlacement extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::SpotPlacement', properties, dependsOn);
    }
}
exports.SpotPlacement = SpotPlacement;
class SpotFleetRequestConfigData extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::SpotFleetRequestConfigData', properties, dependsOn);
    }
}
exports.SpotFleetRequestConfigData = SpotFleetRequestConfigData;
class EbsBlockDevice extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::EbsBlockDevice', properties, dependsOn);
    }
}
exports.EbsBlockDevice = EbsBlockDevice;
class InstanceIpv6Address extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::InstanceIpv6Address', properties, dependsOn);
    }
}
exports.InstanceIpv6Address = InstanceIpv6Address;
class GroupIdentifier extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::GroupIdentifier', properties, dependsOn);
    }
}
exports.GroupIdentifier = GroupIdentifier;
class SpotFleetMonitoring extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::SpotFleetMonitoring', properties, dependsOn);
    }
}
exports.SpotFleetMonitoring = SpotFleetMonitoring;
class BlockDeviceMapping extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::BlockDeviceMapping', properties, dependsOn);
    }
}
exports.BlockDeviceMapping = BlockDeviceMapping;
class SpotFleet extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::SpotFleet', properties, dependsOn);
    }
}
exports.default = SpotFleet;
