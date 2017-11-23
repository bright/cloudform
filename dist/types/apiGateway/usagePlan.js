"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ApiStage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApiStage = ApiStage;
class ThrottleSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ThrottleSettings = ThrottleSettings;
class QuotaSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QuotaSettings = QuotaSettings;
class UsagePlan extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::UsagePlan', properties, dependsOn);
    }
}
exports.default = UsagePlan;
