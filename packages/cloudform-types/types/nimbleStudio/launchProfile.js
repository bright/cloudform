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
exports.VolumeConfiguration = exports.StreamingSessionStorageRoot = exports.StreamConfigurationSessionStorage = exports.StreamConfigurationSessionBackup = exports.StreamConfiguration = void 0;
const resource_1 = require("../resource");
class StreamConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StreamConfiguration = StreamConfiguration;
class StreamConfigurationSessionBackup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StreamConfigurationSessionBackup = StreamConfigurationSessionBackup;
class StreamConfigurationSessionStorage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StreamConfigurationSessionStorage = StreamConfigurationSessionStorage;
class StreamingSessionStorageRoot {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StreamingSessionStorageRoot = StreamingSessionStorageRoot;
class VolumeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VolumeConfiguration = VolumeConfiguration;
class LaunchProfile extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::NimbleStudio::LaunchProfile', properties);
    }
}
exports.default = LaunchProfile;
LaunchProfile.StreamConfiguration = StreamConfiguration;
LaunchProfile.StreamConfigurationSessionBackup = StreamConfigurationSessionBackup;
LaunchProfile.StreamConfigurationSessionStorage = StreamConfigurationSessionStorage;
LaunchProfile.StreamingSessionStorageRoot = StreamingSessionStorageRoot;
LaunchProfile.VolumeConfiguration = VolumeConfiguration;
