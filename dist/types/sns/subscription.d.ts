import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface SubscriptionProperties {
    Endpoint?: Value<string>;
    Protocol?: Value<string>;
    TopicArn?: Value<string>;
}
export default class Subscription extends ResourceBase {
    constructor(properties: SubscriptionProperties, dependsOn?: Value<string>);
}
