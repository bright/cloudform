"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class HealthCheckConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::HealthCheckConfig', properties, dependsOn);
    }
}
exports.default = HealthCheckConfig;
