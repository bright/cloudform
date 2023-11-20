import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class MinimumHealthyHosts {
    Type: Value<string>;
    Value: Value<number>;
    constructor(properties: MinimumHealthyHosts);
}
export declare class TimeBasedCanary {
    CanaryPercentage: Value<number>;
    CanaryInterval: Value<number>;
    constructor(properties: TimeBasedCanary);
}
export declare class TimeBasedLinear {
    LinearInterval: Value<number>;
    LinearPercentage: Value<number>;
    constructor(properties: TimeBasedLinear);
}
export declare class TrafficRoutingConfig {
    Type: Value<string>;
    TimeBasedLinear?: TimeBasedLinear;
    TimeBasedCanary?: TimeBasedCanary;
    constructor(properties: TrafficRoutingConfig);
}
export interface DeploymentConfigProperties {
    ComputePlatform?: Value<string>;
    DeploymentConfigName?: Value<string>;
    TrafficRoutingConfig?: TrafficRoutingConfig;
    MinimumHealthyHosts?: MinimumHealthyHosts;
}
export default class DeploymentConfig extends ResourceBase<DeploymentConfigProperties> {
    static MinimumHealthyHosts: typeof MinimumHealthyHosts;
    static TimeBasedCanary: typeof TimeBasedCanary;
    static TimeBasedLinear: typeof TimeBasedLinear;
    static TrafficRoutingConfig: typeof TrafficRoutingConfig;
    constructor(properties?: DeploymentConfigProperties);
}
