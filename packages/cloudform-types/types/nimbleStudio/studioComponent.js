"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudioComponentInitializationScript = exports.StudioComponentConfiguration = exports.SharedFileSystemConfiguration = exports.ScriptParameterKeyValue = exports.LicenseServiceConfiguration = exports.ComputeFarmConfiguration = exports.ActiveDirectoryConfiguration = exports.ActiveDirectoryComputerAttribute = void 0;
const resource_1 = require("../resource");
class ActiveDirectoryComputerAttribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActiveDirectoryComputerAttribute = ActiveDirectoryComputerAttribute;
class ActiveDirectoryConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActiveDirectoryConfiguration = ActiveDirectoryConfiguration;
class ComputeFarmConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComputeFarmConfiguration = ComputeFarmConfiguration;
class LicenseServiceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LicenseServiceConfiguration = LicenseServiceConfiguration;
class ScriptParameterKeyValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScriptParameterKeyValue = ScriptParameterKeyValue;
class SharedFileSystemConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SharedFileSystemConfiguration = SharedFileSystemConfiguration;
class StudioComponentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StudioComponentConfiguration = StudioComponentConfiguration;
class StudioComponentInitializationScript {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StudioComponentInitializationScript = StudioComponentInitializationScript;
class StudioComponent extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::NimbleStudio::StudioComponent', properties);
    }
}
exports.default = StudioComponent;
StudioComponent.ActiveDirectoryComputerAttribute = ActiveDirectoryComputerAttribute;
StudioComponent.ActiveDirectoryConfiguration = ActiveDirectoryConfiguration;
StudioComponent.ComputeFarmConfiguration = ComputeFarmConfiguration;
StudioComponent.LicenseServiceConfiguration = LicenseServiceConfiguration;
StudioComponent.ScriptParameterKeyValue = ScriptParameterKeyValue;
StudioComponent.SharedFileSystemConfiguration = SharedFileSystemConfiguration;
StudioComponent.StudioComponentConfiguration = StudioComponentConfiguration;
StudioComponent.StudioComponentInitializationScript = StudioComponentInitializationScript;
