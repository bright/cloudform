"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
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
class EmailConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EmailConfiguration = EmailConfiguration;
class LambdaConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaConfig = LambdaConfig;
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
class StringAttributeConstraints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StringAttributeConstraints = StringAttributeConstraints;
class UserPool extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Cognito::UserPool', properties);
    }
}
exports.default = UserPool;
