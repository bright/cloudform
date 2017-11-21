"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class AttributeDefinition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::AttributeDefinition', properties, dependsOn);
    }
}
exports.default = AttributeDefinition;
