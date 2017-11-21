"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CognitoIdentityProvider extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::CognitoIdentityProvider', properties, dependsOn);
    }
}
exports.default = CognitoIdentityProvider;
