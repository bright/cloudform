"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class HealthCheck extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::HealthCheck', properties, dependsOn);
    }
}
exports.default = HealthCheck;
