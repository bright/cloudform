import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface EventBusProperties {
    Policy?: {
        [key: string]: any;
    };
    EventSourceName?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class EventBus extends ResourceBase<EventBusProperties> {
    constructor(properties: EventBusProperties);
}
