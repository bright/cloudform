import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MessageReviewHandler {
    FallbackResult?: Value<string>;
    Uri?: Value<string>;
    constructor(properties: MessageReviewHandler);
}
export interface RoomProperties {
    MaximumMessageRatePerSecond?: Value<number>;
    MaximumMessageLength?: Value<number>;
    MessageReviewHandler?: MessageReviewHandler;
    LoggingConfigurationIdentifiers?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Room extends ResourceBase<RoomProperties> {
    static MessageReviewHandler: typeof MessageReviewHandler;
    constructor(properties?: RoomProperties);
}
