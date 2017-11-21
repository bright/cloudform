import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface EventSourceMappingProperties {
    BatchSize?: Value<number>;
    Enabled?: Value<boolean>;
    EventSourceArn: Value<string>;
    FunctionName: Value<string>;
    StartingPosition: Value<string>;
}
export default class EventSourceMapping extends ResourceBase {
    constructor(properties: EventSourceMappingProperties, dependsOn?: Value<string>);
}
