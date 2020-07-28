/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MediaPackageOutputDestinationSettings {
    ChannelId?: Value<string>

    constructor(properties: MediaPackageOutputDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class HlsInputSettings {
    BufferSegments?: Value<number>
    Retries?: Value<number>
    Bandwidth?: Value<number>
    RetryInterval?: Value<number>

    constructor(properties: HlsInputSettings) {
        Object.assign(this, properties)
    }
}

export class VideoSelectorProgramId {
    ProgramId?: Value<number>

    constructor(properties: VideoSelectorProgramId) {
        Object.assign(this, properties)
    }
}

export class InputAttachment {
    InputAttachmentName?: Value<string>
    InputId?: Value<string>
    InputSettings?: InputSettings

    constructor(properties: InputAttachment) {
        Object.assign(this, properties)
    }
}

export class MultiplexProgramChannelDestinationSettings {
    MultiplexId?: Value<string>
    ProgramName?: Value<string>

    constructor(properties: MultiplexProgramChannelDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class EmbeddedSourceSettings {
    Source608ChannelNumber?: Value<number>
    Scte20Detection?: Value<string>
    Source608TrackNumber?: Value<number>
    Convert608To708?: Value<string>

    constructor(properties: EmbeddedSourceSettings) {
        Object.assign(this, properties)
    }
}

export class InputSpecification {
    Codec?: Value<string>
    MaximumBitrate?: Value<string>
    Resolution?: Value<string>

    constructor(properties: InputSpecification) {
        Object.assign(this, properties)
    }
}

export class Scte27SourceSettings {
    Pid?: Value<number>

    constructor(properties: Scte27SourceSettings) {
        Object.assign(this, properties)
    }
}

export class VideoSelectorPid {
    Pid?: Value<number>

    constructor(properties: VideoSelectorPid) {
        Object.assign(this, properties)
    }
}

export class InputSettings {
    DeblockFilter?: Value<string>
    FilterStrength?: Value<number>
    InputFilter?: Value<string>
    SourceEndBehavior?: Value<string>
    VideoSelector?: VideoSelector
    AudioSelectors?: List<AudioSelector>
    CaptionSelectors?: List<CaptionSelector>
    DenoiseFilter?: Value<string>
    NetworkInputSettings?: NetworkInputSettings

    constructor(properties: InputSettings) {
        Object.assign(this, properties)
    }
}

export class AudioSelector {
    SelectorSettings?: AudioSelectorSettings
    Name?: Value<string>

    constructor(properties: AudioSelector) {
        Object.assign(this, properties)
    }
}

export class AudioLanguageSelection {
    LanguageCode?: Value<string>
    LanguageSelectionPolicy?: Value<string>

    constructor(properties: AudioLanguageSelection) {
        Object.assign(this, properties)
    }
}

export class AribSourceSettings {


    constructor(properties: AribSourceSettings) {
        Object.assign(this, properties)
    }
}

export class AudioPidSelection {
    Pid?: Value<number>

    constructor(properties: AudioPidSelection) {
        Object.assign(this, properties)
    }
}

export class DvbSubSourceSettings {
    Pid?: Value<number>

    constructor(properties: DvbSubSourceSettings) {
        Object.assign(this, properties)
    }
}

export class CaptionSelectorSettings {
    DvbSubSourceSettings?: DvbSubSourceSettings
    Scte27SourceSettings?: Scte27SourceSettings
    AribSourceSettings?: AribSourceSettings
    EmbeddedSourceSettings?: EmbeddedSourceSettings
    Scte20SourceSettings?: Scte20SourceSettings
    TeletextSourceSettings?: TeletextSourceSettings

    constructor(properties: CaptionSelectorSettings) {
        Object.assign(this, properties)
    }
}

export class VideoSelectorSettings {
    VideoSelectorProgramId?: VideoSelectorProgramId
    VideoSelectorPid?: VideoSelectorPid

    constructor(properties: VideoSelectorSettings) {
        Object.assign(this, properties)
    }
}

export class TeletextSourceSettings {
    PageNumber?: Value<string>

    constructor(properties: TeletextSourceSettings) {
        Object.assign(this, properties)
    }
}

export class NetworkInputSettings {
    ServerValidation?: Value<string>
    HlsInputSettings?: HlsInputSettings

    constructor(properties: NetworkInputSettings) {
        Object.assign(this, properties)
    }
}

export class Scte20SourceSettings {
    Source608ChannelNumber?: Value<number>
    Convert608To708?: Value<string>

    constructor(properties: Scte20SourceSettings) {
        Object.assign(this, properties)
    }
}

export class AudioSelectorSettings {
    AudioPidSelection?: AudioPidSelection
    AudioLanguageSelection?: AudioLanguageSelection

    constructor(properties: AudioSelectorSettings) {
        Object.assign(this, properties)
    }
}

export class VideoSelector {
    SelectorSettings?: VideoSelectorSettings
    ColorSpace?: Value<string>
    ColorSpaceUsage?: Value<string>

    constructor(properties: VideoSelector) {
        Object.assign(this, properties)
    }
}

export class OutputDestinationSettings {
    StreamName?: Value<string>
    Username?: Value<string>
    PasswordParam?: Value<string>
    Url?: Value<string>

    constructor(properties: OutputDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class OutputDestination {
    MultiplexSettings?: MultiplexProgramChannelDestinationSettings
    Id?: Value<string>
    Settings?: List<OutputDestinationSettings>
    MediaPackageSettings?: List<MediaPackageOutputDestinationSettings>

    constructor(properties: OutputDestination) {
        Object.assign(this, properties)
    }
}

export class CaptionSelector {
    LanguageCode?: Value<string>
    SelectorSettings?: CaptionSelectorSettings
    Name?: Value<string>

    constructor(properties: CaptionSelector) {
        Object.assign(this, properties)
    }
}

export interface ChannelProperties {
    InputAttachments?: List<InputAttachment>
    InputSpecification?: InputSpecification
    ChannelClass?: Value<string>
    EncoderSettings?: {[key: string]: any}
    Destinations?: List<OutputDestination>
    LogLevel?: Value<string>
    RoleArn?: Value<string>
    Tags?: {[key: string]: any}
    Name?: Value<string>
}

export default class Channel extends ResourceBase<ChannelProperties> {
    static MediaPackageOutputDestinationSettings = MediaPackageOutputDestinationSettings
    static HlsInputSettings = HlsInputSettings
    static VideoSelectorProgramId = VideoSelectorProgramId
    static InputAttachment = InputAttachment
    static MultiplexProgramChannelDestinationSettings = MultiplexProgramChannelDestinationSettings
    static EmbeddedSourceSettings = EmbeddedSourceSettings
    static InputSpecification = InputSpecification
    static Scte27SourceSettings = Scte27SourceSettings
    static VideoSelectorPid = VideoSelectorPid
    static InputSettings = InputSettings
    static AudioSelector = AudioSelector
    static AudioLanguageSelection = AudioLanguageSelection
    static AribSourceSettings = AribSourceSettings
    static AudioPidSelection = AudioPidSelection
    static DvbSubSourceSettings = DvbSubSourceSettings
    static CaptionSelectorSettings = CaptionSelectorSettings
    static VideoSelectorSettings = VideoSelectorSettings
    static TeletextSourceSettings = TeletextSourceSettings
    static NetworkInputSettings = NetworkInputSettings
    static Scte20SourceSettings = Scte20SourceSettings
    static AudioSelectorSettings = AudioSelectorSettings
    static VideoSelector = VideoSelector
    static OutputDestinationSettings = OutputDestinationSettings
    static OutputDestination = OutputDestination
    static CaptionSelector = CaptionSelector

    constructor(properties?: ChannelProperties) {
        super('AWS::MediaLive::Channel', properties || {})
    }
}
