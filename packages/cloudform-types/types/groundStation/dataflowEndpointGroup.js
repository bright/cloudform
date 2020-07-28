"use strict";
/* Generated from:
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EndpointDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EndpointDetails = EndpointDetails;
class DataflowEndpoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataflowEndpoint = DataflowEndpoint;
class SecurityDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SecurityDetails = SecurityDetails;
class SocketAddress {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SocketAddress = SocketAddress;
class DataflowEndpointGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::GroundStation::DataflowEndpointGroup', properties);
    }
}
exports.default = DataflowEndpointGroup;
DataflowEndpointGroup.EndpointDetails = EndpointDetails;
DataflowEndpointGroup.DataflowEndpoint = DataflowEndpoint;
DataflowEndpointGroup.SecurityDetails = SecurityDetails;
DataflowEndpointGroup.SocketAddress = SocketAddress;
