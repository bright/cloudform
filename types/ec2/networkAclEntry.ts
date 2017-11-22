/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface IcmpProperties {
    Code?: Value<number>
    Type?: Value<number>
}

export class Icmp extends ResourceBase {
    constructor(properties: IcmpProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::Icmp', properties, dependsOn)
    }
}

export interface PortRangeProperties {
    From?: Value<number>
    To?: Value<number>
}

export class PortRange extends ResourceBase {
    constructor(properties: PortRangeProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::PortRange', properties, dependsOn)
    }
}

export interface NetworkAclEntryProperties {
    CidrBlock: Value<string>
    Egress?: Value<boolean>
    Icmp?: Icmp
    Ipv6CidrBlock?: Value<string>
    NetworkAclId: Value<string>
    PortRange?: PortRange
    Protocol: Value<number>
    RuleAction: Value<string>
    RuleNumber: Value<number>
}

export default class NetworkAclEntry extends ResourceBase {
    constructor(properties: NetworkAclEntryProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NetworkAclEntry', properties, dependsOn)
    }
}