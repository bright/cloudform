"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Distribution extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::Distribution', properties, dependsOn);
    }
}
exports.default = Distribution;
