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

export class DataQualityBaselineConfig {
    BaseliningJobName?: Value<string>
    ConstraintsResource?: ConstraintsResource
    StatisticsResource?: StatisticsResource

    constructor(properties: DataQualityBaselineConfig) {
        Object.assign(this, properties)
    }
}

export class StatisticsResource {
    S3Uri?: Value<string>

    constructor(properties: StatisticsResource) {
        Object.assign(this, properties)
    }
}

export class ConstraintsResource {
    S3Uri?: Value<string>

    constructor(properties: ConstraintsResource) {
        Object.assign(this, properties)
    }
}

export class DataQualityJobInput {
    EndpointInput!: EndpointInput

    constructor(properties: DataQualityJobInput) {
        Object.assign(this, properties)
    }
}

export class MonitoringResources {
    ClusterConfig!: ClusterConfig

    constructor(properties: MonitoringResources) {
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

export class DataQualityAppSpecification {
    ContainerArguments?: List<Value<string>>
    ContainerEntrypoint?: List<Value<string>>
    ImageUri!: Value<string>
    PostAnalyticsProcessorSourceUri?: Value<string>
    RecordPreprocessorSourceUri?: Value<string>
    Environment?: Environment

    constructor(properties: DataQualityAppSpecification) {
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

export class VpcConfig {
    SecurityGroupIds!: List<Value<string>>
    Subnets!: List<Value<string>>

    constructor(properties: VpcConfig) {
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

export class StoppingCondition {
    MaxRuntimeInSeconds!: Value<number>

    constructor(properties: StoppingCondition) {
        Object.assign(this, properties)
    }
}

export class NetworkConfig {
    EnableInterContainerTrafficEncryption?: Value<boolean>
    EnableNetworkIsolation?: Value<boolean>
    VpcConfig?: VpcConfig

    constructor(properties: NetworkConfig) {
        Object.assign(this, properties)
    }
}

export class EndpointInput {
    EndpointName!: Value<string>
    LocalPath!: Value<string>
    S3DataDistributionType?: Value<string>
    S3InputMode?: Value<string>

    constructor(properties: EndpointInput) {
        Object.assign(this, properties)
    }
}

export interface DataQualityJobDefinitionProperties {
    JobDefinitionName?: Value<string>
    DataQualityBaselineConfig?: DataQualityBaselineConfig
    DataQualityAppSpecification: DataQualityAppSpecification
    DataQualityJobInput: DataQualityJobInput
    DataQualityJobOutputConfig: MonitoringOutputConfig
    JobResources: MonitoringResources
    NetworkConfig?: NetworkConfig
    RoleArn: Value<string>
    StoppingCondition?: StoppingCondition
    Tags?: List<ResourceTag>
}

export default class DataQualityJobDefinition extends ResourceBase<DataQualityJobDefinitionProperties> {
    static DataQualityBaselineConfig = DataQualityBaselineConfig
    static StatisticsResource = StatisticsResource
    static ConstraintsResource = ConstraintsResource
    static DataQualityJobInput = DataQualityJobInput
    static MonitoringResources = MonitoringResources
    static MonitoringOutput = MonitoringOutput
    static MonitoringOutputConfig = MonitoringOutputConfig
    static DataQualityAppSpecification = DataQualityAppSpecification
    static ClusterConfig = ClusterConfig
    static VpcConfig = VpcConfig
    static S3Output = S3Output
    static StoppingCondition = StoppingCondition
    static NetworkConfig = NetworkConfig
    static EndpointInput = EndpointInput

    constructor(properties: DataQualityJobDefinitionProperties) {
        super('AWS::SageMaker::DataQualityJobDefinition', properties)
    }
}
