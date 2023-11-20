import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ClusterLogging {
    EnabledTypes?: List<LoggingTypeConfig>;
    constructor(properties: ClusterLogging);
}
export declare class ControlPlanePlacement {
    GroupName?: Value<string>;
    constructor(properties: ControlPlanePlacement);
}
export declare class EncryptionConfig {
    Resources?: List<Value<string>>;
    Provider?: Provider;
    constructor(properties: EncryptionConfig);
}
export declare class KubernetesNetworkConfig {
    ServiceIpv4Cidr?: Value<string>;
    ServiceIpv6Cidr?: Value<string>;
    IpFamily?: Value<string>;
    constructor(properties: KubernetesNetworkConfig);
}
export declare class Logging {
    ClusterLogging?: ClusterLogging;
    constructor(properties: Logging);
}
export declare class LoggingTypeConfig {
    Type?: Value<string>;
    constructor(properties: LoggingTypeConfig);
}
export declare class OutpostConfig {
    OutpostArns: List<Value<string>>;
    ControlPlanePlacement?: ControlPlanePlacement;
    ControlPlaneInstanceType: Value<string>;
    constructor(properties: OutpostConfig);
}
export declare class Provider {
    KeyArn?: Value<string>;
    constructor(properties: Provider);
}
export declare class ResourcesVpcConfig {
    EndpointPublicAccess?: Value<boolean>;
    PublicAccessCidrs?: List<Value<string>>;
    EndpointPrivateAccess?: Value<boolean>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    constructor(properties: ResourcesVpcConfig);
}
export interface ClusterProperties {
    Logging?: Logging;
    Version?: Value<string>;
    OutpostConfig?: OutpostConfig;
    EncryptionConfig?: List<EncryptionConfig>;
    KubernetesNetworkConfig?: KubernetesNetworkConfig;
    RoleArn: Value<string>;
    ResourcesVpcConfig: ResourcesVpcConfig;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static ClusterLogging: typeof ClusterLogging;
    static ControlPlanePlacement: typeof ControlPlanePlacement;
    static EncryptionConfig: typeof EncryptionConfig;
    static KubernetesNetworkConfig: typeof KubernetesNetworkConfig;
    static Logging: typeof Logging;
    static LoggingTypeConfig: typeof LoggingTypeConfig;
    static OutpostConfig: typeof OutpostConfig;
    static Provider: typeof Provider;
    static ResourcesVpcConfig: typeof ResourcesVpcConfig;
    constructor(properties: ClusterProperties);
}
