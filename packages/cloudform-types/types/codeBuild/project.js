"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ProjectSourceVersion {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectSourceVersion = ProjectSourceVersion;
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
class GitSubmodulesConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GitSubmodulesConfig = GitSubmodulesConfig;
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
class Project extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CodeBuild::Project', properties);
    }
}
Project.ProjectSourceVersion = ProjectSourceVersion;
Project.LogsConfig = LogsConfig;
Project.SourceAuth = SourceAuth;
Project.Environment = Environment;
Project.GitSubmodulesConfig = GitSubmodulesConfig;
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
exports.default = Project;
