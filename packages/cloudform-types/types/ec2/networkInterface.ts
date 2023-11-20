/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class InstanceIpv6Address {
    Ipv6Address!: Value<string>

    constructor(properties: InstanceIpv6Address) {
        Object.assign(this, properties)
    }
}

export class Ipv4PrefixSpecification {
    Ipv4Prefix!: Value<string>

    constructor(properties: Ipv4PrefixSpecification) {
        Object.assign(this, properties)
    }
}

export class Ipv6PrefixSpecification {
    Ipv6Prefix!: Value<string>

    constructor(properties: Ipv6PrefixSpecification) {
        Object.assign(this, properties)
    }
}

export class PrivateIpAddressSpecification {
    PrivateIpAddress!: Value<string>
    Primary!: Value<boolean>

    constructor(properties: PrivateIpAddressSpecification) {
        Object.assign(this, properties)
    }
}

export interface NetworkInterfaceProperties {
    Description?: Value<string>
    PrivateIpAddress?: Value<string>
    PrivateIpAddresses?: List<PrivateIpAddressSpecification>
    SecondaryPrivateIpAddressCount?: Value<number>
    Ipv6PrefixCount?: Value<number>
    Ipv4Prefixes?: List<Ipv4PrefixSpecification>
    Ipv4PrefixCount?: Value<number>
    GroupSet?: List<Value<string>>
    Ipv6Addresses?: List<InstanceIpv6Address>
    Ipv6Prefixes?: List<Ipv6PrefixSpecification>
    SubnetId: Value<string>
    SourceDestCheck?: Value<boolean>
    InterfaceType?: Value<string>
    Ipv6AddressCount?: Value<number>
    Tags?: List<ResourceTag>
}

export default class NetworkInterface extends ResourceBase<NetworkInterfaceProperties> {
    static InstanceIpv6Address = InstanceIpv6Address
    static Ipv4PrefixSpecification = Ipv4PrefixSpecification
    static Ipv6PrefixSpecification = Ipv6PrefixSpecification
    static PrivateIpAddressSpecification = PrivateIpAddressSpecification

    constructor(properties: NetworkInterfaceProperties) {
        super('AWS::EC2::NetworkInterface', properties)
    }
}
