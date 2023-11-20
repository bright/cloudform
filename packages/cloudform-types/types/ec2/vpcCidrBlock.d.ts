import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface VPCCidrBlockProperties {
    AmazonProvidedIpv6CidrBlock?: Value<boolean>;
    CidrBlock?: Value<string>;
    Ipv4IpamPoolId?: Value<string>;
    Ipv4NetmaskLength?: Value<number>;
    Ipv6CidrBlock?: Value<string>;
    Ipv6IpamPoolId?: Value<string>;
    Ipv6NetmaskLength?: Value<number>;
    Ipv6Pool?: Value<string>;
    VpcId: Value<string>;
}
export default class VPCCidrBlock extends ResourceBase<VPCCidrBlockProperties> {
    constructor(properties: VPCCidrBlockProperties);
}
