"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ScalableTarget extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::ScalableTarget', properties, dependsOn);
    }
}
exports.default = ScalableTarget;
