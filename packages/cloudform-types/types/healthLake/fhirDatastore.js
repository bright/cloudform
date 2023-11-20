"use strict";
/* Generated from:
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SseConfiguration = exports.PreloadDataConfig = exports.KmsEncryptionConfig = exports.IdentityProviderConfiguration = exports.CreatedAt = void 0;
const resource_1 = require("../resource");
class CreatedAt {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CreatedAt = CreatedAt;
class IdentityProviderConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IdentityProviderConfiguration = IdentityProviderConfiguration;
class KmsEncryptionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KmsEncryptionConfig = KmsEncryptionConfig;
class PreloadDataConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PreloadDataConfig = PreloadDataConfig;
class SseConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SseConfiguration = SseConfiguration;
class FHIRDatastore extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::HealthLake::FHIRDatastore', properties);
    }
}
exports.default = FHIRDatastore;
FHIRDatastore.CreatedAt = CreatedAt;
FHIRDatastore.IdentityProviderConfiguration = IdentityProviderConfiguration;
FHIRDatastore.KmsEncryptionConfig = KmsEncryptionConfig;
FHIRDatastore.PreloadDataConfig = PreloadDataConfig;
FHIRDatastore.SseConfiguration = SseConfiguration;
