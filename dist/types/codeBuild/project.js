"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Artifacts {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Artifacts = Artifacts;
class SourceAuth {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceAuth = SourceAuth;
class Environment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Environment = Environment;
class EnvironmentVariable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EnvironmentVariable = EnvironmentVariable;
class Source {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Source = Source;
class Project extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CodeBuild::Project', properties);
    }
}
exports.default = Project;
