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
export declare class EmailConfiguration {
    ReplyToEmailAddress?: Value<string>;
    EmailSendingAccount?: Value<string>;
    SourceArn?: Value<string>;
    constructor(properties: EmailConfiguration);
}
export declare class AdminCreateUserConfig {
    InviteMessageTemplate?: InviteMessageTemplate;
    UnusedAccountValidityDays?: Value<number>;
    AllowAdminCreateUserOnly?: Value<boolean>;
    constructor(properties: AdminCreateUserConfig);
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
export declare class Policies {
    PasswordPolicy?: PasswordPolicy;
    constructor(properties: Policies);
}
export declare class LambdaConfig {
    CreateAuthChallenge?: Value<string>;
    PreAuthentication?: Value<string>;
    DefineAuthChallenge?: Value<string>;
    PreSignUp?: Value<string>;
    PostAuthentication?: Value<string>;
    PostConfirmation?: Value<string>;
    CustomMessage?: Value<string>;
    VerifyAuthChallengeResponse?: Value<string>;
    constructor(properties: LambdaConfig);
}
export declare class DeviceConfiguration {
    DeviceOnlyRememberedOnUserPrompt?: Value<boolean>;
    ChallengeRequiredOnNewDevice?: Value<boolean>;
    constructor(properties: DeviceConfiguration);
}
export declare class InviteMessageTemplate {
    EmailMessage?: Value<string>;
    SMSMessage?: Value<string>;
    EmailSubject?: Value<string>;
    constructor(properties: InviteMessageTemplate);
}
export interface UserPoolProperties {
    UserPoolTags?: {
        [key: string]: any;
    };
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
    UsernameAttributes?: List<Value<string>>;
    AutoVerifiedAttributes?: List<Value<string>>;
    DeviceConfiguration?: DeviceConfiguration;
    EmailVerificationMessage?: Value<string>;
}
export default class UserPool extends ResourceBase<UserPoolProperties> {
    static PasswordPolicy: typeof PasswordPolicy;
    static EmailConfiguration: typeof EmailConfiguration;
    static AdminCreateUserConfig: typeof AdminCreateUserConfig;
    static SchemaAttribute: typeof SchemaAttribute;
    static NumberAttributeConstraints: typeof NumberAttributeConstraints;
    static SmsConfiguration: typeof SmsConfiguration;
    static StringAttributeConstraints: typeof StringAttributeConstraints;
    static Policies: typeof Policies;
    static LambdaConfig: typeof LambdaConfig;
    static DeviceConfiguration: typeof DeviceConfiguration;
    static InviteMessageTemplate: typeof InviteMessageTemplate;
    constructor(properties?: UserPoolProperties);
}
