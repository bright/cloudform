"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiering = exports.FreeTier = void 0;
const resource_1 = require("../resource");
class FreeTier {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FreeTier = FreeTier;
class Tiering {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Tiering = Tiering;
class PricingRule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::BillingConductor::PricingRule', properties);
    }
}
exports.default = PricingRule;
PricingRule.FreeTier = FreeTier;
PricingRule.Tiering = Tiering;
