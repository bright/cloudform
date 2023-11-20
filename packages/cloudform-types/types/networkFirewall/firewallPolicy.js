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
exports.StatelessRuleGroupReference = exports.StatefulRuleGroupReference = exports.StatefulRuleGroupOverride = exports.StatefulEngineOptions = exports.PublishMetricAction = exports.PolicyVariables = exports.IPSet = exports.FirewallPolicyInner = exports.Dimension = exports.CustomAction = exports.ActionDefinition = void 0;
const resource_1 = require("../resource");
class ActionDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActionDefinition = ActionDefinition;
class CustomAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomAction = CustomAction;
class Dimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Dimension = Dimension;
class FirewallPolicyInner {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FirewallPolicyInner = FirewallPolicyInner;
class IPSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IPSet = IPSet;
class PolicyVariables {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PolicyVariables = PolicyVariables;
class PublishMetricAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PublishMetricAction = PublishMetricAction;
class StatefulEngineOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatefulEngineOptions = StatefulEngineOptions;
class StatefulRuleGroupOverride {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatefulRuleGroupOverride = StatefulRuleGroupOverride;
class StatefulRuleGroupReference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatefulRuleGroupReference = StatefulRuleGroupReference;
class StatelessRuleGroupReference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatelessRuleGroupReference = StatelessRuleGroupReference;
class FirewallPolicy extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::NetworkFirewall::FirewallPolicy', properties);
    }
}
exports.default = FirewallPolicy;
FirewallPolicy.ActionDefinition = ActionDefinition;
FirewallPolicy.CustomAction = CustomAction;
FirewallPolicy.Dimension = Dimension;
FirewallPolicy.FirewallPolicy = FirewallPolicyInner;
FirewallPolicy.IPSet = IPSet;
FirewallPolicy.PolicyVariables = PolicyVariables;
FirewallPolicy.PublishMetricAction = PublishMetricAction;
FirewallPolicy.StatefulEngineOptions = StatefulEngineOptions;
FirewallPolicy.StatefulRuleGroupOverride = StatefulRuleGroupOverride;
FirewallPolicy.StatefulRuleGroupReference = StatefulRuleGroupReference;
FirewallPolicy.StatelessRuleGroupReference = StatelessRuleGroupReference;
