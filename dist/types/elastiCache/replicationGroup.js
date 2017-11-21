"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ReplicationGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElastiCache::ReplicationGroup', properties, dependsOn);
    }
}
exports.default = ReplicationGroup;
