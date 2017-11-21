import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface AuthorizerProperties {
    AuthorizerCredentials?: Value<string>
    AuthorizerResultTtlInSeconds?: Value<number>
    AuthorizerUri: Value<string>
    IdentitySource: Value<string>
    IdentityValidationExpression?: Value<string>
    Name: Value<string>
    ProviderARNs?: Value<string>[]
    RestApiId?: Value<string>
    Type: Value<string>
}

export default class Authorizer extends ResourceBase {
    constructor(properties: AuthorizerProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::Authorizer', properties, dependsOn)
    }
}