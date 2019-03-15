/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class PasswordPolicy {
    RequireNumbers?: Value<boolean>
    MinimumLength?: Value<number>
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

export class EmailConfiguration {
    ReplyToEmailAddress?: Value<string>
    SourceArn?: Value<string>

    constructor(properties: EmailConfiguration) {
        Object.assign(this, properties)
    }
}

export class LambdaConfig {
    CreateAuthChallenge?: Value<string>
    PreAuthentication?: Value<string>
    DefineAuthChallenge?: Value<string>
    PreSignUp?: Value<string>
    PostAuthentication?: Value<string>
    PostConfirmation?: Value<string>
    CustomMessage?: Value<string>
    VerifyAuthChallengeResponse?: Value<string>

    constructor(properties: LambdaConfig) {
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

export class NumberAttributeConstraints {
    MinValue?: Value<string>
    MaxValue?: Value<string>

    constructor(properties: NumberAttributeConstraints) {
        Object.assign(this, properties)
    }
}

export class SmsConfiguration {
    ExternalId?: Value<string>
    SnsCallerArn?: Value<string>

    constructor(properties: SmsConfiguration) {
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

export class InviteMessageTemplate {
    EmailMessage?: Value<string>
    SMSMessage?: Value<string>
    EmailSubject?: Value<string>

    constructor(properties: InviteMessageTemplate) {
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

export interface UserPoolProperties {
    UserPoolTags?: {[key: string]: any}
    Policies?: Policies
    MfaConfiguration?: Value<string>
    Schema?: List<SchemaAttribute>
    AdminCreateUserConfig?: AdminCreateUserConfig
    SmsAuthenticationMessage?: Value<string>
    UserPoolName?: Value<string>
    SmsVerificationMessage?: Value<string>
    EmailConfiguration?: EmailConfiguration
    SmsConfiguration?: SmsConfiguration
    AliasAttributes?: List<Value<string>>
    EmailVerificationSubject?: Value<string>
    LambdaConfig?: LambdaConfig
    UsernameAttributes?: List<Value<string>>
    AutoVerifiedAttributes?: List<Value<string>>
    DeviceConfiguration?: DeviceConfiguration
    EmailVerificationMessage?: Value<string>
}

export default class UserPool extends ResourceBase<UserPoolProperties> {
    static PasswordPolicy = PasswordPolicy
    static Policies = Policies
    static EmailConfiguration = EmailConfiguration
    static LambdaConfig = LambdaConfig
    static AdminCreateUserConfig = AdminCreateUserConfig
    static SchemaAttribute = SchemaAttribute
    static NumberAttributeConstraints = NumberAttributeConstraints
    static SmsConfiguration = SmsConfiguration
    static DeviceConfiguration = DeviceConfiguration
    static InviteMessageTemplate = InviteMessageTemplate
    static StringAttributeConstraints = StringAttributeConstraints

    constructor(properties?: UserPoolProperties) {
        super('AWS::Cognito::UserPool', properties || {})
    }
}
