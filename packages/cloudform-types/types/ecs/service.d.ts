import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AwsVpcConfiguration {
    SecurityGroups?: List<Value<string>>;
    Subnets?: List<Value<string>>;
    AssignPublicIp?: Value<string>;
    constructor(properties: AwsVpcConfiguration);
}
export declare class CapacityProviderStrategyItem {
    CapacityProvider?: Value<string>;
    Base?: Value<number>;
    Weight?: Value<number>;
    constructor(properties: CapacityProviderStrategyItem);
}
export declare class DeploymentAlarms {
    AlarmNames: List<Value<string>>;
    Enable: Value<boolean>;
    Rollback: Value<boolean>;
    constructor(properties: DeploymentAlarms);
}
export declare class DeploymentCircuitBreaker {
    Enable: Value<boolean>;
    Rollback: Value<boolean>;
    constructor(properties: DeploymentCircuitBreaker);
}
export declare class DeploymentConfiguration {
    Alarms?: DeploymentAlarms;
    DeploymentCircuitBreaker?: DeploymentCircuitBreaker;
    MaximumPercent?: Value<number>;
    MinimumHealthyPercent?: Value<number>;
    constructor(properties: DeploymentConfiguration);
}
export declare class DeploymentController {
    Type?: Value<string>;
    constructor(properties: DeploymentController);
}
export declare class LoadBalancer {
    TargetGroupArn?: Value<string>;
    LoadBalancerName?: Value<string>;
    ContainerName?: Value<string>;
    ContainerPort?: Value<number>;
    constructor(properties: LoadBalancer);
}
export declare class LogConfiguration {
    SecretOptions?: List<Secret>;
    Options?: {
        [key: string]: Value<string>;
    };
    LogDriver?: Value<string>;
    constructor(properties: LogConfiguration);
}
export declare class NetworkConfiguration {
    AwsvpcConfiguration?: AwsVpcConfiguration;
    constructor(properties: NetworkConfiguration);
}
export declare class PlacementConstraint {
    Type: Value<string>;
    Expression?: Value<string>;
    constructor(properties: PlacementConstraint);
}
export declare class PlacementStrategy {
    Field?: Value<string>;
    Type: Value<string>;
    constructor(properties: PlacementStrategy);
}
export declare class Secret {
    ValueFrom: Value<string>;
    Name: Value<string>;
    constructor(properties: Secret);
}
export declare class ServiceConnectClientAlias {
    DnsName?: Value<string>;
    Port: Value<number>;
    constructor(properties: ServiceConnectClientAlias);
}
export declare class ServiceConnectConfiguration {
    Services?: List<ServiceConnectService>;
    Enabled: Value<boolean>;
    LogConfiguration?: LogConfiguration;
    Namespace?: Value<string>;
    constructor(properties: ServiceConnectConfiguration);
}
export declare class ServiceConnectService {
    IngressPortOverride?: Value<number>;
    ClientAliases?: List<ServiceConnectClientAlias>;
    DiscoveryName?: Value<string>;
    PortName: Value<string>;
    constructor(properties: ServiceConnectService);
}
export declare class ServiceRegistry {
    ContainerName?: Value<string>;
    Port?: Value<number>;
    ContainerPort?: Value<number>;
    RegistryArn?: Value<string>;
    constructor(properties: ServiceRegistry);
}
export interface ServiceProperties {
    PlatformVersion?: Value<string>;
    HealthCheckGracePeriodSeconds?: Value<number>;
    EnableECSManagedTags?: Value<boolean>;
    PropagateTags?: Value<string>;
    EnableExecuteCommand?: Value<boolean>;
    PlacementConstraints?: List<PlacementConstraint>;
    Cluster?: Value<string>;
    LoadBalancers?: List<LoadBalancer>;
    ServiceConnectConfiguration?: ServiceConnectConfiguration;
    PlacementStrategies?: List<PlacementStrategy>;
    DesiredCount?: Value<number>;
    DeploymentController?: DeploymentController;
    ServiceRegistries?: List<ServiceRegistry>;
    CapacityProviderStrategy?: List<CapacityProviderStrategyItem>;
    LaunchType?: Value<string>;
    Role?: Value<string>;
    SchedulingStrategy?: Value<string>;
    TaskDefinition?: Value<string>;
    ServiceName?: Value<string>;
    NetworkConfiguration?: NetworkConfiguration;
    Tags?: List<ResourceTag>;
    DeploymentConfiguration?: DeploymentConfiguration;
}
export default class Service extends ResourceBase<ServiceProperties> {
    static AwsVpcConfiguration: typeof AwsVpcConfiguration;
    static CapacityProviderStrategyItem: typeof CapacityProviderStrategyItem;
    static DeploymentAlarms: typeof DeploymentAlarms;
    static DeploymentCircuitBreaker: typeof DeploymentCircuitBreaker;
    static DeploymentConfiguration: typeof DeploymentConfiguration;
    static DeploymentController: typeof DeploymentController;
    static LoadBalancer: typeof LoadBalancer;
    static LogConfiguration: typeof LogConfiguration;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static PlacementConstraint: typeof PlacementConstraint;
    static PlacementStrategy: typeof PlacementStrategy;
    static Secret: typeof Secret;
    static ServiceConnectClientAlias: typeof ServiceConnectClientAlias;
    static ServiceConnectConfiguration: typeof ServiceConnectConfiguration;
    static ServiceConnectService: typeof ServiceConnectService;
    static ServiceRegistry: typeof ServiceRegistry;
    constructor(properties?: ServiceProperties);
}
