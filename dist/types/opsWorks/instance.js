"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class BlockDeviceMapping extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::BlockDeviceMapping', properties, dependsOn);
    }
}
exports.BlockDeviceMapping = BlockDeviceMapping;
class EbsBlockDevice extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::EbsBlockDevice', properties, dependsOn);
    }
}
exports.EbsBlockDevice = EbsBlockDevice;
class TimeBasedAutoScaling extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::TimeBasedAutoScaling', properties, dependsOn);
    }
}
exports.TimeBasedAutoScaling = TimeBasedAutoScaling;
class Instance extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::Instance', properties, dependsOn);
    }
}
exports.default = Instance;
