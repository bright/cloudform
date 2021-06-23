import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Volumes {
    Host?: VolumesHost;
    EfsVolumeConfiguration?: EfsVolumeConfiguration;
    Name?: Value<string>;
    constructor(properties: Volumes);
}
export declare class AuthorizationConfig {
    Iam?: Value<string>;
    AccessPointId?: Value<string>;
    constructor(properties: AuthorizationConfig);
}
export declare class ResourceRequirement {
    Type?: Value<string>;
    Value?: Value<string>;
    constructor(properties: ResourceRequirement);
}
export declare class Environment {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Environment);
}
export declare class VolumesHost {
    SourcePath?: Value<string>;
    constructor(properties: VolumesHost);
}
export declare class NodeProperties {
    MainNode: Value<number>;
    NodeRangeProperties: List<NodeRangeProperty>;
    NumNodes: Value<number>;
    constructor(properties: NodeProperties);
}
export declare class RetryStrategy {
    EvaluateOnExit?: List<EvaluateOnExit>;
    Attempts?: Value<number>;
    constructor(properties: RetryStrategy);
}
export declare class Secret {
    ValueFrom: Value<string>;
    Name: Value<string>;
    constructor(properties: Secret);
}
export declare class NetworkConfiguration {
    AssignPublicIp?: Value<string>;
    constructor(properties: NetworkConfiguration);
}
export declare class LogConfiguration {
    SecretOptions?: List<Secret>;
    Options?: {
        [key: string]: any;
    };
    LogDriver: Value<string>;
    constructor(properties: LogConfiguration);
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
    Volumes?: List<Volumes>;
    Command?: List<Value<string>>;
    Environment?: List<Environment>;
    Ulimits?: List<Ulimit>;
    NetworkConfiguration?: NetworkConfiguration;
    InstanceType?: Value<string>;
    constructor(properties: ContainerProperties);
}
export declare class MountPoints {
    ReadOnly?: Value<boolean>;
    SourceVolume?: Value<string>;
    ContainerPath?: Value<string>;
    constructor(properties: MountPoints);
}
export declare class EvaluateOnExit {
    Action: Value<string>;
    OnExitCode?: Value<string>;
    OnReason?: Value<string>;
    OnStatusReason?: Value<string>;
    constructor(properties: EvaluateOnExit);
}
export declare class Ulimit {
    SoftLimit: Value<number>;
    HardLimit: Value<number>;
    Name: Value<string>;
    constructor(properties: Ulimit);
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
export declare class FargatePlatformConfiguration {
    PlatformVersion?: Value<string>;
    constructor(properties: FargatePlatformConfiguration);
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
export declare class NodeRangeProperty {
    Container?: ContainerProperties;
    TargetNodes: Value<string>;
    constructor(properties: NodeRangeProperty);
}
export declare class EfsVolumeConfiguration {
    TransitEncryption?: Value<string>;
    AuthorizationConfig?: AuthorizationConfig;
    FileSystemId: Value<string>;
    RootDirectory?: Value<string>;
    TransitEncryptionPort?: Value<number>;
    constructor(properties: EfsVolumeConfiguration);
}
export declare class Device {
    HostPath?: Value<string>;
    Permissions?: List<Value<string>>;
    ContainerPath?: Value<string>;
    constructor(properties: Device);
}
export interface JobDefinitionProperties {
    Type: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    NodeProperties?: NodeProperties;
    Timeout?: Timeout;
    ContainerProperties?: ContainerProperties;
    JobDefinitionName?: Value<string>;
    PropagateTags?: Value<boolean>;
    PlatformCapabilities?: List<Value<string>>;
    RetryStrategy?: RetryStrategy;
    Tags?: {
        [key: string]: any;
    };
}
export default class JobDefinition extends ResourceBase<JobDefinitionProperties> {
    static Volumes: typeof Volumes;
    static AuthorizationConfig: typeof AuthorizationConfig;
    static ResourceRequirement: typeof ResourceRequirement;
    static Environment: typeof Environment;
    static VolumesHost: typeof VolumesHost;
    static NodeProperties: typeof NodeProperties;
    static RetryStrategy: typeof RetryStrategy;
    static Secret: typeof Secret;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static LogConfiguration: typeof LogConfiguration;
    static ContainerProperties: typeof ContainerProperties;
    static MountPoints: typeof MountPoints;
    static EvaluateOnExit: typeof EvaluateOnExit;
    static Ulimit: typeof Ulimit;
    static LinuxParameters: typeof LinuxParameters;
    static FargatePlatformConfiguration: typeof FargatePlatformConfiguration;
    static Timeout: typeof Timeout;
    static Tmpfs: typeof Tmpfs;
    static NodeRangeProperty: typeof NodeRangeProperty;
    static EfsVolumeConfiguration: typeof EfsVolumeConfiguration;
    static Device: typeof Device;
    constructor(properties: JobDefinitionProperties);
}
