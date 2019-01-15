/* Generated from: 
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface LayerVersionPermissionProperties {
    Action: Value<string>
    LayerVersionArn: Value<string>
    OrganizationId?: Value<string>
    Principal: Value<string>
}

export default class LayerVersionPermission extends ResourceBase {


    constructor(properties?: LayerVersionPermissionProperties) {
        super('AWS::Lambda::LayerVersionPermission', properties)
    }
}
