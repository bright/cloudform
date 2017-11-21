"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LambdaConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::LambdaConfig', properties, dependsOn);
    }
}
exports.default = LambdaConfig;
