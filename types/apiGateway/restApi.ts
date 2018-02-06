/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class S3Location {
    Bucket?: Value<string>
    ETag?: Value<string>
    Key?: Value<string>
    Version?: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export class EndpointConfiguration {
    Types?: List<Value<string>>

    constructor(properties: EndpointConfiguration) {
        Object.assign(this, properties)
    }
}

export interface RestApiProperties {
    BinaryMediaTypes?: List<Value<string>>
    Body?: any
    BodyS3Location?: S3Location
    CloneFrom?: Value<string>
    Description?: Value<string>
    EndpointConfiguration?: EndpointConfiguration
    FailOnWarnings?: Value<boolean>
    Mode?: Value<string>
    Name?: Value<string>
    Parameters?: {[key: string]: Value<string>}
}

export default class RestApi extends ResourceBase {
    constructor(properties?: RestApiProperties) {
        super('AWS::ApiGateway::RestApi', properties)
    }
}
