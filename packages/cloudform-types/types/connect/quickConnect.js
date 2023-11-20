"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQuickConnectConfig = exports.QuickConnectConfig = exports.QueueQuickConnectConfig = exports.PhoneNumberQuickConnectConfig = void 0;
const resource_1 = require("../resource");
class PhoneNumberQuickConnectConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PhoneNumberQuickConnectConfig = PhoneNumberQuickConnectConfig;
class QueueQuickConnectConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueueQuickConnectConfig = QueueQuickConnectConfig;
class QuickConnectConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QuickConnectConfig = QuickConnectConfig;
class UserQuickConnectConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UserQuickConnectConfig = UserQuickConnectConfig;
class QuickConnect extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Connect::QuickConnect', properties);
    }
}
exports.default = QuickConnect;
QuickConnect.PhoneNumberQuickConnectConfig = PhoneNumberQuickConnectConfig;
QuickConnect.QueueQuickConnectConfig = QueueQuickConnectConfig;
QuickConnect.QuickConnectConfig = QuickConnectConfig;
QuickConnect.UserQuickConnectConfig = UserQuickConnectConfig;
