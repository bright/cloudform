"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ElasticLoadBalancerAttachment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::ElasticLoadBalancerAttachment', properties, dependsOn);
    }
}
exports.default = ElasticLoadBalancerAttachment;
