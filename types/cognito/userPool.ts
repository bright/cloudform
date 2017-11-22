/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface PasswordPolicyProperties {
    RequireNumbers?: Value<boolean>
    MinimumLength?: Value<number>
    RequireUppercase?: Value<boolean>
    RequireLowercase?: Value<boolean>
    RequireSymbols?: Value<boolean>
}

export class PasswordPolicy extends ResourceBase {
    constructor(properties: PasswordPolicyProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::PasswordPolicy', properties, dependsOn)
    }
}

export interface PoliciesProperties {
    PasswordPolicy?: PasswordPolicy
}

export class Policies extends ResourceBase {
    constructor(properties: PoliciesProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::Policies', properties, dependsOn)
    }
}

export interface EmailConfigurationProperties {
    ReplyToEmailAddress?: Value<string>
    SourceArn?: Value<string>
}

export class EmailConfiguration extends ResourceBase {
    constructor(properties: EmailConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::EmailConfiguration', properties, dependsOn)
    }
}

export interface LambdaConfigProperties {
    CreateAuthChallenge?: Value<string>
    PreAuthentication?: Value<string>
    DefineAuthChallenge?: Value<string>
    PreSignUp?: Value<string>
    PostAuthentication?: Value<string>
    PostConfirmation?: Value<string>
    CustomMessage?: Value<string>
    VerifyAuthChallengeResponse?: Value<string>
}

export class LambdaConfig extends ResourceBase {
    constructor(properties: LambdaConfigProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::LambdaConfig', properties, dependsOn)
    }
}

export interface AdminCreateUserConfigProperties {
    InviteMessageTemplate?: InviteMessageTemplate
    UnusedAccountValidityDays?: Value<number>
    AllowAdminCreateUserOnly?: Value<boolean>
}

export class AdminCreateUserConfig extends ResourceBase {
    constructor(properties: AdminCreateUserConfigProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::AdminCreateUserConfig', properties, dependsOn)
    }
}

export interface SchemaAttributeProperties {
    DeveloperOnlyAttribute?: Value<boolean>
    Mutable?: Value<boolean>
    AttributeDataType?: Value<string>
    StringAttributeConstraints?: StringAttributeConstraints
    Required?: Value<boolean>
    NumberAttributeConstraints?: NumberAttributeConstraints
    Name?: Value<string>
}

export class SchemaAttribute extends ResourceBase {
    constructor(properties: SchemaAttributeProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::SchemaAttribute', properties, dependsOn)
    }
}

export interface NumberAttributeConstraintsProperties {
    MinValue?: Value<string>
    MaxValue?: Value<string>
}

export class NumberAttributeConstraints extends ResourceBase {
    constructor(properties: NumberAttributeConstraintsProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::NumberAttributeConstraints', properties, dependsOn)
    }
}

export interface SmsConfigurationProperties {
    ExternalId?: Value<string>
    SnsCallerArn?: Value<string>
}

export class SmsConfiguration extends ResourceBase {
    constructor(properties: SmsConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::SmsConfiguration', properties, dependsOn)
    }
}

export interface DeviceConfigurationProperties {
    DeviceOnlyRememberedOnUserPrompt?: Value<boolean>
    ChallengeRequiredOnNewDevice?: Value<boolean>
}

export class DeviceConfiguration extends ResourceBase {
    constructor(properties: DeviceConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::DeviceConfiguration', properties, dependsOn)
    }
}

export interface InviteMessageTemplateProperties {
    EmailMessage?: Value<string>
    SMSMessage?: Value<string>
    EmailSubject?: Value<string>
}

export class InviteMessageTemplate extends ResourceBase {
    constructor(properties: InviteMessageTemplateProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::InviteMessageTemplate', properties, dependsOn)
    }
}

export interface StringAttributeConstraintsProperties {
    MinLength?: Value<string>
    MaxLength?: Value<string>
}

export class StringAttributeConstraints extends ResourceBase {
    constructor(properties: StringAttributeConstraintsProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::StringAttributeConstraints', properties, dependsOn)
    }
}

export interface UserPoolProperties {
    UserPoolTags?: any
    Policies?: Policies
    MfaConfiguration?: Value<string>
    Schema?: SchemaAttribute[]
    AdminCreateUserConfig?: AdminCreateUserConfig
    SmsAuthenticationMessage?: Value<string>
    UserPoolName?: Value<string>
    SmsVerificationMessage?: Value<string>
    EmailConfiguration?: EmailConfiguration
    SmsConfiguration?: SmsConfiguration
    AliasAttributes?: Value<string>[]
    EmailVerificationSubject?: Value<string>
    LambdaConfig?: LambdaConfig
    AutoVerifiedAttributes?: Value<string>[]
    DeviceConfiguration?: DeviceConfiguration
    EmailVerificationMessage?: Value<string>
}

export default class UserPool extends ResourceBase {
    constructor(properties: UserPoolProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::UserPool', properties, dependsOn)
    }
}