/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface ActivityProperties {
    Name: Value<string>
}

export default class Activity extends ResourceBase {
    constructor(properties: ActivityProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::StepFunctions::Activity', properties, dependsOn)
    }
}
