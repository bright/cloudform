/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface DestinationProperties {
    DestinationName: Value<string>
    DestinationPolicy: Value<string>
    RoleArn: Value<string>
    TargetArn: Value<string>
}

export default class Destination extends ResourceBase {
    constructor(properties: DestinationProperties) {
        super('AWS::Logs::Destination', properties)
    }
}
