import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface AuthorizerProperties {
    ProviderARNs?: List<Value<string>>;
    AuthorizerCredentials?: Value<string>;
    IdentityValidationExpression?: Value<string>;
    Type: Value<string>;
    AuthorizerUri?: Value<string>;
    AuthorizerResultTtlInSeconds?: Value<number>;
    RestApiId: Value<string>;
    IdentitySource?: Value<string>;
    AuthType?: Value<string>;
    Name: Value<string>;
}
export default class Authorizer extends ResourceBase<AuthorizerProperties> {
    constructor(properties: AuthorizerProperties);
}
