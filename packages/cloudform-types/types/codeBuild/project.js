"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookFilter = exports.VpcConfig = exports.SourceAuth = exports.Source = exports.S3LogsConfig = exports.RegistryCredential = exports.ProjectTriggers = exports.ProjectSourceVersion = exports.ProjectFleet = exports.ProjectFileSystemLocation = exports.ProjectCache = exports.ProjectBuildBatchConfig = exports.LogsConfig = exports.GitSubmodulesConfig = exports.EnvironmentVariable = exports.Environment = exports.CloudWatchLogsConfig = exports.BuildStatusConfig = exports.BatchRestrictions = exports.Artifacts = void 0;
const resource_1 = require("../resource");
class Artifacts {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Artifacts = Artifacts;
class BatchRestrictions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchRestrictions = BatchRestrictions;
class BuildStatusConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BuildStatusConfig = BuildStatusConfig;
class CloudWatchLogsConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLogsConfig = CloudWatchLogsConfig;
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
class GitSubmodulesConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GitSubmodulesConfig = GitSubmodulesConfig;
class LogsConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogsConfig = LogsConfig;
class ProjectBuildBatchConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectBuildBatchConfig = ProjectBuildBatchConfig;
class ProjectCache {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectCache = ProjectCache;
class ProjectFileSystemLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectFileSystemLocation = ProjectFileSystemLocation;
class ProjectFleet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectFleet = ProjectFleet;
class ProjectSourceVersion {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectSourceVersion = ProjectSourceVersion;
class ProjectTriggers {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectTriggers = ProjectTriggers;
class RegistryCredential {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RegistryCredential = RegistryCredential;
class S3LogsConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3LogsConfig = S3LogsConfig;
class Source {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Source = Source;
class SourceAuth {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceAuth = SourceAuth;
class VpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfig = VpcConfig;
class WebhookFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WebhookFilter = WebhookFilter;
class Project extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CodeBuild::Project', properties);
    }
}
exports.default = Project;
Project.Artifacts = Artifacts;
Project.BatchRestrictions = BatchRestrictions;
Project.BuildStatusConfig = BuildStatusConfig;
Project.CloudWatchLogsConfig = CloudWatchLogsConfig;
Project.Environment = Environment;
Project.EnvironmentVariable = EnvironmentVariable;
Project.GitSubmodulesConfig = GitSubmodulesConfig;
Project.LogsConfig = LogsConfig;
Project.ProjectBuildBatchConfig = ProjectBuildBatchConfig;
Project.ProjectCache = ProjectCache;
Project.ProjectFileSystemLocation = ProjectFileSystemLocation;
Project.ProjectFleet = ProjectFleet;
Project.ProjectSourceVersion = ProjectSourceVersion;
Project.ProjectTriggers = ProjectTriggers;
Project.RegistryCredential = RegistryCredential;
Project.S3LogsConfig = S3LogsConfig;
Project.Source = Source;
Project.SourceAuth = SourceAuth;
Project.VpcConfig = VpcConfig;
Project.WebhookFilter = WebhookFilter;
