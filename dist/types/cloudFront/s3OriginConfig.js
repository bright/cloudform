"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3OriginConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::S3OriginConfig', properties, dependsOn);
    }
}
exports.default = S3OriginConfig;
