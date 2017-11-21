"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class TopicPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SNS::TopicPolicy', properties, dependsOn);
    }
}
exports.default = TopicPolicy;
