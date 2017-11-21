import { ResourceBase } from '../resource';
import { Value } from '../internal';
import DeploymentConfiguration from './deploymentConfiguration';
import LoadBalancer from './loadBalancer';
import PlacementConstraints from './placementConstraints';
import PlacementStrategies from './placementStrategies';
export interface ServiceProperties {
    Cluster?: Value<string>;
    DeploymentConfiguration?: DeploymentConfiguration;
    DesiredCount?: Value<number>;
    LoadBalancers?: LoadBalancer[];
    PlacementConstraints?: PlacementConstraints;
    PlacementStrategies?: PlacementStrategies;
    Role?: Value<string>;
    ServiceName?: Value<string>;
    TaskDefinition: Value<string>;
}
export default class Service extends ResourceBase {
    constructor(properties: ServiceProperties, dependsOn?: Value<string>);
}
