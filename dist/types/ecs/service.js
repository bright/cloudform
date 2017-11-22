"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LoadBalancer extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::LoadBalancer', properties, dependsOn);
    }
}
exports.LoadBalancer = LoadBalancer;
class PlacementStrategy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::PlacementStrategy', properties, dependsOn);
    }
}
exports.PlacementStrategy = PlacementStrategy;
class DeploymentConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::DeploymentConfiguration', properties, dependsOn);
    }
}
exports.DeploymentConfiguration = DeploymentConfiguration;
class PlacementConstraint extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::PlacementConstraint', properties, dependsOn);
    }
}
exports.PlacementConstraint = PlacementConstraint;
class Service extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::Service', properties, dependsOn);
    }
}
exports.default = Service;
