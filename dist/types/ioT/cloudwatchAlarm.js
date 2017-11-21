"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CloudwatchAlarm extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::CloudwatchAlarm', properties, dependsOn);
    }
}
exports.default = CloudwatchAlarm;
