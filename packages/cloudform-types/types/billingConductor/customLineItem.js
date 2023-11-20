"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemFilter = exports.CustomLineItemPercentageChargeDetails = exports.CustomLineItemFlatChargeDetails = exports.CustomLineItemChargeDetails = exports.BillingPeriodRange = void 0;
const resource_1 = require("../resource");
class BillingPeriodRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BillingPeriodRange = BillingPeriodRange;
class CustomLineItemChargeDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomLineItemChargeDetails = CustomLineItemChargeDetails;
class CustomLineItemFlatChargeDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomLineItemFlatChargeDetails = CustomLineItemFlatChargeDetails;
class CustomLineItemPercentageChargeDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomLineItemPercentageChargeDetails = CustomLineItemPercentageChargeDetails;
class LineItemFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LineItemFilter = LineItemFilter;
class CustomLineItem extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::BillingConductor::CustomLineItem', properties);
    }
}
exports.default = CustomLineItem;
CustomLineItem.BillingPeriodRange = BillingPeriodRange;
CustomLineItem.CustomLineItemChargeDetails = CustomLineItemChargeDetails;
CustomLineItem.CustomLineItemFlatChargeDetails = CustomLineItemFlatChargeDetails;
CustomLineItem.CustomLineItemPercentageChargeDetails = CustomLineItemPercentageChargeDetails;
CustomLineItem.LineItemFilter = LineItemFilter;
