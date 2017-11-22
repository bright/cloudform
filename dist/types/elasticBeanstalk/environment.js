"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class OptionSetting extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::OptionSetting', properties, dependsOn);
    }
}
exports.OptionSetting = OptionSetting;
class Tier extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::Tier', properties, dependsOn);
    }
}
exports.Tier = Tier;
class Environment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::Environment', properties, dependsOn);
    }
}
exports.default = Environment;
