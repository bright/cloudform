"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class UserPoolUser extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::UserPoolUser', properties, dependsOn);
    }
}
exports.default = UserPoolUser;
