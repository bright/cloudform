"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PasswordPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::PasswordPolicy', properties, dependsOn);
    }
}
exports.PasswordPolicy = PasswordPolicy;
class Policies extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::Policies', properties, dependsOn);
    }
}
exports.Policies = Policies;
class EmailConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::EmailConfiguration', properties, dependsOn);
    }
}
exports.EmailConfiguration = EmailConfiguration;
class LambdaConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::LambdaConfig', properties, dependsOn);
    }
}
exports.LambdaConfig = LambdaConfig;
class AdminCreateUserConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::AdminCreateUserConfig', properties, dependsOn);
    }
}
exports.AdminCreateUserConfig = AdminCreateUserConfig;
class SchemaAttribute extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::SchemaAttribute', properties, dependsOn);
    }
}
exports.SchemaAttribute = SchemaAttribute;
class NumberAttributeConstraints extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::NumberAttributeConstraints', properties, dependsOn);
    }
}
exports.NumberAttributeConstraints = NumberAttributeConstraints;
class SmsConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::SmsConfiguration', properties, dependsOn);
    }
}
exports.SmsConfiguration = SmsConfiguration;
class DeviceConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::DeviceConfiguration', properties, dependsOn);
    }
}
exports.DeviceConfiguration = DeviceConfiguration;
class InviteMessageTemplate extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::InviteMessageTemplate', properties, dependsOn);
    }
}
exports.InviteMessageTemplate = InviteMessageTemplate;
class StringAttributeConstraints extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::StringAttributeConstraints', properties, dependsOn);
    }
}
exports.StringAttributeConstraints = StringAttributeConstraints;
class UserPool extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::UserPool', properties, dependsOn);
    }
}
exports.default = UserPool;
