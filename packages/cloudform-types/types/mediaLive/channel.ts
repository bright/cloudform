/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class HlsInputSettings {
    BufferSegments?: Value<number>
    Retries?: Value<number>
    Bandwidth?: Value<number>
    RetryInterval?: Value<number>

    constructor(properties: HlsInputSettings) {
        Object.assign(this, properties)
    }
}

export class DvbSubDestinationSettings {
    BackgroundOpacity?: Value<number>
    FontResolution?: Value<number>
    OutlineColor?: Value<string>
    FontColor?: Value<string>
    ShadowColor?: Value<string>
    ShadowOpacity?: Value<number>
    Font?: InputLocation
    ShadowYOffset?: Value<number>
    Alignment?: Value<string>
    XPosition?: Value<number>
    FontSize?: Value<string>
    YPosition?: Value<number>
    OutlineSize?: Value<number>
    TeletextGridControl?: Value<string>
    FontOpacity?: Value<number>
    ShadowXOffset?: Value<number>
    BackgroundColor?: Value<string>

    constructor(properties: DvbSubDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class Rec709Settings {


    constructor(properties: Rec709Settings) {
        Object.assign(this, properties)
    }
}

export class VideoCodecSettings {
    Mpeg2Settings?: Mpeg2Settings
    FrameCaptureSettings?: FrameCaptureSettings
    H264Settings?: H264Settings
    H265Settings?: H265Settings

    constructor(properties: VideoCodecSettings) {
        Object.assign(this, properties)
    }
}

export class HlsSettings {
    StandardHlsSettings?: StandardHlsSettings
    AudioOnlyHlsSettings?: AudioOnlyHlsSettings
    Fmp4HlsSettings?: Fmp4HlsSettings
    FrameCaptureHlsSettings?: FrameCaptureHlsSettings

    constructor(properties: HlsSettings) {
        Object.assign(this, properties)
    }
}

export class FrameCaptureSettings {
    CaptureInterval?: Value<number>
    CaptureIntervalUnits?: Value<string>

    constructor(properties: FrameCaptureSettings) {
        Object.assign(this, properties)
    }
}

export class MotionGraphicsSettings {
    HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings

    constructor(properties: MotionGraphicsSettings) {
        Object.assign(this, properties)
    }
}

export class FrameCaptureCdnSettings {
    FrameCaptureS3Settings?: FrameCaptureS3Settings

    constructor(properties: FrameCaptureCdnSettings) {
        Object.assign(this, properties)
    }
}

export class InputLossBehavior {
    InputLossImageColor?: Value<string>
    BlackFrameMsec?: Value<number>
    InputLossImageType?: Value<string>
    InputLossImageSlate?: InputLocation
    RepeatFrameMsec?: Value<number>

    constructor(properties: InputLossBehavior) {
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

export class HlsCdnSettings {
    HlsWebdavSettings?: HlsWebdavSettings
    HlsS3Settings?: HlsS3Settings
    HlsAkamaiSettings?: HlsAkamaiSettings
    HlsBasicPutSettings?: HlsBasicPutSettings
    HlsMediaStoreSettings?: HlsMediaStoreSettings

    constructor(properties: HlsCdnSettings) {
        Object.assign(this, properties)
    }
}

export class HlsOutputSettings {
    NameModifier?: Value<string>
    HlsSettings?: HlsSettings
    H265PackagingType?: Value<string>
    SegmentModifier?: Value<string>

    constructor(properties: HlsOutputSettings) {
        Object.assign(this, properties)
    }
}

export class EmbeddedPlusScte20DestinationSettings {


    constructor(properties: EmbeddedPlusScte20DestinationSettings) {
        Object.assign(this, properties)
    }
}

export class FrameCaptureS3Settings {
    CannedAcl?: Value<string>

    constructor(properties: FrameCaptureS3Settings) {
        Object.assign(this, properties)
    }
}

export class ArchiveCdnSettings {
    ArchiveS3Settings?: ArchiveS3Settings

    constructor(properties: ArchiveCdnSettings) {
        Object.assign(this, properties)
    }
}

export class Scte27SourceSettings {
    Pid?: Value<number>

    constructor(properties: Scte27SourceSettings) {
        Object.assign(this, properties)
    }
}

export class AudioTrackSelection {
    Tracks?: List<AudioTrack>

    constructor(properties: AudioTrackSelection) {
        Object.assign(this, properties)
    }
}

export class EbuTtDDestinationSettings {
    FontFamily?: Value<string>
    FillLineGap?: Value<string>
    StyleControl?: Value<string>
    CopyrightHolder?: Value<string>

    constructor(properties: EbuTtDDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class VideoSelectorPid {
    Pid?: Value<number>

    constructor(properties: VideoSelectorPid) {
        Object.assign(this, properties)
    }
}

export class FailoverCondition {
    FailoverConditionSettings?: FailoverConditionSettings

    constructor(properties: FailoverCondition) {
        Object.assign(this, properties)
    }
}

export class Hdr10Settings {
    MaxCll?: Value<number>
    MaxFall?: Value<number>

    constructor(properties: Hdr10Settings) {
        Object.assign(this, properties)
    }
}

export class StaticKeySettings {
    KeyProviderServer?: InputLocation
    StaticKeyValue?: Value<string>

    constructor(properties: StaticKeySettings) {
        Object.assign(this, properties)
    }
}

export class InputLocation {
    Username?: Value<string>
    PasswordParam?: Value<string>
    Uri?: Value<string>

    constructor(properties: InputLocation) {
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

export class CaptionRectangle {
    TopOffset?: Value<number>
    Height?: Value<number>
    Width?: Value<number>
    LeftOffset?: Value<number>

    constructor(properties: CaptionRectangle) {
        Object.assign(this, properties)
    }
}

export class ArchiveS3Settings {
    CannedAcl?: Value<string>

    constructor(properties: ArchiveS3Settings) {
        Object.assign(this, properties)
    }
}

export class SmpteTtDestinationSettings {


    constructor(properties: SmpteTtDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class AribSourceSettings {


    constructor(properties: AribSourceSettings) {
        Object.assign(this, properties)
    }
}

export class Mp2Settings {
    CodingMode?: Value<string>
    SampleRate?: Value<number>
    Bitrate?: Value<number>

    constructor(properties: Mp2Settings) {
        Object.assign(this, properties)
    }
}

export class AudioSilenceFailoverSettings {
    AudioSelectorName?: Value<string>
    AudioSilenceThresholdMsec?: Value<number>

    constructor(properties: AudioSilenceFailoverSettings) {
        Object.assign(this, properties)
    }
}

export class Fmp4HlsSettings {
    AudioRenditionSets?: Value<string>
    NielsenId3Behavior?: Value<string>
    TimedMetadataBehavior?: Value<string>

    constructor(properties: Fmp4HlsSettings) {
        Object.assign(this, properties)
    }
}

export class Scte35SpliceInsert {
    AdAvailOffset?: Value<number>
    WebDeliveryAllowedFlag?: Value<string>
    NoRegionalBlackoutFlag?: Value<string>

    constructor(properties: Scte35SpliceInsert) {
        Object.assign(this, properties)
    }
}

export class AudioChannelMapping {
    OutputChannel?: Value<number>
    InputChannelLevels?: List<InputChannelLevel>

    constructor(properties: AudioChannelMapping) {
        Object.assign(this, properties)
    }
}

export class FeatureActivations {
    InputPrepareScheduleActions?: Value<string>

    constructor(properties: FeatureActivations) {
        Object.assign(this, properties)
    }
}

export class OutputGroup {
    Outputs?: List<Output>
    OutputGroupSettings?: OutputGroupSettings
    Name?: Value<string>

    constructor(properties: OutputGroup) {
        Object.assign(this, properties)
    }
}

export class UdpOutputSettings {
    Destination?: OutputLocationRef
    FecOutputSettings?: FecOutputSettings
    ContainerSettings?: UdpContainerSettings
    BufferMsec?: Value<number>

    constructor(properties: UdpOutputSettings) {
        Object.assign(this, properties)
    }
}

export class Ac3Settings {
    CodingMode?: Value<string>
    DrcProfile?: Value<string>
    MetadataControl?: Value<string>
    Dialnorm?: Value<number>
    LfeFilter?: Value<string>
    BitstreamMode?: Value<string>
    Bitrate?: Value<number>

    constructor(properties: Ac3Settings) {
        Object.assign(this, properties)
    }
}

export class Eac3Settings {
    CodingMode?: Value<string>
    SurroundMode?: Value<string>
    PassthroughControl?: Value<string>
    Dialnorm?: Value<number>
    LoRoSurroundMixLevel?: Value<number>
    PhaseControl?: Value<string>
    LtRtCenterMixLevel?: Value<number>
    LfeFilter?: Value<string>
    LfeControl?: Value<string>
    Bitrate?: Value<number>
    DrcLine?: Value<string>
    DcFilter?: Value<string>
    MetadataControl?: Value<string>
    LtRtSurroundMixLevel?: Value<number>
    LoRoCenterMixLevel?: Value<number>
    DrcRf?: Value<string>
    AttenuationControl?: Value<string>
    BitstreamMode?: Value<string>
    SurroundExMode?: Value<string>
    StereoDownmix?: Value<string>

    constructor(properties: Eac3Settings) {
        Object.assign(this, properties)
    }
}

export class MediaPackageOutputSettings {


    constructor(properties: MediaPackageOutputSettings) {
        Object.assign(this, properties)
    }
}

export class Rec601Settings {


    constructor(properties: Rec601Settings) {
        Object.assign(this, properties)
    }
}

export class H264Settings {
    NumRefFrames?: Value<number>
    TemporalAq?: Value<string>
    Slices?: Value<number>
    FramerateControl?: Value<string>
    QvbrQualityLevel?: Value<number>
    FramerateNumerator?: Value<number>
    ParControl?: Value<string>
    GopClosedCadence?: Value<number>
    FlickerAq?: Value<string>
    Profile?: Value<string>
    QualityLevel?: Value<string>
    MinIInterval?: Value<number>
    SceneChangeDetect?: Value<string>
    ForceFieldPictures?: Value<string>
    FramerateDenominator?: Value<number>
    Softness?: Value<number>
    GopSize?: Value<number>
    AdaptiveQuantization?: Value<string>
    FilterSettings?: H264FilterSettings
    ColorSpaceSettings?: H264ColorSpaceSettings
    EntropyEncoding?: Value<string>
    SpatialAq?: Value<string>
    ParDenominator?: Value<number>
    FixedAfd?: Value<string>
    GopSizeUnits?: Value<string>
    AfdSignaling?: Value<string>
    Bitrate?: Value<number>
    ParNumerator?: Value<number>
    RateControlMode?: Value<string>
    ScanType?: Value<string>
    BufSize?: Value<number>
    TimecodeInsertion?: Value<string>
    ColorMetadata?: Value<string>
    BufFillPct?: Value<number>
    GopBReference?: Value<string>
    LookAheadRateControl?: Value<string>
    Level?: Value<string>
    MaxBitrate?: Value<number>
    Syntax?: Value<string>
    SubgopLength?: Value<string>
    GopNumBFrames?: Value<number>

    constructor(properties: H264Settings) {
        Object.assign(this, properties)
    }
}

export class H264FilterSettings {
    TemporalFilterSettings?: TemporalFilterSettings

    constructor(properties: H264FilterSettings) {
        Object.assign(this, properties)
    }
}

export class FailoverConditionSettings {
    AudioSilenceSettings?: AudioSilenceFailoverSettings
    VideoBlackSettings?: VideoBlackFailoverSettings
    InputLossSettings?: InputLossFailoverSettings

    constructor(properties: FailoverConditionSettings) {
        Object.assign(this, properties)
    }
}

export class Mpeg2Settings {
    ColorSpace?: Value<string>
    FixedAfd?: Value<string>
    GopSizeUnits?: Value<string>
    FramerateNumerator?: Value<number>
    GopClosedCadence?: Value<number>
    AfdSignaling?: Value<string>
    DisplayAspectRatio?: Value<string>
    ScanType?: Value<string>
    TimecodeInsertion?: Value<string>
    ColorMetadata?: Value<string>
    FramerateDenominator?: Value<number>
    GopSize?: Value<number>
    AdaptiveQuantization?: Value<string>
    SubgopLength?: Value<string>
    FilterSettings?: Mpeg2FilterSettings
    GopNumBFrames?: Value<number>

    constructor(properties: Mpeg2Settings) {
        Object.assign(this, properties)
    }
}

export class AudioSelectorSettings {
    AudioPidSelection?: AudioPidSelection
    AudioLanguageSelection?: AudioLanguageSelection
    AudioTrackSelection?: AudioTrackSelection

    constructor(properties: AudioSelectorSettings) {
        Object.assign(this, properties)
    }
}

export class UdpContainerSettings {
    M2tsSettings?: M2tsSettings

    constructor(properties: UdpContainerSettings) {
        Object.assign(this, properties)
    }
}

export class TimecodeConfig {
    SyncThreshold?: Value<number>
    Source?: Value<string>

    constructor(properties: TimecodeConfig) {
        Object.assign(this, properties)
    }
}

export class VideoSelector {
    ColorSpaceSettings?: VideoSelectorColorSpaceSettings
    SelectorSettings?: VideoSelectorSettings
    ColorSpace?: Value<string>
    ColorSpaceUsage?: Value<string>

    constructor(properties: VideoSelector) {
        Object.assign(this, properties)
    }
}

export class DvbTdtSettings {
    RepInterval?: Value<number>

    constructor(properties: DvbTdtSettings) {
        Object.assign(this, properties)
    }
}

export class HlsGroupSettings {
    SegmentationMode?: Value<string>
    Destination?: OutputLocationRef
    CodecSpecification?: Value<string>
    IvSource?: Value<string>
    TimedMetadataId3Frame?: Value<string>
    KeyFormatVersions?: Value<string>
    RedundantManifest?: Value<string>
    OutputSelection?: Value<string>
    KeyProviderSettings?: KeyProviderSettings
    StreamInfResolution?: Value<string>
    CaptionLanguageMappings?: List<CaptionLanguageMapping>
    HlsId3SegmentTagging?: Value<string>
    IFrameOnlyPlaylists?: Value<string>
    CaptionLanguageSetting?: Value<string>
    KeepSegments?: Value<number>
    ConstantIv?: Value<string>
    DirectoryStructure?: Value<string>
    EncryptionType?: Value<string>
    AdMarkers?: List<Value<string>>
    HlsCdnSettings?: HlsCdnSettings
    IndexNSegments?: Value<number>
    DiscontinuityTags?: Value<string>
    InputLossAction?: Value<string>
    Mode?: Value<string>
    TsFileMode?: Value<string>
    BaseUrlManifest1?: Value<string>
    ClientCache?: Value<string>
    MinSegmentLength?: Value<number>
    KeyFormat?: Value<string>
    IvInManifest?: Value<string>
    BaseUrlContent1?: Value<string>
    ManifestCompression?: Value<string>
    ManifestDurationFormat?: Value<string>
    TimedMetadataId3Period?: Value<number>
    IncompleteSegmentBehavior?: Value<string>
    ProgramDateTimePeriod?: Value<number>
    SegmentLength?: Value<number>
    TimestampDeltaMilliseconds?: Value<number>
    ProgramDateTime?: Value<string>
    SegmentsPerSubdirectory?: Value<number>
    BaseUrlContent?: Value<string>
    BaseUrlManifest?: Value<string>

    constructor(properties: HlsGroupSettings) {
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

export class AvailConfiguration {
    AvailSettings?: AvailSettings

    constructor(properties: AvailConfiguration) {
        Object.assign(this, properties)
    }
}

export class TeletextDestinationSettings {


    constructor(properties: TeletextDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class H265Settings {
    Slices?: Value<number>
    QvbrQualityLevel?: Value<number>
    FramerateNumerator?: Value<number>
    GopClosedCadence?: Value<number>
    FlickerAq?: Value<string>
    Profile?: Value<string>
    MinIInterval?: Value<number>
    SceneChangeDetect?: Value<string>
    FramerateDenominator?: Value<number>
    GopSize?: Value<number>
    AdaptiveQuantization?: Value<string>
    FilterSettings?: H265FilterSettings
    AlternativeTransferFunction?: Value<string>
    ColorSpaceSettings?: H265ColorSpaceSettings
    Tier?: Value<string>
    ParDenominator?: Value<number>
    FixedAfd?: Value<string>
    GopSizeUnits?: Value<string>
    AfdSignaling?: Value<string>
    Bitrate?: Value<number>
    ParNumerator?: Value<number>
    RateControlMode?: Value<string>
    ScanType?: Value<string>
    BufSize?: Value<number>
    TimecodeInsertion?: Value<string>
    ColorMetadata?: Value<string>
    LookAheadRateControl?: Value<string>
    Level?: Value<string>
    MaxBitrate?: Value<number>

    constructor(properties: H265Settings) {
        Object.assign(this, properties)
    }
}

export class AudioCodecSettings {
    Eac3Settings?: Eac3Settings
    Ac3Settings?: Ac3Settings
    Mp2Settings?: Mp2Settings
    PassThroughSettings?: PassThroughSettings
    WavSettings?: WavSettings
    AacSettings?: AacSettings

    constructor(properties: AudioCodecSettings) {
        Object.assign(this, properties)
    }
}

export class DvbNitSettings {
    NetworkName?: Value<string>
    RepInterval?: Value<number>
    NetworkId?: Value<number>

    constructor(properties: DvbNitSettings) {
        Object.assign(this, properties)
    }
}

export class WebvttDestinationSettings {


    constructor(properties: WebvttDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class AacSettings {
    CodingMode?: Value<string>
    RateControlMode?: Value<string>
    SampleRate?: Value<number>
    InputType?: Value<string>
    VbrQuality?: Value<string>
    RawFormat?: Value<string>
    Spec?: Value<string>
    Bitrate?: Value<number>
    Profile?: Value<string>

    constructor(properties: AacSettings) {
        Object.assign(this, properties)
    }
}

export class Scte35TimeSignalApos {
    AdAvailOffset?: Value<number>
    WebDeliveryAllowedFlag?: Value<string>
    NoRegionalBlackoutFlag?: Value<string>

    constructor(properties: Scte35TimeSignalApos) {
        Object.assign(this, properties)
    }
}

export class FecOutputSettings {
    RowLength?: Value<number>
    ColumnDepth?: Value<number>
    IncludeFec?: Value<string>

    constructor(properties: FecOutputSettings) {
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

export class AncillarySourceSettings {
    SourceAncillaryChannelNumber?: Value<number>

    constructor(properties: AncillarySourceSettings) {
        Object.assign(this, properties)
    }
}

export class Mpeg2FilterSettings {
    TemporalFilterSettings?: TemporalFilterSettings

    constructor(properties: Mpeg2FilterSettings) {
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

export class VideoBlackFailoverSettings {
    VideoBlackThresholdMsec?: Value<number>
    BlackDetectThreshold?: Value<number>

    constructor(properties: VideoBlackFailoverSettings) {
        Object.assign(this, properties)
    }
}

export class RtmpOutputSettings {
    Destination?: OutputLocationRef
    CertificateMode?: Value<string>
    NumRetries?: Value<number>
    ConnectionRetryInterval?: Value<number>

    constructor(properties: RtmpOutputSettings) {
        Object.assign(this, properties)
    }
}

export class RtmpCaptionInfoDestinationSettings {


    constructor(properties: RtmpCaptionInfoDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class TtmlDestinationSettings {
    StyleControl?: Value<string>

    constructor(properties: TtmlDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class M2tsSettings {
    EtvPlatformPid?: Value<string>
    PatInterval?: Value<number>
    ProgramNum?: Value<number>
    RateMode?: Value<string>
    KlvDataPids?: Value<string>
    NullPacketBitrate?: Value<number>
    PmtInterval?: Value<number>
    AribCaptionsPid?: Value<string>
    EsRateInPes?: Value<string>
    VideoPid?: Value<string>
    TransportStreamId?: Value<number>
    EbpPlacement?: Value<string>
    DvbSubPids?: Value<string>
    SegmentationStyle?: Value<string>
    Scte35Pid?: Value<string>
    AudioStreamType?: Value<string>
    Klv?: Value<string>
    EbpLookaheadMs?: Value<number>
    DvbTdtSettings?: DvbTdtSettings
    TimedMetadataBehavior?: Value<string>
    EbpAudioInterval?: Value<string>
    FragmentTime?: Value<number>
    DvbTeletextPid?: Value<string>
    Scte35Control?: Value<string>
    PcrPeriod?: Value<number>
    NielsenId3Behavior?: Value<string>
    PcrPid?: Value<string>
    SegmentationTime?: Value<number>
    CcDescriptor?: Value<string>
    AudioFramesPerPes?: Value<number>
    AbsentInputAudioBehavior?: Value<string>
    Bitrate?: Value<number>
    PmtPid?: Value<string>
    Scte27Pids?: Value<string>
    SegmentationMarkers?: Value<string>
    DvbNitSettings?: DvbNitSettings
    DvbSdtSettings?: DvbSdtSettings
    EtvSignalPid?: Value<string>
    Arib?: Value<string>
    BufferModel?: Value<string>
    EcmPid?: Value<string>
    TimedMetadataPid?: Value<string>
    AudioPids?: Value<string>
    AudioBufferModel?: Value<string>
    Ebif?: Value<string>
    AribCaptionsPidControl?: Value<string>
    PcrControl?: Value<string>

    constructor(properties: M2tsSettings) {
        Object.assign(this, properties)
    }
}

export class HlsWebdavSettings {
    FilecacheDuration?: Value<number>
    NumRetries?: Value<number>
    RestartDelay?: Value<number>
    ConnectionRetryInterval?: Value<number>
    HttpTransferMode?: Value<string>

    constructor(properties: HlsWebdavSettings) {
        Object.assign(this, properties)
    }
}

export class NielsenConfiguration {
    DistributorId?: Value<string>
    NielsenPcmToId3Tagging?: Value<string>

    constructor(properties: NielsenConfiguration) {
        Object.assign(this, properties)
    }
}

export class GlobalConfiguration {
    InputEndAction?: Value<string>
    OutputTimingSource?: Value<string>
    OutputLockingMode?: Value<string>
    SupportLowFramerateInputs?: Value<string>
    InitialAudioGain?: Value<number>
    InputLossBehavior?: InputLossBehavior

    constructor(properties: GlobalConfiguration) {
        Object.assign(this, properties)
    }
}

export class MediaPackageOutputDestinationSettings {
    ChannelId?: Value<string>

    constructor(properties: MediaPackageOutputDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class AudioOnlyHlsSettings {
    SegmentType?: Value<string>
    AudioTrackType?: Value<string>
    AudioOnlyImage?: InputLocation
    AudioGroupId?: Value<string>

    constructor(properties: AudioOnlyHlsSettings) {
        Object.assign(this, properties)
    }
}

export class OutputLocationRef {
    DestinationRefId?: Value<string>

    constructor(properties: OutputLocationRef) {
        Object.assign(this, properties)
    }
}

export class Scte27DestinationSettings {


    constructor(properties: Scte27DestinationSettings) {
        Object.assign(this, properties)
    }
}

export class AutomaticInputFailoverSettings {
    FailoverConditions?: List<FailoverCondition>
    InputPreference?: Value<string>
    SecondaryInputId?: Value<string>
    ErrorClearTimeMsec?: Value<number>

    constructor(properties: AutomaticInputFailoverSettings) {
        Object.assign(this, properties)
    }
}

export class FrameCaptureGroupSettings {
    FrameCaptureCdnSettings?: FrameCaptureCdnSettings
    Destination?: OutputLocationRef

    constructor(properties: FrameCaptureGroupSettings) {
        Object.assign(this, properties)
    }
}

export class ArchiveOutputSettings {
    Extension?: Value<string>
    NameModifier?: Value<string>
    ContainerSettings?: ArchiveContainerSettings

    constructor(properties: ArchiveOutputSettings) {
        Object.assign(this, properties)
    }
}

export class ArchiveGroupSettings {
    Destination?: OutputLocationRef
    ArchiveCdnSettings?: ArchiveCdnSettings
    RolloverInterval?: Value<number>

    constructor(properties: ArchiveGroupSettings) {
        Object.assign(this, properties)
    }
}

export class RawSettings {


    constructor(properties: RawSettings) {
        Object.assign(this, properties)
    }
}

export class DvbSdtSettings {
    ServiceProviderName?: Value<string>
    OutputSdt?: Value<string>
    ServiceName?: Value<string>
    RepInterval?: Value<number>

    constructor(properties: DvbSdtSettings) {
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
    AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings
    InputSettings?: InputSettings

    constructor(properties: InputAttachment) {
        Object.assign(this, properties)
    }
}

export class InputChannelLevel {
    InputChannel?: Value<number>
    Gain?: Value<number>

    constructor(properties: InputChannelLevel) {
        Object.assign(this, properties)
    }
}

export class StandardHlsSettings {
    AudioRenditionSets?: Value<string>
    M3u8Settings?: M3u8Settings

    constructor(properties: StandardHlsSettings) {
        Object.assign(this, properties)
    }
}

export class PassThroughSettings {


    constructor(properties: PassThroughSettings) {
        Object.assign(this, properties)
    }
}

export class ArchiveContainerSettings {
    RawSettings?: RawSettings
    M2tsSettings?: M2tsSettings

    constructor(properties: ArchiveContainerSettings) {
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

export class FrameCaptureOutputSettings {
    NameModifier?: Value<string>

    constructor(properties: FrameCaptureOutputSettings) {
        Object.assign(this, properties)
    }
}

export class EncoderSettings {
    AudioDescriptions?: List<AudioDescription>
    VideoDescriptions?: List<VideoDescription>
    FeatureActivations?: FeatureActivations
    GlobalConfiguration?: GlobalConfiguration
    CaptionDescriptions?: List<CaptionDescription>
    AvailConfiguration?: AvailConfiguration
    MotionGraphicsConfiguration?: MotionGraphicsConfiguration
    OutputGroups?: List<OutputGroup>
    AvailBlanking?: AvailBlanking
    NielsenConfiguration?: NielsenConfiguration
    BlackoutSlate?: BlackoutSlate
    TimecodeConfig?: TimecodeConfig

    constructor(properties: EncoderSettings) {
        Object.assign(this, properties)
    }
}

export class AvailSettings {
    Scte35SpliceInsert?: Scte35SpliceInsert
    Scte35TimeSignalApos?: Scte35TimeSignalApos

    constructor(properties: AvailSettings) {
        Object.assign(this, properties)
    }
}

export class H264ColorSpaceSettings {
    Rec601Settings?: Rec601Settings
    Rec709Settings?: Rec709Settings
    ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings

    constructor(properties: H264ColorSpaceSettings) {
        Object.assign(this, properties)
    }
}

export class MediaPackageGroupSettings {
    Destination?: OutputLocationRef

    constructor(properties: MediaPackageGroupSettings) {
        Object.assign(this, properties)
    }
}

export class MultiplexOutputSettings {
    Destination?: OutputLocationRef

    constructor(properties: MultiplexOutputSettings) {
        Object.assign(this, properties)
    }
}

export class H265ColorSpaceSettings {
    Rec601Settings?: Rec601Settings
    Rec709Settings?: Rec709Settings
    ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings
    Hdr10Settings?: Hdr10Settings

    constructor(properties: H265ColorSpaceSettings) {
        Object.assign(this, properties)
    }
}

export class EmbeddedDestinationSettings {


    constructor(properties: EmbeddedDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class AvailBlanking {
    State?: Value<string>
    AvailBlankingImage?: InputLocation

    constructor(properties: AvailBlanking) {
        Object.assign(this, properties)
    }
}

export class InputSettings {
    DeblockFilter?: Value<string>
    FilterStrength?: Value<number>
    InputFilter?: Value<string>
    SourceEndBehavior?: Value<string>
    VideoSelector?: VideoSelector
    Smpte2038DataPreference?: Value<string>
    AudioSelectors?: List<AudioSelector>
    CaptionSelectors?: List<CaptionSelector>
    DenoiseFilter?: Value<string>
    NetworkInputSettings?: NetworkInputSettings

    constructor(properties: InputSettings) {
        Object.assign(this, properties)
    }
}

export class AudioNormalizationSettings {
    TargetLkfs?: Value<number>
    Algorithm?: Value<string>
    AlgorithmControl?: Value<string>

    constructor(properties: AudioNormalizationSettings) {
        Object.assign(this, properties)
    }
}

export class MultiplexGroupSettings {


    constructor(properties: MultiplexGroupSettings) {
        Object.assign(this, properties)
    }
}

export class InputLossFailoverSettings {
    InputLossThresholdMsec?: Value<number>

    constructor(properties: InputLossFailoverSettings) {
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

export class AudioPidSelection {
    Pid?: Value<number>

    constructor(properties: AudioPidSelection) {
        Object.assign(this, properties)
    }
}

export class CaptionLanguageMapping {
    LanguageCode?: Value<string>
    LanguageDescription?: Value<string>
    CaptionChannel?: Value<number>

    constructor(properties: CaptionLanguageMapping) {
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
    AncillarySourceSettings?: AncillarySourceSettings

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

export class VpcOutputSettings {
    PublicAddressAllocationIds?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>

    constructor(properties: VpcOutputSettings) {
        Object.assign(this, properties)
    }
}

export class TeletextSourceSettings {
    OutputRectangle?: CaptionRectangle
    PageNumber?: Value<string>

    constructor(properties: TeletextSourceSettings) {
        Object.assign(this, properties)
    }
}

export class CaptionDescription {
    DestinationSettings?: CaptionDestinationSettings
    LanguageCode?: Value<string>
    LanguageDescription?: Value<string>
    CaptionSelectorName?: Value<string>
    Name?: Value<string>

    constructor(properties: CaptionDescription) {
        Object.assign(this, properties)
    }
}

export class MotionGraphicsConfiguration {
    MotionGraphicsSettings?: MotionGraphicsSettings
    MotionGraphicsInsertion?: Value<string>

    constructor(properties: MotionGraphicsConfiguration) {
        Object.assign(this, properties)
    }
}

export class VideoSelectorColorSpaceSettings {
    Hdr10Settings?: Hdr10Settings

    constructor(properties: VideoSelectorColorSpaceSettings) {
        Object.assign(this, properties)
    }
}

export class Output {
    OutputSettings?: OutputSettings
    CaptionDescriptionNames?: List<Value<string>>
    AudioDescriptionNames?: List<Value<string>>
    OutputName?: Value<string>
    VideoDescriptionName?: Value<string>

    constructor(properties: Output) {
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

export class H265FilterSettings {
    TemporalFilterSettings?: TemporalFilterSettings

    constructor(properties: H265FilterSettings) {
        Object.assign(this, properties)
    }
}

export class HlsBasicPutSettings {
    FilecacheDuration?: Value<number>
    NumRetries?: Value<number>
    RestartDelay?: Value<number>
    ConnectionRetryInterval?: Value<number>

    constructor(properties: HlsBasicPutSettings) {
        Object.assign(this, properties)
    }
}

export class Scte20PlusEmbeddedDestinationSettings {


    constructor(properties: Scte20PlusEmbeddedDestinationSettings) {
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

export class AudioTrack {
    Track?: Value<number>

    constructor(properties: AudioTrack) {
        Object.assign(this, properties)
    }
}

export class AudioDescription {
    AudioNormalizationSettings?: AudioNormalizationSettings
    LanguageCode?: Value<string>
    RemixSettings?: RemixSettings
    AudioSelectorName?: Value<string>
    StreamName?: Value<string>
    LanguageCodeControl?: Value<string>
    AudioType?: Value<string>
    AudioTypeControl?: Value<string>
    CodecSettings?: AudioCodecSettings
    Name?: Value<string>

    constructor(properties: AudioDescription) {
        Object.assign(this, properties)
    }
}

export class BurnInDestinationSettings {
    BackgroundOpacity?: Value<number>
    FontResolution?: Value<number>
    OutlineColor?: Value<string>
    FontColor?: Value<string>
    ShadowColor?: Value<string>
    ShadowOpacity?: Value<number>
    Font?: InputLocation
    ShadowYOffset?: Value<number>
    Alignment?: Value<string>
    XPosition?: Value<number>
    FontSize?: Value<string>
    YPosition?: Value<number>
    OutlineSize?: Value<number>
    TeletextGridControl?: Value<string>
    FontOpacity?: Value<number>
    ShadowXOffset?: Value<number>
    BackgroundColor?: Value<string>

    constructor(properties: BurnInDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class RtmpGroupSettings {
    AuthenticationScheme?: Value<string>
    CacheLength?: Value<number>
    AdMarkers?: List<Value<string>>
    InputLossAction?: Value<string>
    RestartDelay?: Value<number>
    CaptionData?: Value<string>
    CacheFullBehavior?: Value<string>

    constructor(properties: RtmpGroupSettings) {
        Object.assign(this, properties)
    }
}

export class MsSmoothOutputSettings {
    NameModifier?: Value<string>
    H265PackagingType?: Value<string>

    constructor(properties: MsSmoothOutputSettings) {
        Object.assign(this, properties)
    }
}

export class CaptionDestinationSettings {
    AribDestinationSettings?: AribDestinationSettings
    EbuTtDDestinationSettings?: EbuTtDDestinationSettings
    SmpteTtDestinationSettings?: SmpteTtDestinationSettings
    EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings
    TtmlDestinationSettings?: TtmlDestinationSettings
    Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings
    DvbSubDestinationSettings?: DvbSubDestinationSettings
    TeletextDestinationSettings?: TeletextDestinationSettings
    BurnInDestinationSettings?: BurnInDestinationSettings
    WebvttDestinationSettings?: WebvttDestinationSettings
    EmbeddedDestinationSettings?: EmbeddedDestinationSettings
    RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings
    Scte27DestinationSettings?: Scte27DestinationSettings

    constructor(properties: CaptionDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class MsSmoothGroupSettings {
    SegmentationMode?: Value<string>
    Destination?: OutputLocationRef
    EventStopBehavior?: Value<string>
    FilecacheDuration?: Value<number>
    CertificateMode?: Value<string>
    AcquisitionPointId?: Value<string>
    StreamManifestBehavior?: Value<string>
    InputLossAction?: Value<string>
    FragmentLength?: Value<number>
    RestartDelay?: Value<number>
    SparseTrackType?: Value<string>
    EventIdMode?: Value<string>
    TimestampOffsetMode?: Value<string>
    AudioOnlyTimecodeControl?: Value<string>
    NumRetries?: Value<number>
    TimestampOffset?: Value<string>
    EventId?: Value<string>
    SendDelayMs?: Value<number>
    ConnectionRetryInterval?: Value<number>

    constructor(properties: MsSmoothGroupSettings) {
        Object.assign(this, properties)
    }
}

export class WavSettings {
    CodingMode?: Value<string>
    SampleRate?: Value<number>
    BitDepth?: Value<number>

    constructor(properties: WavSettings) {
        Object.assign(this, properties)
    }
}

export class KeyProviderSettings {
    StaticKeySettings?: StaticKeySettings

    constructor(properties: KeyProviderSettings) {
        Object.assign(this, properties)
    }
}

export class CdiInputSpecification {
    Resolution?: Value<string>

    constructor(properties: CdiInputSpecification) {
        Object.assign(this, properties)
    }
}

export class OutputGroupSettings {
    HlsGroupSettings?: HlsGroupSettings
    FrameCaptureGroupSettings?: FrameCaptureGroupSettings
    MultiplexGroupSettings?: MultiplexGroupSettings
    ArchiveGroupSettings?: ArchiveGroupSettings
    MediaPackageGroupSettings?: MediaPackageGroupSettings
    UdpGroupSettings?: UdpGroupSettings
    MsSmoothGroupSettings?: MsSmoothGroupSettings
    RtmpGroupSettings?: RtmpGroupSettings

    constructor(properties: OutputGroupSettings) {
        Object.assign(this, properties)
    }
}

export class HtmlMotionGraphicsSettings {


    constructor(properties: HtmlMotionGraphicsSettings) {
        Object.assign(this, properties)
    }
}

export class OutputSettings {
    MediaPackageOutputSettings?: MediaPackageOutputSettings
    MsSmoothOutputSettings?: MsSmoothOutputSettings
    FrameCaptureOutputSettings?: FrameCaptureOutputSettings
    HlsOutputSettings?: HlsOutputSettings
    RtmpOutputSettings?: RtmpOutputSettings
    UdpOutputSettings?: UdpOutputSettings
    MultiplexOutputSettings?: MultiplexOutputSettings
    ArchiveOutputSettings?: ArchiveOutputSettings

    constructor(properties: OutputSettings) {
        Object.assign(this, properties)
    }
}

export class HlsS3Settings {
    CannedAcl?: Value<string>

    constructor(properties: HlsS3Settings) {
        Object.assign(this, properties)
    }
}

export class VideoDescription {
    ScalingBehavior?: Value<string>
    RespondToAfd?: Value<string>
    Height?: Value<number>
    Sharpness?: Value<number>
    Width?: Value<number>
    CodecSettings?: VideoCodecSettings
    Name?: Value<string>

    constructor(properties: VideoDescription) {
        Object.assign(this, properties)
    }
}

export class BlackoutSlate {
    NetworkEndBlackout?: Value<string>
    State?: Value<string>
    NetworkId?: Value<string>
    NetworkEndBlackoutImage?: InputLocation
    BlackoutSlateImage?: InputLocation

    constructor(properties: BlackoutSlate) {
        Object.assign(this, properties)
    }
}

export class ColorSpacePassthroughSettings {


    constructor(properties: ColorSpacePassthroughSettings) {
        Object.assign(this, properties)
    }
}

export class HlsMediaStoreSettings {
    FilecacheDuration?: Value<number>
    NumRetries?: Value<number>
    MediaStoreStorageClass?: Value<string>
    RestartDelay?: Value<number>
    ConnectionRetryInterval?: Value<number>

    constructor(properties: HlsMediaStoreSettings) {
        Object.assign(this, properties)
    }
}

export class M3u8Settings {
    PatInterval?: Value<number>
    ProgramNum?: Value<number>
    PcrPeriod?: Value<number>
    PmtInterval?: Value<number>
    NielsenId3Behavior?: Value<string>
    PcrPid?: Value<string>
    VideoPid?: Value<string>
    AudioFramesPerPes?: Value<number>
    TransportStreamId?: Value<number>
    PmtPid?: Value<string>
    Scte35Pid?: Value<string>
    Scte35Behavior?: Value<string>
    EcmPid?: Value<string>
    TimedMetadataPid?: Value<string>
    AudioPids?: Value<string>
    PcrControl?: Value<string>
    TimedMetadataBehavior?: Value<string>

    constructor(properties: M3u8Settings) {
        Object.assign(this, properties)
    }
}

export class AribDestinationSettings {


    constructor(properties: AribDestinationSettings) {
        Object.assign(this, properties)
    }
}

export class UdpGroupSettings {
    TimedMetadataId3Frame?: Value<string>
    TimedMetadataId3Period?: Value<number>
    InputLossAction?: Value<string>

    constructor(properties: UdpGroupSettings) {
        Object.assign(this, properties)
    }
}

export class FrameCaptureHlsSettings {


    constructor(properties: FrameCaptureHlsSettings) {
        Object.assign(this, properties)
    }
}

export class RemixSettings {
    ChannelsOut?: Value<number>
    ChannelMappings?: List<AudioChannelMapping>
    ChannelsIn?: Value<number>

    constructor(properties: RemixSettings) {
        Object.assign(this, properties)
    }
}

export class TemporalFilterSettings {
    PostFilterSharpening?: Value<string>
    Strength?: Value<string>

    constructor(properties: TemporalFilterSettings) {
        Object.assign(this, properties)
    }
}

export class HlsAkamaiSettings {
    Salt?: Value<string>
    FilecacheDuration?: Value<number>
    NumRetries?: Value<number>
    Token?: Value<string>
    RestartDelay?: Value<number>
    ConnectionRetryInterval?: Value<number>
    HttpTransferMode?: Value<string>

    constructor(properties: HlsAkamaiSettings) {
        Object.assign(this, properties)
    }
}

export interface ChannelProperties {
    InputAttachments?: List<InputAttachment>
    InputSpecification?: InputSpecification
    ChannelClass?: Value<string>
    EncoderSettings?: EncoderSettings
    Destinations?: List<OutputDestination>
    Vpc?: VpcOutputSettings
    CdiInputSpecification?: CdiInputSpecification
    LogLevel?: Value<string>
    RoleArn?: Value<string>
    Tags?: {[key: string]: any}
    Name?: Value<string>
}

export default class Channel extends ResourceBase<ChannelProperties> {
    static HlsInputSettings = HlsInputSettings
    static DvbSubDestinationSettings = DvbSubDestinationSettings
    static Rec709Settings = Rec709Settings
    static VideoCodecSettings = VideoCodecSettings
    static HlsSettings = HlsSettings
    static FrameCaptureSettings = FrameCaptureSettings
    static MotionGraphicsSettings = MotionGraphicsSettings
    static FrameCaptureCdnSettings = FrameCaptureCdnSettings
    static InputLossBehavior = InputLossBehavior
    static MultiplexProgramChannelDestinationSettings = MultiplexProgramChannelDestinationSettings
    static HlsCdnSettings = HlsCdnSettings
    static HlsOutputSettings = HlsOutputSettings
    static EmbeddedPlusScte20DestinationSettings = EmbeddedPlusScte20DestinationSettings
    static FrameCaptureS3Settings = FrameCaptureS3Settings
    static ArchiveCdnSettings = ArchiveCdnSettings
    static Scte27SourceSettings = Scte27SourceSettings
    static AudioTrackSelection = AudioTrackSelection
    static EbuTtDDestinationSettings = EbuTtDDestinationSettings
    static VideoSelectorPid = VideoSelectorPid
    static FailoverCondition = FailoverCondition
    static Hdr10Settings = Hdr10Settings
    static StaticKeySettings = StaticKeySettings
    static InputLocation = InputLocation
    static AudioLanguageSelection = AudioLanguageSelection
    static CaptionRectangle = CaptionRectangle
    static ArchiveS3Settings = ArchiveS3Settings
    static SmpteTtDestinationSettings = SmpteTtDestinationSettings
    static AribSourceSettings = AribSourceSettings
    static Mp2Settings = Mp2Settings
    static AudioSilenceFailoverSettings = AudioSilenceFailoverSettings
    static Fmp4HlsSettings = Fmp4HlsSettings
    static Scte35SpliceInsert = Scte35SpliceInsert
    static AudioChannelMapping = AudioChannelMapping
    static FeatureActivations = FeatureActivations
    static OutputGroup = OutputGroup
    static UdpOutputSettings = UdpOutputSettings
    static Ac3Settings = Ac3Settings
    static Eac3Settings = Eac3Settings
    static MediaPackageOutputSettings = MediaPackageOutputSettings
    static Rec601Settings = Rec601Settings
    static H264Settings = H264Settings
    static H264FilterSettings = H264FilterSettings
    static FailoverConditionSettings = FailoverConditionSettings
    static Mpeg2Settings = Mpeg2Settings
    static AudioSelectorSettings = AudioSelectorSettings
    static UdpContainerSettings = UdpContainerSettings
    static TimecodeConfig = TimecodeConfig
    static VideoSelector = VideoSelector
    static DvbTdtSettings = DvbTdtSettings
    static HlsGroupSettings = HlsGroupSettings
    static OutputDestinationSettings = OutputDestinationSettings
    static AvailConfiguration = AvailConfiguration
    static TeletextDestinationSettings = TeletextDestinationSettings
    static H265Settings = H265Settings
    static AudioCodecSettings = AudioCodecSettings
    static DvbNitSettings = DvbNitSettings
    static WebvttDestinationSettings = WebvttDestinationSettings
    static AacSettings = AacSettings
    static Scte35TimeSignalApos = Scte35TimeSignalApos
    static FecOutputSettings = FecOutputSettings
    static OutputDestination = OutputDestination
    static AncillarySourceSettings = AncillarySourceSettings
    static Mpeg2FilterSettings = Mpeg2FilterSettings
    static CaptionSelector = CaptionSelector
    static VideoBlackFailoverSettings = VideoBlackFailoverSettings
    static RtmpOutputSettings = RtmpOutputSettings
    static RtmpCaptionInfoDestinationSettings = RtmpCaptionInfoDestinationSettings
    static TtmlDestinationSettings = TtmlDestinationSettings
    static M2tsSettings = M2tsSettings
    static HlsWebdavSettings = HlsWebdavSettings
    static NielsenConfiguration = NielsenConfiguration
    static GlobalConfiguration = GlobalConfiguration
    static MediaPackageOutputDestinationSettings = MediaPackageOutputDestinationSettings
    static AudioOnlyHlsSettings = AudioOnlyHlsSettings
    static OutputLocationRef = OutputLocationRef
    static Scte27DestinationSettings = Scte27DestinationSettings
    static AutomaticInputFailoverSettings = AutomaticInputFailoverSettings
    static FrameCaptureGroupSettings = FrameCaptureGroupSettings
    static ArchiveOutputSettings = ArchiveOutputSettings
    static ArchiveGroupSettings = ArchiveGroupSettings
    static RawSettings = RawSettings
    static DvbSdtSettings = DvbSdtSettings
    static VideoSelectorProgramId = VideoSelectorProgramId
    static InputAttachment = InputAttachment
    static InputChannelLevel = InputChannelLevel
    static StandardHlsSettings = StandardHlsSettings
    static PassThroughSettings = PassThroughSettings
    static ArchiveContainerSettings = ArchiveContainerSettings
    static EmbeddedSourceSettings = EmbeddedSourceSettings
    static InputSpecification = InputSpecification
    static FrameCaptureOutputSettings = FrameCaptureOutputSettings
    static EncoderSettings = EncoderSettings
    static AvailSettings = AvailSettings
    static H264ColorSpaceSettings = H264ColorSpaceSettings
    static MediaPackageGroupSettings = MediaPackageGroupSettings
    static MultiplexOutputSettings = MultiplexOutputSettings
    static H265ColorSpaceSettings = H265ColorSpaceSettings
    static EmbeddedDestinationSettings = EmbeddedDestinationSettings
    static AvailBlanking = AvailBlanking
    static InputSettings = InputSettings
    static AudioNormalizationSettings = AudioNormalizationSettings
    static MultiplexGroupSettings = MultiplexGroupSettings
    static InputLossFailoverSettings = InputLossFailoverSettings
    static AudioSelector = AudioSelector
    static AudioPidSelection = AudioPidSelection
    static CaptionLanguageMapping = CaptionLanguageMapping
    static DvbSubSourceSettings = DvbSubSourceSettings
    static CaptionSelectorSettings = CaptionSelectorSettings
    static VideoSelectorSettings = VideoSelectorSettings
    static VpcOutputSettings = VpcOutputSettings
    static TeletextSourceSettings = TeletextSourceSettings
    static CaptionDescription = CaptionDescription
    static MotionGraphicsConfiguration = MotionGraphicsConfiguration
    static VideoSelectorColorSpaceSettings = VideoSelectorColorSpaceSettings
    static Output = Output
    static NetworkInputSettings = NetworkInputSettings
    static H265FilterSettings = H265FilterSettings
    static HlsBasicPutSettings = HlsBasicPutSettings
    static Scte20PlusEmbeddedDestinationSettings = Scte20PlusEmbeddedDestinationSettings
    static Scte20SourceSettings = Scte20SourceSettings
    static AudioTrack = AudioTrack
    static AudioDescription = AudioDescription
    static BurnInDestinationSettings = BurnInDestinationSettings
    static RtmpGroupSettings = RtmpGroupSettings
    static MsSmoothOutputSettings = MsSmoothOutputSettings
    static CaptionDestinationSettings = CaptionDestinationSettings
    static MsSmoothGroupSettings = MsSmoothGroupSettings
    static WavSettings = WavSettings
    static KeyProviderSettings = KeyProviderSettings
    static CdiInputSpecification = CdiInputSpecification
    static OutputGroupSettings = OutputGroupSettings
    static HtmlMotionGraphicsSettings = HtmlMotionGraphicsSettings
    static OutputSettings = OutputSettings
    static HlsS3Settings = HlsS3Settings
    static VideoDescription = VideoDescription
    static BlackoutSlate = BlackoutSlate
    static ColorSpacePassthroughSettings = ColorSpacePassthroughSettings
    static HlsMediaStoreSettings = HlsMediaStoreSettings
    static M3u8Settings = M3u8Settings
    static AribDestinationSettings = AribDestinationSettings
    static UdpGroupSettings = UdpGroupSettings
    static FrameCaptureHlsSettings = FrameCaptureHlsSettings
    static RemixSettings = RemixSettings
    static TemporalFilterSettings = TemporalFilterSettings
    static HlsAkamaiSettings = HlsAkamaiSettings

    constructor(properties?: ChannelProperties) {
        super('AWS::MediaLive::Channel', properties || {})
    }
}
