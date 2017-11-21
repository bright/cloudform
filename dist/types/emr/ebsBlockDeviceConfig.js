"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EbsBlockDeviceConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::EbsBlockDeviceConfig', properties, dependsOn);
    }
}
exports.default = EbsBlockDeviceConfig;
