import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class JupyterServerAppSettings {
    DefaultResourceSpec?: ResourceSpec;
    constructor(properties: JupyterServerAppSettings);
}
export declare class ResourceSpec {
    InstanceType?: Value<string>;
    SageMakerImageArn?: Value<string>;
    SageMakerImageVersionArn?: Value<string>;
    constructor(properties: ResourceSpec);
}
export declare class KernelGatewayAppSettings {
    CustomImages?: List<CustomImage>;
    DefaultResourceSpec?: ResourceSpec;
    constructor(properties: KernelGatewayAppSettings);
}
export declare class CustomImage {
    AppImageConfigName: Value<string>;
    ImageName: Value<string>;
    ImageVersionNumber?: Value<number>;
    constructor(properties: CustomImage);
}
export declare class SharingSettings {
    NotebookOutputOption?: Value<string>;
    S3KmsKeyId?: Value<string>;
    S3OutputPath?: Value<string>;
    constructor(properties: SharingSettings);
}
export declare class UserSettings {
    ExecutionRole?: Value<string>;
    JupyterServerAppSettings?: JupyterServerAppSettings;
    KernelGatewayAppSettings?: KernelGatewayAppSettings;
    SecurityGroups?: List<Value<string>>;
    SharingSettings?: SharingSettings;
    constructor(properties: UserSettings);
}
export interface UserProfileProperties {
    DomainId: Value<string>;
    SingleSignOnUserIdentifier?: Value<string>;
    SingleSignOnUserValue?: Value<string>;
    UserProfileName: Value<string>;
    UserSettings?: UserSettings;
    Tags?: List<ResourceTag>;
}
export default class UserProfile extends ResourceBase<UserProfileProperties> {
    static JupyterServerAppSettings: typeof JupyterServerAppSettings;
    static ResourceSpec: typeof ResourceSpec;
    static KernelGatewayAppSettings: typeof KernelGatewayAppSettings;
    static CustomImage: typeof CustomImage;
    static SharingSettings: typeof SharingSettings;
    static UserSettings: typeof UserSettings;
    constructor(properties: UserProfileProperties);
}
