import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ResourceTag {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: ResourceTag);
}
export declare class Subscriber {
    Status?: Value<string>;
    Type: Value<string>;
    Address: Value<string>;
    constructor(properties: Subscriber);
}
export interface AnomalySubscriptionProperties {
    MonitorArnList: List<Value<string>>;
    ResourceTags?: List<ResourceTag>;
    Frequency: Value<string>;
    SubscriptionName: Value<string>;
    Subscribers: List<Subscriber>;
    Threshold?: Value<number>;
    ThresholdExpression?: Value<string>;
}
export default class AnomalySubscription extends ResourceBase<AnomalySubscriptionProperties> {
    static ResourceTag: typeof ResourceTag;
    static Subscriber: typeof Subscriber;
    constructor(properties: AnomalySubscriptionProperties);
}
