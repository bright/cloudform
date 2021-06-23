"use strict";
/* Generated from:
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DefaultPushNotificationTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultPushNotificationTemplate = DefaultPushNotificationTemplate;
class AndroidPushNotificationTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AndroidPushNotificationTemplate = AndroidPushNotificationTemplate;
class APNSPushNotificationTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.APNSPushNotificationTemplate = APNSPushNotificationTemplate;
class PushTemplate extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Pinpoint::PushTemplate', properties);
    }
}
exports.default = PushTemplate;
PushTemplate.DefaultPushNotificationTemplate = DefaultPushNotificationTemplate;
PushTemplate.AndroidPushNotificationTemplate = AndroidPushNotificationTemplate;
PushTemplate.APNSPushNotificationTemplate = APNSPushNotificationTemplate;
