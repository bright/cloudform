import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Channel {
    channelId?: Value<string>;
    channelUri: Value<string>;
    constructor(properties: Channel);
}
export interface ProfilingGroupProperties {
    ProfilingGroupName: Value<string>;
    ComputePlatform?: Value<string>;
    AgentPermissions?: {
        [key: string]: any;
    };
    AnomalyDetectionNotificationConfiguration?: List<Channel>;
    Tags?: List<ResourceTag>;
}
export default class ProfilingGroup extends ResourceBase<ProfilingGroupProperties> {
    static Channel: typeof Channel;
    constructor(properties: ProfilingGroupProperties);
}
