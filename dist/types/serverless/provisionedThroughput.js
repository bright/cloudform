"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ProvisionedThroughput extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Serverless::ProvisionedThroughput', properties, dependsOn);
    }
}
exports.default = ProvisionedThroughput;
