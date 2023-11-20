import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Action {
    SsmAutomation?: SsmAutomation;
    constructor(properties: Action);
}
export declare class ChatChannel {
    ChatbotSns?: List<Value<string>>;
    constructor(properties: ChatChannel);
}
export declare class DynamicSsmParameter {
    Value: DynamicSsmParameterValue;
    Key: Value<string>;
    constructor(properties: DynamicSsmParameter);
}
export declare class DynamicSsmParameterValue {
    Variable?: Value<string>;
    constructor(properties: DynamicSsmParameterValue);
}
export declare class IncidentTemplate {
    Impact: Value<number>;
    IncidentTags?: List<ResourceTag>;
    Summary?: Value<string>;
    Title: Value<string>;
    NotificationTargets?: List<NotificationTargetItem>;
    DedupeString?: Value<string>;
    constructor(properties: IncidentTemplate);
}
export declare class Integration {
    PagerDutyConfiguration: PagerDutyConfiguration;
    constructor(properties: Integration);
}
export declare class NotificationTargetItem {
    SnsTopicArn?: Value<string>;
    constructor(properties: NotificationTargetItem);
}
export declare class PagerDutyConfiguration {
    SecretId: Value<string>;
    PagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration;
    Name: Value<string>;
    constructor(properties: PagerDutyConfiguration);
}
export declare class PagerDutyIncidentConfiguration {
    ServiceId: Value<string>;
    constructor(properties: PagerDutyIncidentConfiguration);
}
export declare class SsmAutomation {
    Parameters?: List<SsmParameter>;
    TargetAccount?: Value<string>;
    DynamicParameters?: List<DynamicSsmParameter>;
    DocumentVersion?: Value<string>;
    RoleArn: Value<string>;
    DocumentName: Value<string>;
    constructor(properties: SsmAutomation);
}
export declare class SsmParameter {
    Values: List<Value<string>>;
    Key: Value<string>;
    constructor(properties: SsmParameter);
}
export interface ResponsePlanProperties {
    ChatChannel?: ChatChannel;
    Integrations?: List<Integration>;
    Actions?: List<Action>;
    DisplayName?: Value<string>;
    IncidentTemplate: IncidentTemplate;
    Engagements?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class ResponsePlan extends ResourceBase<ResponsePlanProperties> {
    static Action: typeof Action;
    static ChatChannel: typeof ChatChannel;
    static DynamicSsmParameter: typeof DynamicSsmParameter;
    static DynamicSsmParameterValue: typeof DynamicSsmParameterValue;
    static IncidentTemplate: typeof IncidentTemplate;
    static Integration: typeof Integration;
    static NotificationTargetItem: typeof NotificationTargetItem;
    static PagerDutyConfiguration: typeof PagerDutyConfiguration;
    static PagerDutyIncidentConfiguration: typeof PagerDutyIncidentConfiguration;
    static SsmAutomation: typeof SsmAutomation;
    static SsmParameter: typeof SsmParameter;
    constructor(properties: ResponsePlanProperties);
}
