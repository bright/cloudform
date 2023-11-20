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
    SessionTimeout?: Value<string>;
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
    SessionTimeout?: Value<string>;
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
export declare class Certificate {
    CertificateArn?: Value<string>;
    constructor(properties: Certificate);
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
export declare class RedirectConfig {
    Path?: Value<string>;
    Query?: Value<string>;
    Port?: Value<string>;
    Host?: Value<string>;
    Protocol?: Value<string>;
    StatusCode: Value<string>;
    constructor(properties: RedirectConfig);
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
export interface ListenerProperties {
    AlpnPolicy?: List<Value<string>>;
    SslPolicy?: Value<string>;
    LoadBalancerArn: Value<string>;
    DefaultActions: List<Action>;
    Port?: Value<number>;
    Certificates?: List<Certificate>;
    Protocol?: Value<string>;
}
export default class Listener extends ResourceBase<ListenerProperties> {
    static Action: typeof Action;
    static AuthenticateCognitoConfig: typeof AuthenticateCognitoConfig;
    static AuthenticateOidcConfig: typeof AuthenticateOidcConfig;
    static Certificate: typeof Certificate;
    static FixedResponseConfig: typeof FixedResponseConfig;
    static ForwardConfig: typeof ForwardConfig;
    static RedirectConfig: typeof RedirectConfig;
    static TargetGroupStickinessConfig: typeof TargetGroupStickinessConfig;
    static TargetGroupTuple: typeof TargetGroupTuple;
    constructor(properties: ListenerProperties);
}
