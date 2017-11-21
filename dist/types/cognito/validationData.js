"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ValidationData extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::ValidationData', properties, dependsOn);
    }
}
exports.default = ValidationData;
