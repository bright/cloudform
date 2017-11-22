"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class TargetGroupAttribute extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::TargetGroupAttribute', properties, dependsOn);
    }
}
exports.TargetGroupAttribute = TargetGroupAttribute;
class Matcher extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::Matcher', properties, dependsOn);
    }
}
exports.Matcher = Matcher;
class TargetDescription extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::TargetDescription', properties, dependsOn);
    }
}
exports.TargetDescription = TargetDescription;
class TargetGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::TargetGroup', properties, dependsOn);
    }
}
exports.default = TargetGroup;
