"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MountTarget extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EFS::MountTarget', properties, dependsOn);
    }
}
exports.default = MountTarget;
