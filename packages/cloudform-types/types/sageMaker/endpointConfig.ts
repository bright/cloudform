/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

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

export interface EndpointConfigProperties {
    ProductionVariants: List<ProductionVariant>
    KmsKeyId?: Value<string>
    EndpointConfigName?: Value<string>
    Tags?: List<ResourceTag>
}

export default class EndpointConfig extends ResourceBase<EndpointConfigProperties> {
    static ProductionVariant = ProductionVariant

    constructor(properties: EndpointConfigProperties) {
        super('AWS::SageMaker::EndpointConfig', properties)
    }
}
