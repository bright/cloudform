import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Actions {
    EventBridgeActions?: List<EventBridgeAction>;
    AssignContactCategoryActions?: List<{
        [key: string]: any;
    }>;
    TaskActions?: List<TaskAction>;
    SendNotificationActions?: List<SendNotificationAction>;
    constructor(properties: Actions);
}
export declare class EventBridgeAction {
    Name: Value<string>;
    constructor(properties: EventBridgeAction);
}
export declare class NotificationRecipientType {
    UserTags?: {
        [key: string]: Value<string>;
    };
    UserArns?: List<Value<string>>;
    constructor(properties: NotificationRecipientType);
}
export declare class Reference {
    Type: Value<string>;
    Value: Value<string>;
    constructor(properties: Reference);
}
export declare class RuleTriggerEventSource {
    IntegrationAssociationArn?: Value<string>;
    EventSourceName: Value<string>;
    constructor(properties: RuleTriggerEventSource);
}
export declare class SendNotificationAction {
    DeliveryMethod: Value<string>;
    ContentType: Value<string>;
    Content: Value<string>;
    Recipient: NotificationRecipientType;
    Subject?: Value<string>;
    constructor(properties: SendNotificationAction);
}
export declare class TaskAction {
    Description?: Value<string>;
    References?: {
        [key: string]: Reference;
    };
    ContactFlowArn: Value<string>;
    Name: Value<string>;
    constructor(properties: TaskAction);
}
export interface RuleProperties {
    Function: Value<string>;
    TriggerEventSource: RuleTriggerEventSource;
    Actions: Actions;
    InstanceArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    PublishStatus: Value<string>;
}
export default class Rule extends ResourceBase<RuleProperties> {
    static Actions: typeof Actions;
    static EventBridgeAction: typeof EventBridgeAction;
    static NotificationRecipientType: typeof NotificationRecipientType;
    static Reference: typeof Reference;
    static RuleTriggerEventSource: typeof RuleTriggerEventSource;
    static SendNotificationAction: typeof SendNotificationAction;
    static TaskAction: typeof TaskAction;
    constructor(properties: RuleProperties);
}
