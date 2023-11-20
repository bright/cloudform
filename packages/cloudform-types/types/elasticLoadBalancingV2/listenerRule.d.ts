import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class AuthenticateOidcConfig {
    OnUnauthenticatedRequest?: Value<string>;
    TokenEndpoint: Value<string>;
    UseExistingClientSecret?: Value<boolean>;
    SessionTimeout?: Value<number>;
    Scope?: Value<string>;
    Issuer: Value<string>;
    ClientSecret?: Value<string>;
    UserInfoEndpoint: Value<string>;
    ClientId: Value<string>;
    AuthorizationEndpoint: Value<string>;
    SessionCookieName?: Value<string>;
    AuthenticationRequestExtraParams?: {
        [key: string]: Value<string>;
    };
    constructor(properties: AuthenticateOidcConfig);
}
export declare class FixedResponseConfig {
    ContentType?: Value<string>;
    StatusCode: Value<string>;
    MessageBody?: Value<string>;
    constructor(properties: FixedResponseConfig);
}
export declare class ForwardConfig {
    TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
    TargetGroups?: List<TargetGroupTuple>;
    constructor(properties: ForwardConfig);
}
export declare class HostHeaderConfig {
    Values?: List<Value<string>>;
    constructor(properties: HostHeaderConfig);
}
export declare class HttpHeaderConfig {
    Values?: List<Value<string>>;
    HttpHeaderName?: Value<string>;
    constructor(properties: HttpHeaderConfig);
}
export declare class HttpRequestMethodConfig {
    Values?: List<Value<string>>;
    constructor(properties: HttpRequestMethodConfig);
}
export declare class PathPatternConfig {
    Values?: List<Value<string>>;
    constructor(properties: PathPatternConfig);
}
export declare class QueryStringConfig {
    Values?: List<QueryStringKeyValue>;
    constructor(properties: QueryStringConfig);
}
export declare class QueryStringKeyValue {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: QueryStringKeyValue);
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
export declare class RuleCondition {
    Field?: Value<string>;
    HttpHeaderConfig?: HttpHeaderConfig;
    Values?: List<Value<string>>;
    QueryStringConfig?: QueryStringConfig;
    HostHeaderConfig?: HostHeaderConfig;
    HttpRequestMethodConfig?: HttpRequestMethodConfig;
    PathPatternConfig?: PathPatternConfig;
    SourceIpConfig?: SourceIpConfig;
    constructor(properties: RuleCondition);
}
export declare class SourceIpConfig {
    Values?: List<Value<string>>;
    constructor(properties: SourceIpConfig);
}
export declare class TargetGroupStickinessConfig {
    Enabled?: Value<boolean>;
    DurationSeconds?: Value<number>;
    constructor(properties: TargetGroupStickinessConfig);
}
export declare class TargetGroupTuple {
    TargetGroupArn?: Value<string>;
    Weight?: Value<number>;
    constructor(properties: TargetGroupTuple);
}
export interface ListenerRuleProperties {
    ListenerArn?: Value<string>;
    Actions: List<Action>;
    Priority: Value<number>;
    Conditions: List<RuleCondition>;
}
export default class ListenerRule extends ResourceBase<ListenerRuleProperties> {
    static Action: typeof Action;
    static AuthenticateCognitoConfig: typeof AuthenticateCognitoConfig;
    static AuthenticateOidcConfig: typeof AuthenticateOidcConfig;
    static FixedResponseConfig: typeof FixedResponseConfig;
    static ForwardConfig: typeof ForwardConfig;
    static HostHeaderConfig: typeof HostHeaderConfig;
    static HttpHeaderConfig: typeof HttpHeaderConfig;
    static HttpRequestMethodConfig: typeof HttpRequestMethodConfig;
    static PathPatternConfig: typeof PathPatternConfig;
    static QueryStringConfig: typeof QueryStringConfig;
    static QueryStringKeyValue: typeof QueryStringKeyValue;
    static RedirectConfig: typeof RedirectConfig;
    static RuleCondition: typeof RuleCondition;
    static SourceIpConfig: typeof SourceIpConfig;
    static TargetGroupStickinessConfig: typeof TargetGroupStickinessConfig;
    static TargetGroupTuple: typeof TargetGroupTuple;
    constructor(properties: ListenerRuleProperties);
}
