import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LogConfiguration {
    LogDriver: Value<string>;
    Options?: {
        [key: string]: Value<string>;
    };
    constructor(properties: LogConfiguration);
}
export declare class Device {
    ContainerPath?: Value<string>;
    HostPath: Value<string>;
    Permissions?: List<Value<string>>;
    constructor(properties: Device);
}
export declare class Secret {
    Name: Value<string>;
    ValueFrom: Value<string>;
    constructor(properties: Secret);
}
export declare class VolumeFrom {
    ReadOnly?: Value<boolean>;
    SourceContainer?: Value<string>;
    constructor(properties: VolumeFrom);
}
export declare class HostEntry {
    Hostname: Value<string>;
    IpAddress: Value<string>;
    constructor(properties: HostEntry);
}
export declare class TaskDefinitionPlacementConstraint {
    Expression?: Value<string>;
    Type: Value<string>;
    constructor(properties: TaskDefinitionPlacementConstraint);
}
export declare class Volume {
    DockerVolumeConfiguration?: DockerVolumeConfiguration;
    Host?: HostVolumeProperties;
    Name?: Value<string>;
    constructor(properties: Volume);
}
export declare class Tmpfs {
    ContainerPath?: Value<string>;
    MountOptions?: List<Value<string>>;
    Size?: Value<number>;
    constructor(properties: Tmpfs);
}
export declare class ResourceRequirement {
    Type: Value<string>;
    Value: Value<string>;
    constructor(properties: ResourceRequirement);
}
export declare class DockerVolumeConfiguration {
    Autoprovision?: Value<boolean>;
    Driver?: Value<string>;
    DriverOpts?: {
        [key: string]: Value<string>;
    };
    Labels?: {
        [key: string]: Value<string>;
    };
    Scope?: Value<string>;
    constructor(properties: DockerVolumeConfiguration);
}
export declare class ContainerDefinition {
    Command?: List<Value<string>>;
    Cpu?: Value<number>;
    DependsOn?: List<ContainerDependency>;
    DisableNetworking?: Value<boolean>;
    DnsSearchDomains?: List<Value<string>>;
    DnsServers?: List<Value<string>>;
    DockerLabels?: {
        [key: string]: Value<string>;
    };
    DockerSecurityOptions?: List<Value<string>>;
    EntryPoint?: List<Value<string>>;
    Environment?: List<KeyValuePair>;
    Essential?: Value<boolean>;
    ExtraHosts?: List<HostEntry>;
    HealthCheck?: HealthCheck;
    Hostname?: Value<string>;
    Image?: Value<string>;
    Links?: List<Value<string>>;
    LinuxParameters?: LinuxParameters;
    LogConfiguration?: LogConfiguration;
    Memory?: Value<number>;
    MemoryReservation?: Value<number>;
    MountPoints?: List<MountPoint>;
    Name?: Value<string>;
    PortMappings?: List<PortMapping>;
    Privileged?: Value<boolean>;
    ReadonlyRootFilesystem?: Value<boolean>;
    RepositoryCredentials?: RepositoryCredentials;
    ResourceRequirements?: List<ResourceRequirement>;
    Secrets?: List<Secret>;
    StartTimeout?: Value<number>;
    StopTimeout?: Value<number>;
    Ulimits?: List<Ulimit>;
    User?: Value<string>;
    VolumesFrom?: List<VolumeFrom>;
    WorkingDirectory?: Value<string>;
    constructor(properties: ContainerDefinition);
}
export declare class KeyValuePair {
    Name?: Value<string>;
    Value?: Value<string>;
    constructor(properties: KeyValuePair);
}
export declare class MountPoint {
    ContainerPath?: Value<string>;
    ReadOnly?: Value<boolean>;
    SourceVolume?: Value<string>;
    constructor(properties: MountPoint);
}
export declare class KernelCapabilities {
    Add?: List<Value<string>>;
    Drop?: List<Value<string>>;
    constructor(properties: KernelCapabilities);
}
export declare class HealthCheck {
    Command: List<Value<string>>;
    Interval?: Value<number>;
    Retries?: Value<number>;
    StartPeriod?: Value<number>;
    Timeout?: Value<number>;
    constructor(properties: HealthCheck);
}
export declare class PortMapping {
    ContainerPort?: Value<number>;
    HostPort?: Value<number>;
    Protocol?: Value<string>;
    constructor(properties: PortMapping);
}
export declare class Ulimit {
    HardLimit: Value<number>;
    Name: Value<string>;
    SoftLimit: Value<number>;
    constructor(properties: Ulimit);
}
export declare class LinuxParameters {
    Capabilities?: KernelCapabilities;
    Devices?: List<Device>;
    InitProcessEnabled?: Value<boolean>;
    SharedMemorySize?: Value<number>;
    Tmpfs?: List<Tmpfs>;
    constructor(properties: LinuxParameters);
}
export declare class ContainerDependency {
    Condition: Value<string>;
    ContainerName: Value<string>;
    constructor(properties: ContainerDependency);
}
export declare class ProxyConfiguration {
    ContainerName: Value<string>;
    ProxyConfigurationProperties?: List<KeyValuePair>;
    Type?: Value<string>;
    constructor(properties: ProxyConfiguration);
}
export declare class HostVolumeProperties {
    SourcePath?: Value<string>;
    constructor(properties: HostVolumeProperties);
}
export declare class RepositoryCredentials {
    CredentialsParameter?: Value<string>;
    constructor(properties: RepositoryCredentials);
}
export interface TaskDefinitionProperties {
    ContainerDefinitions?: List<ContainerDefinition>;
    Cpu?: Value<string>;
    ExecutionRoleArn?: Value<string>;
    Family?: Value<string>;
    Memory?: Value<string>;
    NetworkMode?: Value<string>;
    PlacementConstraints?: List<TaskDefinitionPlacementConstraint>;
    ProxyConfiguration?: ProxyConfiguration;
    RequiresCompatibilities?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    TaskRoleArn?: Value<string>;
    Volumes?: List<Volume>;
}
export default class TaskDefinition extends ResourceBase<TaskDefinitionProperties> {
    static LogConfiguration: typeof LogConfiguration;
    static Device: typeof Device;
    static Secret: typeof Secret;
    static VolumeFrom: typeof VolumeFrom;
    static HostEntry: typeof HostEntry;
    static TaskDefinitionPlacementConstraint: typeof TaskDefinitionPlacementConstraint;
    static Volume: typeof Volume;
    static Tmpfs: typeof Tmpfs;
    static ResourceRequirement: typeof ResourceRequirement;
    static DockerVolumeConfiguration: typeof DockerVolumeConfiguration;
    static ContainerDefinition: typeof ContainerDefinition;
    static KeyValuePair: typeof KeyValuePair;
    static MountPoint: typeof MountPoint;
    static KernelCapabilities: typeof KernelCapabilities;
    static HealthCheck: typeof HealthCheck;
    static PortMapping: typeof PortMapping;
    static Ulimit: typeof Ulimit;
    static LinuxParameters: typeof LinuxParameters;
    static ContainerDependency: typeof ContainerDependency;
    static ProxyConfiguration: typeof ProxyConfiguration;
    static HostVolumeProperties: typeof HostVolumeProperties;
    static RepositoryCredentials: typeof RepositoryCredentials;
    constructor(properties?: TaskDefinitionProperties);
}
