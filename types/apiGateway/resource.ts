/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface ResourceProperties {
    ParentId: Value<string>
    PathPart: Value<string>
    RestApiId: Value<string>
}

export default class Resource extends ResourceBase {
    constructor(properties: ResourceProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::Resource', properties, dependsOn)
    }
}
