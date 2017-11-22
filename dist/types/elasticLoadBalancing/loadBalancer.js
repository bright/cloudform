"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class HealthCheck extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::HealthCheck', properties, dependsOn);
    }
}
exports.HealthCheck = HealthCheck;
class AccessLoggingPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::AccessLoggingPolicy', properties, dependsOn);
    }
}
exports.AccessLoggingPolicy = AccessLoggingPolicy;
class ConnectionSettings extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::ConnectionSettings', properties, dependsOn);
    }
}
exports.ConnectionSettings = ConnectionSettings;
class LBCookieStickinessPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::LBCookieStickinessPolicy', properties, dependsOn);
    }
}
exports.LBCookieStickinessPolicy = LBCookieStickinessPolicy;
class ConnectionDrainingPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::ConnectionDrainingPolicy', properties, dependsOn);
    }
}
exports.ConnectionDrainingPolicy = ConnectionDrainingPolicy;
class Listeners extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::Listeners', properties, dependsOn);
    }
}
exports.Listeners = Listeners;
class Policies extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::Policies', properties, dependsOn);
    }
}
exports.Policies = Policies;
class AppCookieStickinessPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::AppCookieStickinessPolicy', properties, dependsOn);
    }
}
exports.AppCookieStickinessPolicy = AppCookieStickinessPolicy;
class LoadBalancer extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::LoadBalancer', properties, dependsOn);
    }
}
exports.default = LoadBalancer;
