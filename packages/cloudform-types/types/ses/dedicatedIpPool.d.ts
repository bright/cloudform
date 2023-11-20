import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DedicatedIpPoolProperties {
    PoolName?: Value<string>;
    ScalingMode?: Value<string>;
}
export default class DedicatedIpPool extends ResourceBase<DedicatedIpPoolProperties> {
    constructor(properties?: DedicatedIpPoolProperties);
}
