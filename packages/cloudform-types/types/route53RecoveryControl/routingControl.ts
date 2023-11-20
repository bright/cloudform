/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface RoutingControlProperties {
    ClusterArn?: Value<string>
    ControlPanelArn?: Value<string>
    Name: Value<string>
}

export default class RoutingControl extends ResourceBase<RoutingControlProperties> {


    constructor(properties: RoutingControlProperties) {
        super('AWS::Route53RecoveryControl::RoutingControl', properties)
    }
}
