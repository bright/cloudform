import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoadBalancer {
    ContainerName?: Value<string>;
    ContainerPort: Value<number>;
    LoadBalancerName?: Value<string>;
    TargetGroupArn?: Value<string>;
    constructor(properties: LoadBalancer);
}
export declare class PlacementStrategy {
    Field?: Value<string>;
    Type: Value<string>;
    constructor(properties: PlacementStrategy);
}
export declare class DeploymentConfiguration {
    MaximumPercent?: Value<number>;
    MinimumHealthyPercent?: Value<number>;
    constructor(properties: DeploymentConfiguration);
}
export declare class PlacementConstraint {
    Expression?: Value<string>;
    Type: Value<string>;
    constructor(properties: PlacementConstraint);
}
export declare class AwsVpcConfiguration {
    AssignPublicIp?: Value<string>;
    SecurityGroups?: List<Value<string>>;
    Subnets: List<Value<string>>;
    constructor(properties: AwsVpcConfiguration);
}
export declare class NetworkConfiguration {
    AwsvpcConfiguration?: AwsVpcConfiguration;
    constructor(properties: NetworkConfiguration);
}
export declare class ServiceRegistry {
    ContainerName?: Value<string>;
    ContainerPort?: Value<number>;
    Port?: Value<number>;
    RegistryArn?: Value<string>;
    constructor(properties: ServiceRegistry);
}
export interface ServiceProperties {
    Cluster?: Value<string>;
    DeploymentConfiguration?: DeploymentConfiguration;
    DesiredCount?: Value<number>;
    EnableECSManagedTags?: Value<boolean>;
    HealthCheckGracePeriodSeconds?: Value<number>;
    LaunchType?: Value<string>;
    LoadBalancers?: List<LoadBalancer>;
    NetworkConfiguration?: NetworkConfiguration;
    PlacementConstraints?: List<PlacementConstraint>;
    PlacementStrategies?: List<PlacementStrategy>;
    PlatformVersion?: Value<string>;
    PropagateTags?: Value<string>;
    Role?: Value<string>;
    SchedulingStrategy?: Value<string>;
    ServiceName?: Value<string>;
    ServiceRegistries?: List<ServiceRegistry>;
    Tags?: List<ResourceTag>;
    TaskDefinition: Value<string>;
}
export default class Service extends ResourceBase<ServiceProperties> {
    static LoadBalancer: typeof LoadBalancer;
    static PlacementStrategy: typeof PlacementStrategy;
    static DeploymentConfiguration: typeof DeploymentConfiguration;
    static PlacementConstraint: typeof PlacementConstraint;
    static AwsVpcConfiguration: typeof AwsVpcConfiguration;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static ServiceRegistry: typeof ServiceRegistry;
    constructor(properties: ServiceProperties);
}
