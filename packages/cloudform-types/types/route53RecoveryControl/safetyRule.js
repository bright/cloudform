"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleConfig = exports.GatingRule = exports.AssertionRule = void 0;
const resource_1 = require("../resource");
class AssertionRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssertionRule = AssertionRule;
class GatingRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatingRule = GatingRule;
class RuleConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleConfig = RuleConfig;
class SafetyRule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Route53RecoveryControl::SafetyRule', properties);
    }
}
exports.default = SafetyRule;
SafetyRule.AssertionRule = AssertionRule;
SafetyRule.GatingRule = GatingRule;
SafetyRule.RuleConfig = RuleConfig;
