import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MediaPackageOutputDestinationSettings {
    ChannelId?: Value<string>;
    constructor(properties: MediaPackageOutputDestinationSettings);
}
export declare class HlsInputSettings {
    BufferSegments?: Value<number>;
    Retries?: Value<number>;
    Bandwidth?: Value<number>;
    RetryInterval?: Value<number>;
    constructor(properties: HlsInputSettings);
}
export declare class VideoSelectorProgramId {
    ProgramId?: Value<number>;
    constructor(properties: VideoSelectorProgramId);
}
export declare class InputAttachment {
    InputAttachmentName?: Value<string>;
    InputId?: Value<string>;
    InputSettings?: InputSettings;
    constructor(properties: InputAttachment);
}
export declare class EmbeddedSourceSettings {
    Source608ChannelNumber?: Value<number>;
    Scte20Detection?: Value<string>;
    Source608TrackNumber?: Value<number>;
    Convert608To708?: Value<string>;
    constructor(properties: EmbeddedSourceSettings);
}
export declare class InputSpecification {
    Codec?: Value<string>;
    MaximumBitrate?: Value<string>;
    Resolution?: Value<string>;
    constructor(properties: InputSpecification);
}
export declare class Scte27SourceSettings {
    Pid?: Value<number>;
    constructor(properties: Scte27SourceSettings);
}
export declare class VideoSelectorPid {
    Pid?: Value<number>;
    constructor(properties: VideoSelectorPid);
}
export declare class InputSettings {
    DeblockFilter?: Value<string>;
    FilterStrength?: Value<number>;
    InputFilter?: Value<string>;
    SourceEndBehavior?: Value<string>;
    VideoSelector?: VideoSelector;
    AudioSelectors?: List<AudioSelector>;
    CaptionSelectors?: List<CaptionSelector>;
    DenoiseFilter?: Value<string>;
    NetworkInputSettings?: NetworkInputSettings;
    constructor(properties: InputSettings);
}
export declare class AudioSelector {
    SelectorSettings?: AudioSelectorSettings;
    Name?: Value<string>;
    constructor(properties: AudioSelector);
}
export declare class AudioLanguageSelection {
    LanguageCode?: Value<string>;
    LanguageSelectionPolicy?: Value<string>;
    constructor(properties: AudioLanguageSelection);
}
export declare class AribSourceSettings {
    constructor(properties: AribSourceSettings);
}
export declare class AudioPidSelection {
    Pid?: Value<number>;
    constructor(properties: AudioPidSelection);
}
export declare class DvbSubSourceSettings {
    Pid?: Value<number>;
    constructor(properties: DvbSubSourceSettings);
}
export declare class CaptionSelectorSettings {
    DvbSubSourceSettings?: DvbSubSourceSettings;
    Scte27SourceSettings?: Scte27SourceSettings;
    AribSourceSettings?: AribSourceSettings;
    EmbeddedSourceSettings?: EmbeddedSourceSettings;
    Scte20SourceSettings?: Scte20SourceSettings;
    TeletextSourceSettings?: TeletextSourceSettings;
    constructor(properties: CaptionSelectorSettings);
}
export declare class VideoSelectorSettings {
    VideoSelectorProgramId?: VideoSelectorProgramId;
    VideoSelectorPid?: VideoSelectorPid;
    constructor(properties: VideoSelectorSettings);
}
export declare class TeletextSourceSettings {
    PageNumber?: Value<string>;
    constructor(properties: TeletextSourceSettings);
}
export declare class NetworkInputSettings {
    ServerValidation?: Value<string>;
    HlsInputSettings?: HlsInputSettings;
    constructor(properties: NetworkInputSettings);
}
export declare class Scte20SourceSettings {
    Source608ChannelNumber?: Value<number>;
    Convert608To708?: Value<string>;
    constructor(properties: Scte20SourceSettings);
}
export declare class AudioSelectorSettings {
    AudioPidSelection?: AudioPidSelection;
    AudioLanguageSelection?: AudioLanguageSelection;
    constructor(properties: AudioSelectorSettings);
}
export declare class VideoSelector {
    SelectorSettings?: VideoSelectorSettings;
    ColorSpace?: Value<string>;
    ColorSpaceUsage?: Value<string>;
    constructor(properties: VideoSelector);
}
export declare class OutputDestinationSettings {
    StreamName?: Value<string>;
    Username?: Value<string>;
    PasswordParam?: Value<string>;
    Url?: Value<string>;
    constructor(properties: OutputDestinationSettings);
}
export declare class OutputDestination {
    Id?: Value<string>;
    Settings?: List<OutputDestinationSettings>;
    MediaPackageSettings?: List<MediaPackageOutputDestinationSettings>;
    constructor(properties: OutputDestination);
}
export declare class CaptionSelector {
    LanguageCode?: Value<string>;
    SelectorSettings?: CaptionSelectorSettings;
    Name?: Value<string>;
    constructor(properties: CaptionSelector);
}
export interface ChannelProperties {
    InputAttachments?: List<InputAttachment>;
    InputSpecification?: InputSpecification;
    ChannelClass?: Value<string>;
    EncoderSettings?: {
        [key: string]: any;
    };
    Destinations?: List<OutputDestination>;
    LogLevel?: Value<string>;
    RoleArn?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class Channel extends ResourceBase<ChannelProperties> {
    static MediaPackageOutputDestinationSettings: typeof MediaPackageOutputDestinationSettings;
    static HlsInputSettings: typeof HlsInputSettings;
    static VideoSelectorProgramId: typeof VideoSelectorProgramId;
    static InputAttachment: typeof InputAttachment;
    static EmbeddedSourceSettings: typeof EmbeddedSourceSettings;
    static InputSpecification: typeof InputSpecification;
    static Scte27SourceSettings: typeof Scte27SourceSettings;
    static VideoSelectorPid: typeof VideoSelectorPid;
    static InputSettings: typeof InputSettings;
    static AudioSelector: typeof AudioSelector;
    static AudioLanguageSelection: typeof AudioLanguageSelection;
    static AribSourceSettings: typeof AribSourceSettings;
    static AudioPidSelection: typeof AudioPidSelection;
    static DvbSubSourceSettings: typeof DvbSubSourceSettings;
    static CaptionSelectorSettings: typeof CaptionSelectorSettings;
    static VideoSelectorSettings: typeof VideoSelectorSettings;
    static TeletextSourceSettings: typeof TeletextSourceSettings;
    static NetworkInputSettings: typeof NetworkInputSettings;
    static Scte20SourceSettings: typeof Scte20SourceSettings;
    static AudioSelectorSettings: typeof AudioSelectorSettings;
    static VideoSelector: typeof VideoSelector;
    static OutputDestinationSettings: typeof OutputDestinationSettings;
    static OutputDestination: typeof OutputDestination;
    static CaptionSelector: typeof CaptionSelector;
    constructor(properties?: ChannelProperties);
}
