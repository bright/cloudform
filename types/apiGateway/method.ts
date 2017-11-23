/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface MethodResponseProperties {
    ResponseModels?: {[key: string]: Value<string>}
    ResponseParameters?: {[key: string]: Value<boolean>}
    StatusCode: Value<string>
}

export class MethodResponse extends ResourceBase {
    constructor(properties: MethodResponseProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::MethodResponse', properties, dependsOn)
    }
}

export interface IntegrationProperties {
    CacheKeyParameters?: Value<string>[]
    CacheNamespace?: Value<string>
    ContentHandling?: Value<string>
    Credentials?: Value<string>
    IntegrationHttpMethod?: Value<string>
    IntegrationResponses?: IntegrationResponse[]
    PassthroughBehavior?: Value<string>
    RequestParameters?: {[key: string]: Value<string>}
    RequestTemplates?: {[key: string]: Value<string>}
    Type?: Value<string>
    Uri?: Value<string>
}

export class Integration extends ResourceBase {
    constructor(properties: IntegrationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::Integration', properties, dependsOn)
    }
}

export interface IntegrationResponseProperties {
    ContentHandling?: Value<string>
    ResponseParameters?: {[key: string]: Value<string>}
    ResponseTemplates?: {[key: string]: Value<string>}
    SelectionPattern?: Value<string>
    StatusCode: Value<string>
}

export class IntegrationResponse extends ResourceBase {
    constructor(properties: IntegrationResponseProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::IntegrationResponse', properties, dependsOn)
    }
}

export interface MethodProperties {
    ApiKeyRequired?: Value<boolean>
    AuthorizationType?: Value<string>
    AuthorizerId?: Value<string>
    HttpMethod: Value<string>
    Integration?: Integration
    MethodResponses?: MethodResponse[]
    OperationName?: Value<string>
    RequestModels?: {[key: string]: Value<string>}
    RequestParameters?: {[key: string]: Value<boolean>}
    RequestValidatorId?: Value<string>
    ResourceId: Value<string>
    RestApiId: Value<string>
}

export default class Method extends ResourceBase {
    constructor(properties: MethodProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::Method', properties, dependsOn)
    }
}
