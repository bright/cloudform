"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputationPreference = exports.AccountGrouping = void 0;
const resource_1 = require("../resource");
class AccountGrouping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccountGrouping = AccountGrouping;
class ComputationPreference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComputationPreference = ComputationPreference;
class BillingGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::BillingConductor::BillingGroup', properties);
    }
}
exports.default = BillingGroup;
BillingGroup.AccountGrouping = AccountGrouping;
BillingGroup.ComputationPreference = ComputationPreference;
