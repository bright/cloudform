"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DynamoDB extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::DynamoDB', properties, dependsOn);
    }
}
exports.default = DynamoDB;
