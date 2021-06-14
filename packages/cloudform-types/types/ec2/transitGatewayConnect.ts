/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TransitGatewayConnectOptions {
    Protocol?: Value<string>

    constructor(properties: TransitGatewayConnectOptions) {
        Object.assign(this, properties)
    }
}

export interface TransitGatewayConnectProperties {
    TransportTransitGatewayAttachmentId: Value<string>
}

export default class TransitGatewayConnect extends ResourceBase<TransitGatewayConnectProperties> {
    static TransitGatewayConnectOptions = TransitGatewayConnectOptions

    constructor(properties: TransitGatewayConnectProperties) {
        super('AWS::EC2::TransitGatewayConnect', properties)
    }
}
