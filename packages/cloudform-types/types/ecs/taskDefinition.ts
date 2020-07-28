/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LogConfiguration {
    LogDriver!: Value<string>
    Options?: Options
    SecretOptions?: List<Secret>

    constructor(properties: LogConfiguration) {
        Object.assign(this, properties)
    }
}

export class FirelensConfiguration {
    Options?: Options
    Type?: Value<string>

    constructor(properties: FirelensConfiguration) {
        Object.assign(this, properties)
    }
}

export class Device {
    ContainerPath?: Value<string>
    HostPath?: Value<string>
    Permissions?: List<Value<string>>

    constructor(properties: Device) {
        Object.assign(this, properties)
    }
}

export class InferenceAccelerator {
    DeviceName?: Value<string>
    DeviceType?: Value<string>

    constructor(properties: InferenceAccelerator) {
        Object.assign(this, properties)
    }
}

export class Secret {
    Name!: Value<string>
    ValueFrom!: Value<string>

    constructor(properties: Secret) {
        Object.assign(this, properties)
    }
}

export class VolumeFrom {
    ReadOnly?: Value<boolean>
    SourceContainer?: Value<string>

    constructor(properties: VolumeFrom) {
        Object.assign(this, properties)
    }
}

export class HostEntry {
    Hostname?: Value<string>
    IpAddress?: Value<string>

    constructor(properties: HostEntry) {
        Object.assign(this, properties)
    }
}

export class TaskDefinitionPlacementConstraint {
    Expression?: Value<string>
    Type!: Value<string>

    constructor(properties: TaskDefinitionPlacementConstraint) {
        Object.assign(this, properties)
    }
}

export class SystemControl {
    Namespace?: Value<string>
    Value?: Value<string>

    constructor(properties: SystemControl) {
        Object.assign(this, properties)
    }
}

export class Volume {
    DockerVolumeConfiguration?: DockerVolumeConfiguration
    Host?: HostVolumeProperties
    Name?: Value<string>

    constructor(properties: Volume) {
        Object.assign(this, properties)
    }
}

export class Tmpfs {
    ContainerPath?: Value<string>
    MountOptions?: List<Value<string>>
    Size!: Value<number>

    constructor(properties: Tmpfs) {
        Object.assign(this, properties)
    }
}

export class ResourceRequirement {
    Type!: Value<string>
    Value!: Value<string>

    constructor(properties: ResourceRequirement) {
        Object.assign(this, properties)
    }
}

export class DockerVolumeConfiguration {
    Autoprovision?: Value<boolean>
    Driver?: Value<string>
    DriverOpts?: {[key: string]: Value<string>}
    Labels?: {[key: string]: Value<string>}
    Scope?: Value<string>

    constructor(properties: DockerVolumeConfiguration) {
        Object.assign(this, properties)
    }
}

export class ContainerDefinition {
    Command?: List<Value<string>>
    Cpu?: Value<number>
    DependsOn?: List<ContainerDependency>
    DisableNetworking?: Value<boolean>
    DnsSearchDomains?: List<Value<string>>
    DnsServers?: List<Value<string>>
    DockerLabels?: {[key: string]: Value<string>}
    DockerSecurityOptions?: List<Value<string>>
    EntryPoint?: List<Value<string>>
    Environment?: List<KeyValuePair>
    Essential?: Value<boolean>
    ExtraHosts?: List<HostEntry>
    FirelensConfiguration?: FirelensConfiguration
    HealthCheck?: HealthCheck
    Hostname?: Value<string>
    Image?: Value<string>
    Interactive?: Value<boolean>
    Links?: List<Value<string>>
    LinuxParameters?: LinuxParameters
    LogConfiguration?: LogConfiguration
    Memory?: Value<number>
    MemoryReservation?: Value<number>
    MountPoints?: List<MountPoint>
    Name?: Value<string>
    PortMappings?: List<PortMapping>
    Privileged?: Value<boolean>
    PseudoTerminal?: Value<boolean>
    ReadonlyRootFilesystem?: Value<boolean>
    RepositoryCredentials?: RepositoryCredentials
    ResourceRequirements?: List<ResourceRequirement>
    Secrets?: List<Secret>
    StartTimeout?: Value<number>
    StopTimeout?: Value<number>
    SystemControls?: List<SystemControl>
    Ulimits?: List<Ulimit>
    User?: Value<string>
    VolumesFrom?: List<VolumeFrom>
    WorkingDirectory?: Value<string>

    constructor(properties: ContainerDefinition) {
        Object.assign(this, properties)
    }
}

