/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MetricDimension {
    ComparisonOperator?: Value<string>
    Value?: Value<number>

    constructor(properties: MetricDimension) {
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

export class EventDimensions {
    Metrics?: {[key: string]: any}
    EventType?: SetDimension
    Attributes?: {[key: string]: any}

    constructor(properties: EventDimensions) {
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

export class Limits {
    Daily?: Value<number>
    MaximumDuration?: Value<number>
    Total?: Value<number>
    MessagesPerSecond?: Value<number>

    constructor(properties: Limits) {
        Object.assign(this, properties)
    }
}

export class AttributeDimension {
    AttributeType?: Value<string>
    Values?: List<Value<string>>

    constructor(properties: AttributeDimension) {
        Object.assign(this, properties)
    }
}

export class MessageConfiguration {
    APNSMessage?: Message
    BaiduMessage?: Message
    DefaultMessage?: Message
    EmailMessage?: CampaignEmailMessage
    GCMMessage?: Message
    SMSMessage?: CampaignSmsMessage
    ADMMessage?: Message

    constructor(properties: MessageConfiguration) {
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

export class CampaignHook {
    Mode?: Value<string>
    WebUrl?: Value<string>
    LambdaFunctionName?: Value<string>

    constructor(properties: CampaignHook) {
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

export class CampaignEventFilter {
    FilterType?: Value<string>
    Dimensions?: EventDimensions

    constructor(properties: CampaignEventFilter) {
        Object.assign(this, properties)
    }
}

export class CampaignSmsMessage {
    SenderId?: Value<string>
    Body?: Value<string>
    MessageType?: Value<string>

    constructor(properties: CampaignSmsMessage) {
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

export class WriteTreatmentResource {
    TreatmentDescription?: Value<string>
    MessageConfiguration?: MessageConfiguration
    Schedule?: Schedule
    SizePercent?: Value<number>
    TreatmentName?: Value<string>

    constructor(properties: WriteTreatmentResource) {
        Object.assign(this, properties)
    }
}

export interface CampaignProperties {
    Description?: Value<string>
    SegmentId: Value<string>
    IsPaused?: Value<boolean>
    AdditionalTreatments?: List<WriteTreatmentResource>
    Name: Value<string>
    SegmentVersion?: Value<number>
    TreatmentDescription?: Value<string>
    MessageConfiguration: MessageConfiguration
    Limits?: Limits
    HoldoutPercent?: Value<number>
    Schedule: Schedule
    ApplicationId: Value<string>
    CampaignHook?: CampaignHook
    Tags?: {[key: string]: any}
    TreatmentName?: Value<string>
}

export default class Campaign extends ResourceBase<CampaignProperties> {
    static MetricDimension = MetricDimension
    static SetDimension = SetDimension
    static EventDimensions = EventDimensions
    static Schedule = Schedule
    static Limits = Limits
    static AttributeDimension = AttributeDimension
    static MessageConfiguration = MessageConfiguration
    static QuietTime = QuietTime
    static CampaignHook = CampaignHook
    static Message = Message
    static CampaignEventFilter = CampaignEventFilter
    static CampaignSmsMessage = CampaignSmsMessage
    static CampaignEmailMessage = CampaignEmailMessage
    static WriteTreatmentResource = WriteTreatmentResource

    constructor(properties: CampaignProperties) {
        super('AWS::Pinpoint::Campaign', properties)
    }
}
