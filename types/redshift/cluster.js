"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 2.2.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LoggingProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoggingProperties = LoggingProperties;
class Cluster extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Redshift::Cluster', properties);
    }
}
Cluster.LoggingProperties = LoggingProperties;
exports.default = Cluster;
