import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SubscriptionDefinitionVersion {
    Subscriptions: List<Subscription>;
    constructor(properties: SubscriptionDefinitionVersion);
}
export declare class Subscription {
    Target: Value<string>;
    Id: Value<string>;
    Source: Value<string>;
    Subject: Value<string>;
    constructor(properties: Subscription);
}
export interface SubscriptionDefinitionProperties {
    InitialVersion?: SubscriptionDefinitionVersion;
    Name: Value<string>;
}
export default class SubscriptionDefinition extends ResourceBase<SubscriptionDefinitionProperties> {
    static SubscriptionDefinitionVersion: typeof SubscriptionDefinitionVersion;
    static Subscription: typeof Subscription;
    constructor(properties: SubscriptionDefinitionProperties);
}
