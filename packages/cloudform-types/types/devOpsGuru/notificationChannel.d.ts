import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class NotificationChannelConfig {
    Filters?: NotificationFilterConfig;
    Sns?: SnsChannelConfig;
    constructor(properties: NotificationChannelConfig);
}
export declare class NotificationFilterConfig {
    MessageTypes?: List<Value<string>>;
    Severities?: List<Value<string>>;
    constructor(properties: NotificationFilterConfig);
}
export declare class SnsChannelConfig {
    TopicArn?: Value<string>;
    constructor(properties: SnsChannelConfig);
}
export interface NotificationChannelProperties {
    Config: NotificationChannelConfig;
}
export default class NotificationChannel extends ResourceBase<NotificationChannelProperties> {
    static NotificationChannelConfig: typeof NotificationChannelConfig;
    static NotificationFilterConfig: typeof NotificationFilterConfig;
    static SnsChannelConfig: typeof SnsChannelConfig;
    constructor(properties: NotificationChannelProperties);
}
