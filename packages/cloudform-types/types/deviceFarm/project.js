"use strict";
/* Generated from:
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcConfig = void 0;
const resource_1 = require("../resource");
class VpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfig = VpcConfig;
class Project extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DeviceFarm::Project', properties);
    }
}
exports.default = Project;
Project.VpcConfig = VpcConfig;
