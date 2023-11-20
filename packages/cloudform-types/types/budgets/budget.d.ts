import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AutoAdjustData {
    AutoAdjustType: Value<string>;
    HistoricalOptions?: HistoricalOptions;
    constructor(properties: AutoAdjustData);
}
export declare class BudgetData {
    BudgetLimit?: Spend;
    TimePeriod?: TimePeriod;
    AutoAdjustData?: AutoAdjustData;
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
export declare class HistoricalOptions {
    BudgetAdjustmentPeriod: Value<number>;
    constructor(properties: HistoricalOptions);
}
export declare class Notification {
    ComparisonOperator: Value<string>;
    NotificationType: Value<string>;
    Threshold: Value<number>;
    ThresholdType?: Value<string>;
    constructor(properties: Notification);
}
export declare class NotificationWithSubscribers {
    Subscribers: List<Subscriber>;
    Notification: Notification;
    constructor(properties: NotificationWithSubscribers);
}
export declare class Spend {
    Amount: Value<number>;
    Unit: Value<string>;
    constructor(properties: Spend);
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
export interface BudgetProperties {
    NotificationsWithSubscribers?: List<NotificationWithSubscribers>;
    Budget: BudgetData;
}
export default class Budget extends ResourceBase<BudgetProperties> {
    static AutoAdjustData: typeof AutoAdjustData;
    static BudgetData: typeof BudgetData;
    static CostTypes: typeof CostTypes;
    static HistoricalOptions: typeof HistoricalOptions;
    static Notification: typeof Notification;
    static NotificationWithSubscribers: typeof NotificationWithSubscribers;
    static Spend: typeof Spend;
    static Subscriber: typeof Subscriber;
    static TimePeriod: typeof TimePeriod;
    constructor(properties: BudgetProperties);
}
