"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CacheCluster extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElastiCache::CacheCluster', properties, dependsOn);
    }
}
exports.default = CacheCluster;
