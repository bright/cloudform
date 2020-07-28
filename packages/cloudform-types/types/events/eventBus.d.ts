import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface EventBusProperties {
    EventSourceName?: Value<string>;
    Name: Value<string>;
}
export default class EventBus extends ResourceBase<EventBusProperties> {
    constructor(properties: EventBusProperties);
}
