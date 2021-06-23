import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SsmParameter {
    Key: Value<string>;
    Values: List<Value<string>>;
    constructor(properties: SsmParameter);
}
export declare class SsmAutomation {
    RoleArn: Value<string>;
    DocumentName: Value<string>;
    DocumentVersion?: Value<string>;
    TargetAccount?: Value<string>;
    Parameters?: List<SsmParameter>;
    constructor(properties: SsmAutomation);
}
export declare class Action {
    SsmAutomation?: SsmAutomation;
    constructor(properties: Action);
}
export declare class NotificationTargetItem {
    SnsTopicArn?: Value<string>;
    constructor(properties: NotificationTargetItem);
}
export declare class ChatChannel {
    ChatbotSns?: List<Value<string>>;
    constructor(properties: ChatChannel);
}
export declare class IncidentTemplate {
    DedupeString?: Value<string>;
    Impact: Value<number>;
    NotificationTargets?: List<NotificationTargetItem>;
    Summary?: Value<string>;
    Title: Value<string>;
    constructor(properties: IncidentTemplate);
}
export interface ResponsePlanProperties {
    Name: Value<string>;
    DisplayName?: Value<string>;
    ChatChannel?: ChatChannel;
    Engagements?: List<Value<string>>;
    Actions?: List<Action>;
    Tags?: List<ResourceTag>;
    IncidentTemplate: IncidentTemplate;
}
export default class ResponsePlan extends ResourceBase<ResponsePlanProperties> {
    static SsmParameter: typeof SsmParameter;
    static SsmAutomation: typeof SsmAutomation;
    static Action: typeof Action;
    static NotificationTargetItem: typeof NotificationTargetItem;
    static ChatChannel: typeof ChatChannel;
    static IncidentTemplate: typeof IncidentTemplate;
    constructor(properties: ResponsePlanProperties);
}
