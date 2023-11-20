import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AutoScalingGroupProvider {
    ManagedScaling?: ManagedScaling;
    AutoScalingGroupArn: Value<string>;
    ManagedTerminationProtection?: Value<string>;
    constructor(properties: AutoScalingGroupProvider);
}
export declare class ManagedScaling {
    Status?: Value<string>;
    MinimumScalingStepSize?: Value<number>;
    InstanceWarmupPeriod?: Value<number>;
    TargetCapacity?: Value<number>;
    MaximumScalingStepSize?: Value<number>;
    constructor(properties: ManagedScaling);
}
export interface CapacityProviderProperties {
    AutoScalingGroupProvider: AutoScalingGroupProvider;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class CapacityProvider extends ResourceBase<CapacityProviderProperties> {
    static AutoScalingGroupProvider: typeof AutoScalingGroupProvider;
    static ManagedScaling: typeof ManagedScaling;
    constructor(properties: CapacityProviderProperties);
}
