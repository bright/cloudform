import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AccessLogSubscriptionProperties {
    ResourceIdentifier?: Value<string>;
    DestinationArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class AccessLogSubscription extends ResourceBase<AccessLogSubscriptionProperties> {
    constructor(properties: AccessLogSubscriptionProperties);
}
