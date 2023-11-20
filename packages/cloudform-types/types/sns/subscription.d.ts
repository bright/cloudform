import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SubscriptionProperties {
    DeliveryPolicy?: {
        [key: string]: any;
    };
    Endpoint?: Value<string>;
    FilterPolicy?: {
        [key: string]: any;
    };
    FilterPolicyScope?: Value<string>;
    Protocol: Value<string>;
    RawMessageDelivery?: Value<boolean>;
    RedrivePolicy?: {
        [key: string]: any;
    };
    Region?: Value<string>;
    SubscriptionRoleArn?: Value<string>;
    TopicArn: Value<string>;
}
export default class Subscription extends ResourceBase<SubscriptionProperties> {
    constructor(properties: SubscriptionProperties);
}
