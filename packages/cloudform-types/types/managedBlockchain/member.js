"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class NetworkFrameworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkFrameworkConfiguration = NetworkFrameworkConfiguration;
class NetworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfiguration = NetworkConfiguration;
class NetworkFabricConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkFabricConfiguration = NetworkFabricConfiguration;
class MemberConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemberConfiguration = MemberConfiguration;
class ApprovalThresholdPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApprovalThresholdPolicy = ApprovalThresholdPolicy;
class MemberFrameworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemberFrameworkConfiguration = MemberFrameworkConfiguration;
class VotingPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VotingPolicy = VotingPolicy;
class MemberFabricConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemberFabricConfiguration = MemberFabricConfiguration;
class Member extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ManagedBlockchain::Member', properties);
    }
}
exports.default = Member;
Member.NetworkFrameworkConfiguration = NetworkFrameworkConfiguration;
Member.NetworkConfiguration = NetworkConfiguration;
Member.NetworkFabricConfiguration = NetworkFabricConfiguration;
Member.MemberConfiguration = MemberConfiguration;
Member.ApprovalThresholdPolicy = ApprovalThresholdPolicy;
Member.MemberFrameworkConfiguration = MemberFrameworkConfiguration;
Member.VotingPolicy = VotingPolicy;
Member.MemberFabricConfiguration = MemberFabricConfiguration;
