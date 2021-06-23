"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PasswordPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PasswordPolicy = PasswordPolicy;
class RecoveryOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecoveryOption = RecoveryOption;
class AdminCreateUserConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdminCreateUserConfig = AdminCreateUserConfig;
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
class VerificationMessageTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VerificationMessageTemplate = VerificationMessageTemplate;
class LambdaConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaConfig = LambdaConfig;
class InviteMessageTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InviteMessageTemplate = InviteMessageTemplate;
class EmailConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EmailConfiguration = EmailConfiguration;
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
class CustomSMSSender {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomSMSSender = CustomSMSSender;
class AccountRecoverySetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccountRecoverySetting = AccountRecoverySetting;
class UserPoolAddOns {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UserPoolAddOns = UserPoolAddOns;
class Policies {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Policies = Policies;
class CustomEmailSender {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomEmailSender = CustomEmailSender;
class DeviceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeviceConfiguration = DeviceConfiguration;
class UsernameConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UsernameConfiguration = UsernameConfiguration;
class UserPool extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Cognito::UserPool', properties || {});
    }
}
exports.default = UserPool;
UserPool.PasswordPolicy = PasswordPolicy;
UserPool.RecoveryOption = RecoveryOption;
UserPool.AdminCreateUserConfig = AdminCreateUserConfig;
UserPool.SmsConfiguration = SmsConfiguration;
UserPool.StringAttributeConstraints = StringAttributeConstraints;
UserPool.VerificationMessageTemplate = VerificationMessageTemplate;
UserPool.LambdaConfig = LambdaConfig;
UserPool.InviteMessageTemplate = InviteMessageTemplate;
UserPool.EmailConfiguration = EmailConfiguration;
UserPool.SchemaAttribute = SchemaAttribute;
UserPool.NumberAttributeConstraints = NumberAttributeConstraints;
UserPool.CustomSMSSender = CustomSMSSender;
UserPool.AccountRecoverySetting = AccountRecoverySetting;
UserPool.UserPoolAddOns = UserPoolAddOns;
UserPool.Policies = Policies;
UserPool.CustomEmailSender = CustomEmailSender;
UserPool.DeviceConfiguration = DeviceConfiguration;
UserPool.UsernameConfiguration = UsernameConfiguration;
