import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MetricDimension {
    ComparisonOperator?: Value<string>;
    Value?: Value<number>;
    constructor(properties: MetricDimension);
}
export declare class SetDimension {
    DimensionType?: Value<string>;
    Values?: List<Value<string>>;
    constructor(properties: SetDimension);
}
export declare class AttributeDimension {
    AttributeType?: Value<string>;
    Values?: List<Value<string>>;
    constructor(properties: AttributeDimension);
}
export declare class MessageConfiguration {
    APNSMessage?: Message;
    BaiduMessage?: Message;
    DefaultMessage?: Message;
    EmailMessage?: CampaignEmailMessage;
    GCMMessage?: Message;
    SMSMessage?: CampaignSmsMessage;
    ADMMessage?: Message;
    constructor(properties: MessageConfiguration);
}
export declare class QuietTime {
    Start: Value<string>;
    End: Value<string>;
    constructor(properties: QuietTime);
}
export declare class CampaignHook {
    Mode?: Value<string>;
    WebUrl?: Value<string>;
    LambdaFunctionName?: Value<string>;
    constructor(properties: CampaignHook);
}
export declare class EventDimensions {
    Metrics?: {
        [key: string]: any;
    };
    EventType?: SetDimension;
    Attributes?: {
        [key: string]: any;
    };
    constructor(properties: EventDimensions);
}
export declare class Message {
    JsonBody?: Value<string>;
    Action?: Value<string>;
    MediaUrl?: Value<string>;
    TimeToLive?: Value<number>;
    ImageSmallIconUrl?: Value<string>;
    ImageUrl?: Value<string>;
    Title?: Value<string>;
    ImageIconUrl?: Value<string>;
    SilentPush?: Value<boolean>;
    Body?: Value<string>;
    RawContent?: Value<string>;
    Url?: Value<string>;
    constructor(properties: Message);
}
export declare class Schedule {
    TimeZone?: Value<string>;
    QuietTime?: QuietTime;
    EndTime?: Value<string>;
    StartTime?: Value<string>;
    Frequency?: Value<string>;
    EventFilter?: CampaignEventFilter;
    IsLocalTime?: Value<boolean>;
    constructor(properties: Schedule);
}
export declare class CampaignEventFilter {
    FilterType?: Value<string>;
    Dimensions?: EventDimensions;
    constructor(properties: CampaignEventFilter);
}
export declare class CampaignSmsMessage {
    SenderId?: Value<string>;
    Body?: Value<string>;
    MessageType?: Value<string>;
    constructor(properties: CampaignSmsMessage);
}
export declare class CampaignEmailMessage {
    FromAddress?: Value<string>;
    HtmlBody?: Value<string>;
    Title?: Value<string>;
    Body?: Value<string>;
    constructor(properties: CampaignEmailMessage);
}
export declare class WriteTreatmentResource {
    TreatmentDescription?: Value<string>;
    MessageConfiguration?: MessageConfiguration;
    Schedule?: Schedule;
    SizePercent?: Value<number>;
    TreatmentName?: Value<string>;
    constructor(properties: WriteTreatmentResource);
}
export declare class Limits {
    Daily?: Value<number>;
    MaximumDuration?: Value<number>;
    Total?: Value<number>;
    MessagesPerSecond?: Value<number>;
    constructor(properties: Limits);
}
export interface CampaignProperties {
    Description?: Value<string>;
    SegmentId: Value<string>;
    IsPaused?: Value<boolean>;
    AdditionalTreatments?: List<WriteTreatmentResource>;
    Name: Value<string>;
    SegmentVersion?: Value<number>;
    TreatmentDescription?: Value<string>;
    MessageConfiguration: MessageConfiguration;
    Limits?: Limits;
    HoldoutPercent?: Value<number>;
    Schedule: Schedule;
    ApplicationId: Value<string>;
    CampaignHook?: CampaignHook;
    TreatmentName?: Value<string>;
}
export default class Campaign extends ResourceBase<CampaignProperties> {
    static MetricDimension: typeof MetricDimension;
    static SetDimension: typeof SetDimension;
    static AttributeDimension: typeof AttributeDimension;
    static MessageConfiguration: typeof MessageConfiguration;
    static QuietTime: typeof QuietTime;
    static CampaignHook: typeof CampaignHook;
    static EventDimensions: typeof EventDimensions;
    static Message: typeof Message;
    static Schedule: typeof Schedule;
    static CampaignEventFilter: typeof CampaignEventFilter;
    static CampaignSmsMessage: typeof CampaignSmsMessage;
    static CampaignEmailMessage: typeof CampaignEmailMessage;
    static WriteTreatmentResource: typeof WriteTreatmentResource;
    static Limits: typeof Limits;
    constructor(properties: CampaignProperties);
}
