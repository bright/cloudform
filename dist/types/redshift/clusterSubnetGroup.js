"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ClusterSubnetGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Redshift::ClusterSubnetGroup', properties, dependsOn);
    }
}
exports.default = ClusterSubnetGroup;
