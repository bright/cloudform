/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AuthorizationConfig {
    IAM?: Value<string>
    AccessPointId?: Value<string>

    constructor(properties: AuthorizationConfig) {
        Object.assign(this, properties)
    }
}

export class ContainerDefinition {
    User?: Value<string>
    Secrets?: List<Secret>
    Memory?: Value<number>
    Privileged?: Value<boolean>
    HealthCheck?: HealthCheck
    StartTimeout?: Value<number>
    VolumesFrom?: List<VolumeFrom>
    Cpu?: Value<number>
    EntryPoint?: List<Value<string>>
    DnsServers?: List<Value<string>>
    ReadonlyRootFilesystem?: Value<boolean>
    Image!: Value<string>
    Essential?: Value<boolean>
    LogConfiguration?: LogConfiguration
    ResourceRequirements?: List<ResourceRequirement>
    EnvironmentFiles?: List<EnvironmentFile>
    Name!: Value<string>
    FirelensConfiguration?: FirelensConfiguration
    DockerSecurityOptions?: List<Value<string>>
    SystemControls?: List<SystemControl>
    Interactive?: Value<boolean>
    DnsSearchDomains?: List<Value<string>>
    Ulimits?: List<Ulimit>
    StopTimeout?: Value<number>
    WorkingDirectory?: Value<string>
    MemoryReservation?: Value<number>
    RepositoryCredentials?: RepositoryCredentials
    ExtraHosts?: List<HostEntry>
    Hostname?: Value<string>
    LinuxParameters?: LinuxParameters
    DisableNetworking?: Value<boolean>
    PseudoTerminal?: Value<boolean>
    MountPoints?: List<MountPoint>
    DependsOn?: List<ContainerDependency>
    DockerLabels?: {[key: string]: Value<string>}
    PortMappings?: List<PortMapping>
    Command?: List<Value<string>>
    Environment?: List<KeyValuePair>
    Links?: List<Value<string>>

