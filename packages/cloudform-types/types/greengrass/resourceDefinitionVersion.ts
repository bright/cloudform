/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ResourceInstance {
    ResourceDataContainer!: ResourceDataContainer
    Id!: Value<string>
    Name!: Value<string>

    constructor(properties: ResourceInstance) {
        Object.assign(this, properties)
    }
}

export class SageMakerMachineLearningModelResourceData {
    DestinationPath!: Value<string>
    SageMakerJobArn!: Value<string>

    constructor(properties: SageMakerMachineLearningModelResourceData) {
        Object.assign(this, properties)
    }
}

export class LocalDeviceResourceData {
    SourcePath!: Value<string>
    GroupOwnerSetting?: GroupOwnerSetting

    constructor(properties: LocalDeviceResourceData) {
        Object.assign(this, properties)
    }
}

export class S3MachineLearningModelResourceData {
    DestinationPath!: Value<string>
    S3Uri!: Value<string>

    constructor(properties: S3MachineLearningModelResourceData) {
        Object.assign(this, properties)
    }
}

export class LocalVolumeResourceData {
    SourcePath!: Value<string>
    DestinationPath!: Value<string>
    GroupOwnerSetting?: GroupOwnerSetting

    constructor(properties: LocalVolumeResourceData) {
        Object.assign(this, properties)
    }
}

export class ResourceDataContainer {
    SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData
    SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData
    LocalVolumeResourceData?: LocalVolumeResourceData
    LocalDeviceResourceData?: LocalDeviceResourceData
    S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData

    constructor(properties: ResourceDataContainer) {
        Object.assign(this, properties)
    }
}

export class GroupOwnerSetting {
    AutoAddGroupOwner!: Value<boolean>
    GroupOwner?: Value<string>

    constructor(properties: GroupOwnerSetting) {
        Object.assign(this, properties)
    }
}

export class SecretsManagerSecretResourceData {
    ARN!: Value<string>
    AdditionalStagingLabelsToDownload?: List<Value<string>>

    constructor(properties: SecretsManagerSecretResourceData) {
        Object.assign(this, properties)
    }
}

export interface ResourceDefinitionVersionProperties {
    Resources: List<ResourceInstance>
    ResourceDefinitionId: Value<string>
}

export default class ResourceDefinitionVersion extends ResourceBase<ResourceDefinitionVersionProperties> {
    static ResourceInstance = ResourceInstance
    static SageMakerMachineLearningModelResourceData = SageMakerMachineLearningModelResourceData
    static LocalDeviceResourceData = LocalDeviceResourceData
    static S3MachineLearningModelResourceData = S3MachineLearningModelResourceData
    static LocalVolumeResourceData = LocalVolumeResourceData
    static ResourceDataContainer = ResourceDataContainer
    static GroupOwnerSetting = GroupOwnerSetting
    static SecretsManagerSecretResourceData = SecretsManagerSecretResourceData

    constructor(properties: ResourceDefinitionVersionProperties) {
        super('AWS::Greengrass::ResourceDefinitionVersion', properties)
    }
}
