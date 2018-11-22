/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class NotificationWithSubscribers {
    Subscribers!: List<Subscriber>
    Notification!: Notification

    constructor(properties: NotificationWithSubscribers) {
        Object.assign(this, properties)
    }
}

export class Subscriber {
    SubscriptionType!: Value<string>
    Address!: Value<string>

    constructor(properties: Subscriber) {
        Object.assign(this, properties)
    }
}

export class Notification {
    ComparisonOperator!: Value<string>
    NotificationType!: Value<string>
    Threshold!: Value<number>
    ThresholdType?: Value<string>

    constructor(properties: Notification) {
        Object.assign(this, properties)
    }
}

export class BudgetData {
    BudgetLimit?: Spend
    TimePeriod?: TimePeriod
    TimeUnit!: Value<string>
    CostFilters?: any
    BudgetName?: Value<string>
    CostTypes?: CostTypes
    BudgetType!: Value<string>

    constructor(properties: BudgetData) {
        Object.assign(this, properties)
    }
}

export class CostTypes {
    IncludeSupport?: Value<boolean>
    IncludeOtherSubscription?: Value<boolean>
    IncludeTax?: Value<boolean>
    IncludeSubscription?: Value<boolean>
    UseBlended?: Value<boolean>
    IncludeUpfront?: Value<boolean>
    IncludeDiscount?: Value<boolean>
    IncludeCredit?: Value<boolean>
    IncludeRecurring?: Value<boolean>
    UseAmortized?: Value<boolean>
    IncludeRefund?: Value<boolean>

    constructor(properties: CostTypes) {
        Object.assign(this, properties)
    }
}

export class TimePeriod {
    Start?: Value<string>
    End?: Value<string>

    constructor(properties: TimePeriod) {
        Object.assign(this, properties)
    }
}

export class Spend {
    Amount!: Value<number>
    Unit!: Value<string>

    constructor(properties: Spend) {
        Object.assign(this, properties)
    }
}

export interface BudgetProperties {
    NotificationsWithSubscribers?: List<NotificationWithSubscribers>
    Budget: BudgetData
}

export default class Budget extends ResourceBase {
    static NotificationWithSubscribers = NotificationWithSubscribers
    static Subscriber = Subscriber
    static Notification = Notification
    static BudgetData = BudgetData
    static CostTypes = CostTypes
    static TimePeriod = TimePeriod
    static Spend = Spend

    constructor(properties?: BudgetProperties) {
        super('AWS::Budgets::Budget', properties)
    }
}
