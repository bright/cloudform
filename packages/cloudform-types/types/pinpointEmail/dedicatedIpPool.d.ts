import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export interface DedicatedIpPoolProperties {
    PoolName?: Value<string>;
    Tags?: List<Tags>;
}
export default class DedicatedIpPool extends ResourceBase<DedicatedIpPoolProperties> {
    static Tags: typeof Tags;
    constructor(properties?: DedicatedIpPoolProperties);
}
