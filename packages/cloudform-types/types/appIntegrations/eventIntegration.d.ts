import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EventFilter {
    Source: Value<string>;
    constructor(properties: EventFilter);
}
export interface EventIntegrationProperties {
    Description?: Value<string>;
    EventBridgeBus: Value<string>;
    EventFilter: EventFilter;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class EventIntegration extends ResourceBase<EventIntegrationProperties> {
    static EventFilter: typeof EventFilter;
    constructor(properties: EventIntegrationProperties);
}
