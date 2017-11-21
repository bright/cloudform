"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Permission extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::Permission', properties, dependsOn);
    }
}
exports.default = Permission;
