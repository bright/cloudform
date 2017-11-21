"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DefaultCacheBehavior extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::DefaultCacheBehavior', properties, dependsOn);
    }
}
exports.default = DefaultCacheBehavior;
