"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class HealthCheckConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::HealthCheckConfig', properties, dependsOn);
    }
}
exports.HealthCheckConfig = HealthCheckConfig;
class HealthCheckTag extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::HealthCheckTag', properties, dependsOn);
    }
}
exports.HealthCheckTag = HealthCheckTag;
class AlarmIdentifier extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::AlarmIdentifier', properties, dependsOn);
    }
}
exports.AlarmIdentifier = AlarmIdentifier;
class HealthCheck extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::HealthCheck', properties, dependsOn);
    }
}
exports.default = HealthCheck;
