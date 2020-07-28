import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VariantProperty {
    VariantPropertyType?: Value<string>;
    constructor(properties: VariantProperty);
}
export interface EndpointProperties {
    RetainAllVariantProperties?: Value<boolean>;
    EndpointName?: Value<string>;
    ExcludeRetainedVariantProperties?: List<VariantProperty>;
    EndpointConfigName: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Endpoint extends ResourceBase<EndpointProperties> {
    static VariantProperty: typeof VariantProperty;
    constructor(properties: EndpointProperties);
}
