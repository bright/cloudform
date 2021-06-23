import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PasswordPolicy {
    RequireNumbers?: Value<boolean>;
    MinimumLength?: Value<number>;
    TemporaryPasswordValidityDays?: Value<number>;
    RequireUppercase?: Value<boolean>;
    RequireLowercase?: Value<boolean>;
    RequireSymbols?: Value<boolean>;
    constructor(properties: PasswordPolicy);
}
export declare class RecoveryOption {
    Priority?: Value<number>;
    Name?: Value<string>;
    constructor(properties: RecoveryOption);
}
export declare class AdminCreateUserConfig {
    InviteMessageTemplate?: InviteMessageTemplate;
    UnusedAccountValidityDays?: Value<number>;
    AllowAdminCreateUserOnly?: Value<boolean>;
    constructor(properties: AdminCreateUserConfig);
}
export declare class SmsConfiguration {
    ExternalId?: Value<string>;
    SnsCallerArn?: Value<string>;
    constructor(properties: SmsConfiguration);
}
export declare class StringAttributeConstraints {
    MinLength?: Value<string>;
    MaxLength?: Value<string>;
    constructor(properties: StringAttributeConstraints);
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
export declare class InviteMessageTemplate {
    EmailMessage?: Value<string>;
    SMSMessage?: Value<string>;
    EmailSubject?: Value<string>;
    constructor(properties: InviteMessageTemplate);
}
export declare class EmailConfiguration {
    ReplyToEmailAddress?: Value<string>;
    ConfigurationSet?: Value<string>;
    EmailSendingAccount?: Value<string>;
    SourceArn?: Value<string>;
    From?: Value<string>;
    constructor(properties: EmailConfiguration);
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
export declare class NumberAttributeConstraints {
    MinValue?: Value<string>;
    MaxValue?: Value<string>;
    constructor(properties: NumberAttributeConstraints);
}
export declare class CustomSMSSender {
    LambdaArn?: Value<string>;
    LambdaVersion?: Value<string>;
    constructor(properties: CustomSMSSender);
}
export declare class AccountRecoverySetting {
    RecoveryMechanisms?: List<RecoveryOption>;
    constructor(properties: AccountRecoverySetting);
}
export declare class UserPoolAddOns {
    AdvancedSecurityMode?: Value<string>;
    constructor(properties: UserPoolAddOns);
}
export declare class Policies {
    PasswordPolicy?: PasswordPolicy;
    constructor(properties: Policies);
}
export declare class CustomEmailSender {
    LambdaArn?: Value<string>;
    LambdaVersion?: Value<string>;
    constructor(properties: CustomEmailSender);
}
export declare class DeviceConfiguration {
    DeviceOnlyRememberedOnUserPrompt?: Value<boolean>;
    ChallengeRequiredOnNewDevice?: Value<boolean>;
    constructor(properties: DeviceConfiguration);
}
export declare class UsernameConfiguration {
    CaseSensitive?: Value<boolean>;
    constructor(properties: UsernameConfiguration);
}
export interface UserPoolProperties {
    UserPoolTags?: {
        [key: string]: any;
    };
    Policies?: Policies;
    VerificationMessageTemplate?: VerificationMessageTemplate;
    MfaConfiguration?: Value<string>;
    Schema?: List<SchemaAttribute>;
    AdminCreateUserConfig?: AdminCreateUserConfig;
    SmsAuthenticationMessage?: Value<string>;
    UsernameConfiguration?: UsernameConfiguration;
    UserPoolName?: Value<string>;
    SmsVerificationMessage?: Value<string>;
    UserPoolAddOns?: UserPoolAddOns;
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
    static PasswordPolicy: typeof PasswordPolicy;
    static RecoveryOption: typeof RecoveryOption;
    static AdminCreateUserConfig: typeof AdminCreateUserConfig;
    static SmsConfiguration: typeof SmsConfiguration;
    static StringAttributeConstraints: typeof StringAttributeConstraints;
    static VerificationMessageTemplate: typeof VerificationMessageTemplate;
    static LambdaConfig: typeof LambdaConfig;
    static InviteMessageTemplate: typeof InviteMessageTemplate;
    static EmailConfiguration: typeof EmailConfiguration;
    static SchemaAttribute: typeof SchemaAttribute;
    static NumberAttributeConstraints: typeof NumberAttributeConstraints;
    static CustomSMSSender: typeof CustomSMSSender;
    static AccountRecoverySetting: typeof AccountRecoverySetting;
    static UserPoolAddOns: typeof UserPoolAddOns;
    static Policies: typeof Policies;
    static CustomEmailSender: typeof CustomEmailSender;
    static DeviceConfiguration: typeof DeviceConfiguration;
    static UsernameConfiguration: typeof UsernameConfiguration;
    constructor(properties?: UserPoolProperties);
}
