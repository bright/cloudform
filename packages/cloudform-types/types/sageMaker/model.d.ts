import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ContainerDefinition {
    ImageConfig?: ImageConfig;
    InferenceSpecificationName?: Value<string>;
    ContainerHostname?: Value<string>;
    ModelPackageName?: Value<string>;
    Mode?: Value<string>;
    Environment?: {
        [key: string]: any;
    };
    ModelDataUrl?: Value<string>;
    Image?: Value<string>;
    MultiModelConfig?: MultiModelConfig;
    constructor(properties: ContainerDefinition);
}
export declare class ImageConfig {
    RepositoryAuthConfig?: RepositoryAuthConfig;
    RepositoryAccessMode: Value<string>;
    constructor(properties: ImageConfig);
}
export declare class InferenceExecutionConfig {
    Mode: Value<string>;
    constructor(properties: InferenceExecutionConfig);
}
export declare class MultiModelConfig {
    ModelCacheSetting?: Value<string>;
    constructor(properties: MultiModelConfig);
}
export declare class RepositoryAuthConfig {
    RepositoryCredentialsProviderArn: Value<string>;
    constructor(properties: RepositoryAuthConfig);
}
export declare class VpcConfig {
    Subnets: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface ModelProperties {
    ExecutionRoleArn: Value<string>;
    EnableNetworkIsolation?: Value<boolean>;
    PrimaryContainer?: ContainerDefinition;
    ModelName?: Value<string>;
    VpcConfig?: VpcConfig;
    Containers?: List<ContainerDefinition>;
    InferenceExecutionConfig?: InferenceExecutionConfig;
    Tags?: List<ResourceTag>;
}
export default class Model extends ResourceBase<ModelProperties> {
    static ContainerDefinition: typeof ContainerDefinition;
    static ImageConfig: typeof ImageConfig;
    static InferenceExecutionConfig: typeof InferenceExecutionConfig;
    static MultiModelConfig: typeof MultiModelConfig;
    static RepositoryAuthConfig: typeof RepositoryAuthConfig;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: ModelProperties);
}
