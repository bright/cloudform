"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SubscriptionFilter extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Logs::SubscriptionFilter', properties, dependsOn);
    }
}
exports.default = SubscriptionFilter;
