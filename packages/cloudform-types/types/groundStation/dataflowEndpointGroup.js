"use strict";
/* Generated from:
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
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
class EndpointDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EndpointDetails = EndpointDetails;
class DataflowEndpointGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::GroundStation::DataflowEndpointGroup', properties);
    }
}
exports.default = DataflowEndpointGroup;
DataflowEndpointGroup.DataflowEndpoint = DataflowEndpoint;
DataflowEndpointGroup.SecurityDetails = SecurityDetails;
DataflowEndpointGroup.SocketAddress = SocketAddress;
DataflowEndpointGroup.EndpointDetails = EndpointDetails;
