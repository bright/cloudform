import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface InstanceIpv6AddressProperties {
    Ipv6Address: Value<string>;
}
export declare class InstanceIpv6Address extends ResourceBase {
    constructor(properties: InstanceIpv6AddressProperties, dependsOn?: Value<string>);
}
export interface PrivateIpAddressSpecificationProperties {
    Primary: Value<boolean>;
    PrivateIpAddress: Value<string>;
}
export declare class PrivateIpAddressSpecification extends ResourceBase {
    constructor(properties: PrivateIpAddressSpecificationProperties, dependsOn?: Value<string>);
}
export interface NetworkInterfaceProperties {
    Description?: Value<string>;
    GroupSet?: Value<string>[];
    InterfaceType?: Value<string>;
    Ipv6AddressCount?: Value<number>;
    Ipv6Addresses?: InstanceIpv6Address;
    PrivateIpAddress?: Value<string>;
    PrivateIpAddresses?: PrivateIpAddressSpecification[];
    SecondaryPrivateIpAddressCount?: Value<number>;
    SourceDestCheck?: Value<boolean>;
    SubnetId: Value<string>;
    Tags?: ResourceTag[];
}
export default class NetworkInterface extends ResourceBase {
    constructor(properties: NetworkInterfaceProperties, dependsOn?: Value<string>);
}
