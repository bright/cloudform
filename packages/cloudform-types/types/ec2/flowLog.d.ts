import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface FlowLogProperties {
    DeliverLogsPermissionArn?: Value<string>;
    LogDestination?: Value<string>;
    LogDestinationType?: Value<string>;
    LogGroupName?: Value<string>;
    ResourceId: Value<string>;
    ResourceType: Value<string>;
    TrafficType: Value<string>;
}
export default class FlowLog extends ResourceBase<FlowLogProperties> {
    constructor(properties: FlowLogProperties);
}
