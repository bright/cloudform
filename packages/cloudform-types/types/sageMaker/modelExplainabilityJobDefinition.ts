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

export class BatchTransformInput {
    DatasetFormat!: DatasetFormat
    S3DataDistributionType?: Value<string>
    InferenceAttribute?: Value<string>
    DataCapturedDestinationS3Uri!: Value<string>
    S3InputMode?: Value<string>
    LocalPath!: Value<string>
    ProbabilityAttribute?: Value<string>
    FeaturesAttribute?: Value<string>

    constructor(properties: BatchTransformInput) {
        Object.assign(this, properties)
    }
}

export class ClusterConfig {
    InstanceCount!: Value<number>
    VolumeSizeInGB!: Value<number>
    VolumeKmsKeyId?: Value<string>
    InstanceType!: Value<string>

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

export class Csv {
    Header?: Value<boolean>

    constructor(properties: Csv) {
        Object.assign(this, properties)
    }
}

export class DatasetFormat {
    Parquet?: Value<boolean>
    Csv?: Csv
    Json?: Json

    constructor(properties: DatasetFormat) {
        Object.assign(this, properties)
    }
}

export class EndpointInput {
    S3DataDistributionType?: Value<string>
    EndpointName!: Value<string>
    InferenceAttribute?: Value<string>
    S3InputMode?: Value<string>
    LocalPath!: Value<string>
    ProbabilityAttribute?: Value<string>
    FeaturesAttribute?: Value<string>

    constructor(properties: EndpointInput) {
        Object.assign(this, properties)
    }
}

export class Json {
    Line?: Value<boolean>

    constructor(properties: Json) {
        Object.assign(this, properties)
    }
}

export class ModelExplainabilityAppSpecification {
    ConfigUri!: Value<string>
    Environment?: {[key: string]: Value<string>}
    ImageUri!: Value<string>

    constructor(properties: ModelExplainabilityAppSpecification) {
        Object.assign(this, properties)
    }
}

export class ModelExplainabilityBaselineConfig {
    ConstraintsResource?: ConstraintsResource
    BaseliningJobName?: Value<string>

    constructor(properties: ModelExplainabilityBaselineConfig) {
        Object.assign(this, properties)
    }
}

export class ModelExplainabilityJobInput {
    BatchTransformInput?: BatchTransformInput
    EndpointInput?: EndpointInput

    constructor(properties: ModelExplainabilityJobInput) {
        Object.assign(this, properties)
    }
}

export class MonitoringOutput {
    S3Output!: S3Output

    constructor(properties: MonitoringOutput) {
        Object.assign(this, properties)
    }
}

export class MonitoringOutputConfig {
    KmsKeyId?: Value<string>
    MonitoringOutputs!: List<MonitoringOutput>

    constructor(properties: MonitoringOutputConfig) {
        Object.assign(this, properties)
    }
}

export class MonitoringResources {
    ClusterConfig!: ClusterConfig

    constructor(properties: MonitoringResources) {
        Object.assign(this, properties)
    }
}

export class NetworkConfig {
    EnableNetworkIsolation?: Value<boolean>
    EnableInterContainerTrafficEncryption?: Value<boolean>
    VpcConfig?: VpcConfig

    constructor(properties: NetworkConfig) {
        Object.assign(this, properties)
    }
}

export class S3Output {
    S3Uri!: Value<string>
    LocalPath!: Value<string>
    S3UploadMode?: Value<string>

    constructor(properties: S3Output) {
        Object.assign(this, properties)
    }
}

export class StoppingCondition {
    MaxRuntimeInSeconds!: Value<number>

    constructor(properties: StoppingCondition) {
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

export interface ModelExplainabilityJobDefinitionProperties {
    ModelExplainabilityJobOutputConfig: MonitoringOutputConfig
    EndpointName?: Value<string>
    StoppingCondition?: StoppingCondition
    ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig
    JobDefinitionName?: Value<string>
    JobResources: MonitoringResources
    NetworkConfig?: NetworkConfig
    RoleArn: Value<string>
    ModelExplainabilityJobInput: ModelExplainabilityJobInput
    Tags?: List<ResourceTag>
    ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification
}

export default class ModelExplainabilityJobDefinition extends ResourceBase<ModelExplainabilityJobDefinitionProperties> {
    static BatchTransformInput = BatchTransformInput
    static ClusterConfig = ClusterConfig
    static ConstraintsResource = ConstraintsResource
    static Csv = Csv
    static DatasetFormat = DatasetFormat
    static EndpointInput = EndpointInput
    static Json = Json
    static ModelExplainabilityAppSpecification = ModelExplainabilityAppSpecification
    static ModelExplainabilityBaselineConfig = ModelExplainabilityBaselineConfig
    static ModelExplainabilityJobInput = ModelExplainabilityJobInput
    static MonitoringOutput = MonitoringOutput
    static MonitoringOutputConfig = MonitoringOutputConfig
    static MonitoringResources = MonitoringResources
    static NetworkConfig = NetworkConfig
    static S3Output = S3Output
    static StoppingCondition = StoppingCondition
    static VpcConfig = VpcConfig

    constructor(properties: ModelExplainabilityJobDefinitionProperties) {
        super('AWS::SageMaker::ModelExplainabilityJobDefinition', properties)
    }
}
