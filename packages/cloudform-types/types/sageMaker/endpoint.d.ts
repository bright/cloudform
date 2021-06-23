import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Alarm {
    AlarmName: Value<string>;
    constructor(properties: Alarm);
}
export declare class AutoRollbackConfig {
    Alarms: List<Alarm>;
    constructor(properties: AutoRollbackConfig);
}
export declare class TrafficRoutingConfig {
    Type: Value<string>;
    CanarySize?: CapacitySize;
    WaitIntervalInSeconds?: Value<number>;
    constructor(properties: TrafficRoutingConfig);
}
export declare class DeploymentConfig {
    AutoRollbackConfiguration?: AutoRollbackConfig;
    BlueGreenUpdatePolicy: BlueGreenUpdatePolicy;
    constructor(properties: DeploymentConfig);
}
export declare class CapacitySize {
    Type: Value<string>;
    Value: Value<number>;
    constructor(properties: CapacitySize);
}
export declare class VariantProperty {
    VariantPropertyType?: Value<string>;
    constructor(properties: VariantProperty);
}
export declare class BlueGreenUpdatePolicy {
    MaximumExecutionTimeoutInSeconds?: Value<number>;
    TerminationWaitInSeconds?: Value<number>;
    TrafficRoutingConfiguration: TrafficRoutingConfig;
    constructor(properties: BlueGreenUpdatePolicy);
}
export interface EndpointProperties {
    RetainAllVariantProperties?: Value<boolean>;
    EndpointName?: Value<string>;
    ExcludeRetainedVariantProperties?: List<VariantProperty>;
    EndpointConfigName: Value<string>;
    DeploymentConfig?: DeploymentConfig;
    Tags?: List<ResourceTag>;
}
export default class Endpoint extends ResourceBase<EndpointProperties> {
    static Alarm: typeof Alarm;
    static AutoRollbackConfig: typeof AutoRollbackConfig;
    static TrafficRoutingConfig: typeof TrafficRoutingConfig;
    static DeploymentConfig: typeof DeploymentConfig;
    static CapacitySize: typeof CapacitySize;
    static VariantProperty: typeof VariantProperty;
    static BlueGreenUpdatePolicy: typeof BlueGreenUpdatePolicy;
    constructor(properties: EndpointProperties);
}
