"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MinimumHealthyHosts extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::MinimumHealthyHosts', properties, dependsOn);
    }
}
exports.MinimumHealthyHosts = MinimumHealthyHosts;
class DeploymentConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::DeploymentConfig', properties, dependsOn);
    }
}
exports.default = DeploymentConfig;
