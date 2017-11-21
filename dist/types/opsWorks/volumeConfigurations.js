"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VolumeConfigurations extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::VolumeConfigurations', properties, dependsOn);
    }
}
exports.default = VolumeConfigurations;
