"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LogGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Logs::LogGroup', properties, dependsOn);
    }
}
exports.default = LogGroup;
