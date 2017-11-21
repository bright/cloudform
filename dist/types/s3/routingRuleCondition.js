"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RoutingRuleCondition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::S3::RoutingRuleCondition', properties, dependsOn);
    }
}
exports.default = RoutingRuleCondition;
