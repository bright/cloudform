import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Integration from './integration'
import MethodResponses from './methodResponses'



export interface MethodProperties {
    ApiKeyRequired?: Value<boolean>
    AuthorizationType?: Value<boolean>
    AuthorizerId?: Value<string>
    HttpMethod: Value<string>
    Integration?: Integration
    MethodResponses?: MethodResponses
    RequestModels?: any
    RequestParameters?: any
    ResourceId: Value<string>
    RestApiId: Value<string>
}

export default class Method extends ResourceBase {
    constructor(properties: MethodProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::Method', properties, dependsOn)
    }
}