/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface ParameterProperties {
    Type: Value<string>
    Description?: Value<string>
    AllowedPattern?: Value<string>
    Value: Value<string>
    Name?: Value<string>
}

export default class Parameter extends ResourceBase {
    constructor(properties: ParameterProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SSM::Parameter', properties, dependsOn)
    }
}
