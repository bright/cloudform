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
    Iam?: Value<string>
    AccessPointId?: Value<string>

    constructor(properties: AuthorizationConfig) {
        Object.assign(this, properties)
    }
}

export class ContainerProperties {
    User?: Value<string>
    Secrets?: List<Secret>
    Memory?: Value<number>
    Privileged?: Value<boolean>
    LinuxParameters?: LinuxParameters
    FargatePlatformConfiguration?: FargatePlatformConfiguration
    JobRoleArn?: Value<string>
    ReadonlyRootFilesystem?: Value<boolean>
    Vcpus?: Value<number>
    Image!: Value<string>
    ResourceRequirements?: List<ResourceRequirement>
    LogConfiguration?: LogConfiguration
    MountPoints?: List<MountPoints>
    ExecutionRoleArn?: Value<string>
    RuntimePlatform?: RuntimePlatform
    Volumes?: List<Volumes>
    Command?: List<Value<string>>
    Environment?: List<Environment>
    Ulimits?: List<Ulimit>
    NetworkConfiguration?: NetworkConfiguration
    InstanceType?: Value<string>
    EphemeralStorage?: EphemeralStorage

    constructor(properties: ContainerProperties) {
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

export class EfsVolumeConfiguration {
    TransitEncryption?: Value<string>
    AuthorizationConfig?: AuthorizationConfig
    FileSystemId!: Value<string>
    RootDirectory?: Value<string>
    TransitEncryptionPort?: Value<number>

    constructor(properties: EfsVolumeConfiguration) {
        Object.assign(this, properties)
    }
}

export class EksContainer {
    Args?: List<Value<string>>
    VolumeMounts?: List<EksContainerVolumeMount>
    ImagePullPolicy?: Value<string>
    Command?: List<Value<string>>
    SecurityContext?: EksContainerSecurityContext
    Resources?: EksContainerResourceRequirements
    Image!: Value<string>
    Env?: List<EksContainerEnvironmentVariable>
    Name?: Value<string>

    constructor(properties: EksContainer) {
        Object.assign(this, properties)
    }
}

export class EksContainerEnvironmentVariable {
    Value?: Value<string>
    Name!: Value<string>

    constructor(properties: EksContainerEnvironmentVariable) {
        Object.assign(this, properties)
    }
}

export class EksContainerResourceRequirements {
    Limits?: {[key: string]: any}
    Requests?: {[key: string]: any}

    constructor(properties: EksContainerResourceRequirements) {
        Object.assign(this, properties)
    }
}

export class EksContainerSecurityContext {
    RunAsUser?: Value<number>
    RunAsNonRoot?: Value<boolean>
    Privileged?: Value<boolean>
    ReadOnlyRootFilesystem?: Value<boolean>
    RunAsGroup?: Value<number>

    constructor(properties: EksContainerSecurityContext) {
        Object.assign(this, properties)
    }
}

export class EksContainerVolumeMount {
    MountPath?: Value<string>
    ReadOnly?: Value<boolean>
    Name?: Value<string>

    constructor(properties: EksContainerVolumeMount) {
        Object.assign(this, properties)
    }
}

export class EksEmptyDir {
    Medium?: Value<string>
    SizeLimit?: Value<string>

    constructor(properties: EksEmptyDir) {
        Object.assign(this, properties)
    }
}

export class EksHostPath {
    Path?: Value<string>

    constructor(properties: EksHostPath) {
        Object.assign(this, properties)
    }
}

export class EksProperties {
    PodProperties?: PodProperties

    constructor(properties: EksProperties) {
        Object.assign(this, properties)
    }
}

export class EksSecret {
    SecretName!: Value<string>
    Optional?: Value<boolean>

    constructor(properties: EksSecret) {
        Object.assign(this, properties)
    }
}

export class EksVolume {
    Secret?: EksSecret
    EmptyDir?: EksEmptyDir
    HostPath?: EksHostPath
    Name!: Value<string>

    constructor(properties: EksVolume) {
        Object.assign(this, properties)
    }
}

export class Environment {
    Value?: Value<string>
    Name?: Value<string>

    constructor(properties: Environment) {
        Object.assign(this, properties)
    }
}

export class EphemeralStorage {
    SizeInGiB!: Value<number>

    constructor(properties: EphemeralStorage) {
        Object.assign(this, properties)
    }
}

export class EvaluateOnExit {
    Action!: Value<string>
    OnExitCode?: Value<string>
    OnReason?: Value<string>
    OnStatusReason?: Value<string>

    constructor(properties: EvaluateOnExit) {
        Object.assign(this, properties)
    }
}

export class FargatePlatformConfiguration {
    PlatformVersion?: Value<string>

    constructor(properties: FargatePlatformConfiguration) {
        Object.assign(this, properties)
    }
}

export class LinuxParameters {
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
    Options?: {[key: string]: any}
    LogDriver!: Value<string>

    constructor(properties: LogConfiguration) {
        Object.assign(this, properties)
    }
}

export class Metadata {
    Labels?: {[key: string]: any}

    constructor(properties: Metadata) {
        Object.assign(this, properties)
    }
}

export class MountPoints {
    ReadOnly?: Value<boolean>
    SourceVolume?: Value<string>
    ContainerPath?: Value<string>

    constructor(properties: MountPoints) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    AssignPublicIp?: Value<string>

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class NodeProperties {
    MainNode!: Value<number>
    NodeRangeProperties!: List<NodeRangeProperty>
    NumNodes!: Value<number>

    constructor(properties: NodeProperties) {
        Object.assign(this, properties)
    }
}

export class NodeRangeProperty {
    Container?: ContainerProperties
    TargetNodes!: Value<string>

    constructor(properties: NodeRangeProperty) {
        Object.assign(this, properties)
    }
}

export class PodProperties {
    Volumes?: List<EksVolume>
    DnsPolicy?: Value<string>
    Containers?: List<EksContainer>
    Metadata?: Metadata
    ServiceAccountName?: Value<string>
    HostNetwork?: Value<boolean>

    constructor(properties: PodProperties) {
        Object.assign(this, properties)
    }
}

export class ResourceRequirement {
    Type?: Value<string>
    Value?: Value<string>

    constructor(properties: ResourceRequirement) {
        Object.assign(this, properties)
    }
}

export class RetryStrategy {
    EvaluateOnExit?: List<EvaluateOnExit>
    Attempts?: Value<number>

    constructor(properties: RetryStrategy) {
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

export class Timeout {
    AttemptDurationSeconds?: Value<number>

    constructor(properties: Timeout) {
        Object.assign(this, properties)
    }
}

export class Tmpfs {
    Size!: Value<number>
    ContainerPath!: Value<string>
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

export class Volumes {
    Host?: VolumesHost
    EfsVolumeConfiguration?: EfsVolumeConfiguration
    Name?: Value<string>

    constructor(properties: Volumes) {
        Object.assign(this, properties)
    }
}

export class VolumesHost {
    SourcePath?: Value<string>

    constructor(properties: VolumesHost) {
        Object.assign(this, properties)
    }
}

export interface JobDefinitionProperties {
    Type: Value<string>
    Parameters?: {[key: string]: any}
    NodeProperties?: NodeProperties
    SchedulingPriority?: Value<number>
    Timeout?: Timeout
    ContainerProperties?: ContainerProperties
    JobDefinitionName?: Value<string>
    PropagateTags?: Value<boolean>
    PlatformCapabilities?: List<Value<string>>
    EksProperties?: EksProperties
    RetryStrategy?: RetryStrategy
    Tags?: {[key: string]: any}
}

export default class JobDefinition extends ResourceBase<JobDefinitionProperties> {
    static AuthorizationConfig = AuthorizationConfig
    static ContainerProperties = ContainerProperties
    static Device = Device
    static EfsVolumeConfiguration = EfsVolumeConfiguration
    static EksContainer = EksContainer
    static EksContainerEnvironmentVariable = EksContainerEnvironmentVariable
    static EksContainerResourceRequirements = EksContainerResourceRequirements
    static EksContainerSecurityContext = EksContainerSecurityContext
    static EksContainerVolumeMount = EksContainerVolumeMount
    static EksEmptyDir = EksEmptyDir
    static EksHostPath = EksHostPath
    static EksProperties = EksProperties
    static EksSecret = EksSecret
    static EksVolume = EksVolume
    static Environment = Environment
    static EphemeralStorage = EphemeralStorage
    static EvaluateOnExit = EvaluateOnExit
    static FargatePlatformConfiguration = FargatePlatformConfiguration
    static LinuxParameters = LinuxParameters
    static LogConfiguration = LogConfiguration
    static Metadata = Metadata
    static MountPoints = MountPoints
    static NetworkConfiguration = NetworkConfiguration
    static NodeProperties = NodeProperties
    static NodeRangeProperty = NodeRangeProperty
    static PodProperties = PodProperties
    static ResourceRequirement = ResourceRequirement
    static RetryStrategy = RetryStrategy
    static RuntimePlatform = RuntimePlatform
    static Secret = Secret
    static Timeout = Timeout
    static Tmpfs = Tmpfs
    static Ulimit = Ulimit
    static Volumes = Volumes
    static VolumesHost = VolumesHost

    constructor(properties: JobDefinitionProperties) {
        super('AWS::Batch::JobDefinition', properties)
    }
}
