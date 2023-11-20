import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class OutboundCallerConfig {
    OutboundCallerIdNumberArn?: Value<string>;
    OutboundFlowArn?: Value<string>;
    OutboundCallerIdName?: Value<string>;
    constructor(properties: OutboundCallerConfig);
}
export interface QueueProperties {
    Status?: Value<string>;
    HoursOfOperationArn: Value<string>;
    Description?: Value<string>;
    InstanceArn: Value<string>;
    QuickConnectArns?: List<Value<string>>;
    OutboundCallerConfig?: OutboundCallerConfig;
    MaxContacts?: Value<number>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Queue extends ResourceBase<QueueProperties> {
    static OutboundCallerConfig: typeof OutboundCallerConfig;
    constructor(properties: QueueProperties);
}
