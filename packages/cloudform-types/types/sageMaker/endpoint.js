"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Alarm {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Alarm = Alarm;
class AutoRollbackConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutoRollbackConfig = AutoRollbackConfig;
class TrafficRoutingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrafficRoutingConfig = TrafficRoutingConfig;
class DeploymentConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentConfig = DeploymentConfig;
class CapacitySize {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacitySize = CapacitySize;
class VariantProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VariantProperty = VariantProperty;
class BlueGreenUpdatePolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlueGreenUpdatePolicy = BlueGreenUpdatePolicy;
class Endpoint extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::Endpoint', properties);
    }
}
exports.default = Endpoint;
Endpoint.Alarm = Alarm;
Endpoint.AutoRollbackConfig = AutoRollbackConfig;
Endpoint.TrafficRoutingConfig = TrafficRoutingConfig;
Endpoint.DeploymentConfig = DeploymentConfig;
Endpoint.CapacitySize = CapacitySize;
Endpoint.VariantProperty = VariantProperty;
Endpoint.BlueGreenUpdatePolicy = BlueGreenUpdatePolicy;
