"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SourceBundle extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::SourceBundle', properties, dependsOn);
    }
}
exports.default = SourceBundle;
