import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Artifacts {
    Path?: Value<string>;
    Type: Value<string>;
    ArtifactIdentifier?: Value<string>;
    OverrideArtifactName?: Value<boolean>;
    Packaging?: Value<string>;
    EncryptionDisabled?: Value<boolean>;
    Location?: Value<string>;
    Name?: Value<string>;
    NamespaceType?: Value<string>;
    constructor(properties: Artifacts);
}
export declare class BatchRestrictions {
    ComputeTypesAllowed?: List<Value<string>>;
    MaximumBuildsAllowed?: Value<number>;
    constructor(properties: BatchRestrictions);
}
export declare class BuildStatusConfig {
    Context?: Value<string>;
    TargetUrl?: Value<string>;
    constructor(properties: BuildStatusConfig);
}
export declare class CloudWatchLogsConfig {
    Status: Value<string>;
    GroupName?: Value<string>;
    StreamName?: Value<string>;
    constructor(properties: CloudWatchLogsConfig);
}
export declare class Environment {
    Type?: Value<string>;
    EnvironmentVariables?: List<EnvironmentVariable>;
    PrivilegedMode?: Value<boolean>;
    ImagePullCredentialsType?: Value<string>;
    Image: Value<string>;
    RegistryCredential?: RegistryCredential;
    ComputeType?: Value<string>;
    Certificate?: Value<string>;
    constructor(properties: Environment);
}
export declare class EnvironmentVariable {
    Type?: Value<string>;
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: EnvironmentVariable);
}
export declare type FilterGroup = List<WebhookFilter>;
export declare class GitSubmodulesConfig {
    FetchSubmodules: Value<boolean>;
    constructor(properties: GitSubmodulesConfig);
}
export declare class LogsConfig {
    CloudWatchLogs?: CloudWatchLogsConfig;
    S3Logs?: S3LogsConfig;
    constructor(properties: LogsConfig);
}
export declare class ProjectBuildBatchConfig {
    CombineArtifacts?: Value<boolean>;
    ServiceRole?: Value<string>;
    BatchReportMode?: Value<string>;
    TimeoutInMins?: Value<number>;
    Restrictions?: BatchRestrictions;
    constructor(properties: ProjectBuildBatchConfig);
}
export declare class ProjectCache {
    Modes?: List<Value<string>>;
    Type: Value<string>;
    Location?: Value<string>;
    constructor(properties: ProjectCache);
}
export declare class ProjectFileSystemLocation {
    MountPoint: Value<string>;
    Type: Value<string>;
    Identifier: Value<string>;
    MountOptions?: Value<string>;
    Location: Value<string>;
    constructor(properties: ProjectFileSystemLocation);
}
export declare class ProjectFleet {
    FleetArn?: Value<string>;
    constructor(properties: ProjectFleet);
}
export declare class ProjectSourceVersion {
    SourceIdentifier: Value<string>;
    SourceVersion?: Value<string>;
    constructor(properties: ProjectSourceVersion);
}
export declare class ProjectTriggers {
    FilterGroups?: List<FilterGroup>;
    BuildType?: Value<string>;
    Webhook?: Value<boolean>;
    constructor(properties: ProjectTriggers);
}
export declare class RegistryCredential {
    Credential: Value<string>;
    CredentialProvider: Value<string>;
    constructor(properties: RegistryCredential);
}
export declare class S3LogsConfig {
    Status: Value<string>;
    EncryptionDisabled?: Value<boolean>;
    Location?: Value<string>;
    constructor(properties: S3LogsConfig);
}
export declare class Source {
    Type: Value<string>;
    ReportBuildStatus?: Value<boolean>;
    Auth?: SourceAuth;
    SourceIdentifier?: Value<string>;
    BuildSpec?: Value<string>;
    GitCloneDepth?: Value<number>;
    BuildStatusConfig?: BuildStatusConfig;
    GitSubmodulesConfig?: GitSubmodulesConfig;
    InsecureSsl?: Value<boolean>;
    Location?: Value<string>;
    constructor(properties: Source);
}
export declare class SourceAuth {
    Type: Value<string>;
    Resource?: Value<string>;
    constructor(properties: SourceAuth);
}
export declare class VpcConfig {
    Subnets?: List<Value<string>>;
    VpcId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export declare class WebhookFilter {
    Pattern: Value<string>;
    Type: Value<string>;
    ExcludeMatchedPattern?: Value<boolean>;
    constructor(properties: WebhookFilter);
}
export interface ProjectProperties {
    Description?: Value<string>;
    ResourceAccessRole?: Value<string>;
    VpcConfig?: VpcConfig;
    SecondarySources?: List<Source>;
    EncryptionKey?: Value<string>;
    SourceVersion?: Value<string>;
    Triggers?: ProjectTriggers;
    SecondaryArtifacts?: List<Artifacts>;
    Source: Source;
    Name?: Value<string>;
    Artifacts: Artifacts;
    BadgeEnabled?: Value<boolean>;
    LogsConfig?: LogsConfig;
    ServiceRole: Value<string>;
    QueuedTimeoutInMinutes?: Value<number>;
    FileSystemLocations?: List<ProjectFileSystemLocation>;
    Environment: Environment;
    SecondarySourceVersions?: List<ProjectSourceVersion>;
    ConcurrentBuildLimit?: Value<number>;
    Visibility?: Value<string>;
    BuildBatchConfig?: ProjectBuildBatchConfig;
    Tags?: List<ResourceTag>;
    TimeoutInMinutes?: Value<number>;
    Cache?: ProjectCache;
}
export default class Project extends ResourceBase<ProjectProperties> {
    static Artifacts: typeof Artifacts;
    static BatchRestrictions: typeof BatchRestrictions;
    static BuildStatusConfig: typeof BuildStatusConfig;
    static CloudWatchLogsConfig: typeof CloudWatchLogsConfig;
    static Environment: typeof Environment;
    static EnvironmentVariable: typeof EnvironmentVariable;
    static GitSubmodulesConfig: typeof GitSubmodulesConfig;
    static LogsConfig: typeof LogsConfig;
    static ProjectBuildBatchConfig: typeof ProjectBuildBatchConfig;
    static ProjectCache: typeof ProjectCache;
    static ProjectFileSystemLocation: typeof ProjectFileSystemLocation;
    static ProjectFleet: typeof ProjectFleet;
    static ProjectSourceVersion: typeof ProjectSourceVersion;
    static ProjectTriggers: typeof ProjectTriggers;
    static RegistryCredential: typeof RegistryCredential;
    static S3LogsConfig: typeof S3LogsConfig;
    static Source: typeof Source;
    static SourceAuth: typeof SourceAuth;
    static VpcConfig: typeof VpcConfig;
    static WebhookFilter: typeof WebhookFilter;
    constructor(properties: ProjectProperties);
}
