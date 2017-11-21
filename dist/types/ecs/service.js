"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Service extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::Service', properties, dependsOn);
    }
}
exports.default = Service;
