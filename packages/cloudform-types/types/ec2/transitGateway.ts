/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface TransitGatewayProperties {
    DefaultRouteTablePropagation?: Value<string>
    Description?: Value<string>
    AutoAcceptSharedAttachments?: Value<string>
    DefaultRouteTableAssociation?: Value<string>
    VpnEcmpSupport?: Value<string>
    DnsSupport?: Value<string>
    AmazonSideAsn?: Value<number>
    Tags?: ResourceTag[]
}

export default class TransitGateway extends ResourceBase {


    constructor(properties?: TransitGatewayProperties) {
        super('AWS::EC2::TransitGateway', properties)
    }
}
