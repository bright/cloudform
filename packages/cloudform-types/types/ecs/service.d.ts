import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PlacementStrategy {
    Field?: Value<string>;
    Type: Value<string>;
    constructor(properties: PlacementStrategy);
}
export declare class DeploymentController {
    Type?: Value<string>;
    constructor(properties: DeploymentController);
}
export declare class PlacementConstraint {
    Expression?: Value<string>;
    Type: Value<string>;
    constructor(properties: PlacementConstraint);
}
export declare class LoadBalancer {
    ContainerName?: Value<string>;
    ContainerPort?: Value<number>;
    LoadBalancerName?: Value<string>;
    TargetGroupArn?: Value<string>;
    constructor(properties: LoadBalancer);
}
export declare class DeploymentConfiguration {
    DeploymentCircuitBreaker?: DeploymentCircuitBreaker;
    MaximumPercent?: Value<number>;
    MinimumHealthyPercent?: Value<number>;
    constructor(properties: DeploymentConfiguration);
}
export declare class AwsVpcConfiguration {
    AssignPublicIp?: Value<string>;
    SecurityGroups?: List<Value<string>>;
    Subnets?: List<Value<string>>;
    constructor(properties: AwsVpcConfiguration);
}
export declare class NetworkConfiguration {
    AwsvpcConfiguration?: AwsVpcConfiguration;
    constructor(properties: NetworkConfiguration);
}
export declare class CapacityProviderStrategyItem {
    Base?: Value<number>;
    CapacityProvider?: Value<string>;
    Weight?: Value<number>;
    constructor(properties: CapacityProviderStrategyItem);
}
export declare class DeploymentCircuitBreaker {
    Enable: Value<boolean>;
    Rollback: Value<boolean>;
    constructor(properties: DeploymentCircuitBreaker);
}
export declare class ServiceRegistry {
    ContainerName?: Value<string>;
    ContainerPort?: Value<number>;
    Port?: Value<number>;
    RegistryArn?: Value<string>;
    constructor(properties: ServiceRegistry);
}
export interface ServiceProperties {
    CapacityProviderStrategy?: List<CapacityProviderStrategyItem>;
    Cluster?: Value<string>;
    DeploymentConfiguration?: DeploymentConfiguration;
    DeploymentController?: DeploymentController;
    DesiredCount?: Value<number>;
    EnableECSManagedTags?: Value<boolean>;
    EnableExecuteCommand?: Value<boolean>;
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
    TaskDefinition?: Value<string>;
}
export default class Service extends ResourceBase<ServiceProperties> {
    static PlacementStrategy: typeof PlacementStrategy;
    static DeploymentController: typeof DeploymentController;
    static PlacementConstraint: typeof PlacementConstraint;
    static LoadBalancer: typeof LoadBalancer;
    static DeploymentConfiguration: typeof DeploymentConfiguration;
    static AwsVpcConfiguration: typeof AwsVpcConfiguration;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static CapacityProviderStrategyItem: typeof CapacityProviderStrategyItem;
    static DeploymentCircuitBreaker: typeof DeploymentCircuitBreaker;
    static ServiceRegistry: typeof ServiceRegistry;
    constructor(properties?: ServiceProperties);
}
