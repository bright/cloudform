"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class UsagePlanKey extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::UsagePlanKey', properties, dependsOn);
    }
}
exports.default = UsagePlanKey;
