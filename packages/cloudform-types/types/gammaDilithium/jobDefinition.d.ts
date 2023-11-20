import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AuthorizationConfig {
    Iam?: Value<string>;
    AccessPointId?: Value<string>;
    constructor(properties: AuthorizationConfig);
}
export declare class ContainerProperties {
    User?: Value<string>;
    Secrets?: List<Secret>;
    Memory?: Value<number>;
    Privileged?: Value<boolean>;
    LinuxParameters?: LinuxParameters;
    FargatePlatformConfiguration?: FargatePlatformConfiguration;
    JobRoleArn?: Value<string>;
    ReadonlyRootFilesystem?: Value<boolean>;
    Vcpus?: Value<number>;
    Image: Value<string>;
    ResourceRequirements?: List<ResourceRequirement>;
    LogConfiguration?: LogConfiguration;
    MountPoints?: List<MountPoints>;
    ExecutionRoleArn?: Value<string>;
    RuntimePlatform?: RuntimePlatform;
    Volumes?: List<Volumes>;
    Command?: List<Value<string>>;
    Environment?: List<Environment>;
    Ulimits?: List<Ulimit>;
    NetworkConfiguration?: NetworkConfiguration;
    InstanceType?: Value<string>;
    EphemeralStorage?: EphemeralStorage;
    constructor(properties: ContainerProperties);
}
export declare class Device {
    HostPath?: Value<string>;
    Permissions?: List<Value<string>>;
    ContainerPath?: Value<string>;
    constructor(properties: Device);
}
export declare class EfsVolumeConfiguration {
    TransitEncryption?: Value<string>;
    AuthorizationConfig?: AuthorizationConfig;
    FileSystemId: Value<string>;
    RootDirectory?: Value<string>;
    TransitEncryptionPort?: Value<number>;
    constructor(properties: EfsVolumeConfiguration);
}
export declare class EksContainer {
    Args?: List<Value<string>>;
    VolumeMounts?: List<EksContainerVolumeMount>;
    ImagePullPolicy?: Value<string>;
    Command?: List<Value<string>>;
    SecurityContext?: EksContainerSecurityContext;
    Resources?: EksContainerResourceRequirements;
    Image: Value<string>;
    Env?: List<EksContainerEnvironmentVariable>;
    Name?: Value<string>;
    constructor(properties: EksContainer);
}
export declare class EksContainerEnvironmentVariable {
    Value?: Value<string>;
    Name: Value<string>;
    constructor(properties: EksContainerEnvironmentVariable);
}
export declare class EksContainerResourceRequirements {
    Limits?: {
        [key: string]: any;
    };
    Requests?: {
        [key: string]: any;
    };
    constructor(properties: EksContainerResourceRequirements);
}
export declare class EksContainerSecurityContext {
    RunAsUser?: Value<number>;
    RunAsNonRoot?: Value<boolean>;
    Privileged?: Value<boolean>;
    ReadOnlyRootFilesystem?: Value<boolean>;
    RunAsGroup?: Value<number>;
    constructor(properties: EksContainerSecurityContext);
}
export declare class EksContainerVolumeMount {
    MountPath?: Value<string>;
    ReadOnly?: Value<boolean>;
    Name?: Value<string>;
    constructor(properties: EksContainerVolumeMount);
}
export declare class EksEmptyDir {
    Medium?: Value<string>;
    SizeLimit?: Value<string>;
    constructor(properties: EksEmptyDir);
}
export declare class EksHostPath {
    Path?: Value<string>;
    constructor(properties: EksHostPath);
}
export declare class EksProperties {
    PodProperties?: PodProperties;
    constructor(properties: EksProperties);
}
export declare class EksSecret {
    SecretName: Value<string>;
    Optional?: Value<boolean>;
    constructor(properties: EksSecret);
}
export declare class EksVolume {
    Secret?: EksSecret;
    EmptyDir?: EksEmptyDir;
    HostPath?: EksHostPath;
    Name: Value<string>;
    constructor(properties: EksVolume);
}
export declare class Environment {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Environment);
}
export declare class EphemeralStorage {
    SizeInGiB: Value<number>;
    constructor(properties: EphemeralStorage);
}
export declare class EvaluateOnExit {
    Action: Value<string>;
    OnExitCode?: Value<string>;
    OnReason?: Value<string>;
    OnStatusReason?: Value<string>;
    constructor(properties: EvaluateOnExit);
}
export declare class FargatePlatformConfiguration {
    PlatformVersion?: Value<string>;
    constructor(properties: FargatePlatformConfiguration);
}
export declare class LinuxParameters {
    Swappiness?: Value<number>;
    Tmpfs?: List<Tmpfs>;
    SharedMemorySize?: Value<number>;
    Devices?: List<Device>;
    InitProcessEnabled?: Value<boolean>;
    MaxSwap?: Value<number>;
    constructor(properties: LinuxParameters);
}
export declare class LogConfiguration {
    SecretOptions?: List<Secret>;
    Options?: {
        [key: string]: any;
    };
    LogDriver: Value<string>;
    constructor(properties: LogConfiguration);
}
export declare class Metadata {
    Labels?: {
        [key: string]: any;
    };
    constructor(properties: Metadata);
}
export declare class MountPoints {
    ReadOnly?: Value<boolean>;
    SourceVolume?: Value<string>;
    ContainerPath?: Value<string>;
    constructor(properties: MountPoints);
}
export declare class NetworkConfiguration {
    AssignPublicIp?: Value<string>;
    constructor(properties: NetworkConfiguration);
}
export declare class NodeProperties {
    MainNode: Value<number>;
    NodeRangeProperties: List<NodeRangeProperty>;
    NumNodes: Value<number>;
    constructor(properties: NodeProperties);
}
export declare class NodeRangeProperty {
    Container?: ContainerProperties;
    TargetNodes: Value<string>;
    constructor(properties: NodeRangeProperty);
}
export declare class PodProperties {
    Volumes?: List<EksVolume>;
    DnsPolicy?: Value<string>;
    Containers?: List<EksContainer>;
    Metadata?: Metadata;
    ServiceAccountName?: Value<string>;
    HostNetwork?: Value<boolean>;
    constructor(properties: PodProperties);
}
export declare class ResourceRequirement {
    Type?: Value<string>;
    Value?: Value<string>;
    constructor(properties: ResourceRequirement);
}
export declare class RetryStrategy {
    EvaluateOnExit?: List<EvaluateOnExit>;
    Attempts?: Value<number>;
    constructor(properties: RetryStrategy);
}
export declare class RuntimePlatform {
    OperatingSystemFamily?: Value<string>;
    CpuArchitecture?: Value<string>;
    constructor(properties: RuntimePlatform);
}
export declare class Secret {
    ValueFrom: Value<string>;
    Name: Value<string>;
    constructor(properties: Secret);
}
export declare class Timeout {
    AttemptDurationSeconds?: Value<number>;
    constructor(properties: Timeout);
}
export declare class Tmpfs {
    Size: Value<number>;
    ContainerPath: Value<string>;
    MountOptions?: List<Value<string>>;
    constructor(properties: Tmpfs);
}
export declare class Ulimit {
    SoftLimit: Value<number>;
    HardLimit: Value<number>;
    Name: Value<string>;
    constructor(properties: Ulimit);
}
export declare class Volumes {
    Host?: VolumesHost;
    EfsVolumeConfiguration?: EfsVolumeConfiguration;
    Name?: Value<string>;
    constructor(properties: Volumes);
}
export declare class VolumesHost {
    SourcePath?: Value<string>;
    constructor(properties: VolumesHost);
}
export interface JobDefinitionProperties {
    Type: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    NodeProperties?: NodeProperties;
    SchedulingPriority?: Value<number>;
    Timeout?: Timeout;
    ContainerProperties?: ContainerProperties;
    JobDefinitionName?: Value<string>;
    PropagateTags?: Value<boolean>;
    PlatformCapabilities?: List<Value<string>>;
    EksProperties?: EksProperties;
    RetryStrategy?: RetryStrategy;
    Tags?: {
        [key: string]: any;
    };
}
export default class JobDefinition extends ResourceBase<JobDefinitionProperties> {
    static AuthorizationConfig: typeof AuthorizationConfig;
    static ContainerProperties: typeof ContainerProperties;
    static Device: typeof Device;
    static EfsVolumeConfiguration: typeof EfsVolumeConfiguration;
    static EksContainer: typeof EksContainer;
    static EksContainerEnvironmentVariable: typeof EksContainerEnvironmentVariable;
    static EksContainerResourceRequirements: typeof EksContainerResourceRequirements;
    static EksContainerSecurityContext: typeof EksContainerSecurityContext;
    static EksContainerVolumeMount: typeof EksContainerVolumeMount;
    static EksEmptyDir: typeof EksEmptyDir;
    static EksHostPath: typeof EksHostPath;
    static EksProperties: typeof EksProperties;
    static EksSecret: typeof EksSecret;
    static EksVolume: typeof EksVolume;
    static Environment: typeof Environment;
    static EphemeralStorage: typeof EphemeralStorage;
    static EvaluateOnExit: typeof EvaluateOnExit;
    static FargatePlatformConfiguration: typeof FargatePlatformConfiguration;
    static LinuxParameters: typeof LinuxParameters;
    static LogConfiguration: typeof LogConfiguration;
    static Metadata: typeof Metadata;
    static MountPoints: typeof MountPoints;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static NodeProperties: typeof NodeProperties;
    static NodeRangeProperty: typeof NodeRangeProperty;
    static PodProperties: typeof PodProperties;
    static ResourceRequirement: typeof ResourceRequirement;
    static RetryStrategy: typeof RetryStrategy;
    static RuntimePlatform: typeof RuntimePlatform;
    static Secret: typeof Secret;
    static Timeout: typeof Timeout;
    static Tmpfs: typeof Tmpfs;
    static Ulimit: typeof Ulimit;
    static Volumes: typeof Volumes;
    static VolumesHost: typeof VolumesHost;
    constructor(properties: JobDefinitionProperties);
}
