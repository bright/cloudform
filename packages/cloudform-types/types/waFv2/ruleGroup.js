"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class IPSetForwardedIPConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration;
class RateBasedStatementTwo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateBasedStatementTwo = RateBasedStatementTwo;
class XssMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.XssMatchStatement = XssMatchStatement;
class OrStatementOne {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OrStatementOne = OrStatementOne;
class NotStatementOne {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotStatementOne = NotStatementOne;
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
class AndStatementTwo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AndStatementTwo = AndStatementTwo;
class StatementThree {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatementThree = StatementThree;
class NotStatementTwo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotStatementTwo = NotStatementTwo;
class Rule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rule = Rule;
class RuleAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleAction = RuleAction;
class StatementOne {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatementOne = StatementOne;
class RateBasedStatementOne {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateBasedStatementOne = RateBasedStatementOne;
class OrStatementTwo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OrStatementTwo = OrStatementTwo;
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
class SqliMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SqliMatchStatement = SqliMatchStatement;
class AndStatementOne {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AndStatementOne = AndStatementOne;
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
class StatementTwo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatementTwo = StatementTwo;
class RuleGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::WAFv2::RuleGroup', properties);
    }
}
exports.default = RuleGroup;
RuleGroup.IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration;
RuleGroup.RateBasedStatementTwo = RateBasedStatementTwo;
RuleGroup.XssMatchStatement = XssMatchStatement;
RuleGroup.OrStatementOne = OrStatementOne;
RuleGroup.NotStatementOne = NotStatementOne;
RuleGroup.TextTransformation = TextTransformation;
RuleGroup.ByteMatchStatement = ByteMatchStatement;
RuleGroup.RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement;
RuleGroup.AndStatementTwo = AndStatementTwo;
RuleGroup.StatementThree = StatementThree;
RuleGroup.NotStatementTwo = NotStatementTwo;
RuleGroup.Rule = Rule;
RuleGroup.RuleAction = RuleAction;
RuleGroup.StatementOne = StatementOne;
RuleGroup.RateBasedStatementOne = RateBasedStatementOne;
RuleGroup.OrStatementTwo = OrStatementTwo;
RuleGroup.FieldToMatch = FieldToMatch;
RuleGroup.IPSetReferenceStatement = IPSetReferenceStatement;
RuleGroup.VisibilityConfig = VisibilityConfig;
RuleGroup.GeoMatchStatement = GeoMatchStatement;
RuleGroup.SqliMatchStatement = SqliMatchStatement;
RuleGroup.AndStatementOne = AndStatementOne;
RuleGroup.ForwardedIPConfiguration = ForwardedIPConfiguration;
RuleGroup.SizeConstraintStatement = SizeConstraintStatement;
RuleGroup.StatementTwo = StatementTwo;
