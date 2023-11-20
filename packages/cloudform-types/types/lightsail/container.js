"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicEndpoint = exports.PublicDomainName = exports.PrivateRegistryAccess = exports.PortInfo = exports.HealthCheckConfig = exports.EnvironmentVariable = exports.EcrImagePullerRole = exports.ContainerServiceDeployment = exports.ContainerInner = void 0;
const resource_1 = require("../resource");
class ContainerInner {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerInner = ContainerInner;
class ContainerServiceDeployment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerServiceDeployment = ContainerServiceDeployment;
class EcrImagePullerRole {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EcrImagePullerRole = EcrImagePullerRole;
class EnvironmentVariable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EnvironmentVariable = EnvironmentVariable;
class HealthCheckConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HealthCheckConfig = HealthCheckConfig;
class PortInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortInfo = PortInfo;
class PrivateRegistryAccess {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrivateRegistryAccess = PrivateRegistryAccess;
class PublicDomainName {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PublicDomainName = PublicDomainName;
class PublicEndpoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PublicEndpoint = PublicEndpoint;
class Container extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Lightsail::Container', properties);
    }
}
exports.default = Container;
Container.Container = ContainerInner;
Container.ContainerServiceDeployment = ContainerServiceDeployment;
Container.EcrImagePullerRole = EcrImagePullerRole;
Container.EnvironmentVariable = EnvironmentVariable;
Container.HealthCheckConfig = HealthCheckConfig;
Container.PortInfo = PortInfo;
Container.PrivateRegistryAccess = PrivateRegistryAccess;
Container.PublicDomainName = PublicDomainName;
Container.PublicEndpoint = PublicEndpoint;
