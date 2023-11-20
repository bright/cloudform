import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class InstanceReusePolicy {
    ReuseOnScaleIn?: Value<boolean>;
    constructor(properties: InstanceReusePolicy);
}
export interface WarmPoolProperties {
    MinSize?: Value<number>;
    MaxGroupPreparedCapacity?: Value<number>;
    AutoScalingGroupName: Value<string>;
    PoolState?: Value<string>;
    InstanceReusePolicy?: InstanceReusePolicy;
}
export default class WarmPool extends ResourceBase<WarmPoolProperties> {
    static InstanceReusePolicy: typeof InstanceReusePolicy;
    constructor(properties: WarmPoolProperties);
}
