import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CrossChannelBehavior {
    BehaviorType: Value<string>;
    constructor(properties: CrossChannelBehavior);
}
export declare class MediaConcurrency {
    Concurrency: Value<number>;
    Channel: Value<string>;
    CrossChannelBehavior?: CrossChannelBehavior;
    constructor(properties: MediaConcurrency);
}
export declare class RoutingProfileQueueConfig {
    Priority: Value<number>;
    QueueReference: RoutingProfileQueueReference;
    Delay: Value<number>;
    constructor(properties: RoutingProfileQueueConfig);
}
export declare class RoutingProfileQueueReference {
    Channel: Value<string>;
    QueueArn: Value<string>;
    constructor(properties: RoutingProfileQueueReference);
}
export interface RoutingProfileProperties {
    Description: Value<string>;
    MediaConcurrencies: List<MediaConcurrency>;
    InstanceArn: Value<string>;
    AgentAvailabilityTimer?: Value<string>;
    QueueConfigs?: List<RoutingProfileQueueConfig>;
    DefaultOutboundQueueArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class RoutingProfile extends ResourceBase<RoutingProfileProperties> {
    static CrossChannelBehavior: typeof CrossChannelBehavior;
    static MediaConcurrency: typeof MediaConcurrency;
    static RoutingProfileQueueConfig: typeof RoutingProfileQueueConfig;
    static RoutingProfileQueueReference: typeof RoutingProfileQueueReference;
    constructor(properties: RoutingProfileProperties);
}
