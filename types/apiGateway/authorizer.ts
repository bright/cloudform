/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface AuthorizerProperties {
    AuthType?: Value<string>
    AuthorizerCredentials?: Value<string>
    AuthorizerResultTtlInSeconds?: Value<number>
    AuthorizerUri?: Value<string>
    IdentitySource?: Value<string>
    IdentityValidationExpression?: Value<string>
    Name?: Value<string>
    ProviderARNs?: Value<string>[]
    RestApiId: Value<string>
    Type?: Value<string>
}

export default class Authorizer extends ResourceBase {
    constructor(properties: AuthorizerProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::Authorizer', properties, dependsOn)
    }
}
