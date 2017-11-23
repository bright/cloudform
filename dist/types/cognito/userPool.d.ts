import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface PasswordPolicyProperties {
    RequireNumbers?: Value<boolean>;
    MinimumLength?: Value<number>;
    RequireUppercase?: Value<boolean>;
    RequireLowercase?: Value<boolean>;
    RequireSymbols?: Value<boolean>;
}
export declare class PasswordPolicy extends ResourceBase {
    constructor(properties: PasswordPolicyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PoliciesProperties {
    PasswordPolicy?: PasswordPolicy;
}
export declare class Policies extends ResourceBase {
    constructor(properties: PoliciesProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EmailConfigurationProperties {
    ReplyToEmailAddress?: Value<string>;
    SourceArn?: Value<string>;
}
export declare class EmailConfiguration extends ResourceBase {
    constructor(properties: EmailConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LambdaConfigProperties {
    CreateAuthChallenge?: Value<string>;
    PreAuthentication?: Value<string>;
    DefineAuthChallenge?: Value<string>;
    PreSignUp?: Value<string>;
    PostAuthentication?: Value<string>;
    PostConfirmation?: Value<string>;
    CustomMessage?: Value<string>;
    VerifyAuthChallengeResponse?: Value<string>;
}
export declare class LambdaConfig extends ResourceBase {
    constructor(properties: LambdaConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface AdminCreateUserConfigProperties {
    InviteMessageTemplate?: InviteMessageTemplate;
    UnusedAccountValidityDays?: Value<number>;
    AllowAdminCreateUserOnly?: Value<boolean>;
}
export declare class AdminCreateUserConfig extends ResourceBase {
    constructor(properties: AdminCreateUserConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SchemaAttributeProperties {
    DeveloperOnlyAttribute?: Value<boolean>;
    Mutable?: Value<boolean>;
    AttributeDataType?: Value<string>;
    StringAttributeConstraints?: StringAttributeConstraints;
    Required?: Value<boolean>;
    NumberAttributeConstraints?: NumberAttributeConstraints;
    Name?: Value<string>;
}
export declare class SchemaAttribute extends ResourceBase {
    constructor(properties: SchemaAttributeProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface NumberAttributeConstraintsProperties {
    MinValue?: Value<string>;
    MaxValue?: Value<string>;
}
export declare class NumberAttributeConstraints extends ResourceBase {
    constructor(properties: NumberAttributeConstraintsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SmsConfigurationProperties {
    ExternalId?: Value<string>;
    SnsCallerArn?: Value<string>;
}
export declare class SmsConfiguration extends ResourceBase {
    constructor(properties: SmsConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface DeviceConfigurationProperties {
    DeviceOnlyRememberedOnUserPrompt?: Value<boolean>;
    ChallengeRequiredOnNewDevice?: Value<boolean>;
}
export declare class DeviceConfiguration extends ResourceBase {
    constructor(properties: DeviceConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface InviteMessageTemplateProperties {
    EmailMessage?: Value<string>;
    SMSMessage?: Value<string>;
    EmailSubject?: Value<string>;
}
export declare class InviteMessageTemplate extends ResourceBase {
    constructor(properties: InviteMessageTemplateProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface StringAttributeConstraintsProperties {
    MinLength?: Value<string>;
    MaxLength?: Value<string>;
}
export declare class StringAttributeConstraints extends ResourceBase {
    constructor(properties: StringAttributeConstraintsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface UserPoolProperties {
    UserPoolTags?: any;
    Policies?: Policies;
    MfaConfiguration?: Value<string>;
    Schema?: List<SchemaAttribute>;
    AdminCreateUserConfig?: AdminCreateUserConfig;
    SmsAuthenticationMessage?: Value<string>;
    UserPoolName?: Value<string>;
    SmsVerificationMessage?: Value<string>;
    EmailConfiguration?: EmailConfiguration;
    SmsConfiguration?: SmsConfiguration;
    AliasAttributes?: List<Value<string>>;
    EmailVerificationSubject?: Value<string>;
    LambdaConfig?: LambdaConfig;
    AutoVerifiedAttributes?: List<Value<string>>;
    DeviceConfiguration?: DeviceConfiguration;
    EmailVerificationMessage?: Value<string>;
}
export default class UserPool extends ResourceBase {
    constructor(properties: UserPoolProperties, dependsOn?: Value<string> | Value<string>[]);
}
