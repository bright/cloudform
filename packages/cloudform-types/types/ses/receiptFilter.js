"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Filter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Filter = Filter;
class IpFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IpFilter = IpFilter;
class ReceiptFilter extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SES::ReceiptFilter', properties);
    }
}
exports.default = ReceiptFilter;
ReceiptFilter.Filter = Filter;
ReceiptFilter.IpFilter = IpFilter;
