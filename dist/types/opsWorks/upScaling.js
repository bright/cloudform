"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class UpScaling extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::UpScaling', properties, dependsOn);
    }
}
exports.default = UpScaling;
