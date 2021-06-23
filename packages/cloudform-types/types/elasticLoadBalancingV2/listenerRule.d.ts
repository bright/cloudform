import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SourceIpConfig {
    Values?: List<Value<string>>;
    constructor(properties: SourceIpConfig);
}
export declare class AuthenticateOidcConfig {
    OnUnauthenticatedRequest?: Value<string>;
    TokenEndpoint: Value<string>;
    SessionTimeout?: Value<number>;
    Scope?: Value<string>;
    Issuer: Value<string>;
    ClientSecret: Value<string>;
    UserInfoEndpoint: Value<string>;
    ClientId: Value<string>;
    AuthorizationEndpoint: Value<string>;
    SessionCookieName?: Value<string>;
    UseExistingClientSecret?: Value<boolean>;
    AuthenticationRequestExtraParams?: {
        [key: string]: Value<string>;
    };
    constructor(properties: AuthenticateOidcConfig);
}
export declare class AuthenticateCognitoConfig {
    OnUnauthenticatedRequest?: Value<string>;
    UserPoolClientId: Value<string>;
    UserPoolDomain: Value<string>;
    SessionTimeout?: Value<number>;
    Scope?: Value<string>;
    SessionCookieName?: Value<string>;
    UserPoolArn: Value<string>;
    AuthenticationRequestExtraParams?: {
        [key: string]: Value<string>;
    };
    constructor(properties: AuthenticateCognitoConfig);
}
export declare class QueryStringKeyValue {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: QueryStringKeyValue);
}
export declare class QueryStringConfig {
    Values?: List<QueryStringKeyValue>;
    constructor(properties: QueryStringConfig);
}
export declare class PathPatternConfig {
    Values?: List<Value<string>>;
    constructor(properties: PathPatternConfig);
}
export declare class RuleCondition {
    Field?: Value<string>;
    Values?: List<Value<string>>;
    HttpRequestMethodConfig?: HttpRequestMethodConfig;
    PathPatternConfig?: PathPatternConfig;
    HttpHeaderConfig?: HttpHeaderConfig;
    SourceIpConfig?: SourceIpConfig;
    HostHeaderConfig?: HostHeaderConfig;
    QueryStringConfig?: QueryStringConfig;
    constructor(properties: RuleCondition);
}
export declare class RedirectConfig {
    Path?: Value<string>;
    Query?: Value<string>;
    Port?: Value<string>;
    Host?: Value<string>;
    Protocol?: Value<string>;
    StatusCode: Value<string>;
    constructor(properties: RedirectConfig);
}
export declare class HostHeaderConfig {
    Values?: List<Value<string>>;
    constructor(properties: HostHeaderConfig);
}
export declare class FixedResponseConfig {
    ContentType?: Value<string>;
    StatusCode: Value<string>;
    MessageBody?: Value<string>;
    constructor(properties: FixedResponseConfig);
}
export declare class Action {
    Order?: Value<number>;
    TargetGroupArn?: Value<string>;
    FixedResponseConfig?: FixedResponseConfig;
    AuthenticateCognitoConfig?: AuthenticateCognitoConfig;
    Type: Value<string>;
    RedirectConfig?: RedirectConfig;
    ForwardConfig?: ForwardConfig;
    AuthenticateOidcConfig?: AuthenticateOidcConfig;
    constructor(properties: Action);
}
export declare class HttpHeaderConfig {
    Values?: List<Value<string>>;
    HttpHeaderName?: Value<string>;
    constructor(properties: HttpHeaderConfig);
}
export declare class ForwardConfig {
    TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
    TargetGroups?: List<TargetGroupTuple>;
    constructor(properties: ForwardConfig);
}
export declare class TargetGroupTuple {
    TargetGroupArn?: Value<string>;
    Weight?: Value<number>;
    constructor(properties: TargetGroupTuple);
}
export declare class HttpRequestMethodConfig {
    Values?: List<Value<string>>;
    constructor(properties: HttpRequestMethodConfig);
}
export declare class TargetGroupStickinessConfig {
    Enabled?: Value<boolean>;
    DurationSeconds?: Value<number>;
    constructor(properties: TargetGroupStickinessConfig);
}
export interface ListenerRuleProperties {
    ListenerArn: Value<string>;
    Actions: List<Action>;
    Priority: Value<number>;
    Conditions: List<RuleCondition>;
}
export default class ListenerRule extends ResourceBase<ListenerRuleProperties> {
    static SourceIpConfig: typeof SourceIpConfig;
    static AuthenticateOidcConfig: typeof AuthenticateOidcConfig;
    static AuthenticateCognitoConfig: typeof AuthenticateCognitoConfig;
    static QueryStringKeyValue: typeof QueryStringKeyValue;
    static QueryStringConfig: typeof QueryStringConfig;
    static PathPatternConfig: typeof PathPatternConfig;
    static RuleCondition: typeof RuleCondition;
    static RedirectConfig: typeof RedirectConfig;
    static HostHeaderConfig: typeof HostHeaderConfig;
    static FixedResponseConfig: typeof FixedResponseConfig;
    static Action: typeof Action;
    static HttpHeaderConfig: typeof HttpHeaderConfig;
    static ForwardConfig: typeof ForwardConfig;
    static TargetGroupTuple: typeof TargetGroupTuple;
    static HttpRequestMethodConfig: typeof HttpRequestMethodConfig;
    static TargetGroupStickinessConfig: typeof TargetGroupStickinessConfig;
    constructor(properties: ListenerRuleProperties);
}
