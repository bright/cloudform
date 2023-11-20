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
exports.RegexPatternSetReferenceStatement = exports.RegexMatchStatement = exports.RateLimitUriPath = exports.RateLimitQueryString = exports.RateLimitQueryArgument = exports.RateLimitLabelNamespace = exports.RateLimitHeader = exports.RateLimitCookie = exports.RateBasedStatementCustomKey = exports.RateBasedStatement = exports.OverrideAction = exports.OrStatement = exports.NotStatement = exports.ManagedRuleGroupStatement = exports.ManagedRuleGroupConfig = exports.LabelMatchStatement = exports.Label = exports.JsonMatchPattern = exports.JsonBody = exports.ImmunityTimeProperty = exports.IPSetReferenceStatement = exports.IPSetForwardedIPConfiguration = exports.Headers = exports.HeaderMatchPattern = exports.GeoMatchStatement = exports.ForwardedIPConfiguration = exports.FieldToMatch = exports.FieldIdentifier = exports.ExcludedRule = exports.DefaultAction = exports.CustomResponseBody = exports.CustomResponse = exports.CustomRequestHandling = exports.CustomHTTPHeader = exports.CountAction = exports.Cookies = exports.CookieMatchPattern = exports.ChallengeConfig = exports.ChallengeAction = exports.CaptchaConfig = exports.CaptchaAction = exports.ByteMatchStatement = exports.Body = exports.BlockAction = exports.AssociationConfig = exports.AndStatement = exports.AllowAction = exports.AWSManagedRulesBotControlRuleSet = exports.AWSManagedRulesATPRuleSet = exports.AWSManagedRulesACFPRuleSet = void 0;
exports.XssMatchStatement = exports.VisibilityConfig = exports.TextTransformation = exports.Statement = exports.SqliMatchStatement = exports.SizeConstraintStatement = exports.SingleQueryArgument = exports.SingleHeader = exports.RuleGroupReferenceStatement = exports.RuleActionOverride = exports.RuleAction = exports.Rule = exports.ResponseInspectionStatusCode = exports.ResponseInspectionJson = exports.ResponseInspectionHeader = exports.ResponseInspectionBodyContains = exports.ResponseInspection = exports.RequestInspectionACFP = exports.RequestInspection = exports.RequestBodyAssociatedResourceTypeConfig = void 0;
const resource_1 = require("../resource");
class AWSManagedRulesACFPRuleSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AWSManagedRulesACFPRuleSet = AWSManagedRulesACFPRuleSet;
class AWSManagedRulesATPRuleSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AWSManagedRulesATPRuleSet = AWSManagedRulesATPRuleSet;
class AWSManagedRulesBotControlRuleSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AWSManagedRulesBotControlRuleSet = AWSManagedRulesBotControlRuleSet;
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
class AssociationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssociationConfig = AssociationConfig;
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
class DefaultAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultAction = DefaultAction;
class ExcludedRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExcludedRule = ExcludedRule;
class FieldIdentifier {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldIdentifier = FieldIdentifier;
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
class ManagedRuleGroupConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ManagedRuleGroupConfig = ManagedRuleGroupConfig;
class ManagedRuleGroupStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ManagedRuleGroupStatement = ManagedRuleGroupStatement;
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
class OverrideAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OverrideAction = OverrideAction;
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
class RequestBodyAssociatedResourceTypeConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RequestBodyAssociatedResourceTypeConfig = RequestBodyAssociatedResourceTypeConfig;
class RequestInspection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RequestInspection = RequestInspection;
class RequestInspectionACFP {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RequestInspectionACFP = RequestInspectionACFP;
class ResponseInspection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResponseInspection = ResponseInspection;
class ResponseInspectionBodyContains {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResponseInspectionBodyContains = ResponseInspectionBodyContains;
class ResponseInspectionHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResponseInspectionHeader = ResponseInspectionHeader;
class ResponseInspectionJson {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResponseInspectionJson = ResponseInspectionJson;
class ResponseInspectionStatusCode {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResponseInspectionStatusCode = ResponseInspectionStatusCode;
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
class RuleActionOverride {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleActionOverride = RuleActionOverride;
class RuleGroupReferenceStatement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleGroupReferenceStatement = RuleGroupReferenceStatement;
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
class WebACL extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::WAFv2::WebACL', properties);
    }
}
exports.default = WebACL;
WebACL.AWSManagedRulesACFPRuleSet = AWSManagedRulesACFPRuleSet;
WebACL.AWSManagedRulesATPRuleSet = AWSManagedRulesATPRuleSet;
WebACL.AWSManagedRulesBotControlRuleSet = AWSManagedRulesBotControlRuleSet;
WebACL.AllowAction = AllowAction;
WebACL.AndStatement = AndStatement;
WebACL.AssociationConfig = AssociationConfig;
WebACL.BlockAction = BlockAction;
WebACL.Body = Body;
WebACL.ByteMatchStatement = ByteMatchStatement;
WebACL.CaptchaAction = CaptchaAction;
WebACL.CaptchaConfig = CaptchaConfig;
WebACL.ChallengeAction = ChallengeAction;
WebACL.ChallengeConfig = ChallengeConfig;
WebACL.CookieMatchPattern = CookieMatchPattern;
WebACL.Cookies = Cookies;
WebACL.CountAction = CountAction;
WebACL.CustomHTTPHeader = CustomHTTPHeader;
WebACL.CustomRequestHandling = CustomRequestHandling;
WebACL.CustomResponse = CustomResponse;
WebACL.CustomResponseBody = CustomResponseBody;
WebACL.DefaultAction = DefaultAction;
WebACL.ExcludedRule = ExcludedRule;
WebACL.FieldIdentifier = FieldIdentifier;
WebACL.FieldToMatch = FieldToMatch;
WebACL.ForwardedIPConfiguration = ForwardedIPConfiguration;
WebACL.GeoMatchStatement = GeoMatchStatement;
WebACL.HeaderMatchPattern = HeaderMatchPattern;
WebACL.Headers = Headers;
WebACL.IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration;
WebACL.IPSetReferenceStatement = IPSetReferenceStatement;
WebACL.ImmunityTimeProperty = ImmunityTimeProperty;
WebACL.JsonBody = JsonBody;
WebACL.JsonMatchPattern = JsonMatchPattern;
WebACL.Label = Label;
WebACL.LabelMatchStatement = LabelMatchStatement;
WebACL.ManagedRuleGroupConfig = ManagedRuleGroupConfig;
WebACL.ManagedRuleGroupStatement = ManagedRuleGroupStatement;
WebACL.NotStatement = NotStatement;
WebACL.OrStatement = OrStatement;
WebACL.OverrideAction = OverrideAction;
WebACL.RateBasedStatement = RateBasedStatement;
WebACL.RateBasedStatementCustomKey = RateBasedStatementCustomKey;
WebACL.RateLimitCookie = RateLimitCookie;
WebACL.RateLimitHeader = RateLimitHeader;
WebACL.RateLimitLabelNamespace = RateLimitLabelNamespace;
WebACL.RateLimitQueryArgument = RateLimitQueryArgument;
WebACL.RateLimitQueryString = RateLimitQueryString;
WebACL.RateLimitUriPath = RateLimitUriPath;
WebACL.RegexMatchStatement = RegexMatchStatement;
WebACL.RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement;
WebACL.RequestBodyAssociatedResourceTypeConfig = RequestBodyAssociatedResourceTypeConfig;
WebACL.RequestInspection = RequestInspection;
WebACL.RequestInspectionACFP = RequestInspectionACFP;
WebACL.ResponseInspection = ResponseInspection;
WebACL.ResponseInspectionBodyContains = ResponseInspectionBodyContains;
WebACL.ResponseInspectionHeader = ResponseInspectionHeader;
WebACL.ResponseInspectionJson = ResponseInspectionJson;
WebACL.ResponseInspectionStatusCode = ResponseInspectionStatusCode;
WebACL.Rule = Rule;
WebACL.RuleAction = RuleAction;
WebACL.RuleActionOverride = RuleActionOverride;
WebACL.RuleGroupReferenceStatement = RuleGroupReferenceStatement;
WebACL.SingleHeader = SingleHeader;
WebACL.SingleQueryArgument = SingleQueryArgument;
WebACL.SizeConstraintStatement = SizeConstraintStatement;
WebACL.SqliMatchStatement = SqliMatchStatement;
WebACL.Statement = Statement;
WebACL.TextTransformation = TextTransformation;
WebACL.VisibilityConfig = VisibilityConfig;
WebACL.XssMatchStatement = XssMatchStatement;
