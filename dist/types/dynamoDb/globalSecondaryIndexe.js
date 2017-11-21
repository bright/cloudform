"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class GlobalSecondaryIndexe extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::GlobalSecondaryIndexe', properties, dependsOn);
    }
}
exports.default = GlobalSecondaryIndexe;
