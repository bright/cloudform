import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface NotificationChannelProperties {
    SnsRoleName: Value<string>;
    SnsTopicArn: Value<string>;
}
export default class NotificationChannel extends ResourceBase<NotificationChannelProperties> {
    constructor(properties: NotificationChannelProperties);
}
