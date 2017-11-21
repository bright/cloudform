"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LogConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::LogConfiguration', properties, dependsOn);
    }
}
exports.default = LogConfiguration;
