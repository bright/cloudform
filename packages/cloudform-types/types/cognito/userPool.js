"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
exports.VerificationMessageTemplate = exports.UsernameConfiguration = exports.UserPoolAddOns = exports.UserAttributeUpdateSettings = exports.StringAttributeConstraints = exports.SmsConfiguration = exports.SchemaAttribute = exports.RecoveryOption = exports.Policies = exports.PasswordPolicy = exports.NumberAttributeConstraints = exports.LambdaConfig = exports.InviteMessageTemplate = exports.EmailConfiguration = exports.DeviceConfiguration = exports.CustomSMSSender = exports.CustomEmailSender = exports.AdminCreateUserConfig = exports.AccountRecoverySetting = void 0;
const resource_1 = require("../resource");
class AccountRecoverySetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccountRecoverySetting = AccountRecoverySetting;
class AdminCreateUserConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdminCreateUserConfig = AdminCreateUserConfig;
class CustomEmailSender {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomEmailSender = CustomEmailSender;
class CustomSMSSender {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomSMSSender = CustomSMSSender;
class DeviceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeviceConfiguration = DeviceConfiguration;
class EmailConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EmailConfiguration = EmailConfiguration;
class InviteMessageTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InviteMessageTemplate = InviteMessageTemplate;
class LambdaConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaConfig = LambdaConfig;
class NumberAttributeConstraints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumberAttributeConstraints = NumberAttributeConstraints;
class PasswordPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PasswordPolicy = PasswordPolicy;
class Policies {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Policies = Policies;
class RecoveryOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecoveryOption = RecoveryOption;
class SchemaAttribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SchemaAttribute = SchemaAttribute;
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
class UserAttributeUpdateSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UserAttributeUpdateSettings = UserAttributeUpdateSettings;
class UserPoolAddOns {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UserPoolAddOns = UserPoolAddOns;
class UsernameConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UsernameConfiguration = UsernameConfiguration;
class VerificationMessageTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VerificationMessageTemplate = VerificationMessageTemplate;
class UserPool extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Cognito::UserPool', properties || {});
    }
}
exports.default = UserPool;
UserPool.AccountRecoverySetting = AccountRecoverySetting;
UserPool.AdminCreateUserConfig = AdminCreateUserConfig;
UserPool.CustomEmailSender = CustomEmailSender;
UserPool.CustomSMSSender = CustomSMSSender;
UserPool.DeviceConfiguration = DeviceConfiguration;
UserPool.EmailConfiguration = EmailConfiguration;
UserPool.InviteMessageTemplate = InviteMessageTemplate;
UserPool.LambdaConfig = LambdaConfig;
UserPool.NumberAttributeConstraints = NumberAttributeConstraints;
UserPool.PasswordPolicy = PasswordPolicy;
UserPool.Policies = Policies;
UserPool.RecoveryOption = RecoveryOption;
UserPool.SchemaAttribute = SchemaAttribute;
UserPool.SmsConfiguration = SmsConfiguration;
UserPool.StringAttributeConstraints = StringAttributeConstraints;
UserPool.UserAttributeUpdateSettings = UserAttributeUpdateSettings;
UserPool.UserPoolAddOns = UserPoolAddOns;
UserPool.UsernameConfiguration = UsernameConfiguration;
UserPool.VerificationMessageTemplate = VerificationMessageTemplate;
