"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceTag = void 0;
const resource_1 = require("../resource");
class ResourceTag {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceTag = ResourceTag;
class AnomalyMonitor extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CE::AnomalyMonitor', properties);
    }
}
exports.default = AnomalyMonitor;
AnomalyMonitor.ResourceTag = ResourceTag;
