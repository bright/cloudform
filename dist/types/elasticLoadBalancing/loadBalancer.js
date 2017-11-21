"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LoadBalancer extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::LoadBalancer', properties, dependsOn);
    }
}
exports.default = LoadBalancer;
