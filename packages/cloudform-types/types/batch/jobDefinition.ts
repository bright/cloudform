/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Volumes {
    Name?: Value<string>

    constructor(properties: Volumes) {
        Object.assign(this, properties)
    }
}

export class AuthorizationConfig {
    Iam?: Value<string>
    AccessPointId?: Value<string>

    constructor(properties: AuthorizationConfig) {
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

export class Environment {
    Value?: Value<string>
    Name?: Value<string>

    constructor(properties: Environment) {
        Object.assign(this, properties)
    }
}

export class VolumesHost {
    SourcePath?: Value<string>

    constructor(properties: VolumesHost) {
        Object.assign(this, properties)
    }
}

export class NodeProperties {
    MainNode!: Value<number>
    NumNodes!: Value<number>

    constructor(properties: NodeProperties) {
        Object.assign(this, properties)
    }
}

export class RetryStrategy {
    Attempts?: Value<number>

    constructor(properties: RetryStrategy) {
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

export class NetworkConfiguration {
    AssignPublicIp?: Value<string>

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class LogConfiguration {
    Options?: {[key: string]: any}
    LogDriver!: Value<string>

    constructor(properties: LogConfiguration) {
        Object.assign(this, properties)
    }
}

export class ContainerProperties {
    User?: Value<string>
    Memory?: Value<number>
    Privileged?: Value<boolean>
    JobRoleArn?: Value<string>
    ReadonlyRootFilesystem?: Value<boolean>
    Vcpus?: Value<number>
    Image!: Value<string>
    ExecutionRoleArn?: Value<string>
    InstanceType?: Value<string>

    constructor(properties: ContainerProperties) {
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

export class EvaluateOnExit {
    Action!: Value<string>
    OnExitCode?: Value<string>
    OnReason?: Value<string>
    OnStatusReason?: Value<string>

    constructor(properties: EvaluateOnExit) {
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

export class LinuxParameters {
    Swappiness?: Value<number>
    SharedMemorySize?: Value<number>
    InitProcessEnabled?: Value<boolean>
    MaxSwap?: Value<number>

    constructor(properties: LinuxParameters) {
        Object.assign(this, properties)
    }
}

export class FargatePlatformConfiguration {
    PlatformVersion?: Value<string>

    constructor(properties: FargatePlatformConfiguration) {
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

    constructor(properties: Tmpfs) {
        Object.assign(this, properties)
    }
}

export class NodeRangeProperty {
    TargetNodes!: Value<string>

    constructor(properties: NodeRangeProperty) {
        Object.assign(this, properties)
    }
}

export class EfsVolumeConfiguration {
    TransitEncryption?: Value<string>
    FileSystemId!: Value<string>
    RootDirectory?: Value<string>
    TransitEncryptionPort?: Value<number>

    constructor(properties: EfsVolumeConfiguration) {
        Object.assign(this, properties)
    }
}

export class Device {
    HostPath?: Value<string>
    ContainerPath?: Value<string>

    constructor(properties: Device) {
        Object.assign(this, properties)
    }
}

export interface JobDefinitionProperties {
    Type: Value<string>
    Parameters?: {[key: string]: any}
    JobDefinitionName?: Value<string>
    PropagateTags?: Value<boolean>
    Tags?: {[key: string]: any}
}

export default class JobDefinition extends ResourceBase<JobDefinitionProperties> {
    static Volumes = Volumes
    static AuthorizationConfig = AuthorizationConfig
    static ResourceRequirement = ResourceRequirement
    static Environment = Environment
    static VolumesHost = VolumesHost
    static NodeProperties = NodeProperties
    static RetryStrategy = RetryStrategy
    static Secret = Secret
    static NetworkConfiguration = NetworkConfiguration
    static LogConfiguration = LogConfiguration
    static ContainerProperties = ContainerProperties
    static MountPoints = MountPoints
    static EvaluateOnExit = EvaluateOnExit
    static Ulimit = Ulimit
    static LinuxParameters = LinuxParameters
    static FargatePlatformConfiguration = FargatePlatformConfiguration
    static Timeout = Timeout
    static Tmpfs = Tmpfs
    static NodeRangeProperty = NodeRangeProperty
    static EfsVolumeConfiguration = EfsVolumeConfiguration
    static Device = Device

    constructor(properties: JobDefinitionProperties) {
        super('AWS::Batch::JobDefinition', properties)
    }
}
