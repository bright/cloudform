"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LoadBasedAutoScaling extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::LoadBasedAutoScaling', properties, dependsOn);
    }
}
exports.default = LoadBasedAutoScaling;
