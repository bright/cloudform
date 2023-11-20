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

export class AccountRecoverySetting {
    RecoveryMechanisms?: List<RecoveryOption>

    constructor(properties: AccountRecoverySetting) {
        Object.assign(this, properties)
    }
}

export class AdminCreateUserConfig {
    InviteMessageTemplate?: InviteMessageTemplate
    UnusedAccountValidityDays?: Value<number>
    AllowAdminCreateUserOnly?: Value<boolean>

    constructor(properties: AdminCreateUserConfig) {
        Object.assign(this, properties)
    }
}

export class CustomEmailSender {
    LambdaArn?: Value<string>
    LambdaVersion?: Value<string>

    constructor(properties: CustomEmailSender) {
        Object.assign(this, properties)
    }
}

export class CustomSMSSender {
    LambdaArn?: Value<string>
    LambdaVersion?: Value<string>

    constructor(properties: CustomSMSSender) {
        Object.assign(this, properties)
    }
}

export class DeviceConfiguration {
    DeviceOnlyRememberedOnUserPrompt?: Value<boolean>
    ChallengeRequiredOnNewDevice?: Value<boolean>

    constructor(properties: DeviceConfiguration) {
        Object.assign(this, properties)
    }
}

export class EmailConfiguration {
    ReplyToEmailAddress?: Value<string>
    ConfigurationSet?: Value<string>
    EmailSendingAccount?: Value<string>
    SourceArn?: Value<string>
    From?: Value<string>

    constructor(properties: EmailConfiguration) {
        Object.assign(this, properties)
    }
}

export class InviteMessageTemplate {
    EmailMessage?: Value<string>
    SMSMessage?: Value<string>
    EmailSubject?: Value<string>

    constructor(properties: InviteMessageTemplate) {
        Object.assign(this, properties)
    }
}

export class LambdaConfig {
    CreateAuthChallenge?: Value<string>
    PreSignUp?: Value<string>
    KMSKeyID?: Value<string>
    UserMigration?: Value<string>
    PostAuthentication?: Value<string>
    VerifyAuthChallengeResponse?: Value<string>
    PreAuthentication?: Value<string>
    DefineAuthChallenge?: Value<string>
    PreTokenGeneration?: Value<string>
    CustomSMSSender?: CustomSMSSender
    PostConfirmation?: Value<string>
    CustomMessage?: Value<string>
    CustomEmailSender?: CustomEmailSender

    constructor(properties: LambdaConfig) {
        Object.assign(this, properties)
    }
}

export class NumberAttributeConstraints {
    MinValue?: Value<string>
    MaxValue?: Value<string>

    constructor(properties: NumberAttributeConstraints) {
        Object.assign(this, properties)
    }
}

export class PasswordPolicy {
    RequireNumbers?: Value<boolean>
    MinimumLength?: Value<number>
    TemporaryPasswordValidityDays?: Value<number>
    RequireUppercase?: Value<boolean>
    RequireLowercase?: Value<boolean>
    RequireSymbols?: Value<boolean>

    constructor(properties: PasswordPolicy) {
        Object.assign(this, properties)
    }
}

export class Policies {
    PasswordPolicy?: PasswordPolicy

    constructor(properties: Policies) {
        Object.assign(this, properties)
    }
}

export class RecoveryOption {
    Priority?: Value<number>
    Name?: Value<string>

    constructor(properties: RecoveryOption) {
        Object.assign(this, properties)
    }
}

export class SchemaAttribute {
    DeveloperOnlyAttribute?: Value<boolean>
    Mutable?: Value<boolean>
    AttributeDataType?: Value<string>
    StringAttributeConstraints?: StringAttributeConstraints
    Required?: Value<boolean>
    NumberAttributeConstraints?: NumberAttributeConstraints
    Name?: Value<string>

    constructor(properties: SchemaAttribute) {
        Object.assign(this, properties)
    }
}

