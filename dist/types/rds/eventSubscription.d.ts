import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface EventSubscriptionProperties {
    Enabled?: Value<boolean>;
    EventCategories?: Value<string>[];
    SnsTopicArn: Value<string>;
    SourceIds?: Value<string>[];
    SourceType?: Value<string>;
}
export default class EventSubscription extends ResourceBase {
    constructor(properties: EventSubscriptionProperties, dependsOn?: Value<string>);
}
