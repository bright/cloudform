"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class UserPoolGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::UserPoolGroup', properties, dependsOn);
    }
}
exports.default = UserPoolGroup;
