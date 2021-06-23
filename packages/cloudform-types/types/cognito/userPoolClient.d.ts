import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TokenValidityUnits {
    IdToken?: Value<string>;
    RefreshToken?: Value<string>;
    AccessToken?: Value<string>;
    constructor(properties: TokenValidityUnits);
}
export declare class AnalyticsConfiguration {
    ApplicationArn?: Value<string>;
    UserDataShared?: Value<boolean>;
    ExternalId?: Value<string>;
    ApplicationId?: Value<string>;
    RoleArn?: Value<string>;
    constructor(properties: AnalyticsConfiguration);
}
export interface UserPoolClientProperties {
    AnalyticsConfiguration?: AnalyticsConfiguration;
    GenerateSecret?: Value<boolean>;
    CallbackURLs?: List<Value<string>>;
    IdTokenValidity?: Value<number>;
    AllowedOAuthScopes?: List<Value<string>>;
    TokenValidityUnits?: TokenValidityUnits;
    ReadAttributes?: List<Value<string>>;
    AllowedOAuthFlowsUserPoolClient?: Value<boolean>;
    DefaultRedirectURI?: Value<string>;
    SupportedIdentityProviders?: List<Value<string>>;
    ClientName?: Value<string>;
    UserPoolId: Value<string>;
    AllowedOAuthFlows?: List<Value<string>>;
    ExplicitAuthFlows?: List<Value<string>>;
    LogoutURLs?: List<Value<string>>;
    AccessTokenValidity?: Value<number>;
    RefreshTokenValidity?: Value<number>;
    WriteAttributes?: List<Value<string>>;
    PreventUserExistenceErrors?: Value<string>;
    EnableTokenRevocation?: Value<boolean>;
}
export default class UserPoolClient extends ResourceBase<UserPoolClientProperties> {
    static TokenValidityUnits: typeof TokenValidityUnits;
    static AnalyticsConfiguration: typeof AnalyticsConfiguration;
    constructor(properties: UserPoolClientProperties);
}
