"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EndpointConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::EndpointConfiguration', properties, dependsOn);
    }
}
exports.EndpointConfiguration = EndpointConfiguration;
class DomainName extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::DomainName', properties, dependsOn);
    }
}
exports.default = DomainName;
