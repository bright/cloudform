/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AuthenticateOidcConfig {
    AuthenticationRequestExtraParams?: {[key: string]: Value<string>}
    AuthorizationEndpoint!: Value<string>
    ClientId!: Value<string>
    ClientSecret!: Value<string>
    Issuer!: Value<string>
    OnUnauthenticatedRequest?: Value<string>
    Scope?: Value<string>
    SessionCookieName?: Value<string>
    SessionTimeout?: Value<number>
    TokenEndpoint!: Value<string>
    UserInfoEndpoint!: Value<string>

    constructor(properties: AuthenticateOidcConfig) {
        Object.assign(this, properties)
    }
}

export class AuthenticateCognitoConfig {
    AuthenticationRequestExtraParams?: {[key: string]: Value<string>}
    OnUnauthenticatedRequest?: Value<string>
    Scope?: Value<string>
    SessionCookieName?: Value<string>
    SessionTimeout?: Value<number>
    UserPoolArn!: Value<string>
    UserPoolClientId!: Value<string>
    UserPoolDomain!: Value<string>

    constructor(properties: AuthenticateCognitoConfig) {
        Object.assign(this, properties)
    }
}

export class FixedResponseConfig {
    ContentType?: Value<string>
    MessageBody?: Value<string>
    StatusCode!: Value<string>

    constructor(properties: FixedResponseConfig) {
        Object.assign(this, properties)
    }
}

export class Action {
    AuthenticateCognitoConfig?: AuthenticateCognitoConfig
    AuthenticateOidcConfig?: AuthenticateOidcConfig
    FixedResponseConfig?: FixedResponseConfig
    Order?: Value<number>
    RedirectConfig?: RedirectConfig
    TargetGroupArn?: Value<string>
    Type!: Value<string>

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class RuleCondition {
    Field?: Value<string>
    Values?: List<Value<string>>

    constructor(properties: RuleCondition) {
        Object.assign(this, properties)
    }
}

export class RedirectConfig {
    Host?: Value<string>
    Path?: Value<string>
    Port?: Value<string>
    Protocol?: Value<string>
    Query?: Value<string>
    StatusCode!: Value<string>

    constructor(properties: RedirectConfig) {
        Object.assign(this, properties)
    }
}

export interface ListenerRuleProperties {
    Actions: List<Action>
    Conditions: List<RuleCondition>
    ListenerArn: Value<string>
    Priority: Value<number>
}

export default class ListenerRule extends ResourceBase<ListenerRuleProperties> {
    static AuthenticateOidcConfig = AuthenticateOidcConfig
    static AuthenticateCognitoConfig = AuthenticateCognitoConfig
    static FixedResponseConfig = FixedResponseConfig
    static Action = Action
    static RuleCondition = RuleCondition
    static RedirectConfig = RedirectConfig

    constructor(properties: ListenerRuleProperties) {
        super('AWS::ElasticLoadBalancingV2::ListenerRule', properties)
    }
}
