"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class TopicRulePayload extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::TopicRulePayload', properties, dependsOn);
    }
}
exports.default = TopicRulePayload;
