import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VpcConfig {
    Subnets: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export declare class ContainerDefinition {
    ContainerHostname?: Value<string>;
    Environment?: {
        [key: string]: any;
    };
    ModelDataUrl?: Value<string>;
    Image: Value<string>;
    constructor(properties: ContainerDefinition);
}
export interface ModelProperties {
    ExecutionRoleArn: Value<string>;
    PrimaryContainer?: ContainerDefinition;
    ModelName?: Value<string>;
    VpcConfig?: VpcConfig;
    Containers?: List<ContainerDefinition>;
    Tags?: List<ResourceTag>;
}
export default class Model extends ResourceBase<ModelProperties> {
    static VpcConfig: typeof VpcConfig;
    static ContainerDefinition: typeof ContainerDefinition;
    constructor(properties: ModelProperties);
}
