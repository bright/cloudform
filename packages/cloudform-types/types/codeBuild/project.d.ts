import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LogsConfig {
    CloudWatchLogs?: CloudWatchLogsConfig;
    S3Logs?: S3LogsConfig;
    constructor(properties: LogsConfig);
}
export declare class SourceAuth {
    Type: Value<string>;
    Resource?: Value<string>;
    constructor(properties: SourceAuth);
}
export declare class Environment {
    Type: Value<string>;
    EnvironmentVariables?: List<EnvironmentVariable>;
    PrivilegedMode?: Value<boolean>;
    ImagePullCredentialsType?: Value<string>;
    Image: Value<string>;
    RegistryCredential?: RegistryCredential;
    ComputeType: Value<string>;
    Certificate?: Value<string>;
    constructor(properties: Environment);
}
export declare class VpcConfig {
    Subnets?: List<Value<string>>;
    VpcId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export declare class S3LogsConfig {
    Status: Value<string>;
    Location?: Value<string>;
    EncryptionDisabled?: Value<boolean>;
    constructor(properties: S3LogsConfig);
}
export declare class WebhookFilter {
    Pattern: Value<string>;
    Type: Value<string>;
    ExcludeMatchedPattern?: Value<boolean>;
    constructor(properties: WebhookFilter);
}
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
export declare class RegistryCredential {
    Credential: Value<string>;
    CredentialProvider: Value<string>;
    constructor(properties: RegistryCredential);
}
export declare class CloudWatchLogsConfig {
    Status: Value<string>;
    GroupName?: Value<string>;
    StreamName?: Value<string>;
    constructor(properties: CloudWatchLogsConfig);
}
export declare class ProjectCache {
    Modes?: List<Value<string>>;
    Type: Value<string>;
    Location?: Value<string>;
    constructor(properties: ProjectCache);
}
export declare type FilterGroup = List<WebhookFilter>;
export declare class ProjectTriggers {
    FilterGroups?: List<FilterGroup>;
    Webhook?: Value<boolean>;
    constructor(properties: ProjectTriggers);
}
export declare class EnvironmentVariable {
    Type?: Value<string>;
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: EnvironmentVariable);
}
export declare class Source {
    Type: Value<string>;
    ReportBuildStatus?: Value<boolean>;
    Auth?: SourceAuth;
    SourceIdentifier?: Value<string>;
    BuildSpec?: Value<string>;
    GitCloneDepth?: Value<number>;
    InsecureSsl?: Value<boolean>;
    Location?: Value<string>;
    GitSubmodulesConfig?: GitSubmodulesConfig;
    constructor(properties: Source);
}
export declare class GitSubmodulesConfig {
    FetchSubmodules: Value<boolean>;
    constructor(properties: GitSubmodulesConfig);
}
export interface ProjectProperties {
    Description?: Value<string>;
    VpcConfig?: VpcConfig;
    SecondarySources?: List<Source>;
    EncryptionKey?: Value<string>;
    Triggers?: ProjectTriggers;
    SecondaryArtifacts?: List<Artifacts>;
    Source: Source;
    Name?: Value<string>;
    Artifacts: Artifacts;
    BadgeEnabled?: Value<boolean>;
    LogsConfig?: LogsConfig;
    ServiceRole: Value<string>;
    QueuedTimeoutInMinutes?: Value<number>;
    Environment: Environment;
    Tags?: List<ResourceTag>;
    TimeoutInMinutes?: Value<number>;
    Cache?: ProjectCache;
}
export default class Project extends ResourceBase {
    static LogsConfig: typeof LogsConfig;
    static SourceAuth: typeof SourceAuth;
    static Environment: typeof Environment;
    static VpcConfig: typeof VpcConfig;
    static S3LogsConfig: typeof S3LogsConfig;
    static WebhookFilter: typeof WebhookFilter;
    static Artifacts: typeof Artifacts;
    static RegistryCredential: typeof RegistryCredential;
    static CloudWatchLogsConfig: typeof CloudWatchLogsConfig;
    static ProjectCache: typeof ProjectCache;
    static ProjectTriggers: typeof ProjectTriggers;
    static EnvironmentVariable: typeof EnvironmentVariable;
    static Source: typeof Source;
    static GitSubmodulesConfig: typeof GitSubmodulesConfig;
    constructor(properties?: ProjectProperties);
}
