import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ReferenceItem {
    ReferenceArn: Value<string>;
    constructor(properties: ReferenceItem);
}
export declare class SseConfig {
    Type: Value<string>;
    KeyArn?: Value<string>;
    constructor(properties: SseConfig);
}
export interface VariantStoreProperties {
    Description?: Value<string>;
    Reference: ReferenceItem;
    SseConfig?: SseConfig;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class VariantStore extends ResourceBase<VariantStoreProperties> {
    static ReferenceItem: typeof ReferenceItem;
    static SseConfig: typeof SseConfig;
    constructor(properties: VariantStoreProperties);
}
