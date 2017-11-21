"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Method extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::Method', properties, dependsOn);
    }
}
exports.default = Method;
