/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface WaitConditionProperties {
    Count?: Value<number>
    Handle: Value<string>
    Timeout: Value<string>
}

export default class WaitCondition extends ResourceBase {
    constructor(properties: WaitConditionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFormation::WaitCondition', properties, dependsOn)
    }
}
