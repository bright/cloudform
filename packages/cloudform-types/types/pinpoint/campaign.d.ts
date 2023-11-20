import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AttributeDimension {
    AttributeType?: Value<string>;
    Values?: List<Value<string>>;
    constructor(properties: AttributeDimension);
}
export declare class CampaignCustomMessage {
    Data?: Value<string>;
    constructor(properties: CampaignCustomMessage);
}
export declare class CampaignEmailMessage {
    FromAddress?: Value<string>;
    HtmlBody?: Value<string>;
    Title?: Value<string>;
    Body?: Value<string>;
    constructor(properties: CampaignEmailMessage);
}
export declare class CampaignEventFilter {
    FilterType?: Value<string>;
    Dimensions?: EventDimensions;
    constructor(properties: CampaignEventFilter);
}
export declare class CampaignHook {
    Mode?: Value<string>;
    WebUrl?: Value<string>;
    LambdaFunctionName?: Value<string>;
    constructor(properties: CampaignHook);
}
export declare class CampaignInAppMessage {
    CustomConfig?: {
        [key: string]: any;
    };
    Layout?: Value<string>;
    Content?: List<InAppMessageContent>;
    constructor(properties: CampaignInAppMessage);
}
export declare class CampaignSmsMessage {
    EntityId?: Value<string>;
    OriginationNumber?: Value<string>;
    SenderId?: Value<string>;
    Body?: Value<string>;
    MessageType?: Value<string>;
    TemplateId?: Value<string>;
    constructor(properties: CampaignSmsMessage);
}
export declare class CustomDeliveryConfiguration {
    DeliveryUri?: Value<string>;
    EndpointTypes?: List<Value<string>>;
    constructor(properties: CustomDeliveryConfiguration);
}
export declare class DefaultButtonConfiguration {
    ButtonAction?: Value<string>;
    BorderRadius?: Value<number>;
    Text?: Value<string>;
    TextColor?: Value<string>;
    Link?: Value<string>;
    BackgroundColor?: Value<string>;
    constructor(properties: DefaultButtonConfiguration);
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
export declare class InAppMessageBodyConfig {
    Alignment?: Value<string>;
    TextColor?: Value<string>;
    Body?: Value<string>;
    constructor(properties: InAppMessageBodyConfig);
}
export declare class InAppMessageButton {
    Web?: OverrideButtonConfiguration;
    DefaultConfig?: DefaultButtonConfiguration;
    IOS?: OverrideButtonConfiguration;
    Android?: OverrideButtonConfiguration;
    constructor(properties: InAppMessageButton);
}
export declare class InAppMessageContent {
    BodyConfig?: InAppMessageBodyConfig;
    SecondaryBtn?: InAppMessageButton;
    ImageUrl?: Value<string>;
    PrimaryBtn?: InAppMessageButton;
    HeaderConfig?: InAppMessageHeaderConfig;
    BackgroundColor?: Value<string>;
    constructor(properties: InAppMessageContent);
}
export declare class InAppMessageHeaderConfig {
    Alignment?: Value<string>;
    Header?: Value<string>;
    TextColor?: Value<string>;
    constructor(properties: InAppMessageHeaderConfig);
}
export declare class Limits {
    Daily?: Value<number>;
    MaximumDuration?: Value<number>;
    Total?: Value<number>;
    MessagesPerSecond?: Value<number>;
    Session?: Value<number>;
    constructor(properties: Limits);
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
export declare class MessageConfiguration {
    APNSMessage?: Message;
    BaiduMessage?: Message;
    DefaultMessage?: Message;
    InAppMessage?: CampaignInAppMessage;
    EmailMessage?: CampaignEmailMessage;
    GCMMessage?: Message;
    SMSMessage?: CampaignSmsMessage;
    CustomMessage?: CampaignCustomMessage;
    ADMMessage?: Message;
    constructor(properties: MessageConfiguration);
}
export declare class MetricDimension {
    ComparisonOperator?: Value<string>;
    Value?: Value<number>;
    constructor(properties: MetricDimension);
}
export declare class OverrideButtonConfiguration {
    ButtonAction?: Value<string>;
    Link?: Value<string>;
    constructor(properties: OverrideButtonConfiguration);
}
export declare class QuietTime {
    Start: Value<string>;
    End: Value<string>;
    constructor(properties: QuietTime);
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
export declare class SetDimension {
    DimensionType?: Value<string>;
    Values?: List<Value<string>>;
    constructor(properties: SetDimension);
}
export declare class Template {
    Version?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Template);
}
export declare class TemplateConfiguration {
    SMSTemplate?: Template;
    EmailTemplate?: Template;
    PushTemplate?: Template;
    VoiceTemplate?: Template;
    constructor(properties: TemplateConfiguration);
}
export declare class WriteTreatmentResource {
    TreatmentDescription?: Value<string>;
    MessageConfiguration?: MessageConfiguration;
    Schedule?: Schedule;
    TemplateConfiguration?: TemplateConfiguration;
    CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
    SizePercent?: Value<number>;
    TreatmentName?: Value<string>;
    constructor(properties: WriteTreatmentResource);
}
export interface CampaignProperties {
    Description?: Value<string>;
    SegmentId: Value<string>;
    Priority?: Value<number>;
    TemplateConfiguration?: TemplateConfiguration;
    IsPaused?: Value<boolean>;
    AdditionalTreatments?: List<WriteTreatmentResource>;
    Name: Value<string>;
    SegmentVersion?: Value<number>;
    TreatmentDescription?: Value<string>;
    MessageConfiguration?: MessageConfiguration;
    Limits?: Limits;
    HoldoutPercent?: Value<number>;
    Schedule: Schedule;
    CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
    ApplicationId: Value<string>;
    CampaignHook?: CampaignHook;
    Tags?: {
        [key: string]: any;
    };
    TreatmentName?: Value<string>;
}
export default class Campaign extends ResourceBase<CampaignProperties> {
    static AttributeDimension: typeof AttributeDimension;
    static CampaignCustomMessage: typeof CampaignCustomMessage;
    static CampaignEmailMessage: typeof CampaignEmailMessage;
    static CampaignEventFilter: typeof CampaignEventFilter;
    static CampaignHook: typeof CampaignHook;
    static CampaignInAppMessage: typeof CampaignInAppMessage;
    static CampaignSmsMessage: typeof CampaignSmsMessage;
    static CustomDeliveryConfiguration: typeof CustomDeliveryConfiguration;
    static DefaultButtonConfiguration: typeof DefaultButtonConfiguration;
    static EventDimensions: typeof EventDimensions;
    static InAppMessageBodyConfig: typeof InAppMessageBodyConfig;
    static InAppMessageButton: typeof InAppMessageButton;
    static InAppMessageContent: typeof InAppMessageContent;
    static InAppMessageHeaderConfig: typeof InAppMessageHeaderConfig;
    static Limits: typeof Limits;
    static Message: typeof Message;
    static MessageConfiguration: typeof MessageConfiguration;
    static MetricDimension: typeof MetricDimension;
    static OverrideButtonConfiguration: typeof OverrideButtonConfiguration;
    static QuietTime: typeof QuietTime;
    static Schedule: typeof Schedule;
    static SetDimension: typeof SetDimension;
    static Template: typeof Template;
    static TemplateConfiguration: typeof TemplateConfiguration;
    static WriteTreatmentResource: typeof WriteTreatmentResource;
    constructor(properties: CampaignProperties);
}
