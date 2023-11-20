"use strict";
/* Generated from:
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = void 0;
const resource_1 = require("../resource");
class Rule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rule = Rule;
class DevicePool extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DeviceFarm::DevicePool', properties);
    }
}
exports.default = DevicePool;
DevicePool.Rule = Rule;
