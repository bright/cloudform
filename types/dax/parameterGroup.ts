/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface ParameterGroupProperties {
    ParameterNameValues?: any
    Description?: Value<string>
    ParameterGroupName?: Value<string>
}

export default class ParameterGroup extends ResourceBase {
    constructor(properties: ParameterGroupProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DAX::ParameterGroup', properties, dependsOn)
    }
}
