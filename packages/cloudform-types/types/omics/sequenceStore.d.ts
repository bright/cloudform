import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class SseConfig {
    Type: Value<string>;
    KeyArn?: Value<string>;
    constructor(properties: SseConfig);
}
export interface SequenceStoreProperties {
    Description?: Value<string>;
    FallbackLocation?: Value<string>;
    SseConfig?: SseConfig;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class SequenceStore extends ResourceBase<SequenceStoreProperties> {
    static SseConfig: typeof SseConfig;
    constructor(properties: SequenceStoreProperties);
}
