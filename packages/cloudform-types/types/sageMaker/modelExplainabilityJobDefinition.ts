/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
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

export class ModelExplainabilityAppSpecification {
    ImageUri!: Value<string>
    ConfigUri!: Value<string>

    constructor(properties: ModelExplainabilityAppSpecification) {
        Object.assign(this, properties)
    }
}

export class ModelExplainabilityJobInput {


    constructor(properties: ModelExplainabilityJobInput) {
        Object.assign(this, properties)
    }
}

export class ClusterConfig {
    InstanceCount!: Value<number>
    InstanceType!: Value<string>
    VolumeKmsKeyId?: Value<string>
    VolumeSizeInGB!: Value<number>

    constructor(properties: ClusterConfig) {
        Object.assign(this, properties)
    }
}

export class ConstraintsResource {
    S3Uri?: Value<string>

    constructor(properties: ConstraintsResource) {
        Object.assign(this, properties)
    }
}

export class StoppingCondition {
    MaxRuntimeInSeconds!: Value<number>

    constructor(properties: StoppingCondition) {
        Object.assign(this, properties)
    }
}

export class S3Output {
    LocalPath!: Value<string>
    S3UploadMode?: Value<string>
    S3Uri!: Value<string>

    constructor(properties: S3Output) {
        Object.assign(this, properties)
    }
}

export class NetworkConfig {
    EnableInterContainerTrafficEncryption?: Value<boolean>
    EnableNetworkIsolation?: Value<boolean>

    constructor(properties: NetworkConfig) {
        Object.assign(this, properties)
    }
}

export class ModelExplainabilityBaselineConfig {
    BaseliningJobName?: Value<string>

    constructor(properties: ModelExplainabilityBaselineConfig) {
        Object.assign(this, properties)
    }
}

export class MonitoringOutput {


    constructor(properties: MonitoringOutput) {
        Object.assign(this, properties)
    }
}

export class MonitoringResources {


    constructor(properties: MonitoringResources) {
        Object.assign(this, properties)
    }
}

export class MonitoringOutputConfig {
    KmsKeyId?: Value<string>

    constructor(properties: MonitoringOutputConfig) {
        Object.assign(this, properties)
    }
}

export class VpcConfig {


    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export class EndpointInput {
    EndpointName!: Value<string>
    LocalPath!: Value<string>
    S3DataDistributionType?: Value<string>
    S3InputMode?: Value<string>
    FeaturesAttribute?: Value<string>
    InferenceAttribute?: Value<string>
    ProbabilityAttribute?: Value<string>

    constructor(properties: EndpointInput) {
        Object.assign(this, properties)
    }
}

export interface ModelExplainabilityJobDefinitionProperties {
    JobDefinitionName?: Value<string>
    RoleArn: Value<string>
}

export default class ModelExplainabilityJobDefinition extends ResourceBase<ModelExplainabilityJobDefinitionProperties> {
    static ModelExplainabilityAppSpecification = ModelExplainabilityAppSpecification
    static ModelExplainabilityJobInput = ModelExplainabilityJobInput
    static ClusterConfig = ClusterConfig
    static ConstraintsResource = ConstraintsResource
    static StoppingCondition = StoppingCondition
    static S3Output = S3Output
    static NetworkConfig = NetworkConfig
    static ModelExplainabilityBaselineConfig = ModelExplainabilityBaselineConfig
    static MonitoringOutput = MonitoringOutput
    static MonitoringResources = MonitoringResources
    static MonitoringOutputConfig = MonitoringOutputConfig
    static VpcConfig = VpcConfig
    static EndpointInput = EndpointInput

    constructor(properties: ModelExplainabilityJobDefinitionProperties) {
        super('AWS::SageMaker::ModelExplainabilityJobDefinition', properties)
    }
}
