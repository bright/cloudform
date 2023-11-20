"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkmailAction = exports.StopAction = exports.SNSAction = exports.S3Action = exports.Rule = exports.LambdaAction = exports.BounceAction = exports.AddHeaderAction = exports.Action = void 0;
const resource_1 = require("../resource");
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
class AddHeaderAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AddHeaderAction = AddHeaderAction;
class BounceAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BounceAction = BounceAction;
class LambdaAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaAction = LambdaAction;
class Rule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rule = Rule;
class S3Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Action = S3Action;
class SNSAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SNSAction = SNSAction;
class StopAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StopAction = StopAction;
class WorkmailAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WorkmailAction = WorkmailAction;
class ReceiptRule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SES::ReceiptRule', properties);
    }
}
exports.default = ReceiptRule;
ReceiptRule.Action = Action;
ReceiptRule.AddHeaderAction = AddHeaderAction;
ReceiptRule.BounceAction = BounceAction;
ReceiptRule.LambdaAction = LambdaAction;
ReceiptRule.Rule = Rule;
ReceiptRule.S3Action = S3Action;
ReceiptRule.SNSAction = SNSAction;
ReceiptRule.StopAction = StopAction;
ReceiptRule.WorkmailAction = WorkmailAction;
