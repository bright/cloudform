"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DistributionConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::DistributionConfig', properties, dependsOn);
    }
}
exports.default = DistributionConfig;
