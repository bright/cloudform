/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ProjectSourceVersion {
    SourceIdentifier!: Value<string>
    SourceVersion?: Value<string>

    constructor(properties: ProjectSourceVersion) {
        Object.assign(this, properties)
    }
}

export class LogsConfig {
    CloudWatchLogs?: CloudWatchLogsConfig
    S3Logs?: S3LogsConfig

    constructor(properties: LogsConfig) {
        Object.assign(this, properties)
    }
}

export class SourceAuth {
    Type!: Value<string>
    Resource?: Value<string>

    constructor(properties: SourceAuth) {
        Object.assign(this, properties)
    }
}

export class Environment {
    Type!: Value<string>
    EnvironmentVariables?: List<EnvironmentVariable>
    PrivilegedMode?: Value<boolean>
    ImagePullCredentialsType?: Value<string>
    Image!: Value<string>
    RegistryCredential?: RegistryCredential
    ComputeType!: Value<string>
    Certificate?: Value<string>

    constructor(properties: Environment) {
        Object.assign(this, properties)
    }
}

export class GitSubmodulesConfig {
    FetchSubmodules!: Value<boolean>

    constructor(properties: GitSubmodulesConfig) {
        Object.assign(this, properties)
    }
}

export class VpcConfig {
    Subnets?: List<Value<string>>
    VpcId?: Value<string>
    SecurityGroupIds?: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export class S3LogsConfig {
    Status!: Value<string>
    EncryptionDisabled?: Value<boolean>
    Location?: Value<string>

    constructor(properties: S3LogsConfig) {
        Object.assign(this, properties)
    }
}

export class WebhookFilter {
    Pattern!: Value<string>
    Type!: Value<string>
    ExcludeMatchedPattern?: Value<boolean>

    constructor(properties: WebhookFilter) {
        Object.assign(this, properties)
    }
}

export class Artifacts {
    Path?: Value<string>
    Type!: Value<string>
    ArtifactIdentifier?: Value<string>
    OverrideArtifactName?: Value<boolean>
    Packaging?: Value<string>
    EncryptionDisabled?: Value<boolean>
    Location?: Value<string>
    Name?: Value<string>
    NamespaceType?: Value<string>

    constructor(properties: Artifacts) {
        Object.assign(this, properties)
    }
}

export class RegistryCredential {
    Credential!: Value<string>
    CredentialProvider!: Value<string>

    constructor(properties: RegistryCredential) {
        Object.assign(this, properties)
    }
}

export class CloudWatchLogsConfig {
    Status!: Value<string>
    GroupName?: Value<string>
    StreamName?: Value<string>

    constructor(properties: CloudWatchLogsConfig) {
        Object.assign(this, properties)
    }
}

export class ProjectCache {
    Modes?: List<Value<string>>
    Type!: Value<string>
    Location?: Value<string>

    constructor(properties: ProjectCache) {
        Object.assign(this, properties)
    }
}

export type FilterGroup = List<WebhookFilter>

export class ProjectTriggers {
    FilterGroups?: List<FilterGroup>
    Webhook?: Value<boolean>

    constructor(properties: ProjectTriggers) {
        Object.assign(this, properties)
    }
}

export class EnvironmentVariable {
    Type?: Value<string>
    Value!: Value<string>
    Name!: Value<string>

    constructor(properties: EnvironmentVariable) {
        Object.assign(this, properties)
    }
}

export class Source {
    Type!: Value<string>
    ReportBuildStatus?: Value<boolean>
    Auth?: SourceAuth
    SourceIdentifier?: Value<string>
    BuildSpec?: Value<string>
    GitCloneDepth?: Value<number>
    GitSubmodulesConfig?: GitSubmodulesConfig
    InsecureSsl?: Value<boolean>
    Location?: Value<string>

    constructor(properties: Source) {
        Object.assign(this, properties)
    }
}

export interface ProjectProperties {
    Description?: Value<string>
    VpcConfig?: VpcConfig
    SecondarySources?: List<Source>
    EncryptionKey?: Value<string>
    SourceVersion?: Value<string>
    Triggers?: ProjectTriggers
    SecondaryArtifacts?: List<Artifacts>
    Source: Source
    Name?: Value<string>
    Artifacts: Artifacts
    BadgeEnabled?: Value<boolean>
    LogsConfig?: LogsConfig
    ServiceRole: Value<string>
    QueuedTimeoutInMinutes?: Value<number>
    Environment: Environment
    SecondarySourceVersions?: List<ProjectSourceVersion>
    Tags?: List<ResourceTag>
    TimeoutInMinutes?: Value<number>
    Cache?: ProjectCache
}

export default class Project extends ResourceBase<ProjectProperties> {
    static ProjectSourceVersion = ProjectSourceVersion
    static LogsConfig = LogsConfig
    static SourceAuth = SourceAuth
    static Environment = Environment
    static GitSubmodulesConfig = GitSubmodulesConfig
    static VpcConfig = VpcConfig
    static S3LogsConfig = S3LogsConfig
    static WebhookFilter = WebhookFilter
    static Artifacts = Artifacts
    static RegistryCredential = RegistryCredential
    static CloudWatchLogsConfig = CloudWatchLogsConfig
    static ProjectCache = ProjectCache
    static ProjectTriggers = ProjectTriggers
    static EnvironmentVariable = EnvironmentVariable
    static Source = Source

    constructor(properties: ProjectProperties) {
        super('AWS::CodeBuild::Project', properties)
    }
}
