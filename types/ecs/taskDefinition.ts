/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface ContainerDefinitionProperties {
    Command?: Value<string>[]
    Cpu?: Value<number>
    DisableNetworking?: Value<boolean>
    DnsSearchDomains?: Value<string>[]
    DnsServers?: Value<string>[]
    DockerLabels?: {[key: string]: Value<string>}
    DockerSecurityOptions?: Value<string>[]
    EntryPoint?: Value<string>[]
    Environment?: KeyValuePair[]
    Essential?: Value<boolean>
    ExtraHosts?: HostEntry[]
    Hostname?: Value<string>
    Image?: Value<string>
    Links?: Value<string>[]
    LinuxParameters?: LinuxParameters
    LogConfiguration?: LogConfiguration
    Memory?: Value<number>
    MemoryReservation?: Value<number>
    MountPoints?: MountPoint[]
    Name?: Value<string>
    PortMappings?: PortMapping[]
    Privileged?: Value<boolean>
    ReadonlyRootFilesystem?: Value<boolean>
    Ulimits?: Ulimit[]
    User?: Value<string>
    VolumesFrom?: VolumeFrom[]
    WorkingDirectory?: Value<string>
}

export class ContainerDefinition extends ResourceBase {
    constructor(properties: ContainerDefinitionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::ContainerDefinition', properties, dependsOn)
    }
}

export interface LogConfigurationProperties {
    LogDriver: Value<string>
    Options?: {[key: string]: Value<string>}
}

export class LogConfiguration extends ResourceBase {
    constructor(properties: LogConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::LogConfiguration', properties, dependsOn)
    }
}

export interface DeviceProperties {
    ContainerPath?: Value<string>
    HostPath: Value<string>
    Permissions?: Value<string>[]
}

export class Device extends ResourceBase {
    constructor(properties: DeviceProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::Device', properties, dependsOn)
    }
}

export interface KeyValuePairProperties {
    Name?: Value<string>
    Value?: Value<string>
}

export class KeyValuePair extends ResourceBase {
    constructor(properties: KeyValuePairProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::KeyValuePair', properties, dependsOn)
    }
}

export interface MountPointProperties {
    ContainerPath?: Value<string>
    ReadOnly?: Value<boolean>
    SourceVolume?: Value<string>
}

export class MountPoint extends ResourceBase {
    constructor(properties: MountPointProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::MountPoint', properties, dependsOn)
    }
}

export interface VolumeFromProperties {
    ReadOnly?: Value<boolean>
    SourceContainer?: Value<string>
}

export class VolumeFrom extends ResourceBase {
    constructor(properties: VolumeFromProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::VolumeFrom', properties, dependsOn)
    }
}

export interface HostEntryProperties {
    Hostname: Value<string>
    IpAddress: Value<string>
}

export class HostEntry extends ResourceBase {
    constructor(properties: HostEntryProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::HostEntry', properties, dependsOn)
    }
}

export interface KernelCapabilitiesProperties {
    Add?: Value<string>[]
    Drop?: Value<string>[]
}

export class KernelCapabilities extends ResourceBase {
    constructor(properties: KernelCapabilitiesProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::KernelCapabilities', properties, dependsOn)
    }
}

export interface TaskDefinitionPlacementConstraintProperties {
    Expression?: Value<string>
    Type: Value<string>
}

export class TaskDefinitionPlacementConstraint extends ResourceBase {
    constructor(properties: TaskDefinitionPlacementConstraintProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::TaskDefinitionPlacementConstraint', properties, dependsOn)
    }
}

export interface VolumeProperties {
    Host?: HostVolumeProperties
    Name?: Value<string>
}

export class Volume extends ResourceBase {
    constructor(properties: VolumeProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::Volume', properties, dependsOn)
    }
}

export interface PortMappingProperties {
    ContainerPort?: Value<number>
    HostPort?: Value<number>
    Protocol?: Value<string>
}

export class PortMapping extends ResourceBase {
    constructor(properties: PortMappingProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::PortMapping', properties, dependsOn)
    }
}

export interface UlimitProperties {
    HardLimit: Value<number>
    Name: Value<string>
    SoftLimit: Value<number>
}

export class Ulimit extends ResourceBase {
    constructor(properties: UlimitProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::Ulimit', properties, dependsOn)
    }
}

export interface LinuxParametersProperties {
    Capabilities?: KernelCapabilities
    Devices?: Device[]
    InitProcessEnabled?: Value<boolean>
}

export class LinuxParameters extends ResourceBase {
    constructor(properties: LinuxParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::LinuxParameters', properties, dependsOn)
    }
}

export interface HostVolumePropertiesProperties {
    SourcePath?: Value<string>
}

export class HostVolumeProperties extends ResourceBase {
    constructor(properties: HostVolumePropertiesProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::HostVolumeProperties', properties, dependsOn)
    }
}

export interface TaskDefinitionProperties {
    ContainerDefinitions?: ContainerDefinition[]
    Family?: Value<string>
    NetworkMode?: Value<string>
    PlacementConstraints?: TaskDefinitionPlacementConstraint[]
    TaskRoleArn?: Value<string>
    Volumes?: Volume[]
}

export default class TaskDefinition extends ResourceBase {
    constructor(properties: TaskDefinitionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::TaskDefinition', properties, dependsOn)
    }
}
