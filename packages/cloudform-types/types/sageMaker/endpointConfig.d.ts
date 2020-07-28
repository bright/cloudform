import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CaptureContentTypeHeader {
    JsonContentTypes?: List<Value<string>>;
    CsvContentTypes?: List<Value<string>>;
    constructor(properties: CaptureContentTypeHeader);
}
export declare class CaptureOption {
    CaptureMode: Value<string>;
    constructor(properties: CaptureOption);
}
export declare class ProductionVariant {
    ModelName: Value<string>;
    VariantName: Value<string>;
    InitialInstanceCount: Value<number>;
    InstanceType: Value<string>;
    AcceleratorType?: Value<string>;
    InitialVariantWeight: Value<number>;
    constructor(properties: ProductionVariant);
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
export interface EndpointConfigProperties {
    DataCaptureConfig?: DataCaptureConfig;
    ProductionVariants: List<ProductionVariant>;
    KmsKeyId?: Value<string>;
    EndpointConfigName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class EndpointConfig extends ResourceBase<EndpointConfigProperties> {
    static CaptureContentTypeHeader: typeof CaptureContentTypeHeader;
    static CaptureOption: typeof CaptureOption;
    static ProductionVariant: typeof ProductionVariant;
    static DataCaptureConfig: typeof DataCaptureConfig;
    constructor(properties: EndpointConfigProperties);
}
