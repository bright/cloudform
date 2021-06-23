import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BudgetData {
    BudgetLimit?: Spend;
    TimePeriod?: TimePeriod;
    TimeUnit: Value<string>;
    PlannedBudgetLimits?: {
        [key: string]: any;
    };
    CostFilters?: {
        [key: string]: any;
    };
    BudgetName?: Value<string>;
    CostTypes?: CostTypes;
    BudgetType: Value<string>;
    constructor(properties: BudgetData);
}
export declare class Subscriber {
    SubscriptionType: Value<string>;
    Address: Value<string>;
    constructor(properties: Subscriber);
}
export declare class TimePeriod {
    Start?: Value<string>;
    End?: Value<string>;
    constructor(properties: TimePeriod);
}
export declare class CostTypes {
    IncludeSupport?: Value<boolean>;
    IncludeOtherSubscription?: Value<boolean>;
    IncludeTax?: Value<boolean>;
    IncludeSubscription?: Value<boolean>;
    UseBlended?: Value<boolean>;
    IncludeUpfront?: Value<boolean>;
    IncludeDiscount?: Value<boolean>;
    IncludeCredit?: Value<boolean>;
    IncludeRecurring?: Value<boolean>;
    UseAmortized?: Value<boolean>;
    IncludeRefund?: Value<boolean>;
    constructor(properties: CostTypes);
}
export declare class NotificationWithSubscribers {
    Subscribers: List<Subscriber>;
    Notification: Notification;
    constructor(properties: NotificationWithSubscribers);
}
export declare class Notification {
    ComparisonOperator: Value<string>;
    NotificationType: Value<string>;
    Threshold: Value<number>;
    ThresholdType?: Value<string>;
    constructor(properties: Notification);
}
export declare class Spend {
    Amount: Value<number>;
    Unit: Value<string>;
    constructor(properties: Spend);
}
export interface BudgetProperties {
    NotificationsWithSubscribers?: List<NotificationWithSubscribers>;
    Budget: BudgetData;
}
export default class Budget extends ResourceBase<BudgetProperties> {
    static BudgetData: typeof BudgetData;
    static Subscriber: typeof Subscriber;
    static TimePeriod: typeof TimePeriod;
    static CostTypes: typeof CostTypes;
    static NotificationWithSubscribers: typeof NotificationWithSubscribers;
    static Notification: typeof Notification;
    static Spend: typeof Spend;
    constructor(properties: BudgetProperties);
}