export class SmsConfiguration {
    SnsRegion?: Value<string>
    ExternalId?: Value<string>
    SnsCallerArn?: Value<string>

    constructor(properties: SmsConfiguration) {
        Object.assign(this, properties)
    }
}

export class StringAttributeConstraints {
    MinLength?: Value<string>
    MaxLength?: Value<string>

    constructor(properties: StringAttributeConstraints) {
        Object.assign(this, properties)
    }
}

export class UserAttributeUpdateSettings {
    AttributesRequireVerificationBeforeUpdate!: List<Value<string>>

    constructor(properties: UserAttributeUpdateSettings) {
        Object.assign(this, properties)
    }
}

export class UserPoolAddOns {
    AdvancedSecurityMode?: Value<string>

    constructor(properties: UserPoolAddOns) {
        Object.assign(this, properties)
    }
}

export class UsernameConfiguration {
    CaseSensitive?: Value<boolean>

    constructor(properties: UsernameConfiguration) {
        Object.assign(this, properties)
    }
}

export class VerificationMessageTemplate {
    EmailMessageByLink?: Value<string>
    EmailMessage?: Value<string>
    SmsMessage?: Value<string>
    EmailSubject?: Value<string>
    DefaultEmailOption?: Value<string>
    EmailSubjectByLink?: Value<string>

    constructor(properties: VerificationMessageTemplate) {
        Object.assign(this, properties)
    }
}

export interface UserPoolProperties {
    UserPoolTags?: {[key: string]: Value<string>}
    Policies?: Policies
    VerificationMessageTemplate?: VerificationMessageTemplate
    MfaConfiguration?: Value<string>
    Schema?: List<SchemaAttribute>
    AdminCreateUserConfig?: AdminCreateUserConfig
    DeletionProtection?: Value<string>
    SmsAuthenticationMessage?: Value<string>
    UsernameConfiguration?: UsernameConfiguration
    UserPoolName?: Value<string>
    SmsVerificationMessage?: Value<string>
    UserPoolAddOns?: UserPoolAddOns
    UserAttributeUpdateSettings?: UserAttributeUpdateSettings
    EmailConfiguration?: EmailConfiguration
    SmsConfiguration?: SmsConfiguration
    AliasAttributes?: List<Value<string>>
    EnabledMfas?: List<Value<string>>
    EmailVerificationSubject?: Value<string>
    LambdaConfig?: LambdaConfig
    UsernameAttributes?: List<Value<string>>
    AutoVerifiedAttributes?: List<Value<string>>
    DeviceConfiguration?: DeviceConfiguration
    EmailVerificationMessage?: Value<string>
    AccountRecoverySetting?: AccountRecoverySetting
}

export default class UserPool extends ResourceBase<UserPoolProperties> {
    static AccountRecoverySetting = AccountRecoverySetting
    static AdminCreateUserConfig = AdminCreateUserConfig
    static CustomEmailSender = CustomEmailSender
    static CustomSMSSender = CustomSMSSender
    static DeviceConfiguration = DeviceConfiguration
    static EmailConfiguration = EmailConfiguration
    static InviteMessageTemplate = InviteMessageTemplate
    static LambdaConfig = LambdaConfig
    static NumberAttributeConstraints = NumberAttributeConstraints
    static PasswordPolicy = PasswordPolicy
    static Policies = Policies
    static RecoveryOption = RecoveryOption
    static SchemaAttribute = SchemaAttribute
    static SmsConfiguration = SmsConfiguration
    static StringAttributeConstraints = StringAttributeConstraints
    static UserAttributeUpdateSettings = UserAttributeUpdateSettings
    static UserPoolAddOns = UserPoolAddOns
    static UsernameConfiguration = UsernameConfiguration
    static VerificationMessageTemplate = VerificationMessageTemplate

    constructor(properties?: UserPoolProperties) {
        super('AWS::Cognito::UserPool', properties || {})
    }
}
