import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Provider {
    KeyArn?: Value<string>;
    constructor(properties: Provider);
}
export declare class EncryptionConfig {
    Resources?: List<Value<string>>;
    Provider?: Provider;
    constructor(properties: EncryptionConfig);
}
export declare class KubernetesNetworkConfig {
    ServiceIpv4Cidr?: Value<string>;
    constructor(properties: KubernetesNetworkConfig);
}
export declare class ResourcesVpcConfig {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    constructor(properties: ResourcesVpcConfig);
}
export interface ClusterProperties {
    Version?: Value<string>;
    EncryptionConfig?: List<EncryptionConfig>;
    RoleArn: Value<string>;
    ResourcesVpcConfig: ResourcesVpcConfig;
    KubernetesNetworkConfig?: KubernetesNetworkConfig;
    Name?: Value<string>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static Provider: typeof Provider;
    static EncryptionConfig: typeof EncryptionConfig;
    static KubernetesNetworkConfig: typeof KubernetesNetworkConfig;
    static ResourcesVpcConfig: typeof ResourcesVpcConfig;
    constructor(properties: ClusterProperties);
}
