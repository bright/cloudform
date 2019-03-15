"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SageMakerMachineLearningModelResourceData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SageMakerMachineLearningModelResourceData = SageMakerMachineLearningModelResourceData;
class S3MachineLearningModelResourceData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3MachineLearningModelResourceData = S3MachineLearningModelResourceData;
class SecretsManagerSecretResourceData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SecretsManagerSecretResourceData = SecretsManagerSecretResourceData;
class GroupOwnerSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GroupOwnerSetting = GroupOwnerSetting;
class LocalDeviceResourceData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LocalDeviceResourceData = LocalDeviceResourceData;
class ResourceDefinitionVersion {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceDefinitionVersion = ResourceDefinitionVersion;
class LocalVolumeResourceData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LocalVolumeResourceData = LocalVolumeResourceData;
class ResourceInstance {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceInstance = ResourceInstance;
class ResourceDataContainer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceDataContainer = ResourceDataContainer;
class ResourceDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Greengrass::ResourceDefinition', properties);
    }
}
ResourceDefinition.SageMakerMachineLearningModelResourceData = SageMakerMachineLearningModelResourceData;
ResourceDefinition.S3MachineLearningModelResourceData = S3MachineLearningModelResourceData;
ResourceDefinition.SecretsManagerSecretResourceData = SecretsManagerSecretResourceData;
ResourceDefinition.GroupOwnerSetting = GroupOwnerSetting;
ResourceDefinition.LocalDeviceResourceData = LocalDeviceResourceData;
ResourceDefinition.ResourceDefinitionVersion = ResourceDefinitionVersion;
ResourceDefinition.LocalVolumeResourceData = LocalVolumeResourceData;
ResourceDefinition.ResourceInstance = ResourceInstance;
ResourceDefinition.ResourceDataContainer = ResourceDataContainer;
exports.default = ResourceDefinition;
