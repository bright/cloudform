"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LoadBalancer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoadBalancer = LoadBalancer;
class PlacementStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PlacementStrategy = PlacementStrategy;
class DeploymentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentConfiguration = DeploymentConfiguration;
class PlacementConstraint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PlacementConstraint = PlacementConstraint;
class Service extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::Service', properties, dependsOn);
    }
}
exports.default = Service;
