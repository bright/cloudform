"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Api extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Serverless::Api', properties, dependsOn);
    }
}
exports.default = Api;
