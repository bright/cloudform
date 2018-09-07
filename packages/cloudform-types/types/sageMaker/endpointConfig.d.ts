import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProductionVariant {
    ModelName: Value<string>;
    VariantName: Value<string>;
    InitialInstanceCount: Value<number>;
    InstanceType: Value<string>;
    InitialVariantWeight: Value<number>;
    constructor(properties: ProductionVariant);
}
export interface EndpointConfigProperties {
    ProductionVariants: List<ProductionVariant>;
    KmsKeyId?: Value<string>;
    EndpointConfigName?: Value<string>;
    Tags?: ResourceTag[];
}
export default class EndpointConfig extends ResourceBase {
    static ProductionVariant: typeof ProductionVariant;
    constructor(properties?: EndpointConfigProperties);
}
