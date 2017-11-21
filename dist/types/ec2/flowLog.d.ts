import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type ResourceType = "*" | "VPC" | "Subnet" | "NetworkInterface";
export declare type TrafficType = "*" | "ACCEPT" | "REJECT" | "ALL";
export interface FlowLogProperties {
    DeliverLogsPermissionArn: Value<string>;
    LogGroupName: Value<string>;
    ResourceId: Value<string>;
    ResourceType: Value<ResourceType>;
    TrafficType: Value<TrafficType>;
}
export default class FlowLog extends ResourceBase {
    constructor(properties: FlowLogProperties, dependsOn?: Value<string>);
}
