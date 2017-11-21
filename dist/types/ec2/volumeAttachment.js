"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VolumeAttachment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::VolumeAttachment', properties, dependsOn);
    }
}
exports.default = VolumeAttachment;
