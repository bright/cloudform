"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class TaskDefinition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::TaskDefinition', properties, dependsOn);
    }
}
exports.default = TaskDefinition;
