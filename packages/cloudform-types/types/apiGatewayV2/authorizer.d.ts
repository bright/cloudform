import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface AuthorizerProperties {
    IdentityValidationExpression?: Value<string>;
    AuthorizerUri: Value<string>;
    AuthorizerCredentialsArn?: Value<string>;
    AuthorizerType: Value<string>;
    AuthorizerResultTtlInSeconds?: Value<number>;
    IdentitySource: List<Value<string>>;
    ApiId: Value<string>;
    Name: Value<string>;
}
export default class Authorizer extends ResourceBase<AuthorizerProperties> {
    constructor(properties: AuthorizerProperties);
}
