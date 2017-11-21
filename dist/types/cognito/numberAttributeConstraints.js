"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class NumberAttributeConstraints extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::NumberAttributeConstraints', properties, dependsOn);
    }
}
exports.default = NumberAttributeConstraints;
