"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RulesConfigurationType extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::RulesConfigurationType', properties, dependsOn);
    }
}
exports.RulesConfigurationType = RulesConfigurationType;
class RoleMapping extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::RoleMapping', properties, dependsOn);
    }
}
exports.RoleMapping = RoleMapping;
class MappingRule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::MappingRule', properties, dependsOn);
    }
}
exports.MappingRule = MappingRule;
class IdentityPoolRoleAttachment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::IdentityPoolRoleAttachment', properties, dependsOn);
    }
}
exports.default = IdentityPoolRoleAttachment;
