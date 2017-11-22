import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface MinimumHealthyHostsProperties {
    Type: Value<string>;
    Value: Value<number>;
}
export declare class MinimumHealthyHosts extends ResourceBase {
    constructor(properties: MinimumHealthyHostsProperties, dependsOn?: Value<string>);
}
export interface DeploymentConfigProperties {
    DeploymentConfigName?: Value<string>;
    MinimumHealthyHosts?: MinimumHealthyHosts;
}
export default class DeploymentConfig extends ResourceBase {
    constructor(properties: DeploymentConfigProperties, dependsOn?: Value<string>);
}
