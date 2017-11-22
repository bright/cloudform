"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MethodResponse extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::MethodResponse', properties, dependsOn);
    }
}
exports.MethodResponse = MethodResponse;
class Integration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::Integration', properties, dependsOn);
    }
}
exports.Integration = Integration;
class IntegrationResponse extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::IntegrationResponse', properties, dependsOn);
    }
}
exports.IntegrationResponse = IntegrationResponse;
class Method extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::Method', properties, dependsOn);
    }
}
exports.default = Method;
