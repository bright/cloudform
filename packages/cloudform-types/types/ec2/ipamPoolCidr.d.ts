import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface IPAMPoolCidrProperties {
    Cidr?: Value<string>;
    NetmaskLength?: Value<number>;
    IpamPoolId: Value<string>;
}
export default class IPAMPoolCidr extends ResourceBase<IPAMPoolCidrProperties> {
    constructor(properties: IPAMPoolCidrProperties);
}
