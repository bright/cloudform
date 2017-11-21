"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ListenerRule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::ListenerRule', properties, dependsOn);
    }
}
exports.default = ListenerRule;
