/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface S3LocationProperties {
    Bucket?: Value<string>
    ETag?: Value<string>
    Key?: Value<string>
    Version?: Value<string>
}

export class S3Location extends ResourceBase {
    constructor(properties: S3LocationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::S3Location', properties, dependsOn)
    }
}

export interface EndpointConfigurationProperties {
    Types?: Value<string>[]
}

export class EndpointConfiguration extends ResourceBase {
    constructor(properties: EndpointConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::EndpointConfiguration', properties, dependsOn)
    }
}

export interface RestApiProperties {
    BinaryMediaTypes?: Value<string>[]
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
    constructor(properties: RestApiProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::RestApi', properties, dependsOn)
    }
}
