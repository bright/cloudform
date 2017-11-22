"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3Location extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::GameLift::S3Location', properties, dependsOn);
    }
}
exports.S3Location = S3Location;
class Build extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::GameLift::Build', properties, dependsOn);
    }
}
exports.default = Build;
