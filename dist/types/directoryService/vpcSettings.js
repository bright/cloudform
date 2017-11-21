"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VpcSettings extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DirectoryService::VpcSettings', properties, dependsOn);
    }
}
exports.default = VpcSettings;
