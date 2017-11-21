"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SourceConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::SourceConfiguration', properties, dependsOn);
    }
}
exports.default = SourceConfiguration;
