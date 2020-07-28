import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccountTakeoverActionsType {
    HighAction?: AccountTakeoverActionType;
    LowAction?: AccountTakeoverActionType;
    MediumAction?: AccountTakeoverActionType;
    constructor(properties: AccountTakeoverActionsType);
}
export declare class RiskExceptionConfigurationType {
    BlockedIPRangeList?: List<Value<string>>;
    SkippedIPRangeList?: List<Value<string>>;
    constructor(properties: RiskExceptionConfigurationType);
}
export declare class NotifyEmailType {
    TextBody?: Value<string>;
    HtmlBody?: Value<string>;
    Subject: Value<string>;
    constructor(properties: NotifyEmailType);
}
export declare class AccountTakeoverActionType {
    Notify: Value<boolean>;
    EventAction: Value<string>;
    constructor(properties: AccountTakeoverActionType);
}
export declare class CompromisedCredentialsRiskConfigurationType {
    Actions: CompromisedCredentialsActionsType;
    EventFilter?: List<Value<string>>;
    constructor(properties: CompromisedCredentialsRiskConfigurationType);
}
export declare class CompromisedCredentialsActionsType {
    EventAction: Value<string>;
    constructor(properties: CompromisedCredentialsActionsType);
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
export declare class AccountTakeoverRiskConfigurationType {
    Actions: AccountTakeoverActionsType;
    NotifyConfiguration?: NotifyConfigurationType;
    constructor(properties: AccountTakeoverRiskConfigurationType);
}
export interface UserPoolRiskConfigurationAttachmentProperties {
    CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
    UserPoolId: Value<string>;
    ClientId: Value<string>;
    AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
    RiskExceptionConfiguration?: RiskExceptionConfigurationType;
}
export default class UserPoolRiskConfigurationAttachment extends ResourceBase<UserPoolRiskConfigurationAttachmentProperties> {
    static AccountTakeoverActionsType: typeof AccountTakeoverActionsType;
    static RiskExceptionConfigurationType: typeof RiskExceptionConfigurationType;
    static NotifyEmailType: typeof NotifyEmailType;
    static AccountTakeoverActionType: typeof AccountTakeoverActionType;
    static CompromisedCredentialsRiskConfigurationType: typeof CompromisedCredentialsRiskConfigurationType;
    static CompromisedCredentialsActionsType: typeof CompromisedCredentialsActionsType;
    static NotifyConfigurationType: typeof NotifyConfigurationType;
    static AccountTakeoverRiskConfigurationType: typeof AccountTakeoverRiskConfigurationType;
    constructor(properties: UserPoolRiskConfigurationAttachmentProperties);
}
