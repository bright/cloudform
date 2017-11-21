"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SubnetGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElastiCache::SubnetGroup', properties, dependsOn);
    }
}
exports.default = SubnetGroup;
