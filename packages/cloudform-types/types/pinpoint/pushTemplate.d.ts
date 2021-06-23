import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DefaultPushNotificationTemplate {
    Action?: Value<string>;
    Title?: Value<string>;
    Sound?: Value<string>;
    Body?: Value<string>;
    Url?: Value<string>;
    constructor(properties: DefaultPushNotificationTemplate);
}
export declare class AndroidPushNotificationTemplate {
    Action?: Value<string>;
    ImageUrl?: Value<string>;
    SmallImageIconUrl?: Value<string>;
    Title?: Value<string>;
    ImageIconUrl?: Value<string>;
    Sound?: Value<string>;
    Body?: Value<string>;
    Url?: Value<string>;
    constructor(properties: AndroidPushNotificationTemplate);
}
export declare class APNSPushNotificationTemplate {
    Action?: Value<string>;
    MediaUrl?: Value<string>;
    Title?: Value<string>;
    Sound?: Value<string>;
    Body?: Value<string>;
    Url?: Value<string>;
    constructor(properties: APNSPushNotificationTemplate);
}
export interface PushTemplateProperties {
    GCM?: AndroidPushNotificationTemplate;
    Baidu?: AndroidPushNotificationTemplate;
    TemplateName: Value<string>;
    ADM?: AndroidPushNotificationTemplate;
    APNS?: APNSPushNotificationTemplate;
    TemplateDescription?: Value<string>;
    DefaultSubstitutions?: Value<string>;
    Default?: DefaultPushNotificationTemplate;
    Tags?: {
        [key: string]: any;
    };
}
export default class PushTemplate extends ResourceBase<PushTemplateProperties> {
    static DefaultPushNotificationTemplate: typeof DefaultPushNotificationTemplate;
    static AndroidPushNotificationTemplate: typeof AndroidPushNotificationTemplate;
    static APNSPushNotificationTemplate: typeof APNSPushNotificationTemplate;
    constructor(properties: PushTemplateProperties);
}
