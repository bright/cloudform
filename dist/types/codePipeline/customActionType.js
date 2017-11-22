"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Settings extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::Settings', properties, dependsOn);
    }
}
exports.Settings = Settings;
class ArtifactDetails extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::ArtifactDetails', properties, dependsOn);
    }
}
exports.ArtifactDetails = ArtifactDetails;
class ConfigurationProperties extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::ConfigurationProperties', properties, dependsOn);
    }
}
exports.ConfigurationProperties = ConfigurationProperties;
class CustomActionType extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::CustomActionType', properties, dependsOn);
    }
}
exports.default = CustomActionType;
