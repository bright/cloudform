"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class WafAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::WafAction', properties, dependsOn);
    }
}
exports.WafAction = WafAction;
class ActivatedRule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::ActivatedRule', properties, dependsOn);
    }
}
exports.ActivatedRule = ActivatedRule;
class WebACL extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::WebACL', properties, dependsOn);
    }
}
exports.default = WebACL;
