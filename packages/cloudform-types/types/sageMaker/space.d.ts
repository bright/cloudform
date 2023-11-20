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
export declare class ResourceSpec {
    SageMakerImageArn?: Value<string>;
    InstanceType?: Value<string>;
    SageMakerImageVersionArn?: Value<string>;
    constructor(properties: ResourceSpec);
}
export declare class SpaceSettings {
    KernelGatewayAppSettings?: KernelGatewayAppSettings;
    JupyterServerAppSettings?: JupyterServerAppSettings;
    constructor(properties: SpaceSettings);
}
export interface SpaceProperties {
    DomainId: Value<string>;
    SpaceName: Value<string>;
    SpaceSettings?: SpaceSettings;
    Tags?: List<ResourceTag>;
}
export default class Space extends ResourceBase<SpaceProperties> {
    static CustomImage: typeof CustomImage;
    static JupyterServerAppSettings: typeof JupyterServerAppSettings;
    static KernelGatewayAppSettings: typeof KernelGatewayAppSettings;
    static ResourceSpec: typeof ResourceSpec;
    static SpaceSettings: typeof SpaceSettings;
    constructor(properties: SpaceProperties);
}
