/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface CustomResourceProperties {
    ServiceToken: Value<string>
}

export default class CustomResource extends ResourceBase {
    constructor(properties: CustomResourceProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFormation::CustomResource', properties, dependsOn)
    }
}