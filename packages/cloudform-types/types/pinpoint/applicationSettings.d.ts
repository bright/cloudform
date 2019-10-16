import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Limits {
    Daily?: Value<number>;
    MaximumDuration?: Value<number>;
    Total?: Value<number>;
    MessagesPerSecond?: Value<number>;
    constructor(properties: Limits);
}
export declare class CampaignHook {
    Mode?: Value<string>;
    WebUrl?: Value<string>;
    LambdaFunctionName?: Value<string>;
    constructor(properties: CampaignHook);
}
export declare class QuietTime {
    Start: Value<string>;
    End: Value<string>;
    constructor(properties: QuietTime);
}
export interface ApplicationSettingsProperties {
    QuietTime?: QuietTime;
    Limits?: Limits;
    ApplicationId: Value<string>;
    CampaignHook?: CampaignHook;
    CloudWatchMetricsEnabled?: Value<boolean>;
}
export default class ApplicationSettings extends ResourceBase<ApplicationSettingsProperties> {
    static Limits: typeof Limits;
    static CampaignHook: typeof CampaignHook;
    static QuietTime: typeof QuietTime;
    constructor(properties: ApplicationSettingsProperties);
}
