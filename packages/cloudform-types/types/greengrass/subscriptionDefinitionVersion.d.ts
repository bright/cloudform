import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Subscription {
    Target: Value<string>;
    Id: Value<string>;
    Source: Value<string>;
    Subject: Value<string>;
    constructor(properties: Subscription);
}
export interface SubscriptionDefinitionVersionProperties {
    SubscriptionDefinitionId: Value<string>;
    Subscriptions: List<Subscription>;
}
export default class SubscriptionDefinitionVersion extends ResourceBase<SubscriptionDefinitionVersionProperties> {
    static Subscription: typeof Subscription;
    constructor(properties: SubscriptionDefinitionVersionProperties);
}
