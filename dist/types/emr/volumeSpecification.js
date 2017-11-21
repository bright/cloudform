"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VolumeSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::VolumeSpecification', properties, dependsOn);
    }
}
exports.default = VolumeSpecification;
