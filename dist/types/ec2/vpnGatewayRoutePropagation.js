"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VPNGatewayRoutePropagation extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::VPNGatewayRoutePropagation', properties, dependsOn);
    }
}
exports.default = VPNGatewayRoutePropagation;
