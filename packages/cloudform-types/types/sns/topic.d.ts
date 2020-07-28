import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Subscription {
    Endpoint: Value<string>;
    Protocol: Value<string>;
    constructor(properties: Subscription);
}
export interface TopicProperties {
    ContentBasedDeduplication?: Value<boolean>;
    DisplayName?: Value<string>;
    FifoTopic?: Value<boolean>;
    KmsMasterKeyId?: Value<string>;
    Subscription?: List<Subscription>;
    Tags?: List<ResourceTag>;
    TopicName?: Value<string>;
}
export default class Topic extends ResourceBase<TopicProperties> {
    static Subscription: typeof Subscription;
    constructor(properties?: TopicProperties);
}
