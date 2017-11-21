"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class HealthCheckTag extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::HealthCheckTag', properties, dependsOn);
    }
}
exports.default = HealthCheckTag;
