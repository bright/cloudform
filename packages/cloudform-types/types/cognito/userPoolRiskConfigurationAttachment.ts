/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AccountTakeoverActionsType {
    HighAction?: AccountTakeoverActionType
    LowAction?: AccountTakeoverActionType
    MediumAction?: AccountTakeoverActionType

    constructor(properties: AccountTakeoverActionsType) {
        Object.assign(this, properties)
    }
}

export class RiskExceptionConfigurationType {
    BlockedIPRangeList?: List<Value<string>>
    SkippedIPRangeList?: List<Value<string>>

    constructor(properties: RiskExceptionConfigurationType) {
        Object.assign(this, properties)
    }
}

export class NotifyEmailType {
    TextBody?: Value<string>
    HtmlBody?: Value<string>
    Subject!: Value<string>

    constructor(properties: NotifyEmailType) {
        Object.assign(this, properties)
    }
}

export class AccountTakeoverActionType {
    Notify!: Value<boolean>
    EventAction!: Value<string>

    constructor(properties: AccountTakeoverActionType) {
        Object.assign(this, properties)
    }
}

export class CompromisedCredentialsRiskConfigurationType {
    Actions!: CompromisedCredentialsActionsType
    EventFilter?: List<Value<string>>

    constructor(properties: CompromisedCredentialsRiskConfigurationType) {
        Object.assign(this, properties)
    }
}

export class CompromisedCredentialsActionsType {
    EventAction!: Value<string>

    constructor(properties: CompromisedCredentialsActionsType) {
        Object.assign(this, properties)
    }
}

export class NotifyConfigurationType {
    BlockEmail?: NotifyEmailType
    ReplyTo?: Value<string>
    SourceArn!: Value<string>
    NoActionEmail?: NotifyEmailType
    From?: Value<string>
    MfaEmail?: NotifyEmailType

    constructor(properties: NotifyConfigurationType) {
        Object.assign(this, properties)
    }
}

export class AccountTakeoverRiskConfigurationType {
    Actions!: AccountTakeoverActionsType
    NotifyConfiguration?: NotifyConfigurationType

    constructor(properties: AccountTakeoverRiskConfigurationType) {
        Object.assign(this, properties)
    }
}

export interface UserPoolRiskConfigurationAttachmentProperties {
    CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType
    UserPoolId: Value<string>
    ClientId: Value<string>
    AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType
    RiskExceptionConfiguration?: RiskExceptionConfigurationType
}

export default class UserPoolRiskConfigurationAttachment extends ResourceBase<UserPoolRiskConfigurationAttachmentProperties> {
    static AccountTakeoverActionsType = AccountTakeoverActionsType
    static RiskExceptionConfigurationType = RiskExceptionConfigurationType
    static NotifyEmailType = NotifyEmailType
    static AccountTakeoverActionType = AccountTakeoverActionType
    static CompromisedCredentialsRiskConfigurationType = CompromisedCredentialsRiskConfigurationType
    static CompromisedCredentialsActionsType = CompromisedCredentialsActionsType
    static NotifyConfigurationType = NotifyConfigurationType
    static AccountTakeoverRiskConfigurationType = AccountTakeoverRiskConfigurationType

    constructor(properties: UserPoolRiskConfigurationAttachmentProperties) {
        super('AWS::Cognito::UserPoolRiskConfigurationAttachment', properties)
    }
}
