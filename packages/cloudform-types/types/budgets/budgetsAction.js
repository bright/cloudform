"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
exports.Subscriber = exports.SsmActionDefinition = exports.ScpActionDefinition = exports.IamActionDefinition = exports.Definition = exports.ActionThreshold = void 0;
const resource_1 = require("../resource");
class ActionThreshold {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActionThreshold = ActionThreshold;
class Definition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Definition = Definition;
class IamActionDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IamActionDefinition = IamActionDefinition;
class ScpActionDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScpActionDefinition = ScpActionDefinition;
class SsmActionDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SsmActionDefinition = SsmActionDefinition;
class Subscriber {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Subscriber = Subscriber;
class BudgetsAction extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Budgets::BudgetsAction', properties);
    }
}
exports.default = BudgetsAction;
BudgetsAction.ActionThreshold = ActionThreshold;
BudgetsAction.Definition = Definition;
BudgetsAction.IamActionDefinition = IamActionDefinition;
BudgetsAction.ScpActionDefinition = ScpActionDefinition;
BudgetsAction.SsmActionDefinition = SsmActionDefinition;
BudgetsAction.Subscriber = Subscriber;
