import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResolverDNSSECConfigProperties {
    ResourceId?: Value<string>;
}
export default class ResolverDNSSECConfig extends ResourceBase<ResolverDNSSECConfigProperties> {
    constructor(properties?: ResolverDNSSECConfigProperties);
}
