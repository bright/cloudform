"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LocalSecondaryIndexe extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::LocalSecondaryIndexe', properties, dependsOn);
    }
}
exports.default = LocalSecondaryIndexe;
