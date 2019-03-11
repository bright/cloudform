/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TargetAddress {
    Ip!: Value<string>
    Port!: Value<string>

    constructor(properties: TargetAddress) {
        Object.assign(this, properties)
    }
}

export interface ResolverRuleProperties {
    ResolverEndpointId?: Value<string>
    DomainName: Value<string>
    RuleType: Value<string>
    TargetIps?: List<TargetAddress>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class ResolverRule extends ResourceBase {
    static TargetAddress = TargetAddress

    constructor(properties?: ResolverRuleProperties) {
        super('AWS::Route53Resolver::ResolverRule', properties)
    }
}
