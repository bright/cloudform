import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VpcConfig {
    Subnets: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export declare class ContainerDefinition {
    ContainerHostname?: Value<string>;
    Environment?: any;
    ModelDataUrl?: Value<string>;
    Image: Value<string>;
    constructor(properties: ContainerDefinition);
}
export interface ModelProperties {
    ExecutionRoleArn: Value<string>;
    PrimaryContainer: ContainerDefinition;
    ModelName?: Value<string>;
    VpcConfig?: VpcConfig;
    Tags?: ResourceTag[];
}
export default class Model extends ResourceBase {
    static VpcConfig: typeof VpcConfig;
    static ContainerDefinition: typeof ContainerDefinition;
    constructor(properties?: ModelProperties);
}
