import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ManagedScaling {
    MinimumScalingStepSize?: Value<number>;
    MaximumScalingStepSize?: Value<number>;
    Status?: Value<string>;
    TargetCapacity?: Value<number>;
    constructor(properties: ManagedScaling);
}
export declare class AutoScalingGroupProvider {
    AutoScalingGroupArn: Value<string>;
    ManagedScaling?: ManagedScaling;
    ManagedTerminationProtection?: Value<string>;
    constructor(properties: AutoScalingGroupProvider);
}
export interface CapacityProviderProperties {
    AutoScalingGroupProvider: AutoScalingGroupProvider;
    Name?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class CapacityProvider extends ResourceBase<CapacityProviderProperties> {
    static ManagedScaling: typeof ManagedScaling;
    static AutoScalingGroupProvider: typeof AutoScalingGroupProvider;
    constructor(properties: CapacityProviderProperties);
}
