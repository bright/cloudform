import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdditionalInferenceSpecificationDefinition {
    Description?: Value<string>;
    SupportedContentTypes?: List<Value<string>>;
    SupportedRealtimeInferenceInstanceTypes?: List<Value<string>>;
    Containers: List<ModelPackageContainerDefinition>;
    SupportedTransformInstanceTypes?: List<Value<string>>;
    Name: Value<string>;
    SupportedResponseMIMETypes?: List<Value<string>>;
    constructor(properties: AdditionalInferenceSpecificationDefinition);
}
export declare class Bias {
    Report?: MetricsSource;
    PreTrainingReport?: MetricsSource;
    PostTrainingReport?: MetricsSource;
    constructor(properties: Bias);
}
export declare class DataSource {
    S3DataSource: S3DataSource;
    constructor(properties: DataSource);
}
export declare class DriftCheckBaselines {
    ModelDataQuality?: DriftCheckModelDataQuality;
    Bias?: DriftCheckBias;
    ModelQuality?: DriftCheckModelQuality;
    Explainability?: DriftCheckExplainability;
    constructor(properties: DriftCheckBaselines);
}
export declare class DriftCheckBias {
    PreTrainingConstraints?: MetricsSource;
    ConfigFile?: FileSource;
    PostTrainingConstraints?: MetricsSource;
    constructor(properties: DriftCheckBias);
}
export declare class DriftCheckExplainability {
    Constraints?: MetricsSource;
    ConfigFile?: FileSource;
    constructor(properties: DriftCheckExplainability);
}
export declare class DriftCheckModelDataQuality {
    Constraints?: MetricsSource;
    Statistics?: MetricsSource;
    constructor(properties: DriftCheckModelDataQuality);
}
export declare class DriftCheckModelQuality {
    Constraints?: MetricsSource;
    Statistics?: MetricsSource;
    constructor(properties: DriftCheckModelQuality);
}
export declare class Explainability {
    Report?: MetricsSource;
    constructor(properties: Explainability);
}
export declare class FileSource {
    ContentType?: Value<string>;
    S3Uri: Value<string>;
    ContentDigest?: Value<string>;
    constructor(properties: FileSource);
}
export declare class InferenceSpecification {
    SupportedContentTypes: List<Value<string>>;
    SupportedRealtimeInferenceInstanceTypes?: List<Value<string>>;
    Containers: List<ModelPackageContainerDefinition>;
    SupportedTransformInstanceTypes?: List<Value<string>>;
    SupportedResponseMIMETypes: List<Value<string>>;
    constructor(properties: InferenceSpecification);
}
export declare class MetadataProperties {
    GeneratedBy?: Value<string>;
    Repository?: Value<string>;
    CommitId?: Value<string>;
    ProjectId?: Value<string>;
    constructor(properties: MetadataProperties);
}
export declare class MetricsSource {
    ContentType: Value<string>;
    S3Uri: Value<string>;
    ContentDigest?: Value<string>;
    constructor(properties: MetricsSource);
}
export declare class ModelDataQuality {
    Constraints?: MetricsSource;
    Statistics?: MetricsSource;
    constructor(properties: ModelDataQuality);
}
export declare class ModelInput {
    DataInputConfig: Value<string>;
    constructor(properties: ModelInput);
}
export declare class ModelMetrics {
    ModelDataQuality?: ModelDataQuality;
    Bias?: Bias;
    ModelQuality?: ModelQuality;
    Explainability?: Explainability;
    constructor(properties: ModelMetrics);
}
export declare class ModelPackageContainerDefinition {
    ModelInput?: ModelInput;
    NearestModelName?: Value<string>;
    ContainerHostname?: Value<string>;
    ImageDigest?: Value<string>;
    FrameworkVersion?: Value<string>;
    Environment?: {
        [key: string]: Value<string>;
    };
    ModelDataUrl?: Value<string>;
    Image: Value<string>;
    Framework?: Value<string>;
    constructor(properties: ModelPackageContainerDefinition);
}
export declare class ModelPackageStatusDetails {
    ValidationStatuses?: List<ModelPackageStatusItem>;
    constructor(properties: ModelPackageStatusDetails);
}
export declare class ModelPackageStatusItem {
    Status: Value<string>;
    FailureReason?: Value<string>;
    Name: Value<string>;
    constructor(properties: ModelPackageStatusItem);
}
export declare class ModelQuality {
    Constraints?: MetricsSource;
    Statistics?: MetricsSource;
    constructor(properties: ModelQuality);
}
export declare class S3DataSource {
    S3Uri: Value<string>;
    S3DataType: Value<string>;
    constructor(properties: S3DataSource);
}
export declare class SourceAlgorithm {
    ModelDataUrl?: Value<string>;
    AlgorithmName: Value<string>;
    constructor(properties: SourceAlgorithm);
}
export declare class SourceAlgorithmSpecification {
    SourceAlgorithms: List<SourceAlgorithm>;
    constructor(properties: SourceAlgorithmSpecification);
}
export declare class TransformInput {
    ContentType?: Value<string>;
    SplitType?: Value<string>;
    CompressionType?: Value<string>;
    DataSource: DataSource;
    constructor(properties: TransformInput);
}
export declare class TransformJobDefinition {
    TransformResources: TransformResources;
    MaxConcurrentTransforms?: Value<number>;
    MaxPayloadInMB?: Value<number>;
    TransformOutput: TransformOutput;
    Environment?: {
        [key: string]: Value<string>;
    };
    TransformInput: TransformInput;
    BatchStrategy?: Value<string>;
    constructor(properties: TransformJobDefinition);
}
export declare class TransformOutput {
    AssembleWith?: Value<string>;
    Accept?: Value<string>;
    KmsKeyId?: Value<string>;
    S3OutputPath: Value<string>;
    constructor(properties: TransformOutput);
}
export declare class TransformResources {
    InstanceCount: Value<number>;
    VolumeKmsKeyId?: Value<string>;
    InstanceType: Value<string>;
    constructor(properties: TransformResources);
}
export declare class ValidationProfile {
    ProfileName: Value<string>;
    TransformJobDefinition: TransformJobDefinition;
    constructor(properties: ValidationProfile);
}
export declare class ValidationSpecification {
    ValidationRole: Value<string>;
    ValidationProfiles: List<ValidationProfile>;
    constructor(properties: ValidationSpecification);
}
export interface ModelPackageProperties {
    DriftCheckBaselines?: DriftCheckBaselines;
    ModelPackageGroupName?: Value<string>;
    ModelMetrics?: ModelMetrics;
    Task?: Value<string>;
    CustomerMetadataProperties?: {
        [key: string]: Value<string>;
    };
    ApprovalDescription?: Value<string>;
    ModelApprovalStatus?: Value<string>;
    ModelPackageVersion?: Value<number>;
    MetadataProperties?: MetadataProperties;
    ValidationSpecification?: ValidationSpecification;
    SourceAlgorithmSpecification?: SourceAlgorithmSpecification;
    ModelPackageStatusDetails?: ModelPackageStatusDetails;
    SkipModelValidation?: Value<string>;
    ModelPackageDescription?: Value<string>;
    AdditionalInferenceSpecificationsToAdd?: List<AdditionalInferenceSpecificationDefinition>;
    ModelPackageName?: Value<string>;
    InferenceSpecification?: InferenceSpecification;
    SamplePayloadUrl?: Value<string>;
    LastModifiedTime?: Value<string>;
    ClientToken?: Value<string>;
    Domain?: Value<string>;
    Tags?: List<ResourceTag>;
    CertifyForMarketplace?: Value<boolean>;
    AdditionalInferenceSpecifications?: List<AdditionalInferenceSpecificationDefinition>;
}
export default class ModelPackage extends ResourceBase<ModelPackageProperties> {
    static AdditionalInferenceSpecificationDefinition: typeof AdditionalInferenceSpecificationDefinition;
    static Bias: typeof Bias;
    static DataSource: typeof DataSource;
    static DriftCheckBaselines: typeof DriftCheckBaselines;
    static DriftCheckBias: typeof DriftCheckBias;
    static DriftCheckExplainability: typeof DriftCheckExplainability;
    static DriftCheckModelDataQuality: typeof DriftCheckModelDataQuality;
    static DriftCheckModelQuality: typeof DriftCheckModelQuality;
    static Explainability: typeof Explainability;
    static FileSource: typeof FileSource;
    static InferenceSpecification: typeof InferenceSpecification;
    static MetadataProperties: typeof MetadataProperties;
    static MetricsSource: typeof MetricsSource;
    static ModelDataQuality: typeof ModelDataQuality;
    static ModelInput: typeof ModelInput;
    static ModelMetrics: typeof ModelMetrics;
    static ModelPackageContainerDefinition: typeof ModelPackageContainerDefinition;
    static ModelPackageStatusDetails: typeof ModelPackageStatusDetails;
    static ModelPackageStatusItem: typeof ModelPackageStatusItem;
    static ModelQuality: typeof ModelQuality;
    static S3DataSource: typeof S3DataSource;
    static SourceAlgorithm: typeof SourceAlgorithm;
    static SourceAlgorithmSpecification: typeof SourceAlgorithmSpecification;
    static TransformInput: typeof TransformInput;
    static TransformJobDefinition: typeof TransformJobDefinition;
    static TransformOutput: typeof TransformOutput;
    static TransformResources: typeof TransformResources;
    static ValidationProfile: typeof ValidationProfile;
    static ValidationSpecification: typeof ValidationSpecification;
    constructor(properties?: ModelPackageProperties);
}
