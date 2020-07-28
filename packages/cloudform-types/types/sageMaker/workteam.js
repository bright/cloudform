"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationConfiguration = exports.MemberDefinition = exports.CognitoMemberDefinition = void 0;
const resource_1 = require("../resource");
class CognitoMemberDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CognitoMemberDefinition = CognitoMemberDefinition;
class MemberDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemberDefinition = MemberDefinition;
class NotificationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationConfiguration = NotificationConfiguration;
class Workteam extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::Workteam', properties || {});
    }
}
exports.default = Workteam;
Workteam.CognitoMemberDefinition = CognitoMemberDefinition;
Workteam.MemberDefinition = MemberDefinition;
Workteam.NotificationConfiguration = NotificationConfiguration;
