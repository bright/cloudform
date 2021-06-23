import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface WarmPoolProperties {
    AutoScalingGroupName: Value<string>;
    MaxGroupPreparedCapacity?: Value<number>;
    MinSize?: Value<number>;
    PoolState?: Value<string>;
}
export default class WarmPool extends ResourceBase<WarmPoolProperties> {
    constructor(properties: WarmPoolProperties);
}
