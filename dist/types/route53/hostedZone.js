"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class HostedZoneTag extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::HostedZoneTag', properties, dependsOn);
    }
}
exports.HostedZoneTag = HostedZoneTag;
class HostedZoneConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::HostedZoneConfig', properties, dependsOn);
    }
}
exports.HostedZoneConfig = HostedZoneConfig;
class QueryLoggingConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::QueryLoggingConfig', properties, dependsOn);
    }
}
exports.QueryLoggingConfig = QueryLoggingConfig;
class VPC extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::VPC', properties, dependsOn);
    }
}
exports.VPC = VPC;
class HostedZone extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::HostedZone', properties, dependsOn);
    }
}
exports.default = HostedZone;
