/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface AliasProperties {
    AliasName: Value<string>
    TargetKeyId: Value<string>
}

export default class Alias extends ResourceBase {
    constructor(properties: AliasProperties, dependsOn?: Value<string>) {
        super('AWS::KMS::Alias', properties, dependsOn)
    }
}