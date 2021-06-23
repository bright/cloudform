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
class JsonMatchPattern {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JsonMatchPattern = JsonMatchPattern;
class XssMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.XssMatchStatement = XssMatchStatement;
class LabelMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LabelMatchStatement = LabelMatchStatement;
class RuleAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleAction = RuleAction;
class Statement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Statement = Statement;
class LabelSummary {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LabelSummary = LabelSummary;
class FieldToMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldToMatch = FieldToMatch;
class IPSetReferenceStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IPSetReferenceStatement = IPSetReferenceStatement;
class RateBasedStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateBasedStatement = RateBasedStatement;
class VisibilityConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VisibilityConfig = VisibilityConfig;
class GeoMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeoMatchStatement = GeoMatchStatement;
class AndStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AndStatement = AndStatement;
class IPSetForwardedIPConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration;
class TextTransformation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TextTransformation = TextTransformation;
class ByteMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ByteMatchStatement = ByteMatchStatement;
class RegexPatternSetReferenceStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement;
class OrStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OrStatement = OrStatement;
class Rule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rule = Rule;
class JsonBody {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JsonBody = JsonBody;
class CustomResponseBody {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomResponseBody = CustomResponseBody;
class Label {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Label = Label;
class SqliMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SqliMatchStatement = SqliMatchStatement;
class NotStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotStatement = NotStatement;
class ForwardedIPConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ForwardedIPConfiguration = ForwardedIPConfiguration;
class SizeConstraintStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SizeConstraintStatement = SizeConstraintStatement;
class RuleGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::WAFv2::RuleGroup', properties);
    }
}
exports.default = RuleGroup;
RuleGroup.JsonMatchPattern = JsonMatchPattern;
RuleGroup.XssMatchStatement = XssMatchStatement;
RuleGroup.LabelMatchStatement = LabelMatchStatement;
RuleGroup.RuleAction = RuleAction;
RuleGroup.Statement = Statement;
RuleGroup.LabelSummary = LabelSummary;
RuleGroup.FieldToMatch = FieldToMatch;
RuleGroup.IPSetReferenceStatement = IPSetReferenceStatement;
RuleGroup.RateBasedStatement = RateBasedStatement;
RuleGroup.VisibilityConfig = VisibilityConfig;
RuleGroup.GeoMatchStatement = GeoMatchStatement;
RuleGroup.AndStatement = AndStatement;
RuleGroup.IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration;
RuleGroup.TextTransformation = TextTransformation;
RuleGroup.ByteMatchStatement = ByteMatchStatement;
RuleGroup.RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement;
RuleGroup.OrStatement = OrStatement;
RuleGroup.Rule = Rule;
RuleGroup.JsonBody = JsonBody;
RuleGroup.CustomResponseBody = CustomResponseBody;
RuleGroup.Label = Label;
RuleGroup.SqliMatchStatement = SqliMatchStatement;
RuleGroup.NotStatement = NotStatement;
RuleGroup.ForwardedIPConfiguration = ForwardedIPConfiguration;
RuleGroup.SizeConstraintStatement = SizeConstraintStatement;
