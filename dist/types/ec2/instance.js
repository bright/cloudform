"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ElasticGpuSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::ElasticGpuSpecification', properties, dependsOn);
    }
}
exports.ElasticGpuSpecification = ElasticGpuSpecification;
class NetworkInterface extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::NetworkInterface', properties, dependsOn);
    }
}
exports.NetworkInterface = NetworkInterface;
class InstanceIpv6Address extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::InstanceIpv6Address', properties, dependsOn);
    }
}
exports.InstanceIpv6Address = InstanceIpv6Address;
class Volume extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::Volume', properties, dependsOn);
    }
}
exports.Volume = Volume;
class AssociationParameter extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::AssociationParameter', properties, dependsOn);
    }
}
exports.AssociationParameter = AssociationParameter;
class Ebs extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::Ebs', properties, dependsOn);
    }
}
exports.Ebs = Ebs;
class NoDevice extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::NoDevice', properties, dependsOn);
    }
}
exports.NoDevice = NoDevice;
class SsmAssociation extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::SsmAssociation', properties, dependsOn);
    }
}
exports.SsmAssociation = SsmAssociation;
class BlockDeviceMapping extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::BlockDeviceMapping', properties, dependsOn);
    }
}
exports.BlockDeviceMapping = BlockDeviceMapping;
class PrivateIpAddressSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::PrivateIpAddressSpecification', properties, dependsOn);
    }
}
exports.PrivateIpAddressSpecification = PrivateIpAddressSpecification;
class Instance extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::Instance', properties, dependsOn);
    }
}
exports.default = Instance;
