import { ResourceBase } from '../resource';
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
    constructor(properties: ServiceProperties);
}
