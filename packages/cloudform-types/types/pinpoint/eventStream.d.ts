import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface EventStreamProperties {
    ApplicationId: Value<string>;
    DestinationStreamArn: Value<string>;
    RoleArn: Value<string>;
}
export default class EventStream extends ResourceBase<EventStreamProperties> {
    constructor(properties: EventStreamProperties);
}
