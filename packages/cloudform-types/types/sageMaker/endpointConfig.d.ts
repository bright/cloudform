import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AsyncInferenceClientConfig {
    MaxConcurrentInvocationsPerInstance?: Value<number>;
    constructor(properties: AsyncInferenceClientConfig);
}
export declare class AsyncInferenceConfig {
    OutputConfig: AsyncInferenceOutputConfig;
    ClientConfig?: AsyncInferenceClientConfig;
    constructor(properties: AsyncInferenceConfig);
}
export declare class AsyncInferenceNotificationConfig {
    IncludeInferenceResponseIn?: List<Value<string>>;
    SuccessTopic?: Value<string>;
    ErrorTopic?: Value<string>;
    constructor(properties: AsyncInferenceNotificationConfig);
}
export declare class AsyncInferenceOutputConfig {
    KmsKeyId?: Value<string>;
    NotificationConfig?: AsyncInferenceNotificationConfig;
    S3OutputPath?: Value<string>;
    S3FailurePath?: Value<string>;
    constructor(properties: AsyncInferenceOutputConfig);
}
export declare class CaptureContentTypeHeader {
    JsonContentTypes?: List<Value<string>>;
    CsvContentTypes?: List<Value<string>>;
    constructor(properties: CaptureContentTypeHeader);
}
export declare class CaptureOption {
    CaptureMode: Value<string>;
    constructor(properties: CaptureOption);
}
export declare class ClarifyExplainerConfig {
    InferenceConfig?: ClarifyInferenceConfig;
    EnableExplanations?: Value<string>;
    ShapConfig: ClarifyShapConfig;
    constructor(properties: ClarifyExplainerConfig);
}
export declare type ClarifyFeatureType = Value<string>;
export declare type ClarifyHeader = Value<string>;
export declare class ClarifyInferenceConfig {
    ContentTemplate?: Value<string>;
    LabelHeaders?: List<ClarifyHeader>;
    MaxPayloadInMB?: Value<number>;
    ProbabilityIndex?: Value<number>;
    LabelAttribute?: Value<string>;
    FeatureTypes?: List<ClarifyFeatureType>;
    FeatureHeaders?: List<ClarifyHeader>;
    LabelIndex?: Value<number>;
    ProbabilityAttribute?: Value<string>;
    FeaturesAttribute?: Value<string>;
    MaxRecordCount?: Value<number>;
    constructor(properties: ClarifyInferenceConfig);
}
export declare class ClarifyShapBaselineConfig {
    ShapBaseline?: Value<string>;
    ShapBaselineUri?: Value<string>;
    MimeType?: Value<string>;
    constructor(properties: ClarifyShapBaselineConfig);
}
export declare class ClarifyShapConfig {
    TextConfig?: ClarifyTextConfig;
    UseLogit?: Value<boolean>;
    Seed?: Value<number>;
    ShapBaselineConfig: ClarifyShapBaselineConfig;
    NumberOfSamples?: Value<number>;
    constructor(properties: ClarifyShapConfig);
}
export declare class ClarifyTextConfig {
    Language: Value<string>;
    Granularity: Value<string>;
    constructor(properties: ClarifyTextConfig);
}
export declare class DataCaptureConfig {
    CaptureOptions: List<CaptureOption>;
    KmsKeyId?: Value<string>;
    DestinationS3Uri: Value<string>;
    InitialSamplingPercentage: Value<number>;
    CaptureContentTypeHeader?: CaptureContentTypeHeader;
    EnableCapture?: Value<boolean>;
    constructor(properties: DataCaptureConfig);
}
export declare class ExplainerConfig {
    ClarifyExplainerConfig?: ClarifyExplainerConfig;
    constructor(properties: ExplainerConfig);
}
export declare class ProductionVariant {
    ModelDataDownloadTimeoutInSeconds?: Value<number>;
    ModelName: Value<string>;
    VolumeSizeInGB?: Value<number>;
    EnableSSMAccess?: Value<boolean>;
    VariantName: Value<string>;
    ContainerStartupHealthCheckTimeoutInSeconds?: Value<number>;
    InitialInstanceCount?: Value<number>;
    ServerlessConfig?: ServerlessConfig;
    InstanceType?: Value<string>;
    AcceleratorType?: Value<string>;
    InitialVariantWeight: Value<number>;
    constructor(properties: ProductionVariant);
}
export declare class ServerlessConfig {
    MaxConcurrency: Value<number>;
    MemorySizeInMB: Value<number>;
    ProvisionedConcurrency?: Value<number>;
    constructor(properties: ServerlessConfig);
}
export interface EndpointConfigProperties {
    ShadowProductionVariants?: List<ProductionVariant>;
    DataCaptureConfig?: DataCaptureConfig;
    ProductionVariants: List<ProductionVariant>;
    KmsKeyId?: Value<string>;
    AsyncInferenceConfig?: AsyncInferenceConfig;
    EndpointConfigName?: Value<string>;
    ExplainerConfig?: ExplainerConfig;
    Tags?: List<ResourceTag>;
}
export default class EndpointConfig extends ResourceBase<EndpointConfigProperties> {
    static AsyncInferenceClientConfig: typeof AsyncInferenceClientConfig;
    static AsyncInferenceConfig: typeof AsyncInferenceConfig;
    static AsyncInferenceNotificationConfig: typeof AsyncInferenceNotificationConfig;
    static AsyncInferenceOutputConfig: typeof AsyncInferenceOutputConfig;
    static CaptureContentTypeHeader: typeof CaptureContentTypeHeader;
    static CaptureOption: typeof CaptureOption;
    static ClarifyExplainerConfig: typeof ClarifyExplainerConfig;
    static ClarifyInferenceConfig: typeof ClarifyInferenceConfig;
    static ClarifyShapBaselineConfig: typeof ClarifyShapBaselineConfig;
    static ClarifyShapConfig: typeof ClarifyShapConfig;
    static ClarifyTextConfig: typeof ClarifyTextConfig;
    static DataCaptureConfig: typeof DataCaptureConfig;
    static ExplainerConfig: typeof ExplainerConfig;
    static ProductionVariant: typeof ProductionVariant;
    static ServerlessConfig: typeof ServerlessConfig;
    constructor(properties: EndpointConfigProperties);
}
