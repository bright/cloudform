/* Generated from: 
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface VPCEndpointConnectionNotificationProperties {
    ConnectionEvents: List<Value<string>>
    VPCEndpointId?: Value<string>
    ServiceId?: Value<string>
    ConnectionNotificationArn: Value<string>
}

export default class VPCEndpointConnectionNotification extends ResourceBase<VPCEndpointConnectionNotificationProperties> {


    constructor(properties: VPCEndpointConnectionNotificationProperties) {
        super('AWS::EC2::VPCEndpointConnectionNotification', properties)
    }
}
