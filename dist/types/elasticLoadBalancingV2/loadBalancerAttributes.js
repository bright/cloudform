"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LoadBalancerAttributes extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::LoadBalancerAttributes', properties, dependsOn);
    }
}
exports.default = LoadBalancerAttributes;
