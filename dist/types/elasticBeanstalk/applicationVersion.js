"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SourceBundle extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::SourceBundle', properties, dependsOn);
    }
}
exports.SourceBundle = SourceBundle;
class ApplicationVersion extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::ApplicationVersion', properties, dependsOn);
    }
}
exports.default = ApplicationVersion;
