import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class Action {
    AuthenticateCognitoConfig?: AuthenticateCognitoConfig;
    AuthenticateOidcConfig?: AuthenticateOidcConfig;
    FixedResponseConfig?: FixedResponseConfig;
    ForwardConfig?: ForwardConfig;
    Order?: Value<number>;
    RedirectConfig?: RedirectConfig;
    TargetGroupArn?: Value<string>;
    Type: Value<string>;
    constructor(properties: Action);
}
export declare class ForwardConfig {
    TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
    TargetGroups?: List<TargetGroupTuple>;
    constructor(properties: ForwardConfig);
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
export declare class RedirectConfig {
    Host?: Value<string>;
    Path?: Value<string>;
    Port?: Value<string>;
    Protocol?: Value<string>;
    Query?: Value<string>;
    StatusCode: Value<string>;
    constructor(properties: RedirectConfig);
}
export declare class FixedResponseConfig {
    ContentType?: Value<string>;
    MessageBody?: Value<string>;
    StatusCode: Value<string>;
    constructor(properties: FixedResponseConfig);
}
export declare class Certificate {
    CertificateArn?: Value<string>;
    constructor(properties: Certificate);
}
export declare class TargetGroupStickinessConfig {
    DurationSeconds?: Value<number>;
    Enabled?: Value<boolean>;
    constructor(properties: TargetGroupStickinessConfig);
}
export declare class TargetGroupTuple {
    TargetGroupArn?: Value<string>;
    Weight?: Value<number>;
    constructor(properties: TargetGroupTuple);
}
export interface ListenerProperties {
    AlpnPolicy?: List<Value<string>>;
    Certificates?: List<Certificate>;
    DefaultActions: List<Action>;
    LoadBalancerArn: Value<string>;
    Port: Value<number>;
    Protocol: Value<string>;
    SslPolicy?: Value<string>;
}
export default class Listener extends ResourceBase<ListenerProperties> {
    static AuthenticateCognitoConfig: typeof AuthenticateCognitoConfig;
    static Action: typeof Action;
    static ForwardConfig: typeof ForwardConfig;
    static AuthenticateOidcConfig: typeof AuthenticateOidcConfig;
    static RedirectConfig: typeof RedirectConfig;
    static FixedResponseConfig: typeof FixedResponseConfig;
    static Certificate: typeof Certificate;
    static TargetGroupStickinessConfig: typeof TargetGroupStickinessConfig;
    static TargetGroupTuple: typeof TargetGroupTuple;
    constructor(properties: ListenerProperties);
}
