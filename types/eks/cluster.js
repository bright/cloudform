"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ResourcesVpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourcesVpcConfig = ResourcesVpcConfig;
class Cluster extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EKS::Cluster', properties);
    }
}
Cluster.ResourcesVpcConfig = ResourcesVpcConfig;
exports.default = Cluster;
