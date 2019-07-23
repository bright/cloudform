"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class BudgetData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BudgetData = BudgetData;
class CostTypes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CostTypes = CostTypes;
class NotificationWithSubscribers {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationWithSubscribers = NotificationWithSubscribers;
class Subscriber {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Subscriber = Subscriber;
class Notification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Notification = Notification;
class TimePeriod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimePeriod = TimePeriod;
class Spend {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Spend = Spend;
class Budget extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Budgets::Budget', properties);
    }
}
Budget.BudgetData = BudgetData;
Budget.CostTypes = CostTypes;
Budget.NotificationWithSubscribers = NotificationWithSubscribers;
Budget.Subscriber = Subscriber;
Budget.Notification = Notification;
Budget.TimePeriod = TimePeriod;
Budget.Spend = Spend;
exports.default = Budget;
