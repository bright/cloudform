import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SubscriptionProperties {
    DeliveryPolicy?: any;
    Endpoint?: Value<string>;
    FilterPolicy?: any;
    Protocol?: Value<string>;
    RawMessageDelivery?: Value<boolean>;
    Region?: Value<string>;
    TopicArn?: Value<string>;
}
export default class Subscription extends ResourceBase {
    constructor(properties?: SubscriptionProperties);
}
