/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface VPCEndpointConnectionNotificationProperties {
    ConnectionEvents: List<Value<string>>
    VPCEndpointId?: Value<string>
    ServiceId?: Value<string>
    ConnectionNotificationArn: Value<string>
}

export default class VPCEndpointConnectionNotification extends ResourceBase {


    constructor(properties?: VPCEndpointConnectionNotificationProperties) {
        super('AWS::EC2::VPCEndpointConnectionNotification', properties)
    }
}
