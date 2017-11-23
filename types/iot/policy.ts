/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface PolicyProperties {
    PolicyDocument: any
    PolicyName?: Value<string>
}

export default class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::Policy', properties, dependsOn)
    }
}
