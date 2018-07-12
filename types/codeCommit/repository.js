"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RepositoryTrigger {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RepositoryTrigger = RepositoryTrigger;
class Repository extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CodeCommit::Repository', properties);
    }
}
Repository.RepositoryTrigger = RepositoryTrigger;
exports.default = Repository;
