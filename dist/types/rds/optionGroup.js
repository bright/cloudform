"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class OptionSetting extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::RDS::OptionSetting', properties, dependsOn);
    }
}
exports.OptionSetting = OptionSetting;
class OptionConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::RDS::OptionConfiguration', properties, dependsOn);
    }
}
exports.OptionConfiguration = OptionConfiguration;
class OptionGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::RDS::OptionGroup', properties, dependsOn);
    }
}
exports.default = OptionGroup;
