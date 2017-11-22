"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VpnTunnelOptionsSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::VpnTunnelOptionsSpecification', properties, dependsOn);
    }
}
exports.VpnTunnelOptionsSpecification = VpnTunnelOptionsSpecification;
class VPNConnection extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::VPNConnection', properties, dependsOn);
    }
}
exports.default = VPNConnection;
