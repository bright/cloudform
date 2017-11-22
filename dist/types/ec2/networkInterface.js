"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class InstanceIpv6Address extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::InstanceIpv6Address', properties, dependsOn);
    }
}
exports.InstanceIpv6Address = InstanceIpv6Address;
class PrivateIpAddressSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::PrivateIpAddressSpecification', properties, dependsOn);
    }
}
exports.PrivateIpAddressSpecification = PrivateIpAddressSpecification;
class NetworkInterface extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::NetworkInterface', properties, dependsOn);
    }
}
exports.default = NetworkInterface;
