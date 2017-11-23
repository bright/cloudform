import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface EventSubscriptionProperties {
    SourceType?: Value<string>;
    EventCategories?: Value<string>[];
    Enabled?: Value<boolean>;
    SubscriptionName?: Value<string>;
    SnsTopicArn: Value<string>;
    SourceIds?: Value<string>[];
    Tags?: ResourceTag[];
}
export default class EventSubscription extends ResourceBase {
    constructor(properties: EventSubscriptionProperties, dependsOn?: Value<string> | Value<string>[]);
}
