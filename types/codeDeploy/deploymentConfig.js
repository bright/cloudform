"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 2.2.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MinimumHealthyHosts {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MinimumHealthyHosts = MinimumHealthyHosts;
class DeploymentConfig extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CodeDeploy::DeploymentConfig', properties);
    }
}
DeploymentConfig.MinimumHealthyHosts = MinimumHealthyHosts;
exports.default = DeploymentConfig;