export class KeyValuePair {
    Name?: Value<string>
    Value?: Value<string>

    constructor(properties: KeyValuePair) {
        Object.assign(this, properties)
    }
}

export class MountPoint {
    ContainerPath?: Value<string>
    ReadOnly?: Value<boolean>
    SourceVolume?: Value<string>

    constructor(properties: MountPoint) {
        Object.assign(this, properties)
    }
}

export class KernelCapabilities {
    Add?: List<Value<string>>
    Drop?: List<Value<string>>

    constructor(properties: KernelCapabilities) {
        Object.assign(this, properties)
    }
}

export class HealthCheck {
    Command?: List<Value<string>>
    Interval?: Value<number>
    Retries?: Value<number>
    StartPeriod?: Value<number>
    Timeout?: Value<number>

    constructor(properties: HealthCheck) {
        Object.assign(this, properties)
    }
}

export class PortMapping {
    ContainerPort?: Value<number>
    HostPort?: Value<number>
    Protocol?: Value<string>

    constructor(properties: PortMapping) {
        Object.assign(this, properties)
    }
}

export class Ulimit {
    HardLimit!: Value<number>
    Name!: Value<string>
    SoftLimit!: Value<number>

    constructor(properties: Ulimit) {
        Object.assign(this, properties)
    }
}

export class LinuxParameters {
    Capabilities?: KernelCapabilities
    Devices?: List<Device>
    InitProcessEnabled?: Value<boolean>
    MaxSwap?: Value<number>
    SharedMemorySize?: Value<number>
    Swappiness?: Value<number>
    Tmpfs?: List<Tmpfs>

    constructor(properties: LinuxParameters) {
        Object.assign(this, properties)
    }
}

export class ContainerDependency {
    Condition?: Value<string>
    ContainerName?: Value<string>

    constructor(properties: ContainerDependency) {
        Object.assign(this, properties)
    }
}

export class ProxyConfiguration {
    ContainerName!: Value<string>
    ProxyConfigurationProperties?: List<KeyValuePair>
    Type?: Value<string>

    constructor(properties: ProxyConfiguration) {
        Object.assign(this, properties)
    }
}

export class HostVolumeProperties {
    SourcePath?: Value<string>

    constructor(properties: HostVolumeProperties) {
        Object.assign(this, properties)
    }
}

export class RepositoryCredentials {
    CredentialsParameter?: Value<string>

    constructor(properties: RepositoryCredentials) {
        Object.assign(this, properties)
    }
}

export interface TaskDefinitionProperties {
    ContainerDefinitions?: List<ContainerDefinition>
    Cpu?: Value<string>
    ExecutionRoleArn?: Value<string>
    Family?: Value<string>
    InferenceAccelerators?: List<InferenceAccelerator>
    IpcMode?: Value<string>
    Memory?: Value<string>
    NetworkMode?: Value<string>
    PidMode?: Value<string>
    PlacementConstraints?: List<TaskDefinitionPlacementConstraint>
    ProxyConfiguration?: ProxyConfiguration
    RequiresCompatibilities?: List<Value<string>>
    Tags?: List<ResourceTag>
    TaskRoleArn?: Value<string>
    Volumes?: List<Volume>
    TaskDefinitionStatus?: Value<string>
}

export default class TaskDefinition extends ResourceBase<TaskDefinitionProperties> {
    static LogConfiguration = LogConfiguration
    static FirelensConfiguration = FirelensConfiguration
    static Device = Device
    static InferenceAccelerator = InferenceAccelerator
    static Secret = Secret
    static VolumeFrom = VolumeFrom
    static HostEntry = HostEntry
    static TaskDefinitionPlacementConstraint = TaskDefinitionPlacementConstraint
    static SystemControl = SystemControl
    static Volume = Volume
    static Tmpfs = Tmpfs
    static ResourceRequirement = ResourceRequirement
    static DockerVolumeConfiguration = DockerVolumeConfiguration
    static ContainerDefinition = ContainerDefinition
    static KeyValuePair = KeyValuePair
    static MountPoint = MountPoint
    static KernelCapabilities = KernelCapabilities
    static HealthCheck = HealthCheck
    static PortMapping = PortMapping
    static Ulimit = Ulimit
    static LinuxParameters = LinuxParameters
    static ContainerDependency = ContainerDependency
    static ProxyConfiguration = ProxyConfiguration
    static HostVolumeProperties = HostVolumeProperties
    static RepositoryCredentials = RepositoryCredentials

    constructor(properties?: TaskDefinitionProperties) {
        super('AWS::ECS::TaskDefinition', properties || {})
    }
}
