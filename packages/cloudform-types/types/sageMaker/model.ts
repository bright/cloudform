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

export class ContainerDefinition {
    ImageConfig?: ImageConfig
    InferenceSpecificationName?: Value<string>
    ContainerHostname?: Value<string>
    ModelPackageName?: Value<string>
    Mode?: Value<string>
    Environment?: {[key: string]: any}
    ModelDataUrl?: Value<string>
    Image?: Value<string>
    MultiModelConfig?: MultiModelConfig

    constructor(properties: ContainerDefinition) {
        Object.assign(this, properties)
    }
}

export class ImageConfig {
    RepositoryAuthConfig?: RepositoryAuthConfig
    RepositoryAccessMode!: Value<string>

    constructor(properties: ImageConfig) {
        Object.assign(this, properties)
    }
}

export class InferenceExecutionConfig {
    Mode!: Value<string>

    constructor(properties: InferenceExecutionConfig) {
        Object.assign(this, properties)
    }
}

export class MultiModelConfig {
    ModelCacheSetting?: Value<string>

    constructor(properties: MultiModelConfig) {
        Object.assign(this, properties)
    }
}

export class RepositoryAuthConfig {
    RepositoryCredentialsProviderArn!: Value<string>

    constructor(properties: RepositoryAuthConfig) {
        Object.assign(this, properties)
    }
}

export class VpcConfig {
    Subnets!: List<Value<string>>
    SecurityGroupIds!: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export interface ModelProperties {
    ExecutionRoleArn: Value<string>
    EnableNetworkIsolation?: Value<boolean>
    PrimaryContainer?: ContainerDefinition
    ModelName?: Value<string>
    VpcConfig?: VpcConfig
    Containers?: List<ContainerDefinition>
    InferenceExecutionConfig?: InferenceExecutionConfig
    Tags?: List<ResourceTag>
}

export default class Model extends ResourceBase<ModelProperties> {
    static ContainerDefinition = ContainerDefinition
    static ImageConfig = ImageConfig
    static InferenceExecutionConfig = InferenceExecutionConfig
    static MultiModelConfig = MultiModelConfig
    static RepositoryAuthConfig = RepositoryAuthConfig
    static VpcConfig = VpcConfig

    constructor(properties: ModelProperties) {
        super('AWS::SageMaker::Model', properties)
    }
}
