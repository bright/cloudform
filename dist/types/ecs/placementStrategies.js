"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PlacementStrategies extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::PlacementStrategies', properties, dependsOn);
    }
}
exports.default = PlacementStrategies;
