/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface EventSourceMappingProperties {
    BatchSize?: Value<number>
    Enabled?: Value<boolean>
    EventSourceArn: Value<string>
    FunctionName: Value<string>
    StartingPosition: Value<string>
}

export default class EventSourceMapping extends ResourceBase {
    constructor(properties: EventSourceMappingProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Lambda::EventSourceMapping', properties, dependsOn)
    }
}
