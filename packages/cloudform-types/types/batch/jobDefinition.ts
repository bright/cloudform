/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class NodeProperties {
    MainNode!: Value<number>
    NodeRangeProperties!: List<NodeRangeProperty>
    NumNodes!: Value<number>

    constructor(properties: NodeProperties) {
        Object.assign(this, properties)
    }
}

export class Volumes {
    Host?: VolumesHost
    Name?: Value<string>

    constructor(properties: Volumes) {
        Object.assign(this, properties)
    }
}

export class RetryStrategy {
    Attempts?: Value<number>

    constructor(properties: RetryStrategy) {
        Object.assign(this, properties)
    }
}

export class ContainerProperties {
    User?: Value<string>
    Memory!: Value<number>
    Privileged?: Value<boolean>
    JobRoleArn?: Value<string>
    ReadonlyRootFilesystem?: Value<boolean>
    Vcpus!: Value<number>
    Image!: Value<string>
    MountPoints?: List<MountPoints>
    Volumes?: List<Volumes>
    Command?: List<Value<string>>
    Environment?: List<Environment>
    Ulimits?: List<Ulimit>
    InstanceType?: Value<string>

    constructor(properties: ContainerProperties) {
        Object.assign(this, properties)
    }
}

export class Timeout {
    AttemptDurationSeconds?: Value<number>

    constructor(properties: Timeout) {
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

export class MountPoints {
    ReadOnly?: Value<boolean>
    SourceVolume?: Value<string>
    ContainerPath?: Value<string>

    constructor(properties: MountPoints) {
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

export class Ulimit {
    SoftLimit!: Value<number>
    HardLimit!: Value<number>
    Name!: Value<string>

    constructor(properties: Ulimit) {
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
    Timeout?: Timeout
    ContainerProperties?: ContainerProperties
    JobDefinitionName?: Value<string>
    RetryStrategy?: RetryStrategy
}

export default class JobDefinition extends ResourceBase<JobDefinitionProperties> {
    static NodeProperties = NodeProperties
    static Volumes = Volumes
    static RetryStrategy = RetryStrategy
    static ContainerProperties = ContainerProperties
    static Timeout = Timeout
    static NodeRangeProperty = NodeRangeProperty
    static MountPoints = MountPoints
    static Environment = Environment
    static Ulimit = Ulimit
    static VolumesHost = VolumesHost

    constructor(properties: JobDefinitionProperties) {
        super('AWS::Batch::JobDefinition', properties)
    }
}
