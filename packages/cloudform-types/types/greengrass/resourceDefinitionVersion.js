"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ResourceInstance {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceInstance = ResourceInstance;
class LocalDeviceResourceData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LocalDeviceResourceData = LocalDeviceResourceData;
class LocalVolumeResourceData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LocalVolumeResourceData = LocalVolumeResourceData;
class SecretsManagerSecretResourceData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SecretsManagerSecretResourceData = SecretsManagerSecretResourceData;
class SageMakerMachineLearningModelResourceData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SageMakerMachineLearningModelResourceData = SageMakerMachineLearningModelResourceData;
class ResourceDownloadOwnerSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceDownloadOwnerSetting = ResourceDownloadOwnerSetting;
class S3MachineLearningModelResourceData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3MachineLearningModelResourceData = S3MachineLearningModelResourceData;
class ResourceDataContainer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceDataContainer = ResourceDataContainer;
class GroupOwnerSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GroupOwnerSetting = GroupOwnerSetting;
class ResourceDefinitionVersion extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Greengrass::ResourceDefinitionVersion', properties);
    }
}
exports.default = ResourceDefinitionVersion;
ResourceDefinitionVersion.ResourceInstance = ResourceInstance;
ResourceDefinitionVersion.LocalDeviceResourceData = LocalDeviceResourceData;
ResourceDefinitionVersion.LocalVolumeResourceData = LocalVolumeResourceData;
ResourceDefinitionVersion.SecretsManagerSecretResourceData = SecretsManagerSecretResourceData;
ResourceDefinitionVersion.SageMakerMachineLearningModelResourceData = SageMakerMachineLearningModelResourceData;
ResourceDefinitionVersion.ResourceDownloadOwnerSetting = ResourceDownloadOwnerSetting;
ResourceDefinitionVersion.S3MachineLearningModelResourceData = S3MachineLearningModelResourceData;
ResourceDefinitionVersion.ResourceDataContainer = ResourceDataContainer;
ResourceDefinitionVersion.GroupOwnerSetting = GroupOwnerSetting;
