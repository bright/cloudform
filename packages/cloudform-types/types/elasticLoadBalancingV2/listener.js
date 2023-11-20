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
exports.TargetGroupTuple = exports.TargetGroupStickinessConfig = exports.RedirectConfig = exports.ForwardConfig = exports.FixedResponseConfig = exports.Certificate = exports.AuthenticateOidcConfig = exports.AuthenticateCognitoConfig = exports.Action = void 0;
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
class Certificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Certificate = Certificate;
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
class RedirectConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedirectConfig = RedirectConfig;
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
class Listener extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ElasticLoadBalancingV2::Listener', properties);
    }
}
exports.default = Listener;
Listener.Action = Action;
Listener.AuthenticateCognitoConfig = AuthenticateCognitoConfig;
Listener.AuthenticateOidcConfig = AuthenticateOidcConfig;
Listener.Certificate = Certificate;
Listener.FixedResponseConfig = FixedResponseConfig;
Listener.ForwardConfig = ForwardConfig;
Listener.RedirectConfig = RedirectConfig;
Listener.TargetGroupStickinessConfig = TargetGroupStickinessConfig;
Listener.TargetGroupTuple = TargetGroupTuple;
