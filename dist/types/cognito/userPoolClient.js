"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class UserPoolClient extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::UserPoolClient', properties, dependsOn);
    }
}
exports.default = UserPoolClient;
