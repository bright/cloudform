/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface DestinationProperties {
    Name: Value<string>
    Expression: Value<string>
    ExpressionType: Value<string>
    Description?: Value<string>
    Tags?: List<ResourceTag>
    RoleArn: Value<string>
}

export default class Destination extends ResourceBase<DestinationProperties> {


    constructor(properties: DestinationProperties) {
        super('AWS::IoTWireless::Destination', properties)
    }
}
