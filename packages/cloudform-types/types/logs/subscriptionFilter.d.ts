import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SubscriptionFilterProperties {
    DestinationArn: Value<string>;
    FilterPattern: Value<string>;
    LogGroupName: Value<string>;
    RoleArn?: Value<string>;
}
export default class SubscriptionFilter extends ResourceBase<SubscriptionFilterProperties> {
    constructor(properties: SubscriptionFilterProperties);
}
