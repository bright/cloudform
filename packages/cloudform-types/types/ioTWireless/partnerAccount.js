"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SidewalkAccountInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SidewalkAccountInfo = SidewalkAccountInfo;
class SidewalkUpdateAccount {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SidewalkUpdateAccount = SidewalkUpdateAccount;
class PartnerAccount extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTWireless::PartnerAccount', properties || {});
    }
}
exports.default = PartnerAccount;
PartnerAccount.SidewalkAccountInfo = SidewalkAccountInfo;
PartnerAccount.SidewalkUpdateAccount = SidewalkUpdateAccount;
