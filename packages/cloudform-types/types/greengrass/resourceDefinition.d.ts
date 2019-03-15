import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SageMakerMachineLearningModelResourceData {
    DestinationPath: Value<string>;
    SageMakerJobArn: Value<string>;
    constructor(properties: SageMakerMachineLearningModelResourceData);
}
export declare class S3MachineLearningModelResourceData {
    DestinationPath: Value<string>;
    S3Uri: Value<string>;
    constructor(properties: S3MachineLearningModelResourceData);
}
export declare class SecretsManagerSecretResourceData {
    ARN: Value<string>;
    AdditionalStagingLabelsToDownload?: List<Value<string>>;
    constructor(properties: SecretsManagerSecretResourceData);
}
export declare class GroupOwnerSetting {
    AutoAddGroupOwner: Value<boolean>;
    GroupOwner?: Value<string>;
    constructor(properties: GroupOwnerSetting);
}
export declare class LocalDeviceResourceData {
    SourcePath: Value<string>;
    GroupOwnerSetting?: GroupOwnerSetting;
    constructor(properties: LocalDeviceResourceData);
}
export declare class ResourceDefinitionVersion {
    Resources: List<ResourceInstance>;
    constructor(properties: ResourceDefinitionVersion);
}
export declare class LocalVolumeResourceData {
    SourcePath: Value<string>;
    DestinationPath: Value<string>;
    GroupOwnerSetting?: GroupOwnerSetting;
    constructor(properties: LocalVolumeResourceData);
}
export declare class ResourceInstance {
    ResourceDataContainer: ResourceDataContainer;
    Id: Value<string>;
    Name: Value<string>;
    constructor(properties: ResourceInstance);
}
export declare class ResourceDataContainer {
    SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
    SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;
    LocalVolumeResourceData?: LocalVolumeResourceData;
    LocalDeviceResourceData?: LocalDeviceResourceData;
    S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;
    constructor(properties: ResourceDataContainer);
}
export interface ResourceDefinitionProperties {
    InitialVersion?: ResourceDefinitionVersion;
    Name: Value<string>;
}
export default class ResourceDefinition extends ResourceBase<ResourceDefinitionProperties> {
    static SageMakerMachineLearningModelResourceData: typeof SageMakerMachineLearningModelResourceData;
    static S3MachineLearningModelResourceData: typeof S3MachineLearningModelResourceData;
    static SecretsManagerSecretResourceData: typeof SecretsManagerSecretResourceData;
    static GroupOwnerSetting: typeof GroupOwnerSetting;
    static LocalDeviceResourceData: typeof LocalDeviceResourceData;
    static ResourceDefinitionVersion: typeof ResourceDefinitionVersion;
    static LocalVolumeResourceData: typeof LocalVolumeResourceData;
    static ResourceInstance: typeof ResourceInstance;
    static ResourceDataContainer: typeof ResourceDataContainer;
    constructor(properties: ResourceDefinitionProperties);
}