    constructor(properties: ContainerDefinition) {
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

export class Device {
    HostPath?: Value<string>
    Permissions?: List<Value<string>>
    ContainerPath?: Value<string>

    constructor(properties: Device) {
        Object.assign(this, properties)
    }
}

export class DockerVolumeConfiguration {
    DriverOpts?: {[key: string]: Value<string>}
    Scope?: Value<string>
    Autoprovision?: Value<boolean>
    Driver?: Value<string>
    Labels?: {[key: string]: Value<string>}

    constructor(properties: DockerVolumeConfiguration) {
        Object.assign(this, properties)
    }
}

export class EFSVolumeConfiguration {
    FilesystemId!: Value<string>
    TransitEncryption?: Value<string>
    AuthorizationConfig?: AuthorizationConfig
    RootDirectory?: Value<string>
    TransitEncryptionPort?: Value<number>

    constructor(properties: EFSVolumeConfiguration) {
        Object.assign(this, properties)
    }
}

export class EnvironmentFile {
    Type?: Value<string>
    Value?: Value<string>

    constructor(properties: EnvironmentFile) {
        Object.assign(this, properties)
    }
}

export class EphemeralStorage {
    SizeInGiB?: Value<number>

    constructor(properties: EphemeralStorage) {
        Object.assign(this, properties)
    }
}

export class FirelensConfiguration {
    Options?: {[key: string]: Value<string>}
    Type?: Value<string>

    constructor(properties: FirelensConfiguration) {
        Object.assign(this, properties)
    }
}

export class HealthCheck {
    Command?: List<Value<string>>
    Timeout?: Value<number>
    Retries?: Value<number>
    Interval?: Value<number>
    StartPeriod?: Value<number>

    constructor(properties: HealthCheck) {
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

export class HostVolumeProperties {
    SourcePath?: Value<string>

    constructor(properties: HostVolumeProperties) {
        Object.assign(this, properties)
    }
}

export class InferenceAccelerator {
    DeviceType?: Value<string>
    DeviceName?: Value<string>

    constructor(properties: InferenceAccelerator) {
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

export class KeyValuePair {
    Value?: Value<string>
    Name?: Value<string>

    constructor(properties: KeyValuePair) {
        Object.assign(this, properties)
    }
}

export class LinuxParameters {
    Capabilities?: KernelCapabilities
    Swappiness?: Value<number>
    Tmpfs?: List<Tmpfs>
    SharedMemorySize?: Value<number>
    Devices?: List<Device>
    InitProcessEnabled?: Value<boolean>
    MaxSwap?: Value<number>

    constructor(properties: LinuxParameters) {
        Object.assign(this, properties)
    }
}

export class LogConfiguration {
    SecretOptions?: List<Secret>
    Options?: {[key: string]: Value<string>}
    LogDriver!: Value<string>

    constructor(properties: LogConfiguration) {
        Object.assign(this, properties)
    }
}

export class MountPoint {
    ReadOnly?: Value<boolean>
    SourceVolume?: Value<string>
    ContainerPath?: Value<string>

    constructor(properties: MountPoint) {
        Object.assign(this, properties)
    }
}

export class PortMapping {
    AppProtocol?: Value<string>
    ContainerPortRange?: Value<string>
    HostPort?: Value<number>
    ContainerPort?: Value<number>
    Protocol?: Value<string>
    Name?: Value<string>

    constructor(properties: PortMapping) {
        Object.assign(this, properties)
    }
}

export class ProxyConfiguration {
    ProxyConfigurationProperties?: List<KeyValuePair>
    Type?: Value<string>
    ContainerName!: Value<string>

    constructor(properties: ProxyConfiguration) {
        Object.assign(this, properties)
    }
}

export class RepositoryCredentials {
    CredentialsParameter?: Value<string>

    constructor(properties: RepositoryCredentials) {
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

export class RuntimePlatform {
    OperatingSystemFamily?: Value<string>
    CpuArchitecture?: Value<string>

    constructor(properties: RuntimePlatform) {
        Object.assign(this, properties)
    }
}

export class Secret {
    ValueFrom!: Value<string>
    Name!: Value<string>

    constructor(properties: Secret) {
        Object.assign(this, properties)
    }
}

export class SystemControl {
    Value?: Value<string>
    Namespace?: Value<string>

    constructor(properties: SystemControl) {
        Object.assign(this, properties)
    }
}

export class TaskDefinitionPlacementConstraint {
    Type!: Value<string>
    Expression?: Value<string>

    constructor(properties: TaskDefinitionPlacementConstraint) {
        Object.assign(this, properties)
    }
}

export class Tmpfs {
    Size!: Value<number>
    ContainerPath?: Value<string>
    MountOptions?: List<Value<string>>

    constructor(properties: Tmpfs) {
        Object.assign(this, properties)
    }
}

export class Ulimit {
    SoftLimit!: Value<number>
    HardLimit!: Value<number>
    Name!: Value<string>

    constructor(properties: Ulimit) {
        Object.assign(this, properties)
    }
}

export class Volume {
    EFSVolumeConfiguration?: EFSVolumeConfiguration
    Host?: HostVolumeProperties
    DockerVolumeConfiguration?: DockerVolumeConfiguration
    Name?: Value<string>

    constructor(properties: Volume) {
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

export interface TaskDefinitionProperties {
    TaskRoleArn?: Value<string>
    IpcMode?: Value<string>
    InferenceAccelerators?: List<InferenceAccelerator>
    Memory?: Value<string>
    PlacementConstraints?: List<TaskDefinitionPlacementConstraint>
    Cpu?: Value<string>
    RequiresCompatibilities?: List<Value<string>>
    NetworkMode?: Value<string>
    PidMode?: Value<string>
    ExecutionRoleArn?: Value<string>
    RuntimePlatform?: RuntimePlatform
    ProxyConfiguration?: ProxyConfiguration
    Volumes?: List<Volume>
    ContainerDefinitions?: List<ContainerDefinition>
    Family?: Value<string>
    EphemeralStorage?: EphemeralStorage
    Tags?: List<ResourceTag>
}

export default class TaskDefinition extends ResourceBase<TaskDefinitionProperties> {
    static AuthorizationConfig = AuthorizationConfig
    static ContainerDefinition = ContainerDefinition
    static ContainerDependency = ContainerDependency
    static Device = Device
    static DockerVolumeConfiguration = DockerVolumeConfiguration
    static EFSVolumeConfiguration = EFSVolumeConfiguration
    static EnvironmentFile = EnvironmentFile
    static EphemeralStorage = EphemeralStorage
    static FirelensConfiguration = FirelensConfiguration
    static HealthCheck = HealthCheck
    static HostEntry = HostEntry
    static HostVolumeProperties = HostVolumeProperties
    static InferenceAccelerator = InferenceAccelerator
    static KernelCapabilities = KernelCapabilities
    static KeyValuePair = KeyValuePair
    static LinuxParameters = LinuxParameters
    static LogConfiguration = LogConfiguration
    static MountPoint = MountPoint
    static PortMapping = PortMapping
    static ProxyConfiguration = ProxyConfiguration
    static RepositoryCredentials = RepositoryCredentials
    static ResourceRequirement = ResourceRequirement
    static RuntimePlatform = RuntimePlatform
    static Secret = Secret
    static SystemControl = SystemControl
    static TaskDefinitionPlacementConstraint = TaskDefinitionPlacementConstraint
    static Tmpfs = Tmpfs
    static Ulimit = Ulimit
    static Volume = Volume
    static VolumeFrom = VolumeFrom

    constructor(properties?: TaskDefinitionProperties) {
        super('AWS::ECS::TaskDefinition', properties || {})
    }
}
