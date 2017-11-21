"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CustomOriginConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::CustomOriginConfig', properties, dependsOn);
    }
}
exports.default = CustomOriginConfig;
