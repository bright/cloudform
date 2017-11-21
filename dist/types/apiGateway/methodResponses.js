"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MethodResponses extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::MethodResponses', properties, dependsOn);
    }
}
exports.default = MethodResponses;
