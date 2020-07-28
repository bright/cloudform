"use strict";
/* Generated from:
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.APNSPushNotificationTemplate = exports.DefaultPushNotificationTemplate = exports.AndroidPushNotificationTemplate = void 0;
const resource_1 = require("../resource");
class AndroidPushNotificationTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AndroidPushNotificationTemplate = AndroidPushNotificationTemplate;
class DefaultPushNotificationTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultPushNotificationTemplate = DefaultPushNotificationTemplate;
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
PushTemplate.AndroidPushNotificationTemplate = AndroidPushNotificationTemplate;
PushTemplate.DefaultPushNotificationTemplate = DefaultPushNotificationTemplate;
PushTemplate.APNSPushNotificationTemplate = APNSPushNotificationTemplate;
