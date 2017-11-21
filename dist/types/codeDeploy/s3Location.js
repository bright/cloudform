"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3Location extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::S3Location', properties, dependsOn);
    }
}
exports.default = S3Location;
