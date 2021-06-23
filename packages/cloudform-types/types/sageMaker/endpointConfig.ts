/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CaptureOption {
    CaptureMode!: Value<string>

    constructor(properties: CaptureOption) {
        Object.assign(this, properties)
    }
}

export class ProductionVariant {
    ModelName!: Value<string>
    VariantName!: Value<string>
    InitialInstanceCount!: Value<number>
    InstanceType!: Value<string>
    AcceleratorType?: Value<string>
    InitialVariantWeight!: Value<number>

    constructor(properties: ProductionVariant) {
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

export interface EndpointConfigProperties {
    DataCaptureConfig?: DataCaptureConfig
    ProductionVariants: List<ProductionVariant>
    KmsKeyId?: Value<string>
    EndpointConfigName?: Value<string>
    Tags?: List<ResourceTag>
}

export default class EndpointConfig extends ResourceBase<EndpointConfigProperties> {
    static CaptureOption = CaptureOption
    static ProductionVariant = ProductionVariant
    static CaptureContentTypeHeader = CaptureContentTypeHeader
    static DataCaptureConfig = DataCaptureConfig

    constructor(properties: EndpointConfigProperties) {
        super('AWS::SageMaker::EndpointConfig', properties)
    }
}
