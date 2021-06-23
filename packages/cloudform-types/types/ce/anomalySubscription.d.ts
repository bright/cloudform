import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Subscriber {
    Address: Value<string>;
    Status?: Value<string>;
    Type: Value<string>;
    constructor(properties: Subscriber);
}
export interface AnomalySubscriptionProperties {
    SubscriptionName: Value<string>;
    MonitorArnList: List<Value<string>>;
    Subscribers: List<Subscriber>;
    Threshold: Value<number>;
    Frequency: Value<string>;
}
export default class AnomalySubscription extends ResourceBase<AnomalySubscriptionProperties> {
    static Subscriber: typeof Subscriber;
    constructor(properties: AnomalySubscriptionProperties);
}
