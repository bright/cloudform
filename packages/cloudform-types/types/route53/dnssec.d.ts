import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DNSSECProperties {
    HostedZoneId: Value<string>;
}
export default class DNSSEC extends ResourceBase<DNSSECProperties> {
    constructor(properties: DNSSECProperties);
}
