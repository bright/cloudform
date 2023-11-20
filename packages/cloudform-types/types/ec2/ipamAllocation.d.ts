import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface IPAMAllocationProperties {
    Description?: Value<string>;
    Cidr?: Value<string>;
    NetmaskLength?: Value<number>;
    IpamPoolId: Value<string>;
}
export default class IPAMAllocation extends ResourceBase<IPAMAllocationProperties> {
    constructor(properties: IPAMAllocationProperties);
}
