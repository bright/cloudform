"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LoggingProperties extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Redshift::LoggingProperties', properties, dependsOn);
    }
}
exports.LoggingProperties = LoggingProperties;
class Cluster extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Redshift::Cluster', properties, dependsOn);
    }
}
exports.default = Cluster;
