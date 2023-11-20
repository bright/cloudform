import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Subscription {
    Endpoint: Value<string>;
    Protocol: Value<string>;
    constructor(properties: Subscription);
}
export interface TopicProperties {
    SignatureVersion?: Value<string>;
    KmsMasterKeyId?: Value<string>;
    TracingConfig?: Value<string>;
    DisplayName?: Value<string>;
    FifoTopic?: Value<boolean>;
    ContentBasedDeduplication?: Value<boolean>;
    Subscription?: List<Subscription>;
    Tags?: List<ResourceTag>;
    DataProtectionPolicy?: {
        [key: string]: any;
    };
    ArchivePolicy?: {
        [key: string]: any;
    };
    TopicName?: Value<string>;
}
export default class Topic extends ResourceBase<TopicProperties> {
    static Subscription: typeof Subscription;
    constructor(properties?: TopicProperties);
}
