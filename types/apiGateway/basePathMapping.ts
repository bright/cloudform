/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface BasePathMappingProperties {
    BasePath?: Value<string>
    DomainName: Value<string>
    RestApiId?: Value<string>
    Stage?: Value<string>
}

export default class BasePathMapping extends ResourceBase {
    constructor(properties: BasePathMappingProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::BasePathMapping', properties, dependsOn)
    }
}
