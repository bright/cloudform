/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MultiModelConfig {
    ModelCacheSetting?: Value<string>

    constructor(properties: MultiModelConfig) {
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

export class ContainerDefinition {
    ImageConfig?: ImageConfig
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
    static MultiModelConfig = MultiModelConfig
    static VpcConfig = VpcConfig
    static ContainerDefinition = ContainerDefinition
    static ImageConfig = ImageConfig
    static InferenceExecutionConfig = InferenceExecutionConfig

    constructor(properties: ModelProperties) {
        super('AWS::SageMaker::Model', properties)
    }
}
