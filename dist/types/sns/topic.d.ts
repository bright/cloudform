import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface SubscriptionProperties {
    Endpoint: Value<string>;
    Protocol: Value<string>;
}
export declare class Subscription extends ResourceBase {
    constructor(properties: SubscriptionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface TopicProperties {
    DisplayName?: Value<string>;
    Subscription?: List<Subscription>;
    TopicName?: Value<string>;
}
export default class Topic extends ResourceBase {
    constructor(properties: TopicProperties, dependsOn?: Value<string> | Value<string>[]);
}
