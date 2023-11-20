/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Action {
    Order?: Value<number>
    TargetGroupArn?: Value<string>
    FixedResponseConfig?: FixedResponseConfig
    AuthenticateCognitoConfig?: AuthenticateCognitoConfig
    Type!: Value<string>
    RedirectConfig?: RedirectConfig
    ForwardConfig?: ForwardConfig
    AuthenticateOidcConfig?: AuthenticateOidcConfig

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class AuthenticateCognitoConfig {
    OnUnauthenticatedRequest?: Value<string>
    UserPoolClientId!: Value<string>
    UserPoolDomain!: Value<string>
    SessionTimeout?: Value<string>
    Scope?: Value<string>
    SessionCookieName?: Value<string>
    UserPoolArn!: Value<string>
    AuthenticationRequestExtraParams?: {[key: string]: Value<string>}

    constructor(properties: AuthenticateCognitoConfig) {
        Object.assign(this, properties)
    }
}

export class AuthenticateOidcConfig {
    OnUnauthenticatedRequest?: Value<string>
    TokenEndpoint!: Value<string>
    UseExistingClientSecret?: Value<boolean>
    SessionTimeout?: Value<string>
    Scope?: Value<string>
    Issuer!: Value<string>
    ClientSecret?: Value<string>
    UserInfoEndpoint!: Value<string>
    ClientId!: Value<string>
    AuthorizationEndpoint!: Value<string>
    SessionCookieName?: Value<string>
    AuthenticationRequestExtraParams?: {[key: string]: Value<string>}

    constructor(properties: AuthenticateOidcConfig) {
        Object.assign(this, properties)
    }
}

export class Certificate {
    CertificateArn?: Value<string>

    constructor(properties: Certificate) {
        Object.assign(this, properties)
    }
}

export class FixedResponseConfig {
    ContentType?: Value<string>
    StatusCode!: Value<string>
    MessageBody?: Value<string>

    constructor(properties: FixedResponseConfig) {
        Object.assign(this, properties)
    }
}

export class ForwardConfig {
    TargetGroupStickinessConfig?: TargetGroupStickinessConfig
    TargetGroups?: List<TargetGroupTuple>

    constructor(properties: ForwardConfig) {
        Object.assign(this, properties)
    }
}

export class RedirectConfig {
    Path?: Value<string>
    Query?: Value<string>
    Port?: Value<string>
    Host?: Value<string>
    Protocol?: Value<string>
    StatusCode!: Value<string>

    constructor(properties: RedirectConfig) {
        Object.assign(this, properties)
    }
}

export class TargetGroupStickinessConfig {
    Enabled?: Value<boolean>
    DurationSeconds?: Value<number>

    constructor(properties: TargetGroupStickinessConfig) {
        Object.assign(this, properties)
    }
}

export class TargetGroupTuple {
    TargetGroupArn?: Value<string>
    Weight?: Value<number>

    constructor(properties: TargetGroupTuple) {
        Object.assign(this, properties)
    }
}

export interface ListenerProperties {
    AlpnPolicy?: List<Value<string>>
    SslPolicy?: Value<string>
    LoadBalancerArn: Value<string>
    DefaultActions: List<Action>
    Port?: Value<number>
    Certificates?: List<Certificate>
    Protocol?: Value<string>
}

export default class Listener extends ResourceBase<ListenerProperties> {
    static Action = Action
    static AuthenticateCognitoConfig = AuthenticateCognitoConfig
    static AuthenticateOidcConfig = AuthenticateOidcConfig
    static Certificate = Certificate
    static FixedResponseConfig = FixedResponseConfig
    static ForwardConfig = ForwardConfig
    static RedirectConfig = RedirectConfig
    static TargetGroupStickinessConfig = TargetGroupStickinessConfig
    static TargetGroupTuple = TargetGroupTuple

    constructor(properties: ListenerProperties) {
        super('AWS::ElasticLoadBalancingV2::Listener', properties)
    }
}
