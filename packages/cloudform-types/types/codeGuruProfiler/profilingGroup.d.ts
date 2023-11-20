import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AgentPermissions {
    Principals: List<Value<string>>;
    constructor(properties: AgentPermissions);
}
export declare class Channel {
    channelUri: Value<string>;
    channelId?: Value<string>;
    constructor(properties: Channel);
}
export interface ProfilingGroupProperties {
    AnomalyDetectionNotificationConfiguration?: List<Channel>;
    AgentPermissions?: AgentPermissions;
    ComputePlatform?: Value<string>;
    ProfilingGroupName: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ProfilingGroup extends ResourceBase<ProfilingGroupProperties> {
    static AgentPermissions: typeof AgentPermissions;
    static Channel: typeof Channel;
    constructor(properties: ProfilingGroupProperties);
}
