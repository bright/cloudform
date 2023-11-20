import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PrivateDnsNameOptionsOnLaunch {
    EnableResourceNameDnsARecord?: Value<boolean>;
    HostnameType?: Value<string>;
    EnableResourceNameDnsAAAARecord?: Value<boolean>;
    constructor(properties: PrivateDnsNameOptionsOnLaunch);
}
export interface SubnetProperties {
    MapPublicIpOnLaunch?: Value<boolean>;
    EnableDns64?: Value<boolean>;
    AvailabilityZoneId?: Value<string>;
    OutpostArn?: Value<string>;
    AvailabilityZone?: Value<string>;
    CidrBlock?: Value<string>;
    Ipv6NetmaskLength?: Value<number>;
    AssignIpv6AddressOnCreation?: Value<boolean>;
    VpcId: Value<string>;
    Ipv4NetmaskLength?: Value<number>;
    PrivateDnsNameOptionsOnLaunch?: PrivateDnsNameOptionsOnLaunch;
    Ipv6Native?: Value<boolean>;
    Ipv6CidrBlock?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Subnet extends ResourceBase<SubnetProperties> {
    static PrivateDnsNameOptionsOnLaunch: typeof PrivateDnsNameOptionsOnLaunch;
    constructor(properties: SubnetProperties);
}
