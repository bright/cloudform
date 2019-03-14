import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface EIPProperties {
    Domain?: Value<string>;
    InstanceId?: Value<string>;
    PublicIpv4Pool?: Value<string>;
}
export default class EIP extends ResourceBase<EIPProperties> {
    constructor(properties?: EIPProperties);
}
