"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class AppCookieStickinessPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::AppCookieStickinessPolicy', properties, dependsOn);
    }
}
exports.default = AppCookieStickinessPolicy;
