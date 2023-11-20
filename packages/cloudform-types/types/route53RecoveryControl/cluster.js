"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterEndpoint = void 0;
const resource_1 = require("../resource");
class ClusterEndpoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClusterEndpoint = ClusterEndpoint;
class Cluster extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Route53RecoveryControl::Cluster', properties);
    }
}
exports.default = Cluster;
Cluster.ClusterEndpoint = ClusterEndpoint;
