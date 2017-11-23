"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ElasticGpuSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticGpuSpecification = ElasticGpuSpecification;
class NetworkInterface {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkInterface = NetworkInterface;
class InstanceIpv6Address {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceIpv6Address = InstanceIpv6Address;
class Volume {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Volume = Volume;
class AssociationParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssociationParameter = AssociationParameter;
class Ebs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ebs = Ebs;
class NoDevice {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NoDevice = NoDevice;
class SsmAssociation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SsmAssociation = SsmAssociation;
class BlockDeviceMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlockDeviceMapping = BlockDeviceMapping;
class PrivateIpAddressSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrivateIpAddressSpecification = PrivateIpAddressSpecification;
class Instance extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::Instance', properties, dependsOn);
    }
}
exports.default = Instance;
