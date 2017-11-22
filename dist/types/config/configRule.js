"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Scope extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Config::Scope', properties, dependsOn);
    }
}
exports.Scope = Scope;
class Source extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Config::Source', properties, dependsOn);
    }
}
exports.Source = Source;
class SourceDetail extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Config::SourceDetail', properties, dependsOn);
    }
}
exports.SourceDetail = SourceDetail;
class ConfigRule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Config::ConfigRule', properties, dependsOn);
    }
}
exports.default = ConfigRule;
