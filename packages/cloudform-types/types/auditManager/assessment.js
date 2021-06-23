"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Delegation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Delegation = Delegation;
class AWSAccount {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AWSAccount = AWSAccount;
class Role {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Role = Role;
class AssessmentReportsDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssessmentReportsDestination = AssessmentReportsDestination;
class AWSService {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AWSService = AWSService;
class Scope {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Scope = Scope;
class Assessment extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AuditManager::Assessment', properties || {});
    }
}
exports.default = Assessment;
Assessment.Delegation = Delegation;
Assessment.AWSAccount = AWSAccount;
Assessment.Role = Role;
Assessment.AssessmentReportsDestination = AssessmentReportsDestination;
Assessment.AWSService = AWSService;
Assessment.Scope = Scope;
