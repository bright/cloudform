import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ResourcesVpcConfig {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    constructor(properties: ResourcesVpcConfig);
}
export interface ClusterProperties {
    Version?: Value<string>;
    RoleArn: Value<string>;
    ResourcesVpcConfig: ResourcesVpcConfig;
    Name?: Value<string>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static ResourcesVpcConfig: typeof ResourcesVpcConfig;
    constructor(properties: ClusterProperties);
}
