/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'

export interface InstanceIpv6AddressProperties {
    Ipv6Address: Value<string>
}

export class InstanceIpv6Address extends ResourceBase {
    constructor(properties: InstanceIpv6AddressProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::InstanceIpv6Address', properties, dependsOn)
    }
}

export interface PrivateIpAddressSpecificationProperties {
    Primary: Value<boolean>
    PrivateIpAddress: Value<string>
}

export class PrivateIpAddressSpecification extends ResourceBase {
    constructor(properties: PrivateIpAddressSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::PrivateIpAddressSpecification', properties, dependsOn)
    }
}

export interface NetworkInterfaceProperties {
    Description?: Value<string>
    GroupSet?: Value<string>[]
    InterfaceType?: Value<string>
    Ipv6AddressCount?: Value<number>
    Ipv6Addresses?: InstanceIpv6Address
    PrivateIpAddress?: Value<string>
    PrivateIpAddresses?: PrivateIpAddressSpecification[]
    SecondaryPrivateIpAddressCount?: Value<number>
    SourceDestCheck?: Value<boolean>
    SubnetId: Value<string>
    Tags?: ResourceTag[]
}

export default class NetworkInterface extends ResourceBase {
    constructor(properties: NetworkInterfaceProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NetworkInterface', properties, dependsOn)
    }
}