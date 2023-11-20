import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccountRecoverySetting {
    RecoveryMechanisms?: List<RecoveryOption>;
    constructor(properties: AccountRecoverySetting);
}
export declare class AdminCreateUserConfig {
    InviteMessageTemplate?: InviteMessageTemplate;
    UnusedAccountValidityDays?: Value<number>;
    AllowAdminCreateUserOnly?: Value<boolean>;
    constructor(properties: AdminCreateUserConfig);
}
export declare class CustomEmailSender {
    LambdaArn?: Value<string>;
    LambdaVersion?: Value<string>;
    constructor(properties: CustomEmailSender);
}
export declare class CustomSMSSender {
    LambdaArn?: Value<string>;
    LambdaVersion?: Value<string>;
    constructor(properties: CustomSMSSender);
}
export declare class DeviceConfiguration {
    DeviceOnlyRememberedOnUserPrompt?: Value<boolean>;
    ChallengeRequiredOnNewDevice?: Value<boolean>;
    constructor(properties: DeviceConfiguration);
}
export declare class EmailConfiguration {
    ReplyToEmailAddress?: Value<string>;
    ConfigurationSet?: Value<string>;
    EmailSendingAccount?: Value<string>;
    SourceArn?: Value<string>;
    From?: Value<string>;
    constructor(properties: EmailConfiguration);
}
export declare class InviteMessageTemplate {
    EmailMessage?: Value<string>;
    SMSMessage?: Value<string>;
    EmailSubject?: Value<string>;
    constructor(properties: InviteMessageTemplate);
}
export declare class LambdaConfig {
    CreateAuthChallenge?: Value<string>;
    PreSignUp?: Value<string>;
    KMSKeyID?: Value<string>;
    UserMigration?: Value<string>;
    PostAuthentication?: Value<string>;
    VerifyAuthChallengeResponse?: Value<string>;
    PreAuthentication?: Value<string>;
    DefineAuthChallenge?: Value<string>;
    PreTokenGeneration?: Value<string>;
    CustomSMSSender?: CustomSMSSender;
    PostConfirmation?: Value<string>;
    CustomMessage?: Value<string>;
    CustomEmailSender?: CustomEmailSender;
    constructor(properties: LambdaConfig);
}
export declare class NumberAttributeConstraints {
    MinValue?: Value<string>;
    MaxValue?: Value<string>;
    constructor(properties: NumberAttributeConstraints);
}
export declare class PasswordPolicy {
    RequireNumbers?: Value<boolean>;
    MinimumLength?: Value<number>;
    TemporaryPasswordValidityDays?: Value<number>;
    RequireUppercase?: Value<boolean>;
    RequireLowercase?: Value<boolean>;
    RequireSymbols?: Value<boolean>;
    constructor(properties: PasswordPolicy);
}
export declare class Policies {
    PasswordPolicy?: PasswordPolicy;
    constructor(properties: Policies);
}
export declare class RecoveryOption {
    Priority?: Value<number>;
    Name?: Value<string>;
    constructor(properties: RecoveryOption);
}
export declare class SchemaAttribute {
    DeveloperOnlyAttribute?: Value<boolean>;
    Mutable?: Value<boolean>;
    AttributeDataType?: Value<string>;
    StringAttributeConstraints?: StringAttributeConstraints;
    Required?: Value<boolean>;
    NumberAttributeConstraints?: NumberAttributeConstraints;
    Name?: Value<string>;
    constructor(properties: SchemaAttribute);
}
export declare class SmsConfiguration {
    SnsRegion?: Value<string>;
    ExternalId?: Value<string>;
    SnsCallerArn?: Value<string>;
    constructor(properties: SmsConfiguration);
}
export declare class StringAttributeConstraints {
    MinLength?: Value<string>;
    MaxLength?: Value<string>;
    constructor(properties: StringAttributeConstraints);
}
export declare class UserAttributeUpdateSettings {
    AttributesRequireVerificationBeforeUpdate: List<Value<string>>;
    constructor(properties: UserAttributeUpdateSettings);
}
export declare class UserPoolAddOns {
    AdvancedSecurityMode?: Value<string>;
    constructor(properties: UserPoolAddOns);
}
export declare class UsernameConfiguration {
    CaseSensitive?: Value<boolean>;
    constructor(properties: UsernameConfiguration);
}
export declare class VerificationMessageTemplate {
    EmailMessageByLink?: Value<string>;
    EmailMessage?: Value<string>;
    SmsMessage?: Value<string>;
    EmailSubject?: Value<string>;
    DefaultEmailOption?: Value<string>;
    EmailSubjectByLink?: Value<string>;
    constructor(properties: VerificationMessageTemplate);
}
export interface UserPoolProperties {
    UserPoolTags?: {
        [key: string]: Value<string>;
    };
    Policies?: Policies;
    VerificationMessageTemplate?: VerificationMessageTemplate;
    MfaConfiguration?: Value<string>;
    Schema?: List<SchemaAttribute>;
    AdminCreateUserConfig?: AdminCreateUserConfig;
    DeletionProtection?: Value<string>;
    SmsAuthenticationMessage?: Value<string>;
    UsernameConfiguration?: UsernameConfiguration;
    UserPoolName?: Value<string>;
    SmsVerificationMessage?: Value<string>;
    UserPoolAddOns?: UserPoolAddOns;
    UserAttributeUpdateSettings?: UserAttributeUpdateSettings;
    EmailConfiguration?: EmailConfiguration;
    SmsConfiguration?: SmsConfiguration;
    AliasAttributes?: List<Value<string>>;
    EnabledMfas?: List<Value<string>>;
    EmailVerificationSubject?: Value<string>;
    LambdaConfig?: LambdaConfig;
    UsernameAttributes?: List<Value<string>>;
    AutoVerifiedAttributes?: List<Value<string>>;
    DeviceConfiguration?: DeviceConfiguration;
    EmailVerificationMessage?: Value<string>;
    AccountRecoverySetting?: AccountRecoverySetting;
}
export default class UserPool extends ResourceBase<UserPoolProperties> {
    static AccountRecoverySetting: typeof AccountRecoverySetting;
    static AdminCreateUserConfig: typeof AdminCreateUserConfig;
    static CustomEmailSender: typeof CustomEmailSender;
    static CustomSMSSender: typeof CustomSMSSender;
    static DeviceConfiguration: typeof DeviceConfiguration;
    static EmailConfiguration: typeof EmailConfiguration;
    static InviteMessageTemplate: typeof InviteMessageTemplate;
    static LambdaConfig: typeof LambdaConfig;
    static NumberAttributeConstraints: typeof NumberAttributeConstraints;
    static PasswordPolicy: typeof PasswordPolicy;
    static Policies: typeof Policies;
    static RecoveryOption: typeof RecoveryOption;
    static SchemaAttribute: typeof SchemaAttribute;
    static SmsConfiguration: typeof SmsConfiguration;
    static StringAttributeConstraints: typeof StringAttributeConstraints;
    static UserAttributeUpdateSettings: typeof UserAttributeUpdateSettings;
    static UserPoolAddOns: typeof UserPoolAddOns;
    static UsernameConfiguration: typeof UsernameConfiguration;
    static VerificationMessageTemplate: typeof VerificationMessageTemplate;
    constructor(properties?: UserPoolProperties);
}
