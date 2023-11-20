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

export class AdditionalInferenceSpecificationDefinition {
    Description?: Value<string>
    SupportedContentTypes?: List<Value<string>>
    SupportedRealtimeInferenceInstanceTypes?: List<Value<string>>
    Containers!: List<ModelPackageContainerDefinition>
    SupportedTransformInstanceTypes?: List<Value<string>>
    Name!: Value<string>
    SupportedResponseMIMETypes?: List<Value<string>>

    constructor(properties: AdditionalInferenceSpecificationDefinition) {
        Object.assign(this, properties)
    }
}

export class Bias {
    Report?: MetricsSource
    PreTrainingReport?: MetricsSource
    PostTrainingReport?: MetricsSource

    constructor(properties: Bias) {
        Object.assign(this, properties)
    }
}

export class DataSource {
    S3DataSource!: S3DataSource

    constructor(properties: DataSource) {
        Object.assign(this, properties)
    }
}

export class DriftCheckBaselines {
    ModelDataQuality?: DriftCheckModelDataQuality
    Bias?: DriftCheckBias
    ModelQuality?: DriftCheckModelQuality
    Explainability?: DriftCheckExplainability

    constructor(properties: DriftCheckBaselines) {
        Object.assign(this, properties)
    }
}

export class DriftCheckBias {
    PreTrainingConstraints?: MetricsSource
    ConfigFile?: FileSource
    PostTrainingConstraints?: MetricsSource

    constructor(properties: DriftCheckBias) {
        Object.assign(this, properties)
    }
}

export class DriftCheckExplainability {
    Constraints?: MetricsSource
    ConfigFile?: FileSource

    constructor(properties: DriftCheckExplainability) {
        Object.assign(this, properties)
    }
}

export class DriftCheckModelDataQuality {
    Constraints?: MetricsSource
    Statistics?: MetricsSource

    constructor(properties: DriftCheckModelDataQuality) {
        Object.assign(this, properties)
    }
}

export class DriftCheckModelQuality {
    Constraints?: MetricsSource
    Statistics?: MetricsSource

    constructor(properties: DriftCheckModelQuality) {
        Object.assign(this, properties)
    }
}

export class Explainability {
    Report?: MetricsSource

    constructor(properties: Explainability) {
        Object.assign(this, properties)
    }
}

export class FileSource {
    ContentType?: Value<string>
    S3Uri!: Value<string>
    ContentDigest?: Value<string>

    constructor(properties: FileSource) {
        Object.assign(this, properties)
    }
}

export class InferenceSpecification {
    SupportedContentTypes!: List<Value<string>>
    SupportedRealtimeInferenceInstanceTypes?: List<Value<string>>
    Containers!: List<ModelPackageContainerDefinition>
    SupportedTransformInstanceTypes?: List<Value<string>>
    SupportedResponseMIMETypes!: List<Value<string>>

    constructor(properties: InferenceSpecification) {
        Object.assign(this, properties)
    }
}

export class MetadataProperties {
    GeneratedBy?: Value<string>
    Repository?: Value<string>
    CommitId?: Value<string>
    ProjectId?: Value<string>

    constructor(properties: MetadataProperties) {
        Object.assign(this, properties)
    }
}

export class MetricsSource {
    ContentType!: Value<string>
    S3Uri!: Value<string>
    ContentDigest?: Value<string>

    constructor(properties: MetricsSource) {
        Object.assign(this, properties)
    }
}

export class ModelDataQuality {
    Constraints?: MetricsSource
    Statistics?: MetricsSource

    constructor(properties: ModelDataQuality) {
        Object.assign(this, properties)
    }
}

export class ModelInput {
    DataInputConfig!: Value<string>

    constructor(properties: ModelInput) {
        Object.assign(this, properties)
    }
}

export class ModelMetrics {
    ModelDataQuality?: ModelDataQuality
    Bias?: Bias
    ModelQuality?: ModelQuality
    Explainability?: Explainability

    constructor(properties: ModelMetrics) {
        Object.assign(this, properties)
    }
}

export class ModelPackageContainerDefinition {
    ModelInput?: ModelInput
    NearestModelName?: Value<string>
    ContainerHostname?: Value<string>
    ImageDigest?: Value<string>
    FrameworkVersion?: Value<string>
    Environment?: {[key: string]: Value<string>}
    ModelDataUrl?: Value<string>
    Image!: Value<string>
    Framework?: Value<string>

    constructor(properties: ModelPackageContainerDefinition) {
        Object.assign(this, properties)
    }
}

export class ModelPackageStatusDetails {
    ValidationStatuses?: List<ModelPackageStatusItem>

    constructor(properties: ModelPackageStatusDetails) {
        Object.assign(this, properties)
    }
}

export class ModelPackageStatusItem {
    Status!: Value<string>
    FailureReason?: Value<string>
    Name!: Value<string>

    constructor(properties: ModelPackageStatusItem) {
        Object.assign(this, properties)
    }
}

export class ModelQuality {
    Constraints?: MetricsSource
    Statistics?: MetricsSource

    constructor(properties: ModelQuality) {
        Object.assign(this, properties)
    }
}

