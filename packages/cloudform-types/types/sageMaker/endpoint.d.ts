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
export declare class BlueGreenUpdatePolicy {
    MaximumExecutionTimeoutInSeconds?: Value<number>;
    TerminationWaitInSeconds?: Value<number>;
    TrafficRoutingConfiguration: TrafficRoutingConfig;
    constructor(properties: BlueGreenUpdatePolicy);
}
export declare class CapacitySize {
    Type: Value<string>;
    Value: Value<number>;
    constructor(properties: CapacitySize);
}
export declare class DeploymentConfig {
    AutoRollbackConfiguration?: AutoRollbackConfig;
    RollingUpdatePolicy?: RollingUpdatePolicy;
    BlueGreenUpdatePolicy?: BlueGreenUpdatePolicy;
    constructor(properties: DeploymentConfig);
}
export declare class RollingUpdatePolicy {
    MaximumExecutionTimeoutInSeconds?: Value<number>;
    MaximumBatchSize: CapacitySize;
    WaitIntervalInSeconds: Value<number>;
    RollbackMaximumBatchSize?: CapacitySize;
    constructor(properties: RollingUpdatePolicy);
}
export declare class TrafficRoutingConfig {
    Type: Value<string>;
    LinearStepSize?: CapacitySize;
    CanarySize?: CapacitySize;
    WaitIntervalInSeconds?: Value<number>;
    constructor(properties: TrafficRoutingConfig);
}
export declare class VariantProperty {
    VariantPropertyType?: Value<string>;
    constructor(properties: VariantProperty);
}
export interface EndpointProperties {
    RetainAllVariantProperties?: Value<boolean>;
    EndpointName?: Value<string>;
    ExcludeRetainedVariantProperties?: List<VariantProperty>;
    EndpointConfigName: Value<string>;
    DeploymentConfig?: DeploymentConfig;
    RetainDeploymentConfig?: Value<boolean>;
    Tags?: List<ResourceTag>;
}
export default class Endpoint extends ResourceBase<EndpointProperties> {
    static Alarm: typeof Alarm;
    static AutoRollbackConfig: typeof AutoRollbackConfig;
    static BlueGreenUpdatePolicy: typeof BlueGreenUpdatePolicy;
    static CapacitySize: typeof CapacitySize;
    static DeploymentConfig: typeof DeploymentConfig;
    static RollingUpdatePolicy: typeof RollingUpdatePolicy;
    static TrafficRoutingConfig: typeof TrafficRoutingConfig;
    static VariantProperty: typeof VariantProperty;
    constructor(properties: EndpointProperties);
}
