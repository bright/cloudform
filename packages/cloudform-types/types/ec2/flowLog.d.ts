import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface FlowLogProperties {
    DeliverLogsPermissionArn?: Value<string>;
    LogDestination?: Value<string>;
    LogDestinationType?: Value<string>;
    LogFormat?: Value<string>;
    LogGroupName?: Value<string>;
    MaxAggregationInterval?: Value<number>;
    ResourceId: Value<string>;
    ResourceType: Value<string>;
    Tags?: List<ResourceTag>;
    TrafficType: Value<string>;
}
export default class FlowLog extends ResourceBase<FlowLogProperties> {
    constructor(properties: FlowLogProperties);
}
