"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotingPolicy = exports.NetworkFrameworkConfiguration = exports.NetworkFabricConfiguration = exports.NetworkConfiguration = exports.MemberFrameworkConfiguration = exports.MemberFabricConfiguration = exports.MemberConfiguration = exports.ApprovalThresholdPolicy = void 0;
const resource_1 = require("../resource");
class ApprovalThresholdPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApprovalThresholdPolicy = ApprovalThresholdPolicy;
class MemberConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemberConfiguration = MemberConfiguration;
class MemberFabricConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemberFabricConfiguration = MemberFabricConfiguration;
class MemberFrameworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemberFrameworkConfiguration = MemberFrameworkConfiguration;
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
class NetworkFrameworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkFrameworkConfiguration = NetworkFrameworkConfiguration;
class VotingPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VotingPolicy = VotingPolicy;
class Member extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ManagedBlockchain::Member', properties);
    }
}
exports.default = Member;
Member.ApprovalThresholdPolicy = ApprovalThresholdPolicy;
Member.MemberConfiguration = MemberConfiguration;
Member.MemberFabricConfiguration = MemberFabricConfiguration;
Member.MemberFrameworkConfiguration = MemberFrameworkConfiguration;
Member.NetworkConfiguration = NetworkConfiguration;
Member.NetworkFabricConfiguration = NetworkFabricConfiguration;
Member.NetworkFrameworkConfiguration = NetworkFrameworkConfiguration;
Member.VotingPolicy = VotingPolicy;
