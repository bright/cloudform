"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ConfigurationTemplate extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::ConfigurationTemplate', properties, dependsOn);
    }
}
exports.default = ConfigurationTemplate;
