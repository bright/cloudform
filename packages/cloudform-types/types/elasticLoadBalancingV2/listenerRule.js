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
exports.TargetGroupTuple = exports.TargetGroupStickinessConfig = exports.SourceIpConfig = exports.RuleCondition = exports.RedirectConfig = exports.QueryStringKeyValue = exports.QueryStringConfig = exports.PathPatternConfig = exports.HttpRequestMethodConfig = exports.HttpHeaderConfig = exports.HostHeaderConfig = exports.ForwardConfig = exports.FixedResponseConfig = exports.AuthenticateOidcConfig = exports.AuthenticateCognitoConfig = exports.Action = void 0;
const resource_1 = require("../resource");
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
class AuthenticateCognitoConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuthenticateCognitoConfig = AuthenticateCognitoConfig;
class AuthenticateOidcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuthenticateOidcConfig = AuthenticateOidcConfig;
class FixedResponseConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FixedResponseConfig = FixedResponseConfig;
class ForwardConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ForwardConfig = ForwardConfig;
class HostHeaderConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HostHeaderConfig = HostHeaderConfig;
class HttpHeaderConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpHeaderConfig = HttpHeaderConfig;
class HttpRequestMethodConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRequestMethodConfig = HttpRequestMethodConfig;
class PathPatternConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PathPatternConfig = PathPatternConfig;
class QueryStringConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueryStringConfig = QueryStringConfig;
class QueryStringKeyValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueryStringKeyValue = QueryStringKeyValue;
class RedirectConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedirectConfig = RedirectConfig;
class RuleCondition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleCondition = RuleCondition;
class SourceIpConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceIpConfig = SourceIpConfig;
class TargetGroupStickinessConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetGroupStickinessConfig = TargetGroupStickinessConfig;
class TargetGroupTuple {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetGroupTuple = TargetGroupTuple;
class ListenerRule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ElasticLoadBalancingV2::ListenerRule', properties);
    }
}
exports.default = ListenerRule;
ListenerRule.Action = Action;
ListenerRule.AuthenticateCognitoConfig = AuthenticateCognitoConfig;
ListenerRule.AuthenticateOidcConfig = AuthenticateOidcConfig;
ListenerRule.FixedResponseConfig = FixedResponseConfig;
ListenerRule.ForwardConfig = ForwardConfig;
ListenerRule.HostHeaderConfig = HostHeaderConfig;
ListenerRule.HttpHeaderConfig = HttpHeaderConfig;
ListenerRule.HttpRequestMethodConfig = HttpRequestMethodConfig;
ListenerRule.PathPatternConfig = PathPatternConfig;
ListenerRule.QueryStringConfig = QueryStringConfig;
ListenerRule.QueryStringKeyValue = QueryStringKeyValue;
ListenerRule.RedirectConfig = RedirectConfig;
ListenerRule.RuleCondition = RuleCondition;
ListenerRule.SourceIpConfig = SourceIpConfig;
ListenerRule.TargetGroupStickinessConfig = TargetGroupStickinessConfig;
ListenerRule.TargetGroupTuple = TargetGroupTuple;
