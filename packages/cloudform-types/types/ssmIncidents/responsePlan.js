"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SsmParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SsmParameter = SsmParameter;
class SsmAutomation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SsmAutomation = SsmAutomation;
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
class NotificationTargetItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationTargetItem = NotificationTargetItem;
class ChatChannel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ChatChannel = ChatChannel;
class IncidentTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IncidentTemplate = IncidentTemplate;
class ResponsePlan extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SSMIncidents::ResponsePlan', properties);
    }
}
exports.default = ResponsePlan;
ResponsePlan.SsmParameter = SsmParameter;
ResponsePlan.SsmAutomation = SsmAutomation;
ResponsePlan.Action = Action;
ResponsePlan.NotificationTargetItem = NotificationTargetItem;
ResponsePlan.ChatChannel = ChatChannel;
ResponsePlan.IncidentTemplate = IncidentTemplate;
