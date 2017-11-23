import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SubscriptionProperties {
    Endpoint: Value<string>;
    Protocol: Value<string>;
}
export declare class Subscription extends ResourceBase {
    constructor(properties: SubscriptionProperties, dependsOn?: Value<string>);
}
export interface TopicProperties {
    DisplayName?: Value<string>;
    Subscription?: Subscription[];
    TopicName?: Value<string>;
}
export default class Topic extends ResourceBase {
    constructor(properties: TopicProperties, dependsOn?: Value<string>);
}
