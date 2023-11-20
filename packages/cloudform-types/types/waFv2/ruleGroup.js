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
exports.VisibilityConfig = exports.TextTransformation = exports.Statement = exports.SqliMatchStatement = exports.SizeConstraintStatement = exports.SingleQueryArgument = exports.SingleHeader = exports.RuleAction = exports.Rule = exports.RegexPatternSetReferenceStatement = exports.RegexMatchStatement = exports.RateLimitUriPath = exports.RateLimitQueryString = exports.RateLimitQueryArgument = exports.RateLimitLabelNamespace = exports.RateLimitHeader = exports.RateLimitCookie = exports.RateBasedStatementCustomKey = exports.RateBasedStatement = exports.OrStatement = exports.NotStatement = exports.LabelSummary = exports.LabelMatchStatement = exports.Label = exports.JsonMatchPattern = exports.JsonBody = exports.ImmunityTimeProperty = exports.IPSetReferenceStatement = exports.IPSetForwardedIPConfiguration = exports.Headers = exports.HeaderMatchPattern = exports.GeoMatchStatement = exports.ForwardedIPConfiguration = exports.FieldToMatch = exports.CustomResponseBody = exports.CustomResponse = exports.CustomRequestHandling = exports.CustomHTTPHeader = exports.CountAction = exports.Cookies = exports.CookieMatchPattern = exports.ChallengeConfig = exports.ChallengeAction = exports.CaptchaConfig = exports.CaptchaAction = exports.ByteMatchStatement = exports.Body = exports.BlockAction = exports.AndStatement = exports.AllowAction = void 0;
exports.XssMatchStatement = void 0;
const resource_1 = require("../resource");
class AllowAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AllowAction = AllowAction;
class AndStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AndStatement = AndStatement;
class BlockAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlockAction = BlockAction;
class Body {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Body = Body;
class ByteMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ByteMatchStatement = ByteMatchStatement;
class CaptchaAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptchaAction = CaptchaAction;
class CaptchaConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptchaConfig = CaptchaConfig;
class ChallengeAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ChallengeAction = ChallengeAction;
class ChallengeConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ChallengeConfig = ChallengeConfig;
class CookieMatchPattern {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CookieMatchPattern = CookieMatchPattern;
class Cookies {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Cookies = Cookies;
class CountAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CountAction = CountAction;
class CustomHTTPHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomHTTPHeader = CustomHTTPHeader;
class CustomRequestHandling {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomRequestHandling = CustomRequestHandling;
class CustomResponse {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomResponse = CustomResponse;
class CustomResponseBody {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomResponseBody = CustomResponseBody;
class FieldToMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldToMatch = FieldToMatch;
class ForwardedIPConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ForwardedIPConfiguration = ForwardedIPConfiguration;
class GeoMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeoMatchStatement = GeoMatchStatement;
class HeaderMatchPattern {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeaderMatchPattern = HeaderMatchPattern;
class Headers {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Headers = Headers;
class IPSetForwardedIPConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration;
class IPSetReferenceStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IPSetReferenceStatement = IPSetReferenceStatement;
class ImmunityTimeProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ImmunityTimeProperty = ImmunityTimeProperty;
class JsonBody {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JsonBody = JsonBody;
class JsonMatchPattern {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JsonMatchPattern = JsonMatchPattern;
class Label {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Label = Label;
class LabelMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LabelMatchStatement = LabelMatchStatement;
class LabelSummary {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LabelSummary = LabelSummary;
class NotStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotStatement = NotStatement;
class OrStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OrStatement = OrStatement;
class RateBasedStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateBasedStatement = RateBasedStatement;
class RateBasedStatementCustomKey {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateBasedStatementCustomKey = RateBasedStatementCustomKey;
class RateLimitCookie {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateLimitCookie = RateLimitCookie;
class RateLimitHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateLimitHeader = RateLimitHeader;
class RateLimitLabelNamespace {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateLimitLabelNamespace = RateLimitLabelNamespace;
class RateLimitQueryArgument {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateLimitQueryArgument = RateLimitQueryArgument;
class RateLimitQueryString {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateLimitQueryString = RateLimitQueryString;
class RateLimitUriPath {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateLimitUriPath = RateLimitUriPath;
class RegexMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RegexMatchStatement = RegexMatchStatement;
class RegexPatternSetReferenceStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement;
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
class SingleHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SingleHeader = SingleHeader;
class SingleQueryArgument {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SingleQueryArgument = SingleQueryArgument;
class SizeConstraintStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SizeConstraintStatement = SizeConstraintStatement;
class SqliMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SqliMatchStatement = SqliMatchStatement;
class Statement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Statement = Statement;
class TextTransformation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TextTransformation = TextTransformation;
class VisibilityConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VisibilityConfig = VisibilityConfig;
class XssMatchStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.XssMatchStatement = XssMatchStatement;
class RuleGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::WAFv2::RuleGroup', properties);
    }
}
exports.default = RuleGroup;
RuleGroup.AllowAction = AllowAction;
RuleGroup.AndStatement = AndStatement;
RuleGroup.BlockAction = BlockAction;
RuleGroup.Body = Body;
RuleGroup.ByteMatchStatement = ByteMatchStatement;
RuleGroup.CaptchaAction = CaptchaAction;
RuleGroup.CaptchaConfig = CaptchaConfig;
RuleGroup.ChallengeAction = ChallengeAction;
RuleGroup.ChallengeConfig = ChallengeConfig;
RuleGroup.CookieMatchPattern = CookieMatchPattern;
RuleGroup.Cookies = Cookies;
RuleGroup.CountAction = CountAction;
RuleGroup.CustomHTTPHeader = CustomHTTPHeader;
RuleGroup.CustomRequestHandling = CustomRequestHandling;
RuleGroup.CustomResponse = CustomResponse;
RuleGroup.CustomResponseBody = CustomResponseBody;
RuleGroup.FieldToMatch = FieldToMatch;
RuleGroup.ForwardedIPConfiguration = ForwardedIPConfiguration;
RuleGroup.GeoMatchStatement = GeoMatchStatement;
RuleGroup.HeaderMatchPattern = HeaderMatchPattern;
RuleGroup.Headers = Headers;
RuleGroup.IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration;
RuleGroup.IPSetReferenceStatement = IPSetReferenceStatement;
RuleGroup.ImmunityTimeProperty = ImmunityTimeProperty;
RuleGroup.JsonBody = JsonBody;
RuleGroup.JsonMatchPattern = JsonMatchPattern;
RuleGroup.Label = Label;
RuleGroup.LabelMatchStatement = LabelMatchStatement;
RuleGroup.LabelSummary = LabelSummary;
RuleGroup.NotStatement = NotStatement;
RuleGroup.OrStatement = OrStatement;
RuleGroup.RateBasedStatement = RateBasedStatement;
RuleGroup.RateBasedStatementCustomKey = RateBasedStatementCustomKey;
RuleGroup.RateLimitCookie = RateLimitCookie;
RuleGroup.RateLimitHeader = RateLimitHeader;
RuleGroup.RateLimitLabelNamespace = RateLimitLabelNamespace;
RuleGroup.RateLimitQueryArgument = RateLimitQueryArgument;
RuleGroup.RateLimitQueryString = RateLimitQueryString;
RuleGroup.RateLimitUriPath = RateLimitUriPath;
RuleGroup.RegexMatchStatement = RegexMatchStatement;
RuleGroup.RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement;
RuleGroup.Rule = Rule;
RuleGroup.RuleAction = RuleAction;
RuleGroup.SingleHeader = SingleHeader;
RuleGroup.SingleQueryArgument = SingleQueryArgument;
RuleGroup.SizeConstraintStatement = SizeConstraintStatement;
RuleGroup.SqliMatchStatement = SqliMatchStatement;
RuleGroup.Statement = Statement;
RuleGroup.TextTransformation = TextTransformation;
RuleGroup.VisibilityConfig = VisibilityConfig;
RuleGroup.XssMatchStatement = XssMatchStatement;
