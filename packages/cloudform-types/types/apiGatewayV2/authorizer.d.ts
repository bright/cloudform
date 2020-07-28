import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class JWTConfiguration {
    Issuer?: Value<string>;
    Audience?: List<Value<string>>;
    constructor(properties: JWTConfiguration);
}
export interface AuthorizerProperties {
    IdentityValidationExpression?: Value<string>;
    AuthorizerUri?: Value<string>;
    AuthorizerCredentialsArn?: Value<string>;
    AuthorizerType: Value<string>;
    JwtConfiguration?: JWTConfiguration;
    AuthorizerResultTtlInSeconds?: Value<number>;
    IdentitySource: List<Value<string>>;
    ApiId: Value<string>;
    Name: Value<string>;
}
export default class Authorizer extends ResourceBase<AuthorizerProperties> {
    static JWTConfiguration: typeof JWTConfiguration;
    constructor(properties: AuthorizerProperties);
}
