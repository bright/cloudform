/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export interface IngressProperties {
    CidrIp?: Value<string>
    CidrIpv6?: Value<string>
    Description?: Value<string>
    FromPort?: Value<number>
    IpProtocol: Value<string>
    SourceSecurityGroupId?: Value<string>
    SourceSecurityGroupName?: Value<string>
    SourceSecurityGroupOwnerId?: Value<string>
    ToPort?: Value<number>
}

export class Ingress extends ResourceBase {
    constructor(properties: IngressProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EC2::Ingress', properties, dependsOn)
    }
}

export interface EgressProperties {
    CidrIp?: Value<string>
    CidrIpv6?: Value<string>
    Description?: Value<string>
    DestinationPrefixListId?: Value<string>
    DestinationSecurityGroupId?: Value<string>
    FromPort?: Value<number>
    IpProtocol: Value<string>
    ToPort?: Value<number>
}

export class Egress extends ResourceBase {
    constructor(properties: EgressProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EC2::Egress', properties, dependsOn)
    }
}

export interface SecurityGroupProperties {
    GroupDescription: Value<string>
    GroupName?: Value<string>
    SecurityGroupEgress?: List<Egress>
    SecurityGroupIngress?: List<Ingress>
    Tags?: ResourceTag[]
    VpcId?: Value<string>
}

export default class SecurityGroup extends ResourceBase {
    constructor(properties: SecurityGroupProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EC2::SecurityGroup', properties, dependsOn)
    }
}
