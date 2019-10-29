/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class IpAddressRequest {
    Ip?: Value<string>
    SubnetId!: Value<string>

    constructor(properties: IpAddressRequest) {
        Object.assign(this, properties)
    }
}

export interface ResolverEndpointProperties {
    IpAddresses: List<IpAddressRequest>
    Direction: Value<string>
    SecurityGroupIds: List<Value<string>>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class ResolverEndpoint extends ResourceBase<ResolverEndpointProperties> {
    static IpAddressRequest = IpAddressRequest

    constructor(properties: ResolverEndpointProperties) {
        super('AWS::Route53Resolver::ResolverEndpoint', properties)
    }
}
