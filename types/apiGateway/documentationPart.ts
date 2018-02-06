/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Location {
    Method?: Value<string>
    Name?: Value<string>
    Path?: Value<string>
    StatusCode?: Value<string>
    Type?: Value<string>

    constructor(properties: Location) {
        Object.assign(this, properties)
    }
}

export interface DocumentationPartProperties {
    Location: Location
    Properties: Value<string>
    RestApiId: Value<string>
}

export default class DocumentationPart extends ResourceBase {
    constructor(properties?: DocumentationPartProperties) {
        super('AWS::ApiGateway::DocumentationPart', properties)
    }
}
