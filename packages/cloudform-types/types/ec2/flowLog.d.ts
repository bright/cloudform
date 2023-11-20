import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DestinationOptions {
    PerHourPartition: Value<boolean>;
    HiveCompatiblePartitions: Value<boolean>;
    FileFormat: Value<string>;
    constructor(properties: DestinationOptions);
}
export interface FlowLogProperties {
    LogFormat?: Value<string>;
    ResourceId: Value<string>;
    MaxAggregationInterval?: Value<number>;
    DestinationOptions?: DestinationOptions;
    ResourceType: Value<string>;
    DeliverCrossAccountRole?: Value<string>;
    LogDestination?: Value<string>;
    LogGroupName?: Value<string>;
    DeliverLogsPermissionArn?: Value<string>;
    LogDestinationType?: Value<string>;
    Tags?: List<ResourceTag>;
    TrafficType?: Value<string>;
}
export default class FlowLog extends ResourceBase<FlowLogProperties> {
    static DestinationOptions: typeof DestinationOptions;
    constructor(properties: FlowLogProperties);
}
