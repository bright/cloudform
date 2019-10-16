import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface EventSourceMappingProperties {
    BatchSize?: Value<number>;
    Enabled?: Value<boolean>;
    EventSourceArn: Value<string>;
    FunctionName: Value<string>;
    MaximumBatchingWindowInSeconds?: Value<number>;
    StartingPosition?: Value<string>;
}
export default class EventSourceMapping extends ResourceBase<EventSourceMappingProperties> {
    constructor(properties: EventSourceMappingProperties);
}
