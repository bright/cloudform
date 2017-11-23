/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface ContainerDefinitionProperties {
    Command?: List<Value<string>>
    Cpu?: Value<number>
    DisableNetworking?: Value<boolean>
    DnsSearchDomains?: List<Value<string>>
    DnsServers?: List<Value<string>>
    DockerLabels?: {[key: string]: Value<string>}
    DockerSecurityOptions?: List<Value<string>>
    EntryPoint?: List<Value<string>>
    Environment?: List<KeyValuePair>
    Essential?: Value<boolean>
    ExtraHosts?: List<HostEntry>
    Hostname?: Value<string>
    Image?: Value<string>
    Links?: List<Value<string>>
    LinuxParameters?: LinuxParameters
    LogConfiguration?: LogConfiguration
    Memory?: Value<number>
    MemoryReservation?: Value<number>
    MountPoints?: List<MountPoint>
    Name?: Value<string>
    PortMappings?: List<PortMapping>
    Privileged?: Value<boolean>
    ReadonlyRootFilesystem?: Value<boolean>
    Ulimits?: List<Ulimit>
    User?: Value<string>
    VolumesFrom?: List<VolumeFrom>
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
    Permissions?: List<Value<string>>
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
    Add?: List<Value<string>>
    Drop?: List<Value<string>>
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
    Devices?: List<Device>
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
    ContainerDefinitions?: List<ContainerDefinition>
    Family?: Value<string>
    NetworkMode?: Value<string>
    PlacementConstraints?: List<TaskDefinitionPlacementConstraint>
    TaskRoleArn?: Value<string>
    Volumes?: List<Volume>
}

export default class TaskDefinition extends ResourceBase {
    constructor(properties: TaskDefinitionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECS::TaskDefinition', properties, dependsOn)
    }
}
