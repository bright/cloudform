import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CustomImage {
    ImageName: Value<string>;
    AppImageConfigName: Value<string>;
    ImageVersionNumber?: Value<number>;
    constructor(properties: CustomImage);
}
export declare class JupyterServerAppSettings {
    DefaultResourceSpec?: ResourceSpec;
    constructor(properties: JupyterServerAppSettings);
}
export declare class KernelGatewayAppSettings {
    CustomImages?: List<CustomImage>;
    DefaultResourceSpec?: ResourceSpec;
    constructor(properties: KernelGatewayAppSettings);
}
export declare class RStudioServerProAppSettings {
    AccessStatus?: Value<string>;
    UserGroup?: Value<string>;
    constructor(properties: RStudioServerProAppSettings);
}
export declare class ResourceSpec {
    SageMakerImageArn?: Value<string>;
    InstanceType?: Value<string>;
    SageMakerImageVersionArn?: Value<string>;
    constructor(properties: ResourceSpec);
}
export declare class SharingSettings {
    NotebookOutputOption?: Value<string>;
    S3KmsKeyId?: Value<string>;
    S3OutputPath?: Value<string>;
    constructor(properties: SharingSettings);
}
export declare class UserSettings {
    SecurityGroups?: List<Value<string>>;
    KernelGatewayAppSettings?: KernelGatewayAppSettings;
    RStudioServerProAppSettings?: RStudioServerProAppSettings;
    JupyterServerAppSettings?: JupyterServerAppSettings;
    ExecutionRole?: Value<string>;
    SharingSettings?: SharingSettings;
    constructor(properties: UserSettings);
}
export interface UserProfileProperties {
    DomainId: Value<string>;
    SingleSignOnUserValue?: Value<string>;
    UserSettings?: UserSettings;
    SingleSignOnUserIdentifier?: Value<string>;
    UserProfileName: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class UserProfile extends ResourceBase<UserProfileProperties> {
    static CustomImage: typeof CustomImage;
    static JupyterServerAppSettings: typeof JupyterServerAppSettings;
    static KernelGatewayAppSettings: typeof KernelGatewayAppSettings;
    static RStudioServerProAppSettings: typeof RStudioServerProAppSettings;
    static ResourceSpec: typeof ResourceSpec;
    static SharingSettings: typeof SharingSettings;
    static UserSettings: typeof UserSettings;
    constructor(properties: UserProfileProperties);
}
