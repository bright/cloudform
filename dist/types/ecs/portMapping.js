"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PortMapping extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::PortMapping', properties, dependsOn);
    }
}
exports.default = PortMapping;
