"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DnsConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DnsConfig = DnsConfig;
class DnsRecord {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DnsRecord = DnsRecord;
class HealthCheckCustomConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HealthCheckCustomConfig = HealthCheckCustomConfig;
class HealthCheckConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HealthCheckConfig = HealthCheckConfig;
class Service extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ServiceDiscovery::Service', properties);
    }
}
Service.DnsConfig = DnsConfig;
Service.DnsRecord = DnsRecord;
Service.HealthCheckCustomConfig = HealthCheckCustomConfig;
Service.HealthCheckConfig = HealthCheckConfig;
exports.default = Service;
