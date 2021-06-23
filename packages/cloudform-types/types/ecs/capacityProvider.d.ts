import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AutoScalingGroupProvider {
    AutoScalingGroupArn: Value<string>;
    ManagedScaling?: ManagedScaling;
    ManagedTerminationProtection?: Value<string>;
    constructor(properties: AutoScalingGroupProvider);
}
export declare class ManagedScaling {
    MinimumScalingStepSize?: Value<number>;
    MaximumScalingStepSize?: Value<number>;
    Status?: Value<string>;
    TargetCapacity?: Value<number>;
    InstanceWarmupPeriod?: Value<number>;
    constructor(properties: ManagedScaling);
}
export interface CapacityProviderProperties {
    AutoScalingGroupProvider: AutoScalingGroupProvider;
    Name?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class CapacityProvider extends ResourceBase<CapacityProviderProperties> {
    static AutoScalingGroupProvider: typeof AutoScalingGroupProvider;
    static ManagedScaling: typeof ManagedScaling;
    constructor(properties: CapacityProviderProperties);
}
