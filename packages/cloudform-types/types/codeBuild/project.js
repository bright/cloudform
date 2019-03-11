"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LogsConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogsConfig = LogsConfig;
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
class VpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfig = VpcConfig;
class S3LogsConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3LogsConfig = S3LogsConfig;
class WebhookFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WebhookFilter = WebhookFilter;
class Artifacts {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Artifacts = Artifacts;
class RegistryCredential {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RegistryCredential = RegistryCredential;
class CloudWatchLogsConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLogsConfig = CloudWatchLogsConfig;
class ProjectCache {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectCache = ProjectCache;
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
class GitSubmodulesConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GitSubmodulesConfig = GitSubmodulesConfig;
class Project extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CodeBuild::Project', properties);
    }
}
Project.LogsConfig = LogsConfig;
Project.SourceAuth = SourceAuth;
Project.Environment = Environment;
Project.VpcConfig = VpcConfig;
Project.S3LogsConfig = S3LogsConfig;
Project.WebhookFilter = WebhookFilter;
Project.Artifacts = Artifacts;
Project.RegistryCredential = RegistryCredential;
Project.CloudWatchLogsConfig = CloudWatchLogsConfig;
Project.ProjectCache = ProjectCache;
Project.ProjectTriggers = ProjectTriggers;
Project.EnvironmentVariable = EnvironmentVariable;
Project.Source = Source;
Project.GitSubmodulesConfig = GitSubmodulesConfig;
exports.default = Project;
