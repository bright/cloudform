"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ReadinessCheck extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Route53RecoveryReadiness::ReadinessCheck', properties || {});
    }
}
exports.default = ReadinessCheck;
