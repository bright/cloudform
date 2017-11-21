"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SecurityGroupIngress extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElastiCache::SecurityGroupIngress', properties, dependsOn);
    }
}
exports.default = SecurityGroupIngress;
