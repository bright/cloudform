"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class NodeGroupConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElastiCache::NodeGroupConfiguration', properties, dependsOn);
    }
}
exports.default = NodeGroupConfiguration;
