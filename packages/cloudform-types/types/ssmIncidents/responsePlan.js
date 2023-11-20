"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SsmParameter = exports.SsmAutomation = exports.PagerDutyIncidentConfiguration = exports.PagerDutyConfiguration = exports.NotificationTargetItem = exports.Integration = exports.IncidentTemplate = exports.DynamicSsmParameterValue = exports.DynamicSsmParameter = exports.ChatChannel = exports.Action = void 0;
const resource_1 = require("../resource");
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
class ChatChannel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ChatChannel = ChatChannel;
class DynamicSsmParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamicSsmParameter = DynamicSsmParameter;
class DynamicSsmParameterValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamicSsmParameterValue = DynamicSsmParameterValue;
class IncidentTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IncidentTemplate = IncidentTemplate;
class Integration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Integration = Integration;
class NotificationTargetItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationTargetItem = NotificationTargetItem;
class PagerDutyConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PagerDutyConfiguration = PagerDutyConfiguration;
class PagerDutyIncidentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PagerDutyIncidentConfiguration = PagerDutyIncidentConfiguration;
class SsmAutomation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SsmAutomation = SsmAutomation;
class SsmParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SsmParameter = SsmParameter;
class ResponsePlan extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SSMIncidents::ResponsePlan', properties);
    }
}
exports.default = ResponsePlan;
ResponsePlan.Action = Action;
ResponsePlan.ChatChannel = ChatChannel;
ResponsePlan.DynamicSsmParameter = DynamicSsmParameter;
ResponsePlan.DynamicSsmParameterValue = DynamicSsmParameterValue;
ResponsePlan.IncidentTemplate = IncidentTemplate;
ResponsePlan.Integration = Integration;
ResponsePlan.NotificationTargetItem = NotificationTargetItem;
ResponsePlan.PagerDutyConfiguration = PagerDutyConfiguration;
ResponsePlan.PagerDutyIncidentConfiguration = PagerDutyIncidentConfiguration;
ResponsePlan.SsmAutomation = SsmAutomation;
ResponsePlan.SsmParameter = SsmParameter;
