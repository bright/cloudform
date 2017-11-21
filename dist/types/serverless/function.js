"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Function extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Serverless::Function', properties, dependsOn);
    }
}
exports.default = Function;
