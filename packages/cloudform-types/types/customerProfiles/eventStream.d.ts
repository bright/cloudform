import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DestinationDetails {
    Status: Value<string>;
    Uri: Value<string>;
    constructor(properties: DestinationDetails);
}
export interface EventStreamProperties {
    DomainName: Value<string>;
    EventStreamName: Value<string>;
    Uri: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class EventStream extends ResourceBase<EventStreamProperties> {
    static DestinationDetails: typeof DestinationDetails;
    constructor(properties: EventStreamProperties);
}
