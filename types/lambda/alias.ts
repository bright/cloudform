/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface AliasProperties {
    Description?: Value<string>
    FunctionName: Value<string>
    FunctionVersion: Value<string>
    Name: Value<string>
}

export default class Alias extends ResourceBase {
    constructor(properties: AliasProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Lambda::Alias', properties, dependsOn)
    }
}
