"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
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
class ProjectCache {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectCache = ProjectCache;
class VpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfig = VpcConfig;
class ProjectTriggers {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectTriggers = ProjectTriggers;
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
Project.Artifacts = Artifacts;
Project.SourceAuth = SourceAuth;
Project.Environment = Environment;
Project.ProjectCache = ProjectCache;
Project.VpcConfig = VpcConfig;
Project.ProjectTriggers = ProjectTriggers;
Project.EnvironmentVariable = EnvironmentVariable;
Project.Source = Source;
exports.default = Project;
