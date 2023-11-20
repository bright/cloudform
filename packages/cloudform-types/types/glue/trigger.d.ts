import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Action {
    NotificationProperty?: NotificationProperty;
    CrawlerName?: Value<string>;
    Timeout?: Value<number>;
    JobName?: Value<string>;
    Arguments?: {
        [key: string]: any;
    };
    SecurityConfiguration?: Value<string>;
    constructor(properties: Action);
}
export declare class Condition {
    CrawlerName?: Value<string>;
    State?: Value<string>;
    CrawlState?: Value<string>;
    LogicalOperator?: Value<string>;
    JobName?: Value<string>;
    constructor(properties: Condition);
}
export declare class EventBatchingCondition {
    BatchSize: Value<number>;
    BatchWindow?: Value<number>;
    constructor(properties: EventBatchingCondition);
}
export declare class NotificationProperty {
    NotifyDelayAfter?: Value<number>;
    constructor(properties: NotificationProperty);
}
export declare class Predicate {
    Logical?: Value<string>;
    Conditions?: List<Condition>;
    constructor(properties: Predicate);
}
export interface TriggerProperties {
    Type: Value<string>;
    StartOnCreation?: Value<boolean>;
    Description?: Value<string>;
    Actions: List<Action>;
    EventBatchingCondition?: EventBatchingCondition;
    WorkflowName?: Value<string>;
    Schedule?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
    Predicate?: Predicate;
}
export default class Trigger extends ResourceBase<TriggerProperties> {
    static Action: typeof Action;
    static Condition: typeof Condition;
    static EventBatchingCondition: typeof EventBatchingCondition;
    static NotificationProperty: typeof NotificationProperty;
    static Predicate: typeof Predicate;
    constructor(properties: TriggerProperties);
}
