"use strict";
/* Generated from:
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketAddress = exports.SecurityDetails = exports.RangedSocketAddress = exports.RangedConnectionDetails = exports.IntegerRange = exports.EndpointDetails = exports.DataflowEndpoint = exports.ConnectionDetails = exports.AwsGroundStationAgentEndpoint = void 0;
const resource_1 = require("../resource");
class AwsGroundStationAgentEndpoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsGroundStationAgentEndpoint = AwsGroundStationAgentEndpoint;
class ConnectionDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConnectionDetails = ConnectionDetails;
class DataflowEndpoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataflowEndpoint = DataflowEndpoint;
class EndpointDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EndpointDetails = EndpointDetails;
class IntegerRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntegerRange = IntegerRange;
class RangedConnectionDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RangedConnectionDetails = RangedConnectionDetails;
class RangedSocketAddress {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RangedSocketAddress = RangedSocketAddress;
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
DataflowEndpointGroup.AwsGroundStationAgentEndpoint = AwsGroundStationAgentEndpoint;
DataflowEndpointGroup.ConnectionDetails = ConnectionDetails;
DataflowEndpointGroup.DataflowEndpoint = DataflowEndpoint;
DataflowEndpointGroup.EndpointDetails = EndpointDetails;
DataflowEndpointGroup.IntegerRange = IntegerRange;
DataflowEndpointGroup.RangedConnectionDetails = RangedConnectionDetails;
DataflowEndpointGroup.RangedSocketAddress = RangedSocketAddress;
DataflowEndpointGroup.SecurityDetails = SecurityDetails;
DataflowEndpointGroup.SocketAddress = SocketAddress;
