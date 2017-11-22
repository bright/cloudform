"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LoadBalancerAttribute extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::LoadBalancerAttribute', properties, dependsOn);
    }
}
exports.LoadBalancerAttribute = LoadBalancerAttribute;
class SubnetMapping extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::SubnetMapping', properties, dependsOn);
    }
}
exports.SubnetMapping = SubnetMapping;
class LoadBalancer extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::LoadBalancer', properties, dependsOn);
    }
}
exports.default = LoadBalancer;
