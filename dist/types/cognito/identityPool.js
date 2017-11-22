"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PushSync extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::PushSync', properties, dependsOn);
    }
}
exports.PushSync = PushSync;
class CognitoIdentityProvider extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::CognitoIdentityProvider', properties, dependsOn);
    }
}
exports.CognitoIdentityProvider = CognitoIdentityProvider;
class CognitoStreams extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::CognitoStreams', properties, dependsOn);
    }
}
exports.CognitoStreams = CognitoStreams;
class IdentityPool extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::IdentityPool', properties, dependsOn);
    }
}
exports.default = IdentityPool;
