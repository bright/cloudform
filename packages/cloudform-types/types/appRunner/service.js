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
class ImageConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ImageConfiguration = ImageConfiguration;
class InstanceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceConfiguration = InstanceConfiguration;
class AuthenticationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuthenticationConfiguration = AuthenticationConfiguration;
class KeyValuePair {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyValuePair = KeyValuePair;
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
class CodeConfigurationValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CodeConfigurationValues = CodeConfigurationValues;
class SourceCodeVersion {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceCodeVersion = SourceCodeVersion;
class ImageRepository {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ImageRepository = ImageRepository;
class SourceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceConfiguration = SourceConfiguration;
class CodeRepository {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CodeRepository = CodeRepository;
class CodeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CodeConfiguration = CodeConfiguration;
class Service extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppRunner::Service', properties);
    }
}
exports.default = Service;
Service.ImageConfiguration = ImageConfiguration;
Service.InstanceConfiguration = InstanceConfiguration;
Service.AuthenticationConfiguration = AuthenticationConfiguration;
Service.KeyValuePair = KeyValuePair;
Service.EncryptionConfiguration = EncryptionConfiguration;
Service.HealthCheckConfiguration = HealthCheckConfiguration;
Service.CodeConfigurationValues = CodeConfigurationValues;
Service.SourceCodeVersion = SourceCodeVersion;
Service.ImageRepository = ImageRepository;
Service.SourceConfiguration = SourceConfiguration;
Service.CodeRepository = CodeRepository;
Service.CodeConfiguration = CodeConfiguration;
