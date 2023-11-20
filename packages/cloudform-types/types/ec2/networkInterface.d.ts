import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InstanceIpv6Address {
    Ipv6Address: Value<string>;
    constructor(properties: InstanceIpv6Address);
}
export declare class Ipv4PrefixSpecification {
    Ipv4Prefix: Value<string>;
    constructor(properties: Ipv4PrefixSpecification);
}
export declare class Ipv6PrefixSpecification {
    Ipv6Prefix: Value<string>;
    constructor(properties: Ipv6PrefixSpecification);
}
export declare class PrivateIpAddressSpecification {
    PrivateIpAddress: Value<string>;
    Primary: Value<boolean>;
    constructor(properties: PrivateIpAddressSpecification);
}
export interface NetworkInterfaceProperties {
    Description?: Value<string>;
    PrivateIpAddress?: Value<string>;
    PrivateIpAddresses?: List<PrivateIpAddressSpecification>;
    SecondaryPrivateIpAddressCount?: Value<number>;
    Ipv6PrefixCount?: Value<number>;
    Ipv4Prefixes?: List<Ipv4PrefixSpecification>;
    Ipv4PrefixCount?: Value<number>;
    GroupSet?: List<Value<string>>;
    Ipv6Addresses?: List<InstanceIpv6Address>;
    Ipv6Prefixes?: List<Ipv6PrefixSpecification>;
    SubnetId: Value<string>;
    SourceDestCheck?: Value<boolean>;
    InterfaceType?: Value<string>;
    Ipv6AddressCount?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class NetworkInterface extends ResourceBase<NetworkInterfaceProperties> {
    static InstanceIpv6Address: typeof InstanceIpv6Address;
    static Ipv4PrefixSpecification: typeof Ipv4PrefixSpecification;
    static Ipv6PrefixSpecification: typeof Ipv6PrefixSpecification;
    static PrivateIpAddressSpecification: typeof PrivateIpAddressSpecification;
    constructor(properties: NetworkInterfaceProperties);
}
