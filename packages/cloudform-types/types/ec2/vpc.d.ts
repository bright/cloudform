import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCProperties {
    InstanceTenancy?: Value<string>;
    Ipv4NetmaskLength?: Value<number>;
    CidrBlock?: Value<string>;
    Ipv4IpamPoolId?: Value<string>;
    EnableDnsSupport?: Value<boolean>;
    EnableDnsHostnames?: Value<boolean>;
    Tags?: List<ResourceTag>;
}
export default class VPC extends ResourceBase<VPCProperties> {
    constructor(properties?: VPCProperties);
}
