import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CaptureContentTypeHeader {
    JsonContentTypes?: List<Value<string>>;
    CsvContentTypes?: List<Value<string>>;
    constructor(properties: CaptureContentTypeHeader);
}
export declare class DataStorageConfig {
    Destination: Value<string>;
    ContentType?: CaptureContentTypeHeader;
    KmsKey?: Value<string>;
    constructor(properties: DataStorageConfig);
}
export declare class EndpointMetadata {
    EndpointStatus?: Value<string>;
    EndpointName: Value<string>;
    EndpointConfigName?: Value<string>;
    constructor(properties: EndpointMetadata);
}
export declare class InferenceExperimentSchedule {
    EndTime?: Value<string>;
    StartTime?: Value<string>;
    constructor(properties: InferenceExperimentSchedule);
}
export declare class ModelInfrastructureConfig {
    InfrastructureType: Value<string>;
    RealTimeInferenceConfig: RealTimeInferenceConfig;
    constructor(properties: ModelInfrastructureConfig);
}
export declare class ModelVariantConfig {
    ModelName: Value<string>;
    VariantName: Value<string>;
    InfrastructureConfig: ModelInfrastructureConfig;
    constructor(properties: ModelVariantConfig);
}
export declare class RealTimeInferenceConfig {
    InstanceCount: Value<number>;
    InstanceType: Value<string>;
    constructor(properties: RealTimeInferenceConfig);
}
export declare class ShadowModeConfig {
    SourceModelVariantName: Value<string>;
    ShadowModelVariants: List<ShadowModelVariantConfig>;
    constructor(properties: ShadowModeConfig);
}
export declare class ShadowModelVariantConfig {
    ShadowModelVariantName: Value<string>;
    SamplingPercentage: Value<number>;
    constructor(properties: ShadowModelVariantConfig);
}
export interface InferenceExperimentProperties {
    DataStorageConfig?: DataStorageConfig;
    Description?: Value<string>;
    StatusReason?: Value<string>;
    ModelVariants: List<ModelVariantConfig>;
    ShadowModeConfig?: ShadowModeConfig;
    RoleArn: Value<string>;
    Name: Value<string>;
    Type: Value<string>;
    EndpointName: Value<string>;
    DesiredState?: Value<string>;
    Schedule?: InferenceExperimentSchedule;
    KmsKey?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class InferenceExperiment extends ResourceBase<InferenceExperimentProperties> {
    static CaptureContentTypeHeader: typeof CaptureContentTypeHeader;
    static DataStorageConfig: typeof DataStorageConfig;
    static EndpointMetadata: typeof EndpointMetadata;
    static InferenceExperimentSchedule: typeof InferenceExperimentSchedule;
    static ModelInfrastructureConfig: typeof ModelInfrastructureConfig;
    static ModelVariantConfig: typeof ModelVariantConfig;
    static RealTimeInferenceConfig: typeof RealTimeInferenceConfig;
    static ShadowModeConfig: typeof ShadowModeConfig;
    static ShadowModelVariantConfig: typeof ShadowModelVariantConfig;
    constructor(properties: InferenceExperimentProperties);
}
