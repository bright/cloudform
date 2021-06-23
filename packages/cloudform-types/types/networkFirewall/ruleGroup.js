"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ActionDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActionDefinition = ActionDefinition;
class TCPFlagField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TCPFlagField = TCPFlagField;
class Header {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Header = Header;
class Dimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Dimension = Dimension;
class StatelessRulesAndCustomActions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatelessRulesAndCustomActions = StatelessRulesAndCustomActions;
class RuleOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleOption = RuleOption;
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
class RulesSourceList {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RulesSourceList = RulesSourceList;
class StatelessRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatelessRule = StatelessRule;
class PortRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortRange = PortRange;
class IPSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IPSet = IPSet;
class CustomAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomAction = CustomAction;
class PortSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortSet = PortSet;
class MatchAttributes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MatchAttributes = MatchAttributes;
class RuleVariables {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleVariables = RuleVariables;
class PublishMetricAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PublishMetricAction = PublishMetricAction;
class Address {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Address = Address;
class RulesSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RulesSource = RulesSource;
class StatefulRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatefulRule = StatefulRule;
class RuleGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::NetworkFirewall::RuleGroup', properties);
    }
}
exports.default = RuleGroup;
RuleGroup.ActionDefinition = ActionDefinition;
RuleGroup.TCPFlagField = TCPFlagField;
RuleGroup.Header = Header;
RuleGroup.Dimension = Dimension;
RuleGroup.StatelessRulesAndCustomActions = StatelessRulesAndCustomActions;
RuleGroup.RuleOption = RuleOption;
RuleGroup.RuleDefinition = RuleDefinition;
RuleGroup.RuleGroup = RuleGroupInner;
RuleGroup.RulesSourceList = RulesSourceList;
RuleGroup.StatelessRule = StatelessRule;
RuleGroup.PortRange = PortRange;
RuleGroup.IPSet = IPSet;
RuleGroup.CustomAction = CustomAction;
RuleGroup.PortSet = PortSet;
RuleGroup.MatchAttributes = MatchAttributes;
RuleGroup.RuleVariables = RuleVariables;
RuleGroup.PublishMetricAction = PublishMetricAction;
RuleGroup.Address = Address;
RuleGroup.RulesSource = RulesSource;
RuleGroup.StatefulRule = StatefulRule;
