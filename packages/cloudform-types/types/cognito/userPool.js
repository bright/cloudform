"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PasswordPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PasswordPolicy = PasswordPolicy;
class EmailConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EmailConfiguration = EmailConfiguration;
class AdminCreateUserConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdminCreateUserConfig = AdminCreateUserConfig;
class SchemaAttribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SchemaAttribute = SchemaAttribute;
class NumberAttributeConstraints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumberAttributeConstraints = NumberAttributeConstraints;
class SmsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SmsConfiguration = SmsConfiguration;
class StringAttributeConstraints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StringAttributeConstraints = StringAttributeConstraints;
class Policies {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Policies = Policies;
class LambdaConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaConfig = LambdaConfig;
class DeviceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeviceConfiguration = DeviceConfiguration;
class InviteMessageTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InviteMessageTemplate = InviteMessageTemplate;
class UserPool extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Cognito::UserPool', properties || {});
    }
}
UserPool.PasswordPolicy = PasswordPolicy;
UserPool.EmailConfiguration = EmailConfiguration;
UserPool.AdminCreateUserConfig = AdminCreateUserConfig;
UserPool.SchemaAttribute = SchemaAttribute;
UserPool.NumberAttributeConstraints = NumberAttributeConstraints;
UserPool.SmsConfiguration = SmsConfiguration;
UserPool.StringAttributeConstraints = StringAttributeConstraints;
UserPool.Policies = Policies;
UserPool.LambdaConfig = LambdaConfig;
UserPool.DeviceConfiguration = DeviceConfiguration;
UserPool.InviteMessageTemplate = InviteMessageTemplate;
exports.default = UserPool;
