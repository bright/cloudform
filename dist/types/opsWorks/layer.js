"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Layer extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::Layer', properties, dependsOn);
    }
}
exports.default = Layer;
