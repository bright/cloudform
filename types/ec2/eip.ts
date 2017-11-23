/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface EIPProperties {
    Domain?: Value<string>
    InstanceId?: Value<string>
}

export default class EIP extends ResourceBase {
    constructor(properties: EIPProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EC2::EIP', properties, dependsOn)
    }
}
