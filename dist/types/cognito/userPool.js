"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class UserPool extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::UserPool', properties, dependsOn);
    }
}
exports.default = UserPool;
