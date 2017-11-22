"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SourceConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::SourceConfiguration', properties, dependsOn);
    }
}
exports.SourceConfiguration = SourceConfiguration;
class ConfigurationOptionSetting extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::ConfigurationOptionSetting', properties, dependsOn);
    }
}
exports.ConfigurationOptionSetting = ConfigurationOptionSetting;
class ConfigurationTemplate extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::ConfigurationTemplate', properties, dependsOn);
    }
}
exports.default = ConfigurationTemplate;
