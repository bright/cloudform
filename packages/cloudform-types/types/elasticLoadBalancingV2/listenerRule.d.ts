import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SourceIpConfig {
    Values?: List<Value<string>>;
    constructor(properties: SourceIpConfig);
}
export declare class AuthenticateOidcConfig {
    AuthenticationRequestExtraParams?: {
        [key: string]: Value<string>;
    };
    AuthorizationEndpoint: Value<string>;
    ClientId: Value<string>;
    ClientSecret: Value<string>;
    Issuer: Value<string>;
    OnUnauthenticatedRequest?: Value<string>;
    Scope?: Value<string>;
    SessionCookieName?: Value<string>;
    SessionTimeout?: Value<number>;
    TokenEndpoint: Value<string>;
    UserInfoEndpoint: Value<string>;
    constructor(properties: AuthenticateOidcConfig);
}
export declare class AuthenticateCognitoConfig {
    AuthenticationRequestExtraParams?: {
        [key: string]: Value<string>;
    };
    OnUnauthenticatedRequest?: Value<string>;
    Scope?: Value<string>;
    SessionCookieName?: Value<string>;
    SessionTimeout?: Value<number>;
    UserPoolArn: Value<string>;
    UserPoolClientId: Value<string>;
    UserPoolDomain: Value<string>;
    constructor(properties: AuthenticateCognitoConfig);
}
export declare class FixedResponseConfig {
    ContentType?: Value<string>;
    MessageBody?: Value<string>;
    StatusCode: Value<string>;
    constructor(properties: FixedResponseConfig);
}
export declare class QueryStringKeyValue {
    Key?: Value<string>;
    Value?: Value<string>;
    constructor(properties: QueryStringKeyValue);
}
export declare class Action {
    AuthenticateCognitoConfig?: AuthenticateCognitoConfig;
    AuthenticateOidcConfig?: AuthenticateOidcConfig;
    FixedResponseConfig?: FixedResponseConfig;
    Order?: Value<number>;
    RedirectConfig?: RedirectConfig;
    TargetGroupArn?: Value<string>;
    Type: Value<string>;
    constructor(properties: Action);
}
export declare class QueryStringConfig {
    Values?: List<QueryStringKeyValue>;
    constructor(properties: QueryStringConfig);
}
export declare class PathPatternConfig {
    Values?: List<Value<string>>;
    constructor(properties: PathPatternConfig);
}
export declare class HttpHeaderConfig {
    HttpHeaderName?: Value<string>;
    Values?: List<Value<string>>;
    constructor(properties: HttpHeaderConfig);
}
export declare class HttpRequestMethodConfig {
    Values?: List<Value<string>>;
    constructor(properties: HttpRequestMethodConfig);
}
export declare class RuleCondition {
    Field?: Value<string>;
    HostHeaderConfig?: HostHeaderConfig;
    HttpHeaderConfig?: HttpHeaderConfig;
    HttpRequestMethodConfig?: HttpRequestMethodConfig;
    PathPatternConfig?: PathPatternConfig;
    QueryStringConfig?: QueryStringConfig;
    SourceIpConfig?: SourceIpConfig;
    Values?: List<Value<string>>;
    constructor(properties: RuleCondition);
}
export declare class RedirectConfig {
    Host?: Value<string>;
    Path?: Value<string>;
    Port?: Value<string>;
    Protocol?: Value<string>;
    Query?: Value<string>;
    StatusCode: Value<string>;
    constructor(properties: RedirectConfig);
}
export declare class HostHeaderConfig {
    Values?: List<Value<string>>;
    constructor(properties: HostHeaderConfig);
}
export interface ListenerRuleProperties {
    Actions: List<Action>;
    Conditions: List<RuleCondition>;
    ListenerArn: Value<string>;
    Priority: Value<number>;
}
export default class ListenerRule extends ResourceBase<ListenerRuleProperties> {
    static SourceIpConfig: typeof SourceIpConfig;
    static AuthenticateOidcConfig: typeof AuthenticateOidcConfig;
    static AuthenticateCognitoConfig: typeof AuthenticateCognitoConfig;
    static FixedResponseConfig: typeof FixedResponseConfig;
    static QueryStringKeyValue: typeof QueryStringKeyValue;
    static Action: typeof Action;
    static QueryStringConfig: typeof QueryStringConfig;
    static PathPatternConfig: typeof PathPatternConfig;
    static HttpHeaderConfig: typeof HttpHeaderConfig;
    static HttpRequestMethodConfig: typeof HttpRequestMethodConfig;
    static RuleCondition: typeof RuleCondition;
    static RedirectConfig: typeof RedirectConfig;
    static HostHeaderConfig: typeof HostHeaderConfig;
    constructor(properties: ListenerRuleProperties);
}
