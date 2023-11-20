/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AttributeDimension {
    AttributeType?: Value<string>
    Values?: List<Value<string>>

    constructor(properties: AttributeDimension) {
        Object.assign(this, properties)
    }
}

export class CampaignCustomMessage {
    Data?: Value<string>

    constructor(properties: CampaignCustomMessage) {
        Object.assign(this, properties)
    }
}

export class CampaignEmailMessage {
    FromAddress?: Value<string>
    HtmlBody?: Value<string>
    Title?: Value<string>
    Body?: Value<string>

    constructor(properties: CampaignEmailMessage) {
        Object.assign(this, properties)
    }
}

export class CampaignEventFilter {
    FilterType?: Value<string>
    Dimensions?: EventDimensions

    constructor(properties: CampaignEventFilter) {
        Object.assign(this, properties)
    }
}

export class CampaignHook {
    Mode?: Value<string>
    WebUrl?: Value<string>
    LambdaFunctionName?: Value<string>

    constructor(properties: CampaignHook) {
        Object.assign(this, properties)
    }
}

export class CampaignInAppMessage {
    CustomConfig?: {[key: string]: any}
    Layout?: Value<string>
    Content?: List<InAppMessageContent>

    constructor(properties: CampaignInAppMessage) {
        Object.assign(this, properties)
    }
}

export class CampaignSmsMessage {
    EntityId?: Value<string>
    OriginationNumber?: Value<string>
    SenderId?: Value<string>
    Body?: Value<string>
    MessageType?: Value<string>
    TemplateId?: Value<string>

    constructor(properties: CampaignSmsMessage) {
        Object.assign(this, properties)
    }
}

export class CustomDeliveryConfiguration {
    DeliveryUri?: Value<string>
    EndpointTypes?: List<Value<string>>

    constructor(properties: CustomDeliveryConfiguration) {
        Object.assign(this, properties)
    }
}

export class DefaultButtonConfiguration {
    ButtonAction?: Value<string>
    BorderRadius?: Value<number>
    Text?: Value<string>
    TextColor?: Value<string>
    Link?: Value<string>
    BackgroundColor?: Value<string>

    constructor(properties: DefaultButtonConfiguration) {
        Object.assign(this, properties)
    }
}

export class EventDimensions {
    Metrics?: {[key: string]: any}
    EventType?: SetDimension
    Attributes?: {[key: string]: any}

    constructor(properties: EventDimensions) {
        Object.assign(this, properties)
    }
}

export class InAppMessageBodyConfig {
    Alignment?: Value<string>
    TextColor?: Value<string>
    Body?: Value<string>

    constructor(properties: InAppMessageBodyConfig) {
        Object.assign(this, properties)
    }
}

export class InAppMessageButton {
    Web?: OverrideButtonConfiguration
    DefaultConfig?: DefaultButtonConfiguration
    IOS?: OverrideButtonConfiguration
    Android?: OverrideButtonConfiguration

    constructor(properties: InAppMessageButton) {
        Object.assign(this, properties)
    }
}

export class InAppMessageContent {
    BodyConfig?: InAppMessageBodyConfig
    SecondaryBtn?: InAppMessageButton
    ImageUrl?: Value<string>
    PrimaryBtn?: InAppMessageButton
    HeaderConfig?: InAppMessageHeaderConfig
    BackgroundColor?: Value<string>

    constructor(properties: InAppMessageContent) {
        Object.assign(this, properties)
    }
}

export class InAppMessageHeaderConfig {
    Alignment?: Value<string>
    Header?: Value<string>
    TextColor?: Value<string>

    constructor(properties: InAppMessageHeaderConfig) {
        Object.assign(this, properties)
    }
}

export class Limits {
    Daily?: Value<number>
    MaximumDuration?: Value<number>
    Total?: Value<number>
    MessagesPerSecond?: Value<number>
    Session?: Value<number>

    constructor(properties: Limits) {
        Object.assign(this, properties)
    }
}

export class Message {
    JsonBody?: Value<string>
    Action?: Value<string>
    MediaUrl?: Value<string>
    TimeToLive?: Value<number>
    ImageSmallIconUrl?: Value<string>
    ImageUrl?: Value<string>
    Title?: Value<string>
    ImageIconUrl?: Value<string>
    SilentPush?: Value<boolean>
    Body?: Value<string>
    RawContent?: Value<string>
    Url?: Value<string>

    constructor(properties: Message) {
        Object.assign(this, properties)
    }
}

