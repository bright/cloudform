import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface StaticIpProperties {
    StaticIpName: Value<string>;
    AttachedTo?: Value<string>;
}
export default class StaticIp extends ResourceBase<StaticIpProperties> {
    constructor(properties: StaticIpProperties);
}
