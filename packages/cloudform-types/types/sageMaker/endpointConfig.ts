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

export class AsyncInferenceClientConfig {
    MaxConcurrentInvocationsPerInstance?: Value<number>

    constructor(properties: AsyncInferenceClientConfig) {
        Object.assign(this, properties)
    }
}

export class AsyncInferenceConfig {
    OutputConfig!: AsyncInferenceOutputConfig
    ClientConfig?: AsyncInferenceClientConfig

    constructor(properties: AsyncInferenceConfig) {
        Object.assign(this, properties)
    }
}

export class AsyncInferenceNotificationConfig {
    IncludeInferenceResponseIn?: List<Value<string>>
    SuccessTopic?: Value<string>
    ErrorTopic?: Value<string>

    constructor(properties: AsyncInferenceNotificationConfig) {
        Object.assign(this, properties)
    }
}

export class AsyncInferenceOutputConfig {
    KmsKeyId?: Value<string>
    NotificationConfig?: AsyncInferenceNotificationConfig
    S3OutputPath?: Value<string>
    S3FailurePath?: Value<string>

    constructor(properties: AsyncInferenceOutputConfig) {
        Object.assign(this, properties)
    }
}

export class CaptureContentTypeHeader {
    JsonContentTypes?: List<Value<string>>
    CsvContentTypes?: List<Value<string>>

    constructor(properties: CaptureContentTypeHeader) {
        Object.assign(this, properties)
    }
}

export class CaptureOption {
    CaptureMode!: Value<string>

    constructor(properties: CaptureOption) {
        Object.assign(this, properties)
    }
}

export class ClarifyExplainerConfig {
    InferenceConfig?: ClarifyInferenceConfig
    EnableExplanations?: Value<string>
    ShapConfig!: ClarifyShapConfig

    constructor(properties: ClarifyExplainerConfig) {
        Object.assign(this, properties)
    }
}

export type ClarifyFeatureType = Value<string>

export type ClarifyHeader = Value<string>

export class ClarifyInferenceConfig {
    ContentTemplate?: Value<string>
    LabelHeaders?: List<ClarifyHeader>
    MaxPayloadInMB?: Value<number>
    ProbabilityIndex?: Value<number>
    LabelAttribute?: Value<string>
    FeatureTypes?: List<ClarifyFeatureType>
    FeatureHeaders?: List<ClarifyHeader>
    LabelIndex?: Value<number>
    ProbabilityAttribute?: Value<string>
    FeaturesAttribute?: Value<string>
    MaxRecordCount?: Value<number>

    constructor(properties: ClarifyInferenceConfig) {
        Object.assign(this, properties)
    }
}

export class ClarifyShapBaselineConfig {
    ShapBaseline?: Value<string>
    ShapBaselineUri?: Value<string>
    MimeType?: Value<string>

    constructor(properties: ClarifyShapBaselineConfig) {
        Object.assign(this, properties)
    }
}

export class ClarifyShapConfig {
    TextConfig?: ClarifyTextConfig
    UseLogit?: Value<boolean>
    Seed?: Value<number>
    ShapBaselineConfig!: ClarifyShapBaselineConfig
    NumberOfSamples?: Value<number>

    constructor(properties: ClarifyShapConfig) {
        Object.assign(this, properties)
    }
}

export class ClarifyTextConfig {
    Language!: Value<string>
    Granularity!: Value<string>

    constructor(properties: ClarifyTextConfig) {
        Object.assign(this, properties)
    }
}

export class DataCaptureConfig {
    CaptureOptions!: List<CaptureOption>
    KmsKeyId?: Value<string>
    DestinationS3Uri!: Value<string>
    InitialSamplingPercentage!: Value<number>
    CaptureContentTypeHeader?: CaptureContentTypeHeader
    EnableCapture?: Value<boolean>

    constructor(properties: DataCaptureConfig) {
        Object.assign(this, properties)
    }
}

export class ExplainerConfig {
    ClarifyExplainerConfig?: ClarifyExplainerConfig

    constructor(properties: ExplainerConfig) {
        Object.assign(this, properties)
    }
}

export class ProductionVariant {
    ModelDataDownloadTimeoutInSeconds?: Value<number>
    ModelName!: Value<string>
    VolumeSizeInGB?: Value<number>
    EnableSSMAccess?: Value<boolean>
    VariantName!: Value<string>
    ContainerStartupHealthCheckTimeoutInSeconds?: Value<number>
    InitialInstanceCount?: Value<number>
    ServerlessConfig?: ServerlessConfig
    InstanceType?: Value<string>
    AcceleratorType?: Value<string>
    InitialVariantWeight!: Value<number>

    constructor(properties: ProductionVariant) {
        Object.assign(this, properties)
    }
}

export class ServerlessConfig {
    MaxConcurrency!: Value<number>
    MemorySizeInMB!: Value<number>
    ProvisionedConcurrency?: Value<number>

    constructor(properties: ServerlessConfig) {
        Object.assign(this, properties)
    }
}

export interface EndpointConfigProperties {
    ShadowProductionVariants?: List<ProductionVariant>
    DataCaptureConfig?: DataCaptureConfig
    ProductionVariants: List<ProductionVariant>
    KmsKeyId?: Value<string>
    AsyncInferenceConfig?: AsyncInferenceConfig
    EndpointConfigName?: Value<string>
    ExplainerConfig?: ExplainerConfig
    Tags?: List<ResourceTag>
}

export default class EndpointConfig extends ResourceBase<EndpointConfigProperties> {
    static AsyncInferenceClientConfig = AsyncInferenceClientConfig
    static AsyncInferenceConfig = AsyncInferenceConfig
    static AsyncInferenceNotificationConfig = AsyncInferenceNotificationConfig
    static AsyncInferenceOutputConfig = AsyncInferenceOutputConfig
    static CaptureContentTypeHeader = CaptureContentTypeHeader
    static CaptureOption = CaptureOption
    static ClarifyExplainerConfig = ClarifyExplainerConfig
    static ClarifyInferenceConfig = ClarifyInferenceConfig
    static ClarifyShapBaselineConfig = ClarifyShapBaselineConfig
    static ClarifyShapConfig = ClarifyShapConfig
    static ClarifyTextConfig = ClarifyTextConfig
    static DataCaptureConfig = DataCaptureConfig
    static ExplainerConfig = ExplainerConfig
    static ProductionVariant = ProductionVariant
    static ServerlessConfig = ServerlessConfig

    constructor(properties: EndpointConfigProperties) {
        super('AWS::SageMaker::EndpointConfig', properties)
    }
}
