"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MethodSetting extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::MethodSetting', properties, dependsOn);
    }
}
exports.MethodSetting = MethodSetting;
class StageDescription extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::StageDescription', properties, dependsOn);
    }
}
exports.StageDescription = StageDescription;
class Deployment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::Deployment', properties, dependsOn);
    }
}
exports.default = Deployment;
