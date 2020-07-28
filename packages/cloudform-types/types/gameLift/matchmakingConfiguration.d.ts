import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class GameProperty {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: GameProperty);
}
export interface MatchmakingConfigurationProperties {
    GameProperties?: List<GameProperty>;
    GameSessionData?: Value<string>;
    Description?: Value<string>;
    AcceptanceTimeoutSeconds?: Value<number>;
    NotificationTarget?: Value<string>;
    CustomEventData?: Value<string>;
    Name: Value<string>;
    AdditionalPlayerCount?: Value<number>;
    BackfillMode?: Value<string>;
    RequestTimeoutSeconds: Value<number>;
    AcceptanceRequired: Value<boolean>;
    RuleSetName: Value<string>;
    GameSessionQueueArns: List<Value<string>>;
}
export default class MatchmakingConfiguration extends ResourceBase<MatchmakingConfigurationProperties> {
    static GameProperty: typeof GameProperty;
    constructor(properties: MatchmakingConfigurationProperties);
}
