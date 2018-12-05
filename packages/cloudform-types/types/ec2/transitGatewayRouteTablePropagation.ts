/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface TransitGatewayRouteTablePropagationProperties {
    TransitGatewayRouteTableId: Value<string>
    TransitGatewayAttachmentId: Value<string>
}

export default class TransitGatewayRouteTablePropagation extends ResourceBase {


    constructor(properties?: TransitGatewayRouteTablePropagationProperties) {
        super('AWS::EC2::TransitGatewayRouteTablePropagation', properties)
    }
}
