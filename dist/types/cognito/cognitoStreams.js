"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CognitoStreams extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::CognitoStreams', properties, dependsOn);
    }
}
exports.default = CognitoStreams;
