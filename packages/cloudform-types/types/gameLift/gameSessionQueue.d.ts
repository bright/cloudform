import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Destination {
    DestinationArn?: Value<string>;
    constructor(properties: Destination);
}
export declare class PlayerLatencyPolicy {
    PolicyDurationSeconds?: Value<number>;
    MaximumIndividualPlayerLatencyMilliseconds?: Value<number>;
    constructor(properties: PlayerLatencyPolicy);
}
export interface GameSessionQueueProperties {
    TimeoutInSeconds?: Value<number>;
    PlayerLatencyPolicies?: List<PlayerLatencyPolicy>;
    Destinations?: List<Destination>;
    Name: Value<string>;
}
export default class GameSessionQueue extends ResourceBase<GameSessionQueueProperties> {
    static Destination: typeof Destination;
    static PlayerLatencyPolicy: typeof PlayerLatencyPolicy;
    constructor(properties: GameSessionQueueProperties);
}
