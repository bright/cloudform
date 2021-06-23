import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class JupyterServerAppSettings {
    DefaultResourceSpec?: ResourceSpec;
    constructor(properties: JupyterServerAppSettings);
}
export declare class UserSettings {
    ExecutionRole?: Value<string>;
    JupyterServerAppSettings?: JupyterServerAppSettings;
    KernelGatewayAppSettings?: KernelGatewayAppSettings;
    SecurityGroups?: List<Value<string>>;
    SharingSettings?: SharingSettings;
    constructor(properties: UserSettings);
}
export declare class CustomImage {
    AppImageConfigName: Value<string>;
    ImageName: Value<string>;
    ImageVersionNumber?: Value<number>;
    constructor(properties: CustomImage);
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
export declare class SharingSettings {
    NotebookOutputOption?: Value<string>;
    S3KmsKeyId?: Value<string>;
    S3OutputPath?: Value<string>;
    constructor(properties: SharingSettings);
}
export interface DomainProperties {
    AppNetworkAccessType?: Value<string>;
    AuthMode: Value<string>;
    DefaultUserSettings: UserSettings;
    DomainName: Value<string>;
    KmsKeyId?: Value<string>;
    SubnetIds: List<Value<string>>;
    Tags?: List<ResourceTag>;
    VpcId: Value<string>;
}
export default class Domain extends ResourceBase<DomainProperties> {
    static JupyterServerAppSettings: typeof JupyterServerAppSettings;
    static UserSettings: typeof UserSettings;
    static CustomImage: typeof CustomImage;
    static ResourceSpec: typeof ResourceSpec;
    static KernelGatewayAppSettings: typeof KernelGatewayAppSettings;
    static SharingSettings: typeof SharingSettings;
    constructor(properties: DomainProperties);
}
