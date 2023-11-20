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
exports.TCPFlagField = exports.StatelessRulesAndCustomActions = exports.StatelessRule = exports.StatefulRuleOptions = exports.StatefulRule = exports.RulesSourceList = exports.RulesSource = exports.RuleVariables = exports.RuleOption = exports.RuleGroupInner = exports.RuleDefinition = exports.ReferenceSets = exports.PublishMetricAction = exports.PortSet = exports.PortRange = exports.MatchAttributes = exports.IPSetReference = exports.IPSet = exports.Header = exports.Dimension = exports.CustomAction = exports.Address = exports.ActionDefinition = void 0;
const resource_1 = require("../resource");
class ActionDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActionDefinition = ActionDefinition;
class Address {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Address = Address;
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
class Header {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Header = Header;
class IPSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IPSet = IPSet;
class IPSetReference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IPSetReference = IPSetReference;
class MatchAttributes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MatchAttributes = MatchAttributes;
class PortRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortRange = PortRange;
class PortSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortSet = PortSet;
class PublishMetricAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PublishMetricAction = PublishMetricAction;
class ReferenceSets {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceSets = ReferenceSets;
class RuleDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleDefinition = RuleDefinition;
class RuleGroupInner {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleGroupInner = RuleGroupInner;
class RuleOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleOption = RuleOption;
class RuleVariables {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleVariables = RuleVariables;
class RulesSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RulesSource = RulesSource;
class RulesSourceList {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RulesSourceList = RulesSourceList;
class StatefulRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatefulRule = StatefulRule;
class StatefulRuleOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatefulRuleOptions = StatefulRuleOptions;
class StatelessRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatelessRule = StatelessRule;
class StatelessRulesAndCustomActions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatelessRulesAndCustomActions = StatelessRulesAndCustomActions;
class TCPFlagField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TCPFlagField = TCPFlagField;
class RuleGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::NetworkFirewall::RuleGroup', properties);
    }
}
exports.default = RuleGroup;
RuleGroup.ActionDefinition = ActionDefinition;
RuleGroup.Address = Address;
RuleGroup.CustomAction = CustomAction;
RuleGroup.Dimension = Dimension;
RuleGroup.Header = Header;
RuleGroup.IPSet = IPSet;
RuleGroup.IPSetReference = IPSetReference;
RuleGroup.MatchAttributes = MatchAttributes;
RuleGroup.PortRange = PortRange;
RuleGroup.PortSet = PortSet;
RuleGroup.PublishMetricAction = PublishMetricAction;
RuleGroup.ReferenceSets = ReferenceSets;
RuleGroup.RuleDefinition = RuleDefinition;
RuleGroup.RuleGroup = RuleGroupInner;
RuleGroup.RuleOption = RuleOption;
RuleGroup.RuleVariables = RuleVariables;
RuleGroup.RulesSource = RulesSource;
RuleGroup.RulesSourceList = RulesSourceList;
RuleGroup.StatefulRule = StatefulRule;
RuleGroup.StatefulRuleOptions = StatefulRuleOptions;
RuleGroup.StatelessRule = StatelessRule;
RuleGroup.StatelessRulesAndCustomActions = StatelessRulesAndCustomActions;
RuleGroup.TCPFlagField = TCPFlagField;
