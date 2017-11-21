"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Role extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IAM::Role', properties, dependsOn);
    }
}
exports.default = Role;
