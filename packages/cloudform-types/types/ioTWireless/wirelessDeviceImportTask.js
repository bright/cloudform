"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidewalk = void 0;
const resource_1 = require("../resource");
class Sidewalk {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Sidewalk = Sidewalk;
class WirelessDeviceImportTask extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTWireless::WirelessDeviceImportTask', properties);
    }
}
exports.default = WirelessDeviceImportTask;
WirelessDeviceImportTask.Sidewalk = Sidewalk;
