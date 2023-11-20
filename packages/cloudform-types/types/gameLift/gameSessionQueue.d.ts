import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Destination {
    DestinationArn?: Value<string>;
    constructor(properties: Destination);
}
export declare class FilterConfiguration {
    AllowedLocations?: List<Value<string>>;
    constructor(properties: FilterConfiguration);
}
export declare class PlayerLatencyPolicy {
    PolicyDurationSeconds?: Value<number>;
    MaximumIndividualPlayerLatencyMilliseconds?: Value<number>;
    constructor(properties: PlayerLatencyPolicy);
}
export declare class PriorityConfiguration {
    PriorityOrder?: List<Value<string>>;
    LocationOrder?: List<Value<string>>;
    constructor(properties: PriorityConfiguration);
}
export interface GameSessionQueueProperties {
    TimeoutInSeconds?: Value<number>;
    PlayerLatencyPolicies?: List<PlayerLatencyPolicy>;
    Destinations?: List<Destination>;
    NotificationTarget?: Value<string>;
    FilterConfiguration?: FilterConfiguration;
    CustomEventData?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    PriorityConfiguration?: PriorityConfiguration;
}
export default class GameSessionQueue extends ResourceBase<GameSessionQueueProperties> {
    static Destination: typeof Destination;
    static FilterConfiguration: typeof FilterConfiguration;
    static PlayerLatencyPolicy: typeof PlayerLatencyPolicy;
    static PriorityConfiguration: typeof PriorityConfiguration;
    constructor(properties: GameSessionQueueProperties);
}
