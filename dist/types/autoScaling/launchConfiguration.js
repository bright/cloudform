"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class BlockDeviceMapping extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::BlockDeviceMapping', properties, dependsOn);
    }
}
exports.BlockDeviceMapping = BlockDeviceMapping;
class BlockDevice extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::BlockDevice', properties, dependsOn);
    }
}
exports.BlockDevice = BlockDevice;
class LaunchConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::LaunchConfiguration', properties, dependsOn);
    }
}
exports.default = LaunchConfiguration;
