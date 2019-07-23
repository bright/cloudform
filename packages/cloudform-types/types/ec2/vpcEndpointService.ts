/* Generated from: 
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface VPCEndpointServiceProperties {
    NetworkLoadBalancerArns: List<Value<string>>
    AcceptanceRequired?: Value<boolean>
}

export default class VPCEndpointService extends ResourceBase<VPCEndpointServiceProperties> {


    constructor(properties: VPCEndpointServiceProperties) {
        super('AWS::EC2::VPCEndpointService', properties)
    }
}
