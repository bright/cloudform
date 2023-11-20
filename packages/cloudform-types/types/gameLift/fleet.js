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
exports.TargetConfiguration = exports.ServerProcess = exports.ScalingPolicy = exports.RuntimeConfiguration = exports.ResourceCreationLimitPolicy = exports.LocationConfiguration = exports.LocationCapacity = exports.IpPermission = exports.CertificateConfiguration = exports.AnywhereConfiguration = void 0;
const resource_1 = require("../resource");
class AnywhereConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnywhereConfiguration = AnywhereConfiguration;
class CertificateConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CertificateConfiguration = CertificateConfiguration;
class IpPermission {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IpPermission = IpPermission;
class LocationCapacity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LocationCapacity = LocationCapacity;
class LocationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LocationConfiguration = LocationConfiguration;
class ResourceCreationLimitPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceCreationLimitPolicy = ResourceCreationLimitPolicy;
class RuntimeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuntimeConfiguration = RuntimeConfiguration;
class ScalingPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingPolicy = ScalingPolicy;
class ServerProcess {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServerProcess = ServerProcess;
class TargetConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetConfiguration = TargetConfiguration;
class Fleet extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::GameLift::Fleet', properties);
    }
}
exports.default = Fleet;
Fleet.AnywhereConfiguration = AnywhereConfiguration;
Fleet.CertificateConfiguration = CertificateConfiguration;
Fleet.IpPermission = IpPermission;
Fleet.LocationCapacity = LocationCapacity;
Fleet.LocationConfiguration = LocationConfiguration;
Fleet.ResourceCreationLimitPolicy = ResourceCreationLimitPolicy;
Fleet.RuntimeConfiguration = RuntimeConfiguration;
Fleet.ScalingPolicy = ScalingPolicy;
Fleet.ServerProcess = ServerProcess;
Fleet.TargetConfiguration = TargetConfiguration;
