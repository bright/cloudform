import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface LoadBalancerProperties {
    ContainerName?: Value<string>;
    ContainerPort: Value<number>;
    LoadBalancerName?: Value<string>;
    TargetGroupArn?: Value<string>;
}
export declare class LoadBalancer extends ResourceBase {
    constructor(properties: LoadBalancerProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PlacementStrategyProperties {
    Field?: Value<string>;
    Type: Value<string>;
}
export declare class PlacementStrategy extends ResourceBase {
    constructor(properties: PlacementStrategyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface DeploymentConfigurationProperties {
    MaximumPercent?: Value<number>;
    MinimumHealthyPercent?: Value<number>;
}
export declare class DeploymentConfiguration extends ResourceBase {
    constructor(properties: DeploymentConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PlacementConstraintProperties {
    Expression?: Value<string>;
    Type: Value<string>;
}
export declare class PlacementConstraint extends ResourceBase {
    constructor(properties: PlacementConstraintProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ServiceProperties {
    Cluster?: Value<string>;
    DeploymentConfiguration?: DeploymentConfiguration;
    DesiredCount?: Value<number>;
    LoadBalancers?: List<LoadBalancer>;
    PlacementConstraints?: List<PlacementConstraint>;
    PlacementStrategies?: List<PlacementStrategy>;
    Role?: Value<string>;
    ServiceName?: Value<string>;
    TaskDefinition: Value<string>;
}
export default class Service extends ResourceBase {
    constructor(properties: ServiceProperties, dependsOn?: Value<string> | Value<string>[]);
}
