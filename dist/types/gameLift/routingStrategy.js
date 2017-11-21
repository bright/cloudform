"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RoutingStrategy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::GameLift::RoutingStrategy', properties, dependsOn);
    }
}
exports.default = RoutingStrategy;
