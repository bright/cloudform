import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AacSettings {
    CodingMode?: Value<string>;
    RateControlMode?: Value<string>;
    SampleRate?: Value<number>;
    InputType?: Value<string>;
    VbrQuality?: Value<string>;
    RawFormat?: Value<string>;
    Spec?: Value<string>;
    Bitrate?: Value<number>;
    Profile?: Value<string>;
    constructor(properties: AacSettings);
}
export declare class Ac3Settings {
    CodingMode?: Value<string>;
    DrcProfile?: Value<string>;
    MetadataControl?: Value<string>;
    Dialnorm?: Value<number>;
    LfeFilter?: Value<string>;
    BitstreamMode?: Value<string>;
    AttenuationControl?: Value<string>;
    Bitrate?: Value<number>;
    constructor(properties: Ac3Settings);
}
export declare class AncillarySourceSettings {
    SourceAncillaryChannelNumber?: Value<number>;
    constructor(properties: AncillarySourceSettings);
}
export declare class ArchiveCdnSettings {
    ArchiveS3Settings?: ArchiveS3Settings;
    constructor(properties: ArchiveCdnSettings);
}
export declare class ArchiveContainerSettings {
    RawSettings?: RawSettings;
    M2tsSettings?: M2tsSettings;
    constructor(properties: ArchiveContainerSettings);
}
export declare class ArchiveGroupSettings {
    Destination?: OutputLocationRef;
    ArchiveCdnSettings?: ArchiveCdnSettings;
    RolloverInterval?: Value<number>;
    constructor(properties: ArchiveGroupSettings);
}
export declare class ArchiveOutputSettings {
    Extension?: Value<string>;
    NameModifier?: Value<string>;
    ContainerSettings?: ArchiveContainerSettings;
    constructor(properties: ArchiveOutputSettings);
}
export declare class ArchiveS3Settings {
    CannedAcl?: Value<string>;
    constructor(properties: ArchiveS3Settings);
}
export declare class AribDestinationSettings {
    constructor(properties: AribDestinationSettings);
}
export declare class AribSourceSettings {
    constructor(properties: AribSourceSettings);
}
export declare class AudioChannelMapping {
    OutputChannel?: Value<number>;
    InputChannelLevels?: List<InputChannelLevel>;
    constructor(properties: AudioChannelMapping);
}
export declare class AudioCodecSettings {
    Eac3Settings?: Eac3Settings;
    Ac3Settings?: Ac3Settings;
    Mp2Settings?: Mp2Settings;
    Eac3AtmosSettings?: Eac3AtmosSettings;
    PassThroughSettings?: PassThroughSettings;
    WavSettings?: WavSettings;
    AacSettings?: AacSettings;
    constructor(properties: AudioCodecSettings);
}
export declare class AudioDescription {
    AudioNormalizationSettings?: AudioNormalizationSettings;
    LanguageCode?: Value<string>;
    RemixSettings?: RemixSettings;
    AudioSelectorName?: Value<string>;
    StreamName?: Value<string>;
    LanguageCodeControl?: Value<string>;
    AudioType?: Value<string>;
    AudioTypeControl?: Value<string>;
    CodecSettings?: AudioCodecSettings;
    Name?: Value<string>;
    AudioWatermarkingSettings?: AudioWatermarkSettings;
    constructor(properties: AudioDescription);
}
export declare class AudioDolbyEDecode {
    ProgramSelection?: Value<string>;
    constructor(properties: AudioDolbyEDecode);
}
export declare class AudioHlsRenditionSelection {
    GroupId?: Value<string>;
    Name?: Value<string>;
    constructor(properties: AudioHlsRenditionSelection);
}
export declare class AudioLanguageSelection {
    LanguageCode?: Value<string>;
    LanguageSelectionPolicy?: Value<string>;
    constructor(properties: AudioLanguageSelection);
}
export declare class AudioNormalizationSettings {
    TargetLkfs?: Value<number>;
    Algorithm?: Value<string>;
    AlgorithmControl?: Value<string>;
    constructor(properties: AudioNormalizationSettings);
}
export declare class AudioOnlyHlsSettings {
    SegmentType?: Value<string>;
    AudioTrackType?: Value<string>;
    AudioOnlyImage?: InputLocation;
    AudioGroupId?: Value<string>;
    constructor(properties: AudioOnlyHlsSettings);
}
export declare class AudioPidSelection {
    Pid?: Value<number>;
    constructor(properties: AudioPidSelection);
}
export declare class AudioSelector {
    SelectorSettings?: AudioSelectorSettings;
    Name?: Value<string>;
    constructor(properties: AudioSelector);
}
export declare class AudioSelectorSettings {
    AudioPidSelection?: AudioPidSelection;
    AudioLanguageSelection?: AudioLanguageSelection;
    AudioTrackSelection?: AudioTrackSelection;
    AudioHlsRenditionSelection?: AudioHlsRenditionSelection;
    constructor(properties: AudioSelectorSettings);
}
export declare class AudioSilenceFailoverSettings {
    AudioSelectorName?: Value<string>;
    AudioSilenceThresholdMsec?: Value<number>;
    constructor(properties: AudioSilenceFailoverSettings);
}
export declare class AudioTrack {
    Track?: Value<number>;
    constructor(properties: AudioTrack);
}
export declare class AudioTrackSelection {
    DolbyEDecode?: AudioDolbyEDecode;
    Tracks?: List<AudioTrack>;
    constructor(properties: AudioTrackSelection);
}
export declare class AudioWatermarkSettings {
    NielsenWatermarksSettings?: NielsenWatermarksSettings;
    constructor(properties: AudioWatermarkSettings);
}
export declare class AutomaticInputFailoverSettings {
    FailoverConditions?: List<FailoverCondition>;
    InputPreference?: Value<string>;
    SecondaryInputId?: Value<string>;
    ErrorClearTimeMsec?: Value<number>;
    constructor(properties: AutomaticInputFailoverSettings);
}
export declare class AvailBlanking {
    State?: Value<string>;
    AvailBlankingImage?: InputLocation;
    constructor(properties: AvailBlanking);
}
export declare class AvailConfiguration {
    AvailSettings?: AvailSettings;
    constructor(properties: AvailConfiguration);
}
export declare class AvailSettings {
    Scte35SpliceInsert?: Scte35SpliceInsert;
    Scte35TimeSignalApos?: Scte35TimeSignalApos;
    Esam?: Esam;
    constructor(properties: AvailSettings);
}
export declare class BlackoutSlate {
    NetworkEndBlackout?: Value<string>;
    State?: Value<string>;
    NetworkId?: Value<string>;
    NetworkEndBlackoutImage?: InputLocation;
    BlackoutSlateImage?: InputLocation;
    constructor(properties: BlackoutSlate);
}
export declare class BurnInDestinationSettings {
    BackgroundOpacity?: Value<number>;
    FontResolution?: Value<number>;
    OutlineColor?: Value<string>;
    FontColor?: Value<string>;
    ShadowColor?: Value<string>;
    ShadowOpacity?: Value<number>;
    Font?: InputLocation;
    ShadowYOffset?: Value<number>;
    Alignment?: Value<string>;
    XPosition?: Value<number>;
    FontSize?: Value<string>;
    YPosition?: Value<number>;
    OutlineSize?: Value<number>;
    TeletextGridControl?: Value<string>;
    FontOpacity?: Value<number>;
    ShadowXOffset?: Value<number>;
    BackgroundColor?: Value<string>;
    constructor(properties: BurnInDestinationSettings);
}
export declare class CaptionDescription {
    DestinationSettings?: CaptionDestinationSettings;
    LanguageCode?: Value<string>;
    LanguageDescription?: Value<string>;
    Accessibility?: Value<string>;
    CaptionSelectorName?: Value<string>;
    Name?: Value<string>;
    constructor(properties: CaptionDescription);
}
export declare class CaptionDestinationSettings {
    AribDestinationSettings?: AribDestinationSettings;
    EbuTtDDestinationSettings?: EbuTtDDestinationSettings;
    SmpteTtDestinationSettings?: SmpteTtDestinationSettings;
    EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings;
    TtmlDestinationSettings?: TtmlDestinationSettings;
    Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings;
    DvbSubDestinationSettings?: DvbSubDestinationSettings;
    TeletextDestinationSettings?: TeletextDestinationSettings;
    BurnInDestinationSettings?: BurnInDestinationSettings;
    WebvttDestinationSettings?: WebvttDestinationSettings;
    EmbeddedDestinationSettings?: EmbeddedDestinationSettings;
    RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings;
    Scte27DestinationSettings?: Scte27DestinationSettings;
    constructor(properties: CaptionDestinationSettings);
}
export declare class CaptionLanguageMapping {
    LanguageCode?: Value<string>;
    LanguageDescription?: Value<string>;
    CaptionChannel?: Value<number>;
    constructor(properties: CaptionLanguageMapping);
}
export declare class CaptionRectangle {
    TopOffset?: Value<number>;
    Height?: Value<number>;
    Width?: Value<number>;
    LeftOffset?: Value<number>;
    constructor(properties: CaptionRectangle);
}
export declare class CaptionSelector {
    LanguageCode?: Value<string>;
    SelectorSettings?: CaptionSelectorSettings;
    Name?: Value<string>;
    constructor(properties: CaptionSelector);
}
export declare class CaptionSelectorSettings {
    DvbSubSourceSettings?: DvbSubSourceSettings;
    Scte27SourceSettings?: Scte27SourceSettings;
    AribSourceSettings?: AribSourceSettings;
    EmbeddedSourceSettings?: EmbeddedSourceSettings;
    Scte20SourceSettings?: Scte20SourceSettings;
    TeletextSourceSettings?: TeletextSourceSettings;
    AncillarySourceSettings?: AncillarySourceSettings;
    constructor(properties: CaptionSelectorSettings);
}
export declare class CdiInputSpecification {
    Resolution?: Value<string>;
    constructor(properties: CdiInputSpecification);
}
export declare class ColorSpacePassthroughSettings {
    constructor(properties: ColorSpacePassthroughSettings);
}
export declare class DolbyVision81Settings {
    constructor(properties: DolbyVision81Settings);
}
export declare class DvbNitSettings {
    NetworkName?: Value<string>;
    RepInterval?: Value<number>;
    NetworkId?: Value<number>;
    constructor(properties: DvbNitSettings);
}
export declare class DvbSdtSettings {
    ServiceProviderName?: Value<string>;
    OutputSdt?: Value<string>;
    ServiceName?: Value<string>;
    RepInterval?: Value<number>;
    constructor(properties: DvbSdtSettings);
}
export declare class DvbSubDestinationSettings {
    BackgroundOpacity?: Value<number>;
    FontResolution?: Value<number>;
    OutlineColor?: Value<string>;
    FontColor?: Value<string>;
    ShadowColor?: Value<string>;
    ShadowOpacity?: Value<number>;
    Font?: InputLocation;
    ShadowYOffset?: Value<number>;
    Alignment?: Value<string>;
    XPosition?: Value<number>;
    FontSize?: Value<string>;
    YPosition?: Value<number>;
    OutlineSize?: Value<number>;
    TeletextGridControl?: Value<string>;
    FontOpacity?: Value<number>;
    ShadowXOffset?: Value<number>;
    BackgroundColor?: Value<string>;
    constructor(properties: DvbSubDestinationSettings);
}
export declare class DvbSubSourceSettings {
    OcrLanguage?: Value<string>;
    Pid?: Value<number>;
    constructor(properties: DvbSubSourceSettings);
}
export declare class DvbTdtSettings {
    RepInterval?: Value<number>;
    constructor(properties: DvbTdtSettings);
}
export declare class Eac3AtmosSettings {
    CodingMode?: Value<string>;
    Dialnorm?: Value<number>;
    SurroundTrim?: Value<number>;
    DrcRf?: Value<string>;
    Bitrate?: Value<number>;
    DrcLine?: Value<string>;
    HeightTrim?: Value<number>;
    constructor(properties: Eac3AtmosSettings);
}
export declare class Eac3Settings {
    CodingMode?: Value<string>;
    SurroundMode?: Value<string>;
    PassthroughControl?: Value<string>;
    Dialnorm?: Value<number>;
    LoRoSurroundMixLevel?: Value<number>;
    PhaseControl?: Value<string>;
    LtRtCenterMixLevel?: Value<number>;
    LfeFilter?: Value<string>;
    LfeControl?: Value<string>;
    Bitrate?: Value<number>;
    DrcLine?: Value<string>;
    DcFilter?: Value<string>;
    MetadataControl?: Value<string>;
    LtRtSurroundMixLevel?: Value<number>;
    LoRoCenterMixLevel?: Value<number>;
    DrcRf?: Value<string>;
    AttenuationControl?: Value<string>;
    BitstreamMode?: Value<string>;
    SurroundExMode?: Value<string>;
    StereoDownmix?: Value<string>;
    constructor(properties: Eac3Settings);
}
export declare class EbuTtDDestinationSettings {
    FontFamily?: Value<string>;
    FillLineGap?: Value<string>;
    StyleControl?: Value<string>;
    CopyrightHolder?: Value<string>;
    constructor(properties: EbuTtDDestinationSettings);
}
export declare class EmbeddedDestinationSettings {
    constructor(properties: EmbeddedDestinationSettings);
}
export declare class EmbeddedPlusScte20DestinationSettings {
    constructor(properties: EmbeddedPlusScte20DestinationSettings);
}
export declare class EmbeddedSourceSettings {
    Source608ChannelNumber?: Value<number>;
    Scte20Detection?: Value<string>;
    Source608TrackNumber?: Value<number>;
    Convert608To708?: Value<string>;
    constructor(properties: EmbeddedSourceSettings);
}
export declare class EncoderSettings {
    AudioDescriptions?: List<AudioDescription>;
    VideoDescriptions?: List<VideoDescription>;
    GlobalConfiguration?: GlobalConfiguration;
    MotionGraphicsConfiguration?: MotionGraphicsConfiguration;
    ThumbnailConfiguration?: ThumbnailConfiguration;
    FeatureActivations?: FeatureActivations;
    CaptionDescriptions?: List<CaptionDescription>;
    AvailConfiguration?: AvailConfiguration;
    OutputGroups?: List<OutputGroup>;
    AvailBlanking?: AvailBlanking;
    NielsenConfiguration?: NielsenConfiguration;
    BlackoutSlate?: BlackoutSlate;
    TimecodeConfig?: TimecodeConfig;
    constructor(properties: EncoderSettings);
}
export declare class Esam {
    AdAvailOffset?: Value<number>;
    ZoneIdentity?: Value<string>;
    AcquisitionPointId?: Value<string>;
    PoisEndpoint?: Value<string>;
    Username?: Value<string>;
    PasswordParam?: Value<string>;
    constructor(properties: Esam);
}
export declare class FailoverCondition {
    FailoverConditionSettings?: FailoverConditionSettings;
    constructor(properties: FailoverCondition);
}
export declare class FailoverConditionSettings {
    AudioSilenceSettings?: AudioSilenceFailoverSettings;
    VideoBlackSettings?: VideoBlackFailoverSettings;
    InputLossSettings?: InputLossFailoverSettings;
    constructor(properties: FailoverConditionSettings);
}
export declare class FeatureActivations {
    InputPrepareScheduleActions?: Value<string>;
    constructor(properties: FeatureActivations);
}
export declare class FecOutputSettings {
    RowLength?: Value<number>;
    ColumnDepth?: Value<number>;
    IncludeFec?: Value<string>;
    constructor(properties: FecOutputSettings);
}
export declare class Fmp4HlsSettings {
    AudioRenditionSets?: Value<string>;
    NielsenId3Behavior?: Value<string>;
    TimedMetadataBehavior?: Value<string>;
    constructor(properties: Fmp4HlsSettings);
}
export declare class FrameCaptureCdnSettings {
    FrameCaptureS3Settings?: FrameCaptureS3Settings;
    constructor(properties: FrameCaptureCdnSettings);
}
export declare class FrameCaptureGroupSettings {
    FrameCaptureCdnSettings?: FrameCaptureCdnSettings;
    Destination?: OutputLocationRef;
    constructor(properties: FrameCaptureGroupSettings);
}
export declare class FrameCaptureHlsSettings {
    constructor(properties: FrameCaptureHlsSettings);
}
export declare class FrameCaptureOutputSettings {
    NameModifier?: Value<string>;
    constructor(properties: FrameCaptureOutputSettings);
}
export declare class FrameCaptureS3Settings {
    CannedAcl?: Value<string>;
    constructor(properties: FrameCaptureS3Settings);
}
export declare class FrameCaptureSettings {
    TimecodeBurninSettings?: TimecodeBurninSettings;
    CaptureInterval?: Value<number>;
    CaptureIntervalUnits?: Value<string>;
    constructor(properties: FrameCaptureSettings);
}
export declare class GlobalConfiguration {
    InputEndAction?: Value<string>;
    OutputTimingSource?: Value<string>;
    OutputLockingMode?: Value<string>;
    SupportLowFramerateInputs?: Value<string>;
    InitialAudioGain?: Value<number>;
    InputLossBehavior?: InputLossBehavior;
    constructor(properties: GlobalConfiguration);
}
export declare class H264ColorSpaceSettings {
    Rec601Settings?: Rec601Settings;
    Rec709Settings?: Rec709Settings;
    ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
    constructor(properties: H264ColorSpaceSettings);
}
export declare class H264FilterSettings {
    TemporalFilterSettings?: TemporalFilterSettings;
    constructor(properties: H264FilterSettings);
}
export declare class H264Settings {
    TimecodeBurninSettings?: TimecodeBurninSettings;
    NumRefFrames?: Value<number>;
    TemporalAq?: Value<string>;
    Slices?: Value<number>;
    FramerateControl?: Value<string>;
    QvbrQualityLevel?: Value<number>;
    FramerateNumerator?: Value<number>;
    ParControl?: Value<string>;
    GopClosedCadence?: Value<number>;
    FlickerAq?: Value<string>;
    Profile?: Value<string>;
    QualityLevel?: Value<string>;
    MinIInterval?: Value<number>;
    SceneChangeDetect?: Value<string>;
    ForceFieldPictures?: Value<string>;
    FramerateDenominator?: Value<number>;
    Softness?: Value<number>;
    GopSize?: Value<number>;
    AdaptiveQuantization?: Value<string>;
    FilterSettings?: H264FilterSettings;
    ColorSpaceSettings?: H264ColorSpaceSettings;
    EntropyEncoding?: Value<string>;
    SpatialAq?: Value<string>;
    ParDenominator?: Value<number>;
    FixedAfd?: Value<string>;
    GopSizeUnits?: Value<string>;
    AfdSignaling?: Value<string>;
    Bitrate?: Value<number>;
    ParNumerator?: Value<number>;
    RateControlMode?: Value<string>;
    ScanType?: Value<string>;
    BufSize?: Value<number>;
    TimecodeInsertion?: Value<string>;
    ColorMetadata?: Value<string>;
    BufFillPct?: Value<number>;
    GopBReference?: Value<string>;
    LookAheadRateControl?: Value<string>;
    Level?: Value<string>;
    MaxBitrate?: Value<number>;
    Syntax?: Value<string>;
    SubgopLength?: Value<string>;
    GopNumBFrames?: Value<number>;
    constructor(properties: H264Settings);
}
export declare class H265ColorSpaceSettings {
    Rec601Settings?: Rec601Settings;
    Rec709Settings?: Rec709Settings;
    ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
    DolbyVision81Settings?: DolbyVision81Settings;
    Hdr10Settings?: Hdr10Settings;
    constructor(properties: H265ColorSpaceSettings);
}
export declare class H265FilterSettings {
    TemporalFilterSettings?: TemporalFilterSettings;
    constructor(properties: H265FilterSettings);
}
export declare class H265Settings {
    TimecodeBurninSettings?: TimecodeBurninSettings;
    Slices?: Value<number>;
    QvbrQualityLevel?: Value<number>;
    FramerateNumerator?: Value<number>;
    GopClosedCadence?: Value<number>;
    FlickerAq?: Value<string>;
    Profile?: Value<string>;
    MinIInterval?: Value<number>;
    SceneChangeDetect?: Value<string>;
    FramerateDenominator?: Value<number>;
    GopSize?: Value<number>;
    AdaptiveQuantization?: Value<string>;
    FilterSettings?: H265FilterSettings;
    AlternativeTransferFunction?: Value<string>;
    ColorSpaceSettings?: H265ColorSpaceSettings;
    Tier?: Value<string>;
    ParDenominator?: Value<number>;
    FixedAfd?: Value<string>;
    GopSizeUnits?: Value<string>;
    AfdSignaling?: Value<string>;
    Bitrate?: Value<number>;
    ParNumerator?: Value<number>;
    RateControlMode?: Value<string>;
    ScanType?: Value<string>;
    BufSize?: Value<number>;
    TimecodeInsertion?: Value<string>;
    ColorMetadata?: Value<string>;
    LookAheadRateControl?: Value<string>;
    Level?: Value<string>;
    MaxBitrate?: Value<number>;
    constructor(properties: H265Settings);
}
export declare class Hdr10Settings {
    MaxCll?: Value<number>;
    MaxFall?: Value<number>;
    constructor(properties: Hdr10Settings);
}
export declare class HlsAkamaiSettings {
    Salt?: Value<string>;
    FilecacheDuration?: Value<number>;
    NumRetries?: Value<number>;
    Token?: Value<string>;
    RestartDelay?: Value<number>;
    ConnectionRetryInterval?: Value<number>;
    HttpTransferMode?: Value<string>;
    constructor(properties: HlsAkamaiSettings);
}
export declare class HlsBasicPutSettings {
    FilecacheDuration?: Value<number>;
    NumRetries?: Value<number>;
    RestartDelay?: Value<number>;
    ConnectionRetryInterval?: Value<number>;
    constructor(properties: HlsBasicPutSettings);
}
export declare class HlsCdnSettings {
    HlsWebdavSettings?: HlsWebdavSettings;
    HlsS3Settings?: HlsS3Settings;
    HlsAkamaiSettings?: HlsAkamaiSettings;
    HlsBasicPutSettings?: HlsBasicPutSettings;
    HlsMediaStoreSettings?: HlsMediaStoreSettings;
    constructor(properties: HlsCdnSettings);
}
export declare class HlsGroupSettings {
    SegmentationMode?: Value<string>;
    Destination?: OutputLocationRef;
    CodecSpecification?: Value<string>;
    IvSource?: Value<string>;
    TimedMetadataId3Frame?: Value<string>;
    KeyFormatVersions?: Value<string>;
    RedundantManifest?: Value<string>;
    OutputSelection?: Value<string>;
    KeyProviderSettings?: KeyProviderSettings;
    StreamInfResolution?: Value<string>;
    CaptionLanguageMappings?: List<CaptionLanguageMapping>;
    HlsId3SegmentTagging?: Value<string>;
    IFrameOnlyPlaylists?: Value<string>;
    CaptionLanguageSetting?: Value<string>;
    KeepSegments?: Value<number>;
    ConstantIv?: Value<string>;
    DirectoryStructure?: Value<string>;
    EncryptionType?: Value<string>;
    AdMarkers?: List<Value<string>>;
    HlsCdnSettings?: HlsCdnSettings;
    IndexNSegments?: Value<number>;
    DiscontinuityTags?: Value<string>;
    InputLossAction?: Value<string>;
    Mode?: Value<string>;
    TsFileMode?: Value<string>;
    BaseUrlManifest1?: Value<string>;
    ClientCache?: Value<string>;
    MinSegmentLength?: Value<number>;
    KeyFormat?: Value<string>;
    IvInManifest?: Value<string>;
    BaseUrlContent1?: Value<string>;
    ProgramDateTimeClock?: Value<string>;
    ManifestCompression?: Value<string>;
    ManifestDurationFormat?: Value<string>;
    TimedMetadataId3Period?: Value<number>;
    IncompleteSegmentBehavior?: Value<string>;
    ProgramDateTimePeriod?: Value<number>;
    SegmentLength?: Value<number>;
    TimestampDeltaMilliseconds?: Value<number>;
    ProgramDateTime?: Value<string>;
    SegmentsPerSubdirectory?: Value<number>;
    BaseUrlContent?: Value<string>;
    BaseUrlManifest?: Value<string>;
    constructor(properties: HlsGroupSettings);
}
export declare class HlsInputSettings {
    Scte35Source?: Value<string>;
    BufferSegments?: Value<number>;
    Retries?: Value<number>;
    Bandwidth?: Value<number>;
    RetryInterval?: Value<number>;
    constructor(properties: HlsInputSettings);
}
export declare class HlsMediaStoreSettings {
    FilecacheDuration?: Value<number>;
    NumRetries?: Value<number>;
    MediaStoreStorageClass?: Value<string>;
    RestartDelay?: Value<number>;
    ConnectionRetryInterval?: Value<number>;
    constructor(properties: HlsMediaStoreSettings);
}
export declare class HlsOutputSettings {
    NameModifier?: Value<string>;
    HlsSettings?: HlsSettings;
    H265PackagingType?: Value<string>;
    SegmentModifier?: Value<string>;
    constructor(properties: HlsOutputSettings);
}
export declare class HlsS3Settings {
    CannedAcl?: Value<string>;
    constructor(properties: HlsS3Settings);
}
export declare class HlsSettings {
    StandardHlsSettings?: StandardHlsSettings;
    AudioOnlyHlsSettings?: AudioOnlyHlsSettings;
    Fmp4HlsSettings?: Fmp4HlsSettings;
    FrameCaptureHlsSettings?: FrameCaptureHlsSettings;
    constructor(properties: HlsSettings);
}
export declare class HlsWebdavSettings {
    FilecacheDuration?: Value<number>;
    NumRetries?: Value<number>;
    RestartDelay?: Value<number>;
    ConnectionRetryInterval?: Value<number>;
    HttpTransferMode?: Value<string>;
    constructor(properties: HlsWebdavSettings);
}
export declare class HtmlMotionGraphicsSettings {
    constructor(properties: HtmlMotionGraphicsSettings);
}
export declare class InputAttachment {
    InputAttachmentName?: Value<string>;
    InputId?: Value<string>;
    AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings;
    InputSettings?: InputSettings;
    constructor(properties: InputAttachment);
}
export declare class InputChannelLevel {
    InputChannel?: Value<number>;
    Gain?: Value<number>;
    constructor(properties: InputChannelLevel);
}
export declare class InputLocation {
    Username?: Value<string>;
    PasswordParam?: Value<string>;
    Uri?: Value<string>;
    constructor(properties: InputLocation);
}
export declare class InputLossBehavior {
    InputLossImageColor?: Value<string>;
    BlackFrameMsec?: Value<number>;
    InputLossImageType?: Value<string>;
    InputLossImageSlate?: InputLocation;
    RepeatFrameMsec?: Value<number>;
    constructor(properties: InputLossBehavior);
}
export declare class InputLossFailoverSettings {
    InputLossThresholdMsec?: Value<number>;
    constructor(properties: InputLossFailoverSettings);
}
export declare class InputSettings {
    Scte35Pid?: Value<number>;
    DeblockFilter?: Value<string>;
    FilterStrength?: Value<number>;
    InputFilter?: Value<string>;
    SourceEndBehavior?: Value<string>;
    VideoSelector?: VideoSelector;
    Smpte2038DataPreference?: Value<string>;
    AudioSelectors?: List<AudioSelector>;
    CaptionSelectors?: List<CaptionSelector>;
    DenoiseFilter?: Value<string>;
    NetworkInputSettings?: NetworkInputSettings;
    constructor(properties: InputSettings);
}
export declare class InputSpecification {
    Codec?: Value<string>;
    MaximumBitrate?: Value<string>;
    Resolution?: Value<string>;
    constructor(properties: InputSpecification);
}
export declare class KeyProviderSettings {
    StaticKeySettings?: StaticKeySettings;
    constructor(properties: KeyProviderSettings);
}
export declare class M2tsSettings {
    EtvPlatformPid?: Value<string>;
    PatInterval?: Value<number>;
    ProgramNum?: Value<number>;
    RateMode?: Value<string>;
    KlvDataPids?: Value<string>;
    NullPacketBitrate?: Value<number>;
    PmtInterval?: Value<number>;
    AribCaptionsPid?: Value<string>;
    EsRateInPes?: Value<string>;
    VideoPid?: Value<string>;
    TransportStreamId?: Value<number>;
    EbpPlacement?: Value<string>;
    DvbSubPids?: Value<string>;
    SegmentationStyle?: Value<string>;
    Scte35Pid?: Value<string>;
    AudioStreamType?: Value<string>;
    Klv?: Value<string>;
    EbpLookaheadMs?: Value<number>;
    Scte35PrerollPullupMilliseconds?: Value<number>;
    DvbTdtSettings?: DvbTdtSettings;
    TimedMetadataBehavior?: Value<string>;
    EbpAudioInterval?: Value<string>;
    FragmentTime?: Value<number>;
    DvbTeletextPid?: Value<string>;
    Scte35Control?: Value<string>;
    PcrPeriod?: Value<number>;
    NielsenId3Behavior?: Value<string>;
    PcrPid?: Value<string>;
    SegmentationTime?: Value<number>;
    CcDescriptor?: Value<string>;
    AudioFramesPerPes?: Value<number>;
    AbsentInputAudioBehavior?: Value<string>;
    Bitrate?: Value<number>;
    PmtPid?: Value<string>;
    Scte27Pids?: Value<string>;
    SegmentationMarkers?: Value<string>;
    DvbNitSettings?: DvbNitSettings;
    DvbSdtSettings?: DvbSdtSettings;
    EtvSignalPid?: Value<string>;
    Arib?: Value<string>;
    BufferModel?: Value<string>;
    EcmPid?: Value<string>;
    TimedMetadataPid?: Value<string>;
    AudioPids?: Value<string>;
    AudioBufferModel?: Value<string>;
    Ebif?: Value<string>;
    AribCaptionsPidControl?: Value<string>;
    PcrControl?: Value<string>;
    constructor(properties: M2tsSettings);
}
export declare class M3u8Settings {
    PatInterval?: Value<number>;
    ProgramNum?: Value<number>;
    PcrPeriod?: Value<number>;
    PmtInterval?: Value<number>;
    KlvDataPids?: Value<string>;
    NielsenId3Behavior?: Value<string>;
    PcrPid?: Value<string>;
    VideoPid?: Value<string>;
    AudioFramesPerPes?: Value<number>;
    TransportStreamId?: Value<number>;
    PmtPid?: Value<string>;
    Scte35Pid?: Value<string>;
    Scte35Behavior?: Value<string>;
    KlvBehavior?: Value<string>;
    EcmPid?: Value<string>;
    TimedMetadataPid?: Value<string>;
    AudioPids?: Value<string>;
    PcrControl?: Value<string>;
    TimedMetadataBehavior?: Value<string>;
    constructor(properties: M3u8Settings);
}
export declare class MaintenanceCreateSettings {
    MaintenanceDay?: Value<string>;
    MaintenanceStartTime?: Value<string>;
    constructor(properties: MaintenanceCreateSettings);
}
export declare class MaintenanceUpdateSettings {
    MaintenanceDay?: Value<string>;
    MaintenanceScheduledDate?: Value<string>;
    MaintenanceStartTime?: Value<string>;
    constructor(properties: MaintenanceUpdateSettings);
}
export declare class MediaPackageGroupSettings {
    Destination?: OutputLocationRef;
    constructor(properties: MediaPackageGroupSettings);
}
export declare class MediaPackageOutputDestinationSettings {
    ChannelId?: Value<string>;
    constructor(properties: MediaPackageOutputDestinationSettings);
}
export declare class MediaPackageOutputSettings {
    constructor(properties: MediaPackageOutputSettings);
}
export declare class MotionGraphicsConfiguration {
    MotionGraphicsSettings?: MotionGraphicsSettings;
    MotionGraphicsInsertion?: Value<string>;
    constructor(properties: MotionGraphicsConfiguration);
}
export declare class MotionGraphicsSettings {
    HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings;
    constructor(properties: MotionGraphicsSettings);
}
export declare class Mp2Settings {
    CodingMode?: Value<string>;
    SampleRate?: Value<number>;
    Bitrate?: Value<number>;
    constructor(properties: Mp2Settings);
}
export declare class Mpeg2FilterSettings {
    TemporalFilterSettings?: TemporalFilterSettings;
    constructor(properties: Mpeg2FilterSettings);
}
export declare class Mpeg2Settings {
    TimecodeBurninSettings?: TimecodeBurninSettings;
    ColorSpace?: Value<string>;
    FixedAfd?: Value<string>;
    GopSizeUnits?: Value<string>;
    FramerateNumerator?: Value<number>;
    GopClosedCadence?: Value<number>;
    AfdSignaling?: Value<string>;
    DisplayAspectRatio?: Value<string>;
    ScanType?: Value<string>;
    TimecodeInsertion?: Value<string>;
    ColorMetadata?: Value<string>;
    FramerateDenominator?: Value<number>;
    GopSize?: Value<number>;
    AdaptiveQuantization?: Value<string>;
    SubgopLength?: Value<string>;
    FilterSettings?: Mpeg2FilterSettings;
    GopNumBFrames?: Value<number>;
    constructor(properties: Mpeg2Settings);
}
export declare class MsSmoothGroupSettings {
    SegmentationMode?: Value<string>;
    Destination?: OutputLocationRef;
    EventStopBehavior?: Value<string>;
    FilecacheDuration?: Value<number>;
    CertificateMode?: Value<string>;
    AcquisitionPointId?: Value<string>;
    StreamManifestBehavior?: Value<string>;
    InputLossAction?: Value<string>;
    FragmentLength?: Value<number>;
    RestartDelay?: Value<number>;
    SparseTrackType?: Value<string>;
    EventIdMode?: Value<string>;
    TimestampOffsetMode?: Value<string>;
    AudioOnlyTimecodeControl?: Value<string>;
    NumRetries?: Value<number>;
    TimestampOffset?: Value<string>;
    EventId?: Value<string>;
    SendDelayMs?: Value<number>;
    ConnectionRetryInterval?: Value<number>;
    constructor(properties: MsSmoothGroupSettings);
}
export declare class MsSmoothOutputSettings {
    NameModifier?: Value<string>;
    H265PackagingType?: Value<string>;
    constructor(properties: MsSmoothOutputSettings);
}
export declare class MultiplexGroupSettings {
    constructor(properties: MultiplexGroupSettings);
}
export declare class MultiplexOutputSettings {
    Destination?: OutputLocationRef;
    constructor(properties: MultiplexOutputSettings);
}
export declare class MultiplexProgramChannelDestinationSettings {
    MultiplexId?: Value<string>;
    ProgramName?: Value<string>;
    constructor(properties: MultiplexProgramChannelDestinationSettings);
}
export declare class NetworkInputSettings {
    ServerValidation?: Value<string>;
    HlsInputSettings?: HlsInputSettings;
    constructor(properties: NetworkInputSettings);
}
export declare class NielsenCBET {
    CbetCheckDigitString?: Value<string>;
    CbetStepaside?: Value<string>;
    Csid?: Value<string>;
    constructor(properties: NielsenCBET);
}
export declare class NielsenConfiguration {
    DistributorId?: Value<string>;
    NielsenPcmToId3Tagging?: Value<string>;
    constructor(properties: NielsenConfiguration);
}
export declare class NielsenNaesIiNw {
    Timezone?: Value<string>;
    CheckDigitString?: Value<string>;
    Sid?: Value<number>;
    constructor(properties: NielsenNaesIiNw);
}
export declare class NielsenWatermarksSettings {
    NielsenDistributionType?: Value<string>;
    NielsenCbetSettings?: NielsenCBET;
    NielsenNaesIiNwSettings?: NielsenNaesIiNw;
    constructor(properties: NielsenWatermarksSettings);
}
export declare class Output {
    OutputSettings?: OutputSettings;
    CaptionDescriptionNames?: List<Value<string>>;
    AudioDescriptionNames?: List<Value<string>>;
    OutputName?: Value<string>;
    VideoDescriptionName?: Value<string>;
    constructor(properties: Output);
}
export declare class OutputDestination {
    MultiplexSettings?: MultiplexProgramChannelDestinationSettings;
    Id?: Value<string>;
    Settings?: List<OutputDestinationSettings>;
    MediaPackageSettings?: List<MediaPackageOutputDestinationSettings>;
    constructor(properties: OutputDestination);
}
export declare class OutputDestinationSettings {
    StreamName?: Value<string>;
    Username?: Value<string>;
    PasswordParam?: Value<string>;
    Url?: Value<string>;
    constructor(properties: OutputDestinationSettings);
}
export declare class OutputGroup {
    Outputs?: List<Output>;
    OutputGroupSettings?: OutputGroupSettings;
    Name?: Value<string>;
    constructor(properties: OutputGroup);
}
export declare class OutputGroupSettings {
    HlsGroupSettings?: HlsGroupSettings;
    FrameCaptureGroupSettings?: FrameCaptureGroupSettings;
    MultiplexGroupSettings?: MultiplexGroupSettings;
    ArchiveGroupSettings?: ArchiveGroupSettings;
    MediaPackageGroupSettings?: MediaPackageGroupSettings;
    UdpGroupSettings?: UdpGroupSettings;
    MsSmoothGroupSettings?: MsSmoothGroupSettings;
    RtmpGroupSettings?: RtmpGroupSettings;
    constructor(properties: OutputGroupSettings);
}
export declare class OutputLocationRef {
    DestinationRefId?: Value<string>;
    constructor(properties: OutputLocationRef);
}
export declare class OutputSettings {
    MediaPackageOutputSettings?: MediaPackageOutputSettings;
    MsSmoothOutputSettings?: MsSmoothOutputSettings;
    FrameCaptureOutputSettings?: FrameCaptureOutputSettings;
    HlsOutputSettings?: HlsOutputSettings;
    RtmpOutputSettings?: RtmpOutputSettings;
    UdpOutputSettings?: UdpOutputSettings;
    MultiplexOutputSettings?: MultiplexOutputSettings;
    ArchiveOutputSettings?: ArchiveOutputSettings;
    constructor(properties: OutputSettings);
}
export declare class PassThroughSettings {
    constructor(properties: PassThroughSettings);
}
export declare class RawSettings {
    constructor(properties: RawSettings);
}
export declare class Rec601Settings {
    constructor(properties: Rec601Settings);
}
export declare class Rec709Settings {
    constructor(properties: Rec709Settings);
}
export declare class RemixSettings {
    ChannelsOut?: Value<number>;
    ChannelMappings?: List<AudioChannelMapping>;
    ChannelsIn?: Value<number>;
    constructor(properties: RemixSettings);
}
export declare class RtmpCaptionInfoDestinationSettings {
    constructor(properties: RtmpCaptionInfoDestinationSettings);
}
export declare class RtmpGroupSettings {
    AuthenticationScheme?: Value<string>;
    CacheLength?: Value<number>;
    AdMarkers?: List<Value<string>>;
    IncludeFillerNalUnits?: Value<string>;
    InputLossAction?: Value<string>;
    RestartDelay?: Value<number>;
    CaptionData?: Value<string>;
    CacheFullBehavior?: Value<string>;
    constructor(properties: RtmpGroupSettings);
}
export declare class RtmpOutputSettings {
    Destination?: OutputLocationRef;
    CertificateMode?: Value<string>;
    NumRetries?: Value<number>;
    ConnectionRetryInterval?: Value<number>;
    constructor(properties: RtmpOutputSettings);
}
export declare class Scte20PlusEmbeddedDestinationSettings {
    constructor(properties: Scte20PlusEmbeddedDestinationSettings);
}
export declare class Scte20SourceSettings {
    Source608ChannelNumber?: Value<number>;
    Convert608To708?: Value<string>;
    constructor(properties: Scte20SourceSettings);
}
export declare class Scte27DestinationSettings {
    constructor(properties: Scte27DestinationSettings);
}
export declare class Scte27SourceSettings {
    OcrLanguage?: Value<string>;
    Pid?: Value<number>;
    constructor(properties: Scte27SourceSettings);
}
export declare class Scte35SpliceInsert {
    AdAvailOffset?: Value<number>;
    WebDeliveryAllowedFlag?: Value<string>;
    NoRegionalBlackoutFlag?: Value<string>;
    constructor(properties: Scte35SpliceInsert);
}
export declare class Scte35TimeSignalApos {
    AdAvailOffset?: Value<number>;
    WebDeliveryAllowedFlag?: Value<string>;
    NoRegionalBlackoutFlag?: Value<string>;
    constructor(properties: Scte35TimeSignalApos);
}
export declare class SmpteTtDestinationSettings {
    constructor(properties: SmpteTtDestinationSettings);
}
export declare class StandardHlsSettings {
    AudioRenditionSets?: Value<string>;
    M3u8Settings?: M3u8Settings;
    constructor(properties: StandardHlsSettings);
}
export declare class StaticKeySettings {
    KeyProviderServer?: InputLocation;
    StaticKeyValue?: Value<string>;
    constructor(properties: StaticKeySettings);
}
export declare class TeletextDestinationSettings {
    constructor(properties: TeletextDestinationSettings);
}
export declare class TeletextSourceSettings {
    OutputRectangle?: CaptionRectangle;
    PageNumber?: Value<string>;
    constructor(properties: TeletextSourceSettings);
}
export declare class TemporalFilterSettings {
    PostFilterSharpening?: Value<string>;
    Strength?: Value<string>;
    constructor(properties: TemporalFilterSettings);
}
export declare class ThumbnailConfiguration {
    State?: Value<string>;
    constructor(properties: ThumbnailConfiguration);
}
export declare class TimecodeBurninSettings {
    FontSize?: Value<string>;
    Position?: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: TimecodeBurninSettings);
}
export declare class TimecodeConfig {
    SyncThreshold?: Value<number>;
    Source?: Value<string>;
    constructor(properties: TimecodeConfig);
}
export declare class TtmlDestinationSettings {
    StyleControl?: Value<string>;
    constructor(properties: TtmlDestinationSettings);
}
export declare class UdpContainerSettings {
    M2tsSettings?: M2tsSettings;
    constructor(properties: UdpContainerSettings);
}
export declare class UdpGroupSettings {
    TimedMetadataId3Frame?: Value<string>;
    TimedMetadataId3Period?: Value<number>;
    InputLossAction?: Value<string>;
    constructor(properties: UdpGroupSettings);
}
export declare class UdpOutputSettings {
    Destination?: OutputLocationRef;
    FecOutputSettings?: FecOutputSettings;
    ContainerSettings?: UdpContainerSettings;
    BufferMsec?: Value<number>;
    constructor(properties: UdpOutputSettings);
}
export declare class VideoBlackFailoverSettings {
    VideoBlackThresholdMsec?: Value<number>;
    BlackDetectThreshold?: Value<number>;
    constructor(properties: VideoBlackFailoverSettings);
}
export declare class VideoCodecSettings {
    Mpeg2Settings?: Mpeg2Settings;
    FrameCaptureSettings?: FrameCaptureSettings;
    H264Settings?: H264Settings;
    H265Settings?: H265Settings;
    constructor(properties: VideoCodecSettings);
}
export declare class VideoDescription {
    ScalingBehavior?: Value<string>;
    RespondToAfd?: Value<string>;
    Height?: Value<number>;
    Sharpness?: Value<number>;
    Width?: Value<number>;
    CodecSettings?: VideoCodecSettings;
    Name?: Value<string>;
    constructor(properties: VideoDescription);
}
export declare class VideoSelector {
    ColorSpaceSettings?: VideoSelectorColorSpaceSettings;
    SelectorSettings?: VideoSelectorSettings;
    ColorSpace?: Value<string>;
    ColorSpaceUsage?: Value<string>;
    constructor(properties: VideoSelector);
}
export declare class VideoSelectorColorSpaceSettings {
    Hdr10Settings?: Hdr10Settings;
    constructor(properties: VideoSelectorColorSpaceSettings);
}
export declare class VideoSelectorPid {
    Pid?: Value<number>;
    constructor(properties: VideoSelectorPid);
}
export declare class VideoSelectorProgramId {
    ProgramId?: Value<number>;
    constructor(properties: VideoSelectorProgramId);
}
export declare class VideoSelectorSettings {
    VideoSelectorProgramId?: VideoSelectorProgramId;
    VideoSelectorPid?: VideoSelectorPid;
    constructor(properties: VideoSelectorSettings);
}
export declare class VpcOutputSettings {
    PublicAddressAllocationIds?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: VpcOutputSettings);
}
export declare class WavSettings {
    CodingMode?: Value<string>;
    SampleRate?: Value<number>;
    BitDepth?: Value<number>;
    constructor(properties: WavSettings);
}
export declare class WebvttDestinationSettings {
    StyleControl?: Value<string>;
    constructor(properties: WebvttDestinationSettings);
}
export interface ChannelProperties {
    InputAttachments?: List<InputAttachment>;
    InputSpecification?: InputSpecification;
    ChannelClass?: Value<string>;
    EncoderSettings?: EncoderSettings;
    Destinations?: List<OutputDestination>;
    Vpc?: VpcOutputSettings;
    CdiInputSpecification?: CdiInputSpecification;
    Maintenance?: MaintenanceCreateSettings;
    LogLevel?: Value<string>;
    RoleArn?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class Channel extends ResourceBase<ChannelProperties> {
    static AacSettings: typeof AacSettings;
    static Ac3Settings: typeof Ac3Settings;
    static AncillarySourceSettings: typeof AncillarySourceSettings;
    static ArchiveCdnSettings: typeof ArchiveCdnSettings;
    static ArchiveContainerSettings: typeof ArchiveContainerSettings;
    static ArchiveGroupSettings: typeof ArchiveGroupSettings;
    static ArchiveOutputSettings: typeof ArchiveOutputSettings;
    static ArchiveS3Settings: typeof ArchiveS3Settings;
    static AribDestinationSettings: typeof AribDestinationSettings;
    static AribSourceSettings: typeof AribSourceSettings;
    static AudioChannelMapping: typeof AudioChannelMapping;
    static AudioCodecSettings: typeof AudioCodecSettings;
    static AudioDescription: typeof AudioDescription;
    static AudioDolbyEDecode: typeof AudioDolbyEDecode;
    static AudioHlsRenditionSelection: typeof AudioHlsRenditionSelection;
    static AudioLanguageSelection: typeof AudioLanguageSelection;
    static AudioNormalizationSettings: typeof AudioNormalizationSettings;
    static AudioOnlyHlsSettings: typeof AudioOnlyHlsSettings;
    static AudioPidSelection: typeof AudioPidSelection;
    static AudioSelector: typeof AudioSelector;
    static AudioSelectorSettings: typeof AudioSelectorSettings;
    static AudioSilenceFailoverSettings: typeof AudioSilenceFailoverSettings;
    static AudioTrack: typeof AudioTrack;
    static AudioTrackSelection: typeof AudioTrackSelection;
    static AudioWatermarkSettings: typeof AudioWatermarkSettings;
    static AutomaticInputFailoverSettings: typeof AutomaticInputFailoverSettings;
    static AvailBlanking: typeof AvailBlanking;
    static AvailConfiguration: typeof AvailConfiguration;
    static AvailSettings: typeof AvailSettings;
    static BlackoutSlate: typeof BlackoutSlate;
    static BurnInDestinationSettings: typeof BurnInDestinationSettings;
    static CaptionDescription: typeof CaptionDescription;
    static CaptionDestinationSettings: typeof CaptionDestinationSettings;
    static CaptionLanguageMapping: typeof CaptionLanguageMapping;
    static CaptionRectangle: typeof CaptionRectangle;
    static CaptionSelector: typeof CaptionSelector;
    static CaptionSelectorSettings: typeof CaptionSelectorSettings;
    static CdiInputSpecification: typeof CdiInputSpecification;
    static ColorSpacePassthroughSettings: typeof ColorSpacePassthroughSettings;
    static DolbyVision81Settings: typeof DolbyVision81Settings;
    static DvbNitSettings: typeof DvbNitSettings;
    static DvbSdtSettings: typeof DvbSdtSettings;
    static DvbSubDestinationSettings: typeof DvbSubDestinationSettings;
    static DvbSubSourceSettings: typeof DvbSubSourceSettings;
    static DvbTdtSettings: typeof DvbTdtSettings;
    static Eac3AtmosSettings: typeof Eac3AtmosSettings;
    static Eac3Settings: typeof Eac3Settings;
    static EbuTtDDestinationSettings: typeof EbuTtDDestinationSettings;
    static EmbeddedDestinationSettings: typeof EmbeddedDestinationSettings;
    static EmbeddedPlusScte20DestinationSettings: typeof EmbeddedPlusScte20DestinationSettings;
    static EmbeddedSourceSettings: typeof EmbeddedSourceSettings;
    static EncoderSettings: typeof EncoderSettings;
    static Esam: typeof Esam;
    static FailoverCondition: typeof FailoverCondition;
    static FailoverConditionSettings: typeof FailoverConditionSettings;
    static FeatureActivations: typeof FeatureActivations;
    static FecOutputSettings: typeof FecOutputSettings;
    static Fmp4HlsSettings: typeof Fmp4HlsSettings;
    static FrameCaptureCdnSettings: typeof FrameCaptureCdnSettings;
    static FrameCaptureGroupSettings: typeof FrameCaptureGroupSettings;
    static FrameCaptureHlsSettings: typeof FrameCaptureHlsSettings;
    static FrameCaptureOutputSettings: typeof FrameCaptureOutputSettings;
    static FrameCaptureS3Settings: typeof FrameCaptureS3Settings;
    static FrameCaptureSettings: typeof FrameCaptureSettings;
    static GlobalConfiguration: typeof GlobalConfiguration;
    static H264ColorSpaceSettings: typeof H264ColorSpaceSettings;
    static H264FilterSettings: typeof H264FilterSettings;
    static H264Settings: typeof H264Settings;
    static H265ColorSpaceSettings: typeof H265ColorSpaceSettings;
    static H265FilterSettings: typeof H265FilterSettings;
    static H265Settings: typeof H265Settings;
    static Hdr10Settings: typeof Hdr10Settings;
    static HlsAkamaiSettings: typeof HlsAkamaiSettings;
    static HlsBasicPutSettings: typeof HlsBasicPutSettings;
    static HlsCdnSettings: typeof HlsCdnSettings;
    static HlsGroupSettings: typeof HlsGroupSettings;
    static HlsInputSettings: typeof HlsInputSettings;
    static HlsMediaStoreSettings: typeof HlsMediaStoreSettings;
    static HlsOutputSettings: typeof HlsOutputSettings;
    static HlsS3Settings: typeof HlsS3Settings;
    static HlsSettings: typeof HlsSettings;
    static HlsWebdavSettings: typeof HlsWebdavSettings;
    static HtmlMotionGraphicsSettings: typeof HtmlMotionGraphicsSettings;
    static InputAttachment: typeof InputAttachment;
    static InputChannelLevel: typeof InputChannelLevel;
    static InputLocation: typeof InputLocation;
    static InputLossBehavior: typeof InputLossBehavior;
    static InputLossFailoverSettings: typeof InputLossFailoverSettings;
    static InputSettings: typeof InputSettings;
    static InputSpecification: typeof InputSpecification;
    static KeyProviderSettings: typeof KeyProviderSettings;
    static M2tsSettings: typeof M2tsSettings;
    static M3u8Settings: typeof M3u8Settings;
    static MaintenanceCreateSettings: typeof MaintenanceCreateSettings;
    static MaintenanceUpdateSettings: typeof MaintenanceUpdateSettings;
    static MediaPackageGroupSettings: typeof MediaPackageGroupSettings;
    static MediaPackageOutputDestinationSettings: typeof MediaPackageOutputDestinationSettings;
    static MediaPackageOutputSettings: typeof MediaPackageOutputSettings;
    static MotionGraphicsConfiguration: typeof MotionGraphicsConfiguration;
    static MotionGraphicsSettings: typeof MotionGraphicsSettings;
    static Mp2Settings: typeof Mp2Settings;
    static Mpeg2FilterSettings: typeof Mpeg2FilterSettings;
    static Mpeg2Settings: typeof Mpeg2Settings;
    static MsSmoothGroupSettings: typeof MsSmoothGroupSettings;
    static MsSmoothOutputSettings: typeof MsSmoothOutputSettings;
    static MultiplexGroupSettings: typeof MultiplexGroupSettings;
    static MultiplexOutputSettings: typeof MultiplexOutputSettings;
    static MultiplexProgramChannelDestinationSettings: typeof MultiplexProgramChannelDestinationSettings;
    static NetworkInputSettings: typeof NetworkInputSettings;
    static NielsenCBET: typeof NielsenCBET;
    static NielsenConfiguration: typeof NielsenConfiguration;
    static NielsenNaesIiNw: typeof NielsenNaesIiNw;
    static NielsenWatermarksSettings: typeof NielsenWatermarksSettings;
    static Output: typeof Output;
    static OutputDestination: typeof OutputDestination;
    static OutputDestinationSettings: typeof OutputDestinationSettings;
    static OutputGroup: typeof OutputGroup;
    static OutputGroupSettings: typeof OutputGroupSettings;
    static OutputLocationRef: typeof OutputLocationRef;
    static OutputSettings: typeof OutputSettings;
    static PassThroughSettings: typeof PassThroughSettings;
    static RawSettings: typeof RawSettings;
    static Rec601Settings: typeof Rec601Settings;
    static Rec709Settings: typeof Rec709Settings;
    static RemixSettings: typeof RemixSettings;
    static RtmpCaptionInfoDestinationSettings: typeof RtmpCaptionInfoDestinationSettings;
    static RtmpGroupSettings: typeof RtmpGroupSettings;
    static RtmpOutputSettings: typeof RtmpOutputSettings;
    static Scte20PlusEmbeddedDestinationSettings: typeof Scte20PlusEmbeddedDestinationSettings;
    static Scte20SourceSettings: typeof Scte20SourceSettings;
    static Scte27DestinationSettings: typeof Scte27DestinationSettings;
    static Scte27SourceSettings: typeof Scte27SourceSettings;
    static Scte35SpliceInsert: typeof Scte35SpliceInsert;
    static Scte35TimeSignalApos: typeof Scte35TimeSignalApos;
    static SmpteTtDestinationSettings: typeof SmpteTtDestinationSettings;
    static StandardHlsSettings: typeof StandardHlsSettings;
    static StaticKeySettings: typeof StaticKeySettings;
    static TeletextDestinationSettings: typeof TeletextDestinationSettings;
    static TeletextSourceSettings: typeof TeletextSourceSettings;
    static TemporalFilterSettings: typeof TemporalFilterSettings;
    static ThumbnailConfiguration: typeof ThumbnailConfiguration;
    static TimecodeBurninSettings: typeof TimecodeBurninSettings;
    static TimecodeConfig: typeof TimecodeConfig;
    static TtmlDestinationSettings: typeof TtmlDestinationSettings;
    static UdpContainerSettings: typeof UdpContainerSettings;
    static UdpGroupSettings: typeof UdpGroupSettings;
    static UdpOutputSettings: typeof UdpOutputSettings;
    static VideoBlackFailoverSettings: typeof VideoBlackFailoverSettings;
    static VideoCodecSettings: typeof VideoCodecSettings;
    static VideoDescription: typeof VideoDescription;
    static VideoSelector: typeof VideoSelector;
    static VideoSelectorColorSpaceSettings: typeof VideoSelectorColorSpaceSettings;
    static VideoSelectorPid: typeof VideoSelectorPid;
    static VideoSelectorProgramId: typeof VideoSelectorProgramId;
    static VideoSelectorSettings: typeof VideoSelectorSettings;
    static VpcOutputSettings: typeof VpcOutputSettings;
    static WavSettings: typeof WavSettings;
    static WebvttDestinationSettings: typeof WebvttDestinationSettings;
    constructor(properties?: ChannelProperties);
}
