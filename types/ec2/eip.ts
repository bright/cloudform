/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface EIPProperties {
    Domain?: Value<string>
    InstanceId?: Value<string>
}

export default class EIP extends ResourceBase {
    constructor(properties: EIPProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::EIP', properties, dependsOn)
    }
}