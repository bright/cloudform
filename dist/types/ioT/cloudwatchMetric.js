"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CloudwatchMetric extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::CloudwatchMetric', properties, dependsOn);
    }
}
exports.default = CloudwatchMetric;
