import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ContainerDefinitionProperties {
    Command?: Value<string>[];
    Cpu?: Value<number>;
    DisableNetworking?: Value<boolean>;
    DnsSearchDomains?: Value<string>[];
    DnsServers?: Value<string>[];
    DockerLabels?: {
        [key: string]: Value<string>;
    };
    DockerSecurityOptions?: Value<string>[];
    EntryPoint?: Value<string>[];
    Environment?: KeyValuePair[];
    Essential?: Value<boolean>;
    ExtraHosts?: HostEntry[];
    Hostname?: Value<string>;
    Image?: Value<string>;
    Links?: Value<string>[];
    LinuxParameters?: LinuxParameters;
    LogConfiguration?: LogConfiguration;
    Memory?: Value<number>;
    MemoryReservation?: Value<number>;
    MountPoints?: MountPoint[];
    Name?: Value<string>;
    PortMappings?: PortMapping[];
    Privileged?: Value<boolean>;
    ReadonlyRootFilesystem?: Value<boolean>;
    Ulimits?: Ulimit[];
    User?: Value<string>;
    VolumesFrom?: VolumeFrom[];
    WorkingDirectory?: Value<string>;
}
export declare class ContainerDefinition extends ResourceBase {
    constructor(properties: ContainerDefinitionProperties, dependsOn?: Value<string>);
}
export interface LogConfigurationProperties {
    LogDriver: Value<string>;
    Options?: {
        [key: string]: Value<string>;
    };
}
export declare class LogConfiguration extends ResourceBase {
    constructor(properties: LogConfigurationProperties, dependsOn?: Value<string>);
}
export interface DeviceProperties {
    ContainerPath?: Value<string>;
    HostPath: Value<string>;
    Permissions?: Value<string>[];
}
export declare class Device extends ResourceBase {
    constructor(properties: DeviceProperties, dependsOn?: Value<string>);
}
export interface KeyValuePairProperties {
    Name?: Value<string>;
    Value?: Value<string>;
}
export declare class KeyValuePair extends ResourceBase {
    constructor(properties: KeyValuePairProperties, dependsOn?: Value<string>);
}
export interface MountPointProperties {
    ContainerPath?: Value<string>;
    ReadOnly?: Value<boolean>;
    SourceVolume?: Value<string>;
}
export declare class MountPoint extends ResourceBase {
    constructor(properties: MountPointProperties, dependsOn?: Value<string>);
}
export interface VolumeFromProperties {
    ReadOnly?: Value<boolean>;
    SourceContainer?: Value<string>;
}
export declare class VolumeFrom extends ResourceBase {
    constructor(properties: VolumeFromProperties, dependsOn?: Value<string>);
}
export interface HostEntryProperties {
    Hostname: Value<string>;
    IpAddress: Value<string>;
}
export declare class HostEntry extends ResourceBase {
    constructor(properties: HostEntryProperties, dependsOn?: Value<string>);
}
export interface KernelCapabilitiesProperties {
    Add?: Value<string>[];
    Drop?: Value<string>[];
}
export declare class KernelCapabilities extends ResourceBase {
    constructor(properties: KernelCapabilitiesProperties, dependsOn?: Value<string>);
}
export interface TaskDefinitionPlacementConstraintProperties {
    Expression?: Value<string>;
    Type: Value<string>;
}
export declare class TaskDefinitionPlacementConstraint extends ResourceBase {
    constructor(properties: TaskDefinitionPlacementConstraintProperties, dependsOn?: Value<string>);
}
export interface VolumeProperties {
    Host?: HostVolumeProperties;
    Name?: Value<string>;
}
export declare class Volume extends ResourceBase {
    constructor(properties: VolumeProperties, dependsOn?: Value<string>);
}
export interface PortMappingProperties {
    ContainerPort?: Value<number>;
    HostPort?: Value<number>;
    Protocol?: Value<string>;
}
export declare class PortMapping extends ResourceBase {
    constructor(properties: PortMappingProperties, dependsOn?: Value<string>);
}
export interface UlimitProperties {
    HardLimit: Value<number>;
    Name: Value<string>;
    SoftLimit: Value<number>;
}
export declare class Ulimit extends ResourceBase {
    constructor(properties: UlimitProperties, dependsOn?: Value<string>);
}
export interface LinuxParametersProperties {
    Capabilities?: KernelCapabilities;
    Devices?: Device[];
    InitProcessEnabled?: Value<boolean>;
}
export declare class LinuxParameters extends ResourceBase {
    constructor(properties: LinuxParametersProperties, dependsOn?: Value<string>);
}
export interface HostVolumePropertiesProperties {
    SourcePath?: Value<string>;
}
export declare class HostVolumeProperties extends ResourceBase {
    constructor(properties: HostVolumePropertiesProperties, dependsOn?: Value<string>);
}
export interface TaskDefinitionProperties {
    ContainerDefinitions?: ContainerDefinition[];
    Family?: Value<string>;
    NetworkMode?: Value<string>;
    PlacementConstraints?: TaskDefinitionPlacementConstraint[];
    TaskRoleArn?: Value<string>;
    Volumes?: Volume[];
}
export default class TaskDefinition extends ResourceBase {
    constructor(properties: TaskDefinitionProperties, dependsOn?: Value<string>);
}
