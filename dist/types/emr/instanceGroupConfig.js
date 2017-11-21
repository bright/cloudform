"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class InstanceGroupConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::InstanceGroupConfig', properties, dependsOn);
    }
}
exports.default = InstanceGroupConfig;
