"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class AdminCreateUserConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::AdminCreateUserConfig', properties, dependsOn);
    }
}
exports.default = AdminCreateUserConfig;
