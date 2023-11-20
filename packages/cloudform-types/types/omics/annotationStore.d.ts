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
export declare class StoreOptions {
    TsvStoreOptions: TsvStoreOptions;
    constructor(properties: StoreOptions);
}
export declare class TsvStoreOptions {
    Schema?: {
        [key: string]: any;
    };
    FormatToHeader?: {
        [key: string]: Value<string>;
    };
    AnnotationType?: Value<string>;
    constructor(properties: TsvStoreOptions);
}
export interface AnnotationStoreProperties {
    StoreFormat: Value<string>;
    Description?: Value<string>;
    Reference?: ReferenceItem;
    SseConfig?: SseConfig;
    StoreOptions?: StoreOptions;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class AnnotationStore extends ResourceBase<AnnotationStoreProperties> {
    static ReferenceItem: typeof ReferenceItem;
    static SseConfig: typeof SseConfig;
    static StoreOptions: typeof StoreOptions;
    static TsvStoreOptions: typeof TsvStoreOptions;
    constructor(properties: AnnotationStoreProperties);
}
