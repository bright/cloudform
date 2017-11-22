"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Target extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::Target', properties, dependsOn);
    }
}
exports.Target = Target;
class ParameterValues extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::ParameterValues', properties, dependsOn);
    }
}
exports.ParameterValues = ParameterValues;
class Association extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::Association', properties, dependsOn);
    }
}
exports.default = Association;
