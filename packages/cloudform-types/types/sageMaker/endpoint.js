"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantProperty = exports.TrafficRoutingConfig = exports.RollingUpdatePolicy = exports.DeploymentConfig = exports.CapacitySize = exports.BlueGreenUpdatePolicy = exports.AutoRollbackConfig = exports.Alarm = void 0;
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
class BlueGreenUpdatePolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlueGreenUpdatePolicy = BlueGreenUpdatePolicy;
class CapacitySize {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacitySize = CapacitySize;
class DeploymentConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentConfig = DeploymentConfig;
class RollingUpdatePolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RollingUpdatePolicy = RollingUpdatePolicy;
class TrafficRoutingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrafficRoutingConfig = TrafficRoutingConfig;
class VariantProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VariantProperty = VariantProperty;
class Endpoint extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::Endpoint', properties);
    }
}
exports.default = Endpoint;
Endpoint.Alarm = Alarm;
Endpoint.AutoRollbackConfig = AutoRollbackConfig;
Endpoint.BlueGreenUpdatePolicy = BlueGreenUpdatePolicy;
Endpoint.CapacitySize = CapacitySize;
Endpoint.DeploymentConfig = DeploymentConfig;
Endpoint.RollingUpdatePolicy = RollingUpdatePolicy;
Endpoint.TrafficRoutingConfig = TrafficRoutingConfig;
Endpoint.VariantProperty = VariantProperty;
