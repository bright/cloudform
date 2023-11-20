import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AuthorizationConfig {
    IAM?: Value<string>;
    AccessPointId?: Value<string>;
    constructor(properties: AuthorizationConfig);
}
export declare class ContainerDefinition {
    User?: Value<string>;
    Secrets?: List<Secret>;
    Memory?: Value<number>;
    Privileged?: Value<boolean>;
    HealthCheck?: HealthCheck;
    StartTimeout?: Value<number>;
    VolumesFrom?: List<VolumeFrom>;
    Cpu?: Value<number>;
    EntryPoint?: List<Value<string>>;
    DnsServers?: List<Value<string>>;
    ReadonlyRootFilesystem?: Value<boolean>;
    Image: Value<string>;
    Essential?: Value<boolean>;
    LogConfiguration?: LogConfiguration;
    ResourceRequirements?: List<ResourceRequirement>;
    EnvironmentFiles?: List<EnvironmentFile>;
    Name: Value<string>;
    FirelensConfiguration?: FirelensConfiguration;
    DockerSecurityOptions?: List<Value<string>>;
    SystemControls?: List<SystemControl>;
    Interactive?: Value<boolean>;
    DnsSearchDomains?: List<Value<string>>;
    Ulimits?: List<Ulimit>;
    StopTimeout?: Value<number>;
    WorkingDirectory?: Value<string>;
    MemoryReservation?: Value<number>;
    RepositoryCredentials?: RepositoryCredentials;
    ExtraHosts?: List<HostEntry>;
    Hostname?: Value<string>;
    LinuxParameters?: LinuxParameters;
    DisableNetworking?: Value<boolean>;
    PseudoTerminal?: Value<boolean>;
    MountPoints?: List<MountPoint>;
    DependsOn?: List<ContainerDependency>;
    DockerLabels?: {
        [key: string]: Value<string>;
    };
    PortMappings?: List<PortMapping>;
    Command?: List<Value<string>>;
    Environment?: List<KeyValuePair>;
    Links?: List<Value<string>>;
    constructor(properties: ContainerDefinition);
}
export declare class ContainerDependency {
    Condition?: Value<string>;
    ContainerName?: Value<string>;
    constructor(properties: ContainerDependency);
}
export declare class Device {
    HostPath?: Value<string>;
    Permissions?: List<Value<string>>;
    ContainerPath?: Value<string>;
    constructor(properties: Device);
}
export declare class DockerVolumeConfiguration {
    DriverOpts?: {
        [key: string]: Value<string>;
    };
    Scope?: Value<string>;
    Autoprovision?: Value<boolean>;
    Driver?: Value<string>;
    Labels?: {
        [key: string]: Value<string>;
    };
    constructor(properties: DockerVolumeConfiguration);
}
export declare class EFSVolumeConfiguration {
    FilesystemId: Value<string>;
    TransitEncryption?: Value<string>;
    AuthorizationConfig?: AuthorizationConfig;
    RootDirectory?: Value<string>;
    TransitEncryptionPort?: Value<number>;
    constructor(properties: EFSVolumeConfiguration);
}
export declare class EnvironmentFile {
    Type?: Value<string>;
    Value?: Value<string>;
    constructor(properties: EnvironmentFile);
}
export declare class EphemeralStorage {
    SizeInGiB?: Value<number>;
    constructor(properties: EphemeralStorage);
}
export declare class FirelensConfiguration {
    Options?: {
        [key: string]: Value<string>;
    };
    Type?: Value<string>;
    constructor(properties: FirelensConfiguration);
}
export declare class HealthCheck {
    Command?: List<Value<string>>;
    Timeout?: Value<number>;
    Retries?: Value<number>;
    Interval?: Value<number>;
    StartPeriod?: Value<number>;
    constructor(properties: HealthCheck);
}
export declare class HostEntry {
    Hostname?: Value<string>;
    IpAddress?: Value<string>;
    constructor(properties: HostEntry);
}
export declare class HostVolumeProperties {
    SourcePath?: Value<string>;
    constructor(properties: HostVolumeProperties);
}
export declare class InferenceAccelerator {
    DeviceType?: Value<string>;
    DeviceName?: Value<string>;
    constructor(properties: InferenceAccelerator);
}
export declare class KernelCapabilities {
    Add?: List<Value<string>>;
    Drop?: List<Value<string>>;
    constructor(properties: KernelCapabilities);
}
export declare class KeyValuePair {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: KeyValuePair);
}
export declare class LinuxParameters {
    Capabilities?: KernelCapabilities;
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
        [key: string]: Value<string>;
    };
    LogDriver: Value<string>;
    constructor(properties: LogConfiguration);
}
export declare class MountPoint {
    ReadOnly?: Value<boolean>;
    SourceVolume?: Value<string>;
    ContainerPath?: Value<string>;
    constructor(properties: MountPoint);
}
export declare class PortMapping {
    AppProtocol?: Value<string>;
    ContainerPortRange?: Value<string>;
    HostPort?: Value<number>;
    ContainerPort?: Value<number>;
    Protocol?: Value<string>;
    Name?: Value<string>;
    constructor(properties: PortMapping);
}
export declare class ProxyConfiguration {
    ProxyConfigurationProperties?: List<KeyValuePair>;
    Type?: Value<string>;
    ContainerName: Value<string>;
    constructor(properties: ProxyConfiguration);
}
export declare class RepositoryCredentials {
    CredentialsParameter?: Value<string>;
    constructor(properties: RepositoryCredentials);
}
export declare class ResourceRequirement {
    Type: Value<string>;
    Value: Value<string>;
    constructor(properties: ResourceRequirement);
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
export declare class SystemControl {
    Value?: Value<string>;
    Namespace?: Value<string>;
    constructor(properties: SystemControl);
}
export declare class TaskDefinitionPlacementConstraint {
    Type: Value<string>;
    Expression?: Value<string>;
    constructor(properties: TaskDefinitionPlacementConstraint);
}
export declare class Tmpfs {
    Size: Value<number>;
    ContainerPath?: Value<string>;
    MountOptions?: List<Value<string>>;
    constructor(properties: Tmpfs);
}
export declare class Ulimit {
    SoftLimit: Value<number>;
    HardLimit: Value<number>;
    Name: Value<string>;
    constructor(properties: Ulimit);
}
export declare class Volume {
    EFSVolumeConfiguration?: EFSVolumeConfiguration;
    Host?: HostVolumeProperties;
    DockerVolumeConfiguration?: DockerVolumeConfiguration;
    Name?: Value<string>;
    constructor(properties: Volume);
}
export declare class VolumeFrom {
    ReadOnly?: Value<boolean>;
    SourceContainer?: Value<string>;
    constructor(properties: VolumeFrom);
}
export interface TaskDefinitionProperties {
    TaskRoleArn?: Value<string>;
    IpcMode?: Value<string>;
    InferenceAccelerators?: List<InferenceAccelerator>;
    Memory?: Value<string>;
    PlacementConstraints?: List<TaskDefinitionPlacementConstraint>;
    Cpu?: Value<string>;
    RequiresCompatibilities?: List<Value<string>>;
    NetworkMode?: Value<string>;
    PidMode?: Value<string>;
    ExecutionRoleArn?: Value<string>;
    RuntimePlatform?: RuntimePlatform;
    ProxyConfiguration?: ProxyConfiguration;
    Volumes?: List<Volume>;
    ContainerDefinitions?: List<ContainerDefinition>;
    Family?: Value<string>;
    EphemeralStorage?: EphemeralStorage;
    Tags?: List<ResourceTag>;
}
export default class TaskDefinition extends ResourceBase<TaskDefinitionProperties> {
    static AuthorizationConfig: typeof AuthorizationConfig;
    static ContainerDefinition: typeof ContainerDefinition;
    static ContainerDependency: typeof ContainerDependency;
    static Device: typeof Device;
    static DockerVolumeConfiguration: typeof DockerVolumeConfiguration;
    static EFSVolumeConfiguration: typeof EFSVolumeConfiguration;
    static EnvironmentFile: typeof EnvironmentFile;
    static EphemeralStorage: typeof EphemeralStorage;
    static FirelensConfiguration: typeof FirelensConfiguration;
    static HealthCheck: typeof HealthCheck;
    static HostEntry: typeof HostEntry;
    static HostVolumeProperties: typeof HostVolumeProperties;
    static InferenceAccelerator: typeof InferenceAccelerator;
    static KernelCapabilities: typeof KernelCapabilities;
    static KeyValuePair: typeof KeyValuePair;
    static LinuxParameters: typeof LinuxParameters;
    static LogConfiguration: typeof LogConfiguration;
    static MountPoint: typeof MountPoint;
    static PortMapping: typeof PortMapping;
    static ProxyConfiguration: typeof ProxyConfiguration;
    static RepositoryCredentials: typeof RepositoryCredentials;
    static ResourceRequirement: typeof ResourceRequirement;
    static RuntimePlatform: typeof RuntimePlatform;
    static Secret: typeof Secret;
    static SystemControl: typeof SystemControl;
    static TaskDefinitionPlacementConstraint: typeof TaskDefinitionPlacementConstraint;
    static Tmpfs: typeof Tmpfs;
    static Ulimit: typeof Ulimit;
    static Volume: typeof Volume;
    static VolumeFrom: typeof VolumeFrom;
    constructor(properties?: TaskDefinitionProperties);
}
