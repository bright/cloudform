import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class NotificationChannelConfig {
    Sns?: SnsChannelConfig;
    constructor(properties: NotificationChannelConfig);
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
    static SnsChannelConfig: typeof SnsChannelConfig;
    constructor(properties: NotificationChannelProperties);
}
