import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class SseConfig {
    Type: Value<string>;
    KeyArn?: Value<string>;
    constructor(properties: SseConfig);
}
export interface ReferenceStoreProperties {
    Description?: Value<string>;
    SseConfig?: SseConfig;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class ReferenceStore extends ResourceBase<ReferenceStoreProperties> {
    static SseConfig: typeof SseConfig;
    constructor(properties: ReferenceStoreProperties);
}
