"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PlacementConstraints extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::PlacementConstraints', properties, dependsOn);
    }
}
exports.default = PlacementConstraints;
