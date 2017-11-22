"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Artifacts extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeBuild::Artifacts', properties, dependsOn);
    }
}
exports.Artifacts = Artifacts;
class SourceAuth extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeBuild::SourceAuth', properties, dependsOn);
    }
}
exports.SourceAuth = SourceAuth;
class Environment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeBuild::Environment', properties, dependsOn);
    }
}
exports.Environment = Environment;
class EnvironmentVariable extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeBuild::EnvironmentVariable', properties, dependsOn);
    }
}
exports.EnvironmentVariable = EnvironmentVariable;
class Source extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeBuild::Source', properties, dependsOn);
    }
}
exports.Source = Source;
class Project extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeBuild::Project', properties, dependsOn);
    }
}
exports.default = Project;
