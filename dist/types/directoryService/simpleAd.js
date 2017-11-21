"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SimpleAD extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DirectoryService::SimpleAD', properties, dependsOn);
    }
}
exports.default = SimpleAD;
