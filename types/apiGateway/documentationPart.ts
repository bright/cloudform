/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface LocationProperties {
    Method?: Value<string>
    Name?: Value<string>
    Path?: Value<string>
    StatusCode?: Value<string>
    Type?: Value<string>
}

export class Location extends ResourceBase {
    constructor(properties: LocationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::Location', properties, dependsOn)
    }
}

export interface DocumentationPartProperties {
    Location: Location
    Properties: Value<string>
    RestApiId: Value<string>
}

export default class DocumentationPart extends ResourceBase {
    constructor(properties: DocumentationPartProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::DocumentationPart', properties, dependsOn)
    }
}
