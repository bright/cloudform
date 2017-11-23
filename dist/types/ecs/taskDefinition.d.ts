import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface ContainerDefinitionProperties {
    Command?: List<Value<string>>;
    Cpu?: Value<number>;
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
    Ulimits?: List<Ulimit>;
    User?: Value<string>;
    VolumesFrom?: List<VolumeFrom>;
    WorkingDirectory?: Value<string>;
}
export declare class ContainerDefinition extends ResourceBase {
    constructor(properties: ContainerDefinitionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LogConfigurationProperties {
    LogDriver: Value<string>;
    Options?: {
        [key: string]: Value<string>;
    };
}
export declare class LogConfiguration extends ResourceBase {
    constructor(properties: LogConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface DeviceProperties {
    ContainerPath?: Value<string>;
    HostPath: Value<string>;
    Permissions?: List<Value<string>>;
}
export declare class Device extends ResourceBase {
    constructor(properties: DeviceProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface KeyValuePairProperties {
    Name?: Value<string>;
    Value?: Value<string>;
}
export declare class KeyValuePair extends ResourceBase {
    constructor(properties: KeyValuePairProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface MountPointProperties {
    ContainerPath?: Value<string>;
    ReadOnly?: Value<boolean>;
    SourceVolume?: Value<string>;
}
export declare class MountPoint extends ResourceBase {
    constructor(properties: MountPointProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface VolumeFromProperties {
    ReadOnly?: Value<boolean>;
    SourceContainer?: Value<string>;
}
export declare class VolumeFrom extends ResourceBase {
    constructor(properties: VolumeFromProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface HostEntryProperties {
    Hostname: Value<string>;
    IpAddress: Value<string>;
}
export declare class HostEntry extends ResourceBase {
    constructor(properties: HostEntryProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface KernelCapabilitiesProperties {
    Add?: List<Value<string>>;
    Drop?: List<Value<string>>;
}
export declare class KernelCapabilities extends ResourceBase {
    constructor(properties: KernelCapabilitiesProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface TaskDefinitionPlacementConstraintProperties {
    Expression?: Value<string>;
    Type: Value<string>;
}
export declare class TaskDefinitionPlacementConstraint extends ResourceBase {
    constructor(properties: TaskDefinitionPlacementConstraintProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface VolumeProperties {
    Host?: HostVolumeProperties;
    Name?: Value<string>;
}
export declare class Volume extends ResourceBase {
    constructor(properties: VolumeProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PortMappingProperties {
    ContainerPort?: Value<number>;
    HostPort?: Value<number>;
    Protocol?: Value<string>;
}
export declare class PortMapping extends ResourceBase {
    constructor(properties: PortMappingProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface UlimitProperties {
    HardLimit: Value<number>;
    Name: Value<string>;
    SoftLimit: Value<number>;
}
export declare class Ulimit extends ResourceBase {
    constructor(properties: UlimitProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LinuxParametersProperties {
    Capabilities?: KernelCapabilities;
    Devices?: List<Device>;
    InitProcessEnabled?: Value<boolean>;
}
export declare class LinuxParameters extends ResourceBase {
    constructor(properties: LinuxParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface HostVolumePropertiesProperties {
    SourcePath?: Value<string>;
}
export declare class HostVolumeProperties extends ResourceBase {
    constructor(properties: HostVolumePropertiesProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface TaskDefinitionProperties {
    ContainerDefinitions?: List<ContainerDefinition>;
    Family?: Value<string>;
    NetworkMode?: Value<string>;
    PlacementConstraints?: List<TaskDefinitionPlacementConstraint>;
    TaskRoleArn?: Value<string>;
    Volumes?: List<Volume>;
}
export default class TaskDefinition extends ResourceBase {
    constructor(properties: TaskDefinitionProperties, dependsOn?: Value<string> | Value<string>[]);
}
