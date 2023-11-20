import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccountTakeoverActionType {
    Notify: Value<boolean>;
    EventAction: Value<string>;
    constructor(properties: AccountTakeoverActionType);
}
export declare class AccountTakeoverActionsType {
    HighAction?: AccountTakeoverActionType;
    LowAction?: AccountTakeoverActionType;
    MediumAction?: AccountTakeoverActionType;
    constructor(properties: AccountTakeoverActionsType);
}
export declare class AccountTakeoverRiskConfigurationType {
    Actions: AccountTakeoverActionsType;
    NotifyConfiguration?: NotifyConfigurationType;
    constructor(properties: AccountTakeoverRiskConfigurationType);
}
export declare class CompromisedCredentialsActionsType {
    EventAction: Value<string>;
    constructor(properties: CompromisedCredentialsActionsType);
}
export declare class CompromisedCredentialsRiskConfigurationType {
    Actions: CompromisedCredentialsActionsType;
    EventFilter?: List<Value<string>>;
    constructor(properties: CompromisedCredentialsRiskConfigurationType);
}
export declare class NotifyConfigurationType {
    BlockEmail?: NotifyEmailType;
    ReplyTo?: Value<string>;
    SourceArn: Value<string>;
    NoActionEmail?: NotifyEmailType;
    From?: Value<string>;
    MfaEmail?: NotifyEmailType;
    constructor(properties: NotifyConfigurationType);
}
export declare class NotifyEmailType {
    TextBody?: Value<string>;
    HtmlBody?: Value<string>;
    Subject: Value<string>;
    constructor(properties: NotifyEmailType);
}
export declare class RiskExceptionConfigurationType {
    BlockedIPRangeList?: List<Value<string>>;
    SkippedIPRangeList?: List<Value<string>>;
    constructor(properties: RiskExceptionConfigurationType);
}
export interface UserPoolRiskConfigurationAttachmentProperties {
    CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
    UserPoolId: Value<string>;
    ClientId: Value<string>;
    AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
    RiskExceptionConfiguration?: RiskExceptionConfigurationType;
}
export default class UserPoolRiskConfigurationAttachment extends ResourceBase<UserPoolRiskConfigurationAttachmentProperties> {
    static AccountTakeoverActionType: typeof AccountTakeoverActionType;
    static AccountTakeoverActionsType: typeof AccountTakeoverActionsType;
    static AccountTakeoverRiskConfigurationType: typeof AccountTakeoverRiskConfigurationType;
    static CompromisedCredentialsActionsType: typeof CompromisedCredentialsActionsType;
    static CompromisedCredentialsRiskConfigurationType: typeof CompromisedCredentialsRiskConfigurationType;
    static NotifyConfigurationType: typeof NotifyConfigurationType;
    static NotifyEmailType: typeof NotifyEmailType;
    static RiskExceptionConfigurationType: typeof RiskExceptionConfigurationType;
    constructor(properties: UserPoolRiskConfigurationAttachmentProperties);
}
