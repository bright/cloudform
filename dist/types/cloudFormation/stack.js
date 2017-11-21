"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Stack extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFormation::Stack', properties, dependsOn);
    }
}
exports.default = Stack;
