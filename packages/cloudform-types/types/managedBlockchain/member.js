"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberFabricConfiguration = exports.VotingPolicy = exports.NetworkFabricConfiguration = exports.MemberFrameworkConfiguration = exports.NetworkConfiguration = exports.NetworkFrameworkConfiguration = exports.ApprovalThresholdPolicy = exports.MemberConfiguration = void 0;
const resource_1 = require("../resource");
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
class MemberFrameworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MemberFrameworkConfiguration = MemberFrameworkConfiguration;
class NetworkFabricConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkFabricConfiguration = NetworkFabricConfiguration;
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
Member.MemberConfiguration = MemberConfiguration;
Member.ApprovalThresholdPolicy = ApprovalThresholdPolicy;
Member.NetworkFrameworkConfiguration = NetworkFrameworkConfiguration;
Member.NetworkConfiguration = NetworkConfiguration;
Member.MemberFrameworkConfiguration = MemberFrameworkConfiguration;
Member.NetworkFabricConfiguration = NetworkFabricConfiguration;
Member.VotingPolicy = VotingPolicy;
Member.MemberFabricConfiguration = MemberFabricConfiguration;
