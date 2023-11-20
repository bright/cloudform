"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceConfiguration = exports.SourceCodeVersion = exports.ServiceObservabilityConfiguration = exports.NetworkConfiguration = exports.KeyValuePair = exports.InstanceConfiguration = exports.IngressConfiguration = exports.ImageRepository = exports.ImageConfiguration = exports.HealthCheckConfiguration = exports.EncryptionConfiguration = exports.EgressConfiguration = exports.CodeRepository = exports.CodeConfigurationValues = exports.CodeConfiguration = exports.AuthenticationConfiguration = void 0;
const resource_1 = require("../resource");
class AuthenticationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuthenticationConfiguration = AuthenticationConfiguration;
class CodeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CodeConfiguration = CodeConfiguration;
class CodeConfigurationValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CodeConfigurationValues = CodeConfigurationValues;
class CodeRepository {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CodeRepository = CodeRepository;
class EgressConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EgressConfiguration = EgressConfiguration;
class EncryptionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionConfiguration = EncryptionConfiguration;
class HealthCheckConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HealthCheckConfiguration = HealthCheckConfiguration;
class ImageConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ImageConfiguration = ImageConfiguration;
class ImageRepository {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ImageRepository = ImageRepository;
class IngressConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IngressConfiguration = IngressConfiguration;
class InstanceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceConfiguration = InstanceConfiguration;
class KeyValuePair {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyValuePair = KeyValuePair;
class NetworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfiguration = NetworkConfiguration;
class ServiceObservabilityConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServiceObservabilityConfiguration = ServiceObservabilityConfiguration;
class SourceCodeVersion {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceCodeVersion = SourceCodeVersion;
class SourceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceConfiguration = SourceConfiguration;
class Service extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppRunner::Service', properties);
    }
}
exports.default = Service;
Service.AuthenticationConfiguration = AuthenticationConfiguration;
Service.CodeConfiguration = CodeConfiguration;
Service.CodeConfigurationValues = CodeConfigurationValues;
Service.CodeRepository = CodeRepository;
Service.EgressConfiguration = EgressConfiguration;
Service.EncryptionConfiguration = EncryptionConfiguration;
Service.HealthCheckConfiguration = HealthCheckConfiguration;
Service.ImageConfiguration = ImageConfiguration;
Service.ImageRepository = ImageRepository;
Service.IngressConfiguration = IngressConfiguration;
Service.InstanceConfiguration = InstanceConfiguration;
Service.KeyValuePair = KeyValuePair;
Service.NetworkConfiguration = NetworkConfiguration;
Service.ServiceObservabilityConfiguration = ServiceObservabilityConfiguration;
Service.SourceCodeVersion = SourceCodeVersion;
Service.SourceConfiguration = SourceConfiguration;
