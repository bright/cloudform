"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Action extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::Action', properties, dependsOn);
    }
}
exports.Action = Action;
class RuleCondition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::RuleCondition', properties, dependsOn);
    }
}
exports.RuleCondition = RuleCondition;
class ListenerRule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::ListenerRule', properties, dependsOn);
    }
}
exports.default = ListenerRule;
