import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface NotificationChannelProperties {
    SnsTopicArn: Value<string>;
    SnsRoleName: Value<string>;
}
export default class NotificationChannel extends ResourceBase<NotificationChannelProperties> {
    constructor(properties: NotificationChannelProperties);
}
