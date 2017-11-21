"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Group extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IAM::Group', properties, dependsOn);
    }
}
exports.default = Group;
