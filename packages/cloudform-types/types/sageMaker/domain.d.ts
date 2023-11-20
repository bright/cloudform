import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CustomImage {
    ImageName: Value<string>;
    AppImageConfigName: Value<string>;
    ImageVersionNumber?: Value<number>;
    constructor(properties: CustomImage);
}
export declare class DefaultSpaceSettings {
    SecurityGroups?: List<Value<string>>;
    KernelGatewayAppSettings?: KernelGatewayAppSettings;
    JupyterServerAppSettings?: JupyterServerAppSettings;
    ExecutionRole: Value<string>;
    constructor(properties: DefaultSpaceSettings);
}
export declare class DomainSettings {
    RStudioServerProDomainSettings?: RStudioServerProDomainSettings;
    SecurityGroupIds?: List<Value<string>>;
    constructor(properties: DomainSettings);
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
export declare class RSessionAppSettings {
    CustomImages?: List<CustomImage>;
    DefaultResourceSpec?: ResourceSpec;
    constructor(properties: RSessionAppSettings);
}
export declare class RStudioServerProAppSettings {
    AccessStatus?: Value<string>;
    UserGroup?: Value<string>;
    constructor(properties: RStudioServerProAppSettings);
}
export declare class RStudioServerProDomainSettings {
    DomainExecutionRoleArn: Value<string>;
    RStudioConnectUrl?: Value<string>;
    DefaultResourceSpec?: ResourceSpec;
    RStudioPackageManagerUrl?: Value<string>;
    constructor(properties: RStudioServerProDomainSettings);
}
export declare class ResourceSpec {
    SageMakerImageArn?: Value<string>;
    InstanceType?: Value<string>;
    LifecycleConfigArn?: Value<string>;
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
    RSessionAppSettings?: RSessionAppSettings;
    JupyterServerAppSettings?: JupyterServerAppSettings;
    ExecutionRole: Value<string>;
    SharingSettings?: SharingSettings;
    constructor(properties: UserSettings);
}
export interface DomainProperties {
    AppNetworkAccessType?: Value<string>;
    DefaultSpaceSettings?: DefaultSpaceSettings;
    KmsKeyId?: Value<string>;
    VpcId: Value<string>;
    DomainName: Value<string>;
    AppSecurityGroupManagement?: Value<string>;
    DefaultUserSettings: UserSettings;
    SubnetIds: List<Value<string>>;
    AuthMode: Value<string>;
    Tags?: List<ResourceTag>;
    DomainSettings?: DomainSettings;
}
export default class Domain extends ResourceBase<DomainProperties> {
    static CustomImage: typeof CustomImage;
    static DefaultSpaceSettings: typeof DefaultSpaceSettings;
    static DomainSettings: typeof DomainSettings;
    static JupyterServerAppSettings: typeof JupyterServerAppSettings;
    static KernelGatewayAppSettings: typeof KernelGatewayAppSettings;
    static RSessionAppSettings: typeof RSessionAppSettings;
    static RStudioServerProAppSettings: typeof RStudioServerProAppSettings;
    static RStudioServerProDomainSettings: typeof RStudioServerProDomainSettings;
    static ResourceSpec: typeof ResourceSpec;
    static SharingSettings: typeof SharingSettings;
    static UserSettings: typeof UserSettings;
    constructor(properties: DomainProperties);
}
