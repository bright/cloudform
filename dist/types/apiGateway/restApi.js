"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3Location extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::S3Location', properties, dependsOn);
    }
}
exports.S3Location = S3Location;
class EndpointConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::EndpointConfiguration', properties, dependsOn);
    }
}
exports.EndpointConfiguration = EndpointConfiguration;
class RestApi extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::RestApi', properties, dependsOn);
    }
}
exports.default = RestApi;
