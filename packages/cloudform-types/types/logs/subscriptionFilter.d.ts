import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SubscriptionFilterProperties {
    FilterPattern: Value<string>;
    Distribution?: Value<string>;
    LogGroupName: Value<string>;
    FilterName?: Value<string>;
    DestinationArn: Value<string>;
    RoleArn?: Value<string>;
}
export default class SubscriptionFilter extends ResourceBase<SubscriptionFilterProperties> {
    constructor(properties: SubscriptionFilterProperties);
}