export class S3DataSource {
    S3Uri!: Value<string>
    S3DataType!: Value<string>

    constructor(properties: S3DataSource) {
        Object.assign(this, properties)
    }
}

export class SourceAlgorithm {
    ModelDataUrl?: Value<string>
    AlgorithmName!: Value<string>

    constructor(properties: SourceAlgorithm) {
        Object.assign(this, properties)
    }
}

export class SourceAlgorithmSpecification {
    SourceAlgorithms!: List<SourceAlgorithm>

    constructor(properties: SourceAlgorithmSpecification) {
        Object.assign(this, properties)
    }
}

export class TransformInput {
    ContentType?: Value<string>
    SplitType?: Value<string>
    CompressionType?: Value<string>
    DataSource!: DataSource

    constructor(properties: TransformInput) {
        Object.assign(this, properties)
    }
}

export class TransformJobDefinition {
    TransformResources!: TransformResources
    MaxConcurrentTransforms?: Value<number>
    MaxPayloadInMB?: Value<number>
    TransformOutput!: TransformOutput
    Environment?: {[key: string]: Value<string>}
    TransformInput!: TransformInput
    BatchStrategy?: Value<string>

    constructor(properties: TransformJobDefinition) {
        Object.assign(this, properties)
    }
}

export class TransformOutput {
    AssembleWith?: Value<string>
    Accept?: Value<string>
    KmsKeyId?: Value<string>
    S3OutputPath!: Value<string>

    constructor(properties: TransformOutput) {
        Object.assign(this, properties)
    }
}

export class TransformResources {
    InstanceCount!: Value<number>
    VolumeKmsKeyId?: Value<string>
    InstanceType!: Value<string>

    constructor(properties: TransformResources) {
        Object.assign(this, properties)
    }
}

export class ValidationProfile {
    ProfileName!: Value<string>
    TransformJobDefinition!: TransformJobDefinition

    constructor(properties: ValidationProfile) {
        Object.assign(this, properties)
    }
}

export class ValidationSpecification {
    ValidationRole!: Value<string>
    ValidationProfiles!: List<ValidationProfile>

    constructor(properties: ValidationSpecification) {
        Object.assign(this, properties)
    }
}

export interface ModelPackageProperties {
    DriftCheckBaselines?: DriftCheckBaselines
    ModelPackageGroupName?: Value<string>
    ModelMetrics?: ModelMetrics
    Task?: Value<string>
    CustomerMetadataProperties?: {[key: string]: Value<string>}
    ApprovalDescription?: Value<string>
    ModelApprovalStatus?: Value<string>
    ModelPackageVersion?: Value<number>
    MetadataProperties?: MetadataProperties
    ValidationSpecification?: ValidationSpecification
    SourceAlgorithmSpecification?: SourceAlgorithmSpecification
    ModelPackageStatusDetails?: ModelPackageStatusDetails
    SkipModelValidation?: Value<string>
    ModelPackageDescription?: Value<string>
    AdditionalInferenceSpecificationsToAdd?: List<AdditionalInferenceSpecificationDefinition>
    ModelPackageName?: Value<string>
    InferenceSpecification?: InferenceSpecification
    SamplePayloadUrl?: Value<string>
    LastModifiedTime?: Value<string>
    ClientToken?: Value<string>
    Domain?: Value<string>
    Tags?: List<ResourceTag>
    CertifyForMarketplace?: Value<boolean>
    AdditionalInferenceSpecifications?: List<AdditionalInferenceSpecificationDefinition>
}

export default class ModelPackage extends ResourceBase<ModelPackageProperties> {
    static AdditionalInferenceSpecificationDefinition = AdditionalInferenceSpecificationDefinition
    static Bias = Bias
    static DataSource = DataSource
    static DriftCheckBaselines = DriftCheckBaselines
    static DriftCheckBias = DriftCheckBias
    static DriftCheckExplainability = DriftCheckExplainability
    static DriftCheckModelDataQuality = DriftCheckModelDataQuality
    static DriftCheckModelQuality = DriftCheckModelQuality
    static Explainability = Explainability
    static FileSource = FileSource
    static InferenceSpecification = InferenceSpecification
    static MetadataProperties = MetadataProperties
    static MetricsSource = MetricsSource
    static ModelDataQuality = ModelDataQuality
    static ModelInput = ModelInput
    static ModelMetrics = ModelMetrics
    static ModelPackageContainerDefinition = ModelPackageContainerDefinition
    static ModelPackageStatusDetails = ModelPackageStatusDetails
    static ModelPackageStatusItem = ModelPackageStatusItem
    static ModelQuality = ModelQuality
    static S3DataSource = S3DataSource
    static SourceAlgorithm = SourceAlgorithm
    static SourceAlgorithmSpecification = SourceAlgorithmSpecification
    static TransformInput = TransformInput
    static TransformJobDefinition = TransformJobDefinition
    static TransformOutput = TransformOutput
    static TransformResources = TransformResources
    static ValidationProfile = ValidationProfile
    static ValidationSpecification = ValidationSpecification

    constructor(properties?: ModelPackageProperties) {
        super('AWS::SageMaker::ModelPackage', properties || {})
    }
}
