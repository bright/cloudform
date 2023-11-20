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

export class Code {
    S3ObjectVersion?: Value<string>
    S3Bucket?: Value<string>
    ZipFile?: Value<string>
    S3Key?: Value<string>
    ImageUri?: Value<string>

    constructor(properties: Code) {
        Object.assign(this, properties)
    }
}

export class DeadLetterConfig {
    TargetArn?: Value<string>

    constructor(properties: DeadLetterConfig) {
        Object.assign(this, properties)
    }
}

export class Environment {
    Variables?: {[key: string]: Value<string>}

    constructor(properties: Environment) {
        Object.assign(this, properties)
    }
}

export class EphemeralStorage {
    Size!: Value<number>

    constructor(properties: EphemeralStorage) {
        Object.assign(this, properties)
    }
}

export class FileSystemConfig {
    Arn!: Value<string>
    LocalMountPath!: Value<string>

    constructor(properties: FileSystemConfig) {
        Object.assign(this, properties)
    }
}

export class ImageConfig {
    WorkingDirectory?: Value<string>
    Command?: List<Value<string>>
    EntryPoint?: List<Value<string>>

    constructor(properties: ImageConfig) {
        Object.assign(this, properties)
    }
}

export class RuntimeManagementConfig {
    UpdateRuntimeOn!: Value<string>
    RuntimeVersionArn?: Value<string>

    constructor(properties: RuntimeManagementConfig) {
        Object.assign(this, properties)
    }
}

export class SnapStart {
    ApplyOn!: Value<string>

    constructor(properties: SnapStart) {
        Object.assign(this, properties)
    }
}

export class SnapStartResponse {
    OptimizationStatus?: Value<string>
    ApplyOn?: Value<string>

    constructor(properties: SnapStartResponse) {
        Object.assign(this, properties)
    }
}

export class TracingConfig {
    Mode?: Value<string>

    constructor(properties: TracingConfig) {
        Object.assign(this, properties)
    }
}

export class VpcConfig {
    Ipv6AllowedForDualStack?: Value<boolean>
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export interface FunctionProperties {
    Policy?: {[key: string]: any}
    Description?: Value<string>
    TracingConfig?: TracingConfig
    VpcConfig?: VpcConfig
    RuntimeManagementConfig?: RuntimeManagementConfig
    ReservedConcurrentExecutions?: Value<number>
    SnapStart?: SnapStart
    FileSystemConfigs?: List<FileSystemConfig>
    FunctionName?: Value<string>
    Runtime?: Value<string>
    KmsKeyArn?: Value<string>
    PackageType?: Value<string>
    CodeSigningConfigArn?: Value<string>
    Layers?: List<Value<string>>
    Tags?: List<ResourceTag>
    ImageConfig?: ImageConfig
    MemorySize?: Value<number>
    DeadLetterConfig?: DeadLetterConfig
    Timeout?: Value<number>
    Handler?: Value<string>
    Code: Code
    Role: Value<string>
    Environment?: Environment
    EphemeralStorage?: EphemeralStorage
    Architectures?: List<Value<string>>
}

export default class Function extends ResourceBase<FunctionProperties> {
    static Code = Code
    static DeadLetterConfig = DeadLetterConfig
    static Environment = Environment
    static EphemeralStorage = EphemeralStorage
    static FileSystemConfig = FileSystemConfig
    static ImageConfig = ImageConfig
    static RuntimeManagementConfig = RuntimeManagementConfig
    static SnapStart = SnapStart
    static SnapStartResponse = SnapStartResponse
    static TracingConfig = TracingConfig
    static VpcConfig = VpcConfig

    constructor(properties: FunctionProperties) {
        super('AWS::Lambda::Function', properties)
    }
}
