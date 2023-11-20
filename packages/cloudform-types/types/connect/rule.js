"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskAction = exports.SendNotificationAction = exports.RuleTriggerEventSource = exports.Reference = exports.NotificationRecipientType = exports.EventBridgeAction = exports.Actions = void 0;
const resource_1 = require("../resource");
class Actions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Actions = Actions;
class EventBridgeAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventBridgeAction = EventBridgeAction;
class NotificationRecipientType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationRecipientType = NotificationRecipientType;
class Reference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Reference = Reference;
class RuleTriggerEventSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleTriggerEventSource = RuleTriggerEventSource;
class SendNotificationAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SendNotificationAction = SendNotificationAction;
class TaskAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TaskAction = TaskAction;
class Rule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Connect::Rule', properties);
    }
}
exports.default = Rule;
Rule.Actions = Actions;
Rule.EventBridgeAction = EventBridgeAction;
Rule.NotificationRecipientType = NotificationRecipientType;
Rule.Reference = Reference;
Rule.RuleTriggerEventSource = RuleTriggerEventSource;
Rule.SendNotificationAction = SendNotificationAction;
Rule.TaskAction = TaskAction;