export class MessageConfiguration {
    APNSMessage?: Message
    BaiduMessage?: Message
    DefaultMessage?: Message
    InAppMessage?: CampaignInAppMessage
    EmailMessage?: CampaignEmailMessage
    GCMMessage?: Message
    SMSMessage?: CampaignSmsMessage
    CustomMessage?: CampaignCustomMessage
    ADMMessage?: Message

    constructor(properties: MessageConfiguration) {
        Object.assign(this, properties)
    }
}

export class MetricDimension {
    ComparisonOperator?: Value<string>
    Value?: Value<number>

    constructor(properties: MetricDimension) {
        Object.assign(this, properties)
    }
}

export class OverrideButtonConfiguration {
    ButtonAction?: Value<string>
    Link?: Value<string>

    constructor(properties: OverrideButtonConfiguration) {
        Object.assign(this, properties)
    }
}

export class QuietTime {
    Start!: Value<string>
    End!: Value<string>

    constructor(properties: QuietTime) {
        Object.assign(this, properties)
    }
}

export class Schedule {
    TimeZone?: Value<string>
    QuietTime?: QuietTime
    EndTime?: Value<string>
    StartTime?: Value<string>
    Frequency?: Value<string>
    EventFilter?: CampaignEventFilter
    IsLocalTime?: Value<boolean>

    constructor(properties: Schedule) {
        Object.assign(this, properties)
    }
}

export class SetDimension {
    DimensionType?: Value<string>
    Values?: List<Value<string>>

    constructor(properties: SetDimension) {
        Object.assign(this, properties)
    }
}

export class Template {
    Version?: Value<string>
    Name?: Value<string>

    constructor(properties: Template) {
        Object.assign(this, properties)
    }
}

export class TemplateConfiguration {
    SMSTemplate?: Template
    EmailTemplate?: Template
    PushTemplate?: Template
    VoiceTemplate?: Template

    constructor(properties: TemplateConfiguration) {
        Object.assign(this, properties)
    }
}

export class WriteTreatmentResource {
    TreatmentDescription?: Value<string>
    MessageConfiguration?: MessageConfiguration
    Schedule?: Schedule
    TemplateConfiguration?: TemplateConfiguration
    CustomDeliveryConfiguration?: CustomDeliveryConfiguration
    SizePercent?: Value<number>
    TreatmentName?: Value<string>

    constructor(properties: WriteTreatmentResource) {
        Object.assign(this, properties)
    }
}

export interface CampaignProperties {
    Description?: Value<string>
    SegmentId: Value<string>
    Priority?: Value<number>
    TemplateConfiguration?: TemplateConfiguration
    IsPaused?: Value<boolean>
    AdditionalTreatments?: List<WriteTreatmentResource>
    Name: Value<string>
    SegmentVersion?: Value<number>
    TreatmentDescription?: Value<string>
    MessageConfiguration?: MessageConfiguration
    Limits?: Limits
    HoldoutPercent?: Value<number>
    Schedule: Schedule
    CustomDeliveryConfiguration?: CustomDeliveryConfiguration
    ApplicationId: Value<string>
    CampaignHook?: CampaignHook
    Tags?: {[key: string]: any}
    TreatmentName?: Value<string>
}

export default class Campaign extends ResourceBase<CampaignProperties> {
    static AttributeDimension = AttributeDimension
    static CampaignCustomMessage = CampaignCustomMessage
    static CampaignEmailMessage = CampaignEmailMessage
    static CampaignEventFilter = CampaignEventFilter
    static CampaignHook = CampaignHook
    static CampaignInAppMessage = CampaignInAppMessage
    static CampaignSmsMessage = CampaignSmsMessage
    static CustomDeliveryConfiguration = CustomDeliveryConfiguration
    static DefaultButtonConfiguration = DefaultButtonConfiguration
    static EventDimensions = EventDimensions
    static InAppMessageBodyConfig = InAppMessageBodyConfig
    static InAppMessageButton = InAppMessageButton
    static InAppMessageContent = InAppMessageContent
    static InAppMessageHeaderConfig = InAppMessageHeaderConfig
    static Limits = Limits
    static Message = Message
    static MessageConfiguration = MessageConfiguration
    static MetricDimension = MetricDimension
    static OverrideButtonConfiguration = OverrideButtonConfiguration
    static QuietTime = QuietTime
    static Schedule = Schedule
    static SetDimension = SetDimension
    static Template = Template
    static TemplateConfiguration = TemplateConfiguration
    static WriteTreatmentResource = WriteTreatmentResource

    constructor(properties: CampaignProperties) {
        super('AWS::Pinpoint::Campaign', properties)
    }
}
