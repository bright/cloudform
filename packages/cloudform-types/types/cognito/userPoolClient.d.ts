import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AnalyticsConfiguration {
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
    AllowedOAuthScopes?: List<Value<string>>;
    ReadAttributes?: List<Value<string>>;
    AllowedOAuthFlowsUserPoolClient?: Value<boolean>;
    DefaultRedirectURI?: Value<string>;
    SupportedIdentityProviders?: List<Value<string>>;
    ClientName?: Value<string>;
    UserPoolId: Value<string>;
    AllowedOAuthFlows?: List<Value<string>>;
    ExplicitAuthFlows?: List<Value<string>>;
    LogoutURLs?: List<Value<string>>;
    RefreshTokenValidity?: Value<number>;
    WriteAttributes?: List<Value<string>>;
    PreventUserExistenceErrors?: Value<string>;
}
export default class UserPoolClient extends ResourceBase<UserPoolClientProperties> {
    static AnalyticsConfiguration: typeof AnalyticsConfiguration;
    constructor(properties: UserPoolClientProperties);
}
