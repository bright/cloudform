"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbeddedPlusScte20DestinationSettings = exports.EmbeddedDestinationSettings = exports.EbuTtDDestinationSettings = exports.Eac3Settings = exports.Eac3AtmosSettings = exports.DvbTdtSettings = exports.DvbSubSourceSettings = exports.DvbSubDestinationSettings = exports.DvbSdtSettings = exports.DvbNitSettings = exports.DolbyVision81Settings = exports.ColorSpacePassthroughSettings = exports.CdiInputSpecification = exports.CaptionSelectorSettings = exports.CaptionSelector = exports.CaptionRectangle = exports.CaptionLanguageMapping = exports.CaptionDestinationSettings = exports.CaptionDescription = exports.BurnInDestinationSettings = exports.BlackoutSlate = exports.AvailSettings = exports.AvailConfiguration = exports.AvailBlanking = exports.AutomaticInputFailoverSettings = exports.AudioWatermarkSettings = exports.AudioTrackSelection = exports.AudioTrack = exports.AudioSilenceFailoverSettings = exports.AudioSelectorSettings = exports.AudioSelector = exports.AudioPidSelection = exports.AudioOnlyHlsSettings = exports.AudioNormalizationSettings = exports.AudioLanguageSelection = exports.AudioHlsRenditionSelection = exports.AudioDolbyEDecode = exports.AudioDescription = exports.AudioCodecSettings = exports.AudioChannelMapping = exports.AribSourceSettings = exports.AribDestinationSettings = exports.ArchiveS3Settings = exports.ArchiveOutputSettings = exports.ArchiveGroupSettings = exports.ArchiveContainerSettings = exports.ArchiveCdnSettings = exports.AncillarySourceSettings = exports.Ac3Settings = exports.AacSettings = void 0;
exports.MotionGraphicsSettings = exports.MotionGraphicsConfiguration = exports.MediaPackageOutputSettings = exports.MediaPackageOutputDestinationSettings = exports.MediaPackageGroupSettings = exports.MaintenanceUpdateSettings = exports.MaintenanceCreateSettings = exports.M3u8Settings = exports.M2tsSettings = exports.KeyProviderSettings = exports.InputSpecification = exports.InputSettings = exports.InputLossFailoverSettings = exports.InputLossBehavior = exports.InputLocation = exports.InputChannelLevel = exports.InputAttachment = exports.HtmlMotionGraphicsSettings = exports.HlsWebdavSettings = exports.HlsSettings = exports.HlsS3Settings = exports.HlsOutputSettings = exports.HlsMediaStoreSettings = exports.HlsInputSettings = exports.HlsGroupSettings = exports.HlsCdnSettings = exports.HlsBasicPutSettings = exports.HlsAkamaiSettings = exports.Hdr10Settings = exports.H265Settings = exports.H265FilterSettings = exports.H265ColorSpaceSettings = exports.H264Settings = exports.H264FilterSettings = exports.H264ColorSpaceSettings = exports.GlobalConfiguration = exports.FrameCaptureSettings = exports.FrameCaptureS3Settings = exports.FrameCaptureOutputSettings = exports.FrameCaptureHlsSettings = exports.FrameCaptureGroupSettings = exports.FrameCaptureCdnSettings = exports.Fmp4HlsSettings = exports.FecOutputSettings = exports.FeatureActivations = exports.FailoverConditionSettings = exports.FailoverCondition = exports.Esam = exports.EncoderSettings = exports.EmbeddedSourceSettings = void 0;
exports.VideoDescription = exports.VideoCodecSettings = exports.VideoBlackFailoverSettings = exports.UdpOutputSettings = exports.UdpGroupSettings = exports.UdpContainerSettings = exports.TtmlDestinationSettings = exports.TimecodeConfig = exports.TimecodeBurninSettings = exports.ThumbnailConfiguration = exports.TemporalFilterSettings = exports.TeletextSourceSettings = exports.TeletextDestinationSettings = exports.StaticKeySettings = exports.StandardHlsSettings = exports.SmpteTtDestinationSettings = exports.Scte35TimeSignalApos = exports.Scte35SpliceInsert = exports.Scte27SourceSettings = exports.Scte27DestinationSettings = exports.Scte20SourceSettings = exports.Scte20PlusEmbeddedDestinationSettings = exports.RtmpOutputSettings = exports.RtmpGroupSettings = exports.RtmpCaptionInfoDestinationSettings = exports.RemixSettings = exports.Rec709Settings = exports.Rec601Settings = exports.RawSettings = exports.PassThroughSettings = exports.OutputSettings = exports.OutputLocationRef = exports.OutputGroupSettings = exports.OutputGroup = exports.OutputDestinationSettings = exports.OutputDestination = exports.Output = exports.NielsenWatermarksSettings = exports.NielsenNaesIiNw = exports.NielsenConfiguration = exports.NielsenCBET = exports.NetworkInputSettings = exports.MultiplexProgramChannelDestinationSettings = exports.MultiplexOutputSettings = exports.MultiplexGroupSettings = exports.MsSmoothOutputSettings = exports.MsSmoothGroupSettings = exports.Mpeg2Settings = exports.Mpeg2FilterSettings = exports.Mp2Settings = void 0;
exports.WebvttDestinationSettings = exports.WavSettings = exports.VpcOutputSettings = exports.VideoSelectorSettings = exports.VideoSelectorProgramId = exports.VideoSelectorPid = exports.VideoSelectorColorSpaceSettings = exports.VideoSelector = void 0;
const resource_1 = require("../resource");
class AacSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AacSettings = AacSettings;
class Ac3Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ac3Settings = Ac3Settings;
class AncillarySourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AncillarySourceSettings = AncillarySourceSettings;
class ArchiveCdnSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArchiveCdnSettings = ArchiveCdnSettings;
class ArchiveContainerSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArchiveContainerSettings = ArchiveContainerSettings;
class ArchiveGroupSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArchiveGroupSettings = ArchiveGroupSettings;
class ArchiveOutputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArchiveOutputSettings = ArchiveOutputSettings;
class ArchiveS3Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArchiveS3Settings = ArchiveS3Settings;
class AribDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AribDestinationSettings = AribDestinationSettings;
class AribSourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AribSourceSettings = AribSourceSettings;
class AudioChannelMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioChannelMapping = AudioChannelMapping;
class AudioCodecSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioCodecSettings = AudioCodecSettings;
class AudioDescription {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioDescription = AudioDescription;
class AudioDolbyEDecode {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioDolbyEDecode = AudioDolbyEDecode;
class AudioHlsRenditionSelection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioHlsRenditionSelection = AudioHlsRenditionSelection;
class AudioLanguageSelection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioLanguageSelection = AudioLanguageSelection;
class AudioNormalizationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioNormalizationSettings = AudioNormalizationSettings;
class AudioOnlyHlsSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioOnlyHlsSettings = AudioOnlyHlsSettings;
class AudioPidSelection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioPidSelection = AudioPidSelection;
class AudioSelector {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioSelector = AudioSelector;
class AudioSelectorSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioSelectorSettings = AudioSelectorSettings;
class AudioSilenceFailoverSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioSilenceFailoverSettings = AudioSilenceFailoverSettings;
class AudioTrack {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioTrack = AudioTrack;
class AudioTrackSelection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioTrackSelection = AudioTrackSelection;
class AudioWatermarkSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioWatermarkSettings = AudioWatermarkSettings;
class AutomaticInputFailoverSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutomaticInputFailoverSettings = AutomaticInputFailoverSettings;
class AvailBlanking {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AvailBlanking = AvailBlanking;
class AvailConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AvailConfiguration = AvailConfiguration;
class AvailSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AvailSettings = AvailSettings;
class BlackoutSlate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlackoutSlate = BlackoutSlate;
class BurnInDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BurnInDestinationSettings = BurnInDestinationSettings;
class CaptionDescription {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptionDescription = CaptionDescription;
class CaptionDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptionDestinationSettings = CaptionDestinationSettings;
class CaptionLanguageMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptionLanguageMapping = CaptionLanguageMapping;
class CaptionRectangle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptionRectangle = CaptionRectangle;
class CaptionSelector {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptionSelector = CaptionSelector;
class CaptionSelectorSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptionSelectorSettings = CaptionSelectorSettings;
class CdiInputSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CdiInputSpecification = CdiInputSpecification;
class ColorSpacePassthroughSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColorSpacePassthroughSettings = ColorSpacePassthroughSettings;
class DolbyVision81Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DolbyVision81Settings = DolbyVision81Settings;
class DvbNitSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DvbNitSettings = DvbNitSettings;
class DvbSdtSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DvbSdtSettings = DvbSdtSettings;
class DvbSubDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DvbSubDestinationSettings = DvbSubDestinationSettings;
class DvbSubSourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DvbSubSourceSettings = DvbSubSourceSettings;
class DvbTdtSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DvbTdtSettings = DvbTdtSettings;
class Eac3AtmosSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Eac3AtmosSettings = Eac3AtmosSettings;
class Eac3Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Eac3Settings = Eac3Settings;
class EbuTtDDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EbuTtDDestinationSettings = EbuTtDDestinationSettings;
class EmbeddedDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EmbeddedDestinationSettings = EmbeddedDestinationSettings;
class EmbeddedPlusScte20DestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EmbeddedPlusScte20DestinationSettings = EmbeddedPlusScte20DestinationSettings;
class EmbeddedSourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EmbeddedSourceSettings = EmbeddedSourceSettings;
class EncoderSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncoderSettings = EncoderSettings;
class Esam {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Esam = Esam;
class FailoverCondition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FailoverCondition = FailoverCondition;
class FailoverConditionSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FailoverConditionSettings = FailoverConditionSettings;
class FeatureActivations {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FeatureActivations = FeatureActivations;
class FecOutputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FecOutputSettings = FecOutputSettings;
class Fmp4HlsSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Fmp4HlsSettings = Fmp4HlsSettings;
class FrameCaptureCdnSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FrameCaptureCdnSettings = FrameCaptureCdnSettings;
class FrameCaptureGroupSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FrameCaptureGroupSettings = FrameCaptureGroupSettings;
class FrameCaptureHlsSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FrameCaptureHlsSettings = FrameCaptureHlsSettings;
class FrameCaptureOutputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FrameCaptureOutputSettings = FrameCaptureOutputSettings;
class FrameCaptureS3Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FrameCaptureS3Settings = FrameCaptureS3Settings;
class FrameCaptureSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FrameCaptureSettings = FrameCaptureSettings;
class GlobalConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GlobalConfiguration = GlobalConfiguration;
class H264ColorSpaceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.H264ColorSpaceSettings = H264ColorSpaceSettings;
class H264FilterSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.H264FilterSettings = H264FilterSettings;
class H264Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.H264Settings = H264Settings;
class H265ColorSpaceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.H265ColorSpaceSettings = H265ColorSpaceSettings;
class H265FilterSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.H265FilterSettings = H265FilterSettings;
class H265Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.H265Settings = H265Settings;
class Hdr10Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Hdr10Settings = Hdr10Settings;
class HlsAkamaiSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsAkamaiSettings = HlsAkamaiSettings;
class HlsBasicPutSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsBasicPutSettings = HlsBasicPutSettings;
class HlsCdnSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsCdnSettings = HlsCdnSettings;
class HlsGroupSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsGroupSettings = HlsGroupSettings;
class HlsInputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsInputSettings = HlsInputSettings;
class HlsMediaStoreSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsMediaStoreSettings = HlsMediaStoreSettings;
class HlsOutputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsOutputSettings = HlsOutputSettings;
class HlsS3Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsS3Settings = HlsS3Settings;
class HlsSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsSettings = HlsSettings;
class HlsWebdavSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsWebdavSettings = HlsWebdavSettings;
class HtmlMotionGraphicsSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HtmlMotionGraphicsSettings = HtmlMotionGraphicsSettings;
class InputAttachment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputAttachment = InputAttachment;
class InputChannelLevel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputChannelLevel = InputChannelLevel;
class InputLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputLocation = InputLocation;
class InputLossBehavior {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputLossBehavior = InputLossBehavior;
class InputLossFailoverSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputLossFailoverSettings = InputLossFailoverSettings;
class InputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputSettings = InputSettings;
class InputSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputSpecification = InputSpecification;
class KeyProviderSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyProviderSettings = KeyProviderSettings;
class M2tsSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.M2tsSettings = M2tsSettings;
class M3u8Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.M3u8Settings = M3u8Settings;
class MaintenanceCreateSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceCreateSettings = MaintenanceCreateSettings;
class MaintenanceUpdateSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceUpdateSettings = MaintenanceUpdateSettings;
class MediaPackageGroupSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MediaPackageGroupSettings = MediaPackageGroupSettings;
class MediaPackageOutputDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MediaPackageOutputDestinationSettings = MediaPackageOutputDestinationSettings;
class MediaPackageOutputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MediaPackageOutputSettings = MediaPackageOutputSettings;
class MotionGraphicsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MotionGraphicsConfiguration = MotionGraphicsConfiguration;
class MotionGraphicsSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MotionGraphicsSettings = MotionGraphicsSettings;
class Mp2Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Mp2Settings = Mp2Settings;
class Mpeg2FilterSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Mpeg2FilterSettings = Mpeg2FilterSettings;
class Mpeg2Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Mpeg2Settings = Mpeg2Settings;
class MsSmoothGroupSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MsSmoothGroupSettings = MsSmoothGroupSettings;
class MsSmoothOutputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MsSmoothOutputSettings = MsSmoothOutputSettings;
class MultiplexGroupSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MultiplexGroupSettings = MultiplexGroupSettings;
class MultiplexOutputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MultiplexOutputSettings = MultiplexOutputSettings;
class MultiplexProgramChannelDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MultiplexProgramChannelDestinationSettings = MultiplexProgramChannelDestinationSettings;
class NetworkInputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkInputSettings = NetworkInputSettings;
class NielsenCBET {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NielsenCBET = NielsenCBET;
class NielsenConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NielsenConfiguration = NielsenConfiguration;
class NielsenNaesIiNw {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NielsenNaesIiNw = NielsenNaesIiNw;
class NielsenWatermarksSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NielsenWatermarksSettings = NielsenWatermarksSettings;
class Output {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Output = Output;
class OutputDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputDestination = OutputDestination;
class OutputDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputDestinationSettings = OutputDestinationSettings;
class OutputGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputGroup = OutputGroup;
class OutputGroupSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputGroupSettings = OutputGroupSettings;
class OutputLocationRef {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputLocationRef = OutputLocationRef;
class OutputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputSettings = OutputSettings;
class PassThroughSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PassThroughSettings = PassThroughSettings;
class RawSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RawSettings = RawSettings;
class Rec601Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rec601Settings = Rec601Settings;
class Rec709Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rec709Settings = Rec709Settings;
class RemixSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RemixSettings = RemixSettings;
class RtmpCaptionInfoDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RtmpCaptionInfoDestinationSettings = RtmpCaptionInfoDestinationSettings;
class RtmpGroupSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RtmpGroupSettings = RtmpGroupSettings;
class RtmpOutputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RtmpOutputSettings = RtmpOutputSettings;
class Scte20PlusEmbeddedDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Scte20PlusEmbeddedDestinationSettings = Scte20PlusEmbeddedDestinationSettings;
class Scte20SourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Scte20SourceSettings = Scte20SourceSettings;
class Scte27DestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Scte27DestinationSettings = Scte27DestinationSettings;
class Scte27SourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Scte27SourceSettings = Scte27SourceSettings;
class Scte35SpliceInsert {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Scte35SpliceInsert = Scte35SpliceInsert;
class Scte35TimeSignalApos {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Scte35TimeSignalApos = Scte35TimeSignalApos;
class SmpteTtDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SmpteTtDestinationSettings = SmpteTtDestinationSettings;
class StandardHlsSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StandardHlsSettings = StandardHlsSettings;
class StaticKeySettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StaticKeySettings = StaticKeySettings;
class TeletextDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TeletextDestinationSettings = TeletextDestinationSettings;
class TeletextSourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TeletextSourceSettings = TeletextSourceSettings;
class TemporalFilterSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TemporalFilterSettings = TemporalFilterSettings;
class ThumbnailConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ThumbnailConfiguration = ThumbnailConfiguration;
class TimecodeBurninSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimecodeBurninSettings = TimecodeBurninSettings;
class TimecodeConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimecodeConfig = TimecodeConfig;
class TtmlDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TtmlDestinationSettings = TtmlDestinationSettings;
class UdpContainerSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UdpContainerSettings = UdpContainerSettings;
class UdpGroupSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UdpGroupSettings = UdpGroupSettings;
class UdpOutputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UdpOutputSettings = UdpOutputSettings;
class VideoBlackFailoverSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoBlackFailoverSettings = VideoBlackFailoverSettings;
class VideoCodecSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoCodecSettings = VideoCodecSettings;
class VideoDescription {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoDescription = VideoDescription;
class VideoSelector {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoSelector = VideoSelector;
class VideoSelectorColorSpaceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoSelectorColorSpaceSettings = VideoSelectorColorSpaceSettings;
class VideoSelectorPid {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoSelectorPid = VideoSelectorPid;
class VideoSelectorProgramId {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoSelectorProgramId = VideoSelectorProgramId;
class VideoSelectorSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoSelectorSettings = VideoSelectorSettings;
class VpcOutputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcOutputSettings = VpcOutputSettings;
class WavSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WavSettings = WavSettings;
class WebvttDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WebvttDestinationSettings = WebvttDestinationSettings;
class Channel extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MediaLive::Channel', properties || {});
    }
}
exports.default = Channel;
Channel.AacSettings = AacSettings;
Channel.Ac3Settings = Ac3Settings;
Channel.AncillarySourceSettings = AncillarySourceSettings;
Channel.ArchiveCdnSettings = ArchiveCdnSettings;
Channel.ArchiveContainerSettings = ArchiveContainerSettings;
Channel.ArchiveGroupSettings = ArchiveGroupSettings;
Channel.ArchiveOutputSettings = ArchiveOutputSettings;
Channel.ArchiveS3Settings = ArchiveS3Settings;
Channel.AribDestinationSettings = AribDestinationSettings;
Channel.AribSourceSettings = AribSourceSettings;
Channel.AudioChannelMapping = AudioChannelMapping;
Channel.AudioCodecSettings = AudioCodecSettings;
Channel.AudioDescription = AudioDescription;
Channel.AudioDolbyEDecode = AudioDolbyEDecode;
Channel.AudioHlsRenditionSelection = AudioHlsRenditionSelection;
Channel.AudioLanguageSelection = AudioLanguageSelection;
Channel.AudioNormalizationSettings = AudioNormalizationSettings;
Channel.AudioOnlyHlsSettings = AudioOnlyHlsSettings;
Channel.AudioPidSelection = AudioPidSelection;
Channel.AudioSelector = AudioSelector;
Channel.AudioSelectorSettings = AudioSelectorSettings;
Channel.AudioSilenceFailoverSettings = AudioSilenceFailoverSettings;
Channel.AudioTrack = AudioTrack;
Channel.AudioTrackSelection = AudioTrackSelection;
Channel.AudioWatermarkSettings = AudioWatermarkSettings;
Channel.AutomaticInputFailoverSettings = AutomaticInputFailoverSettings;
Channel.AvailBlanking = AvailBlanking;
Channel.AvailConfiguration = AvailConfiguration;
Channel.AvailSettings = AvailSettings;
Channel.BlackoutSlate = BlackoutSlate;
Channel.BurnInDestinationSettings = BurnInDestinationSettings;
Channel.CaptionDescription = CaptionDescription;
Channel.CaptionDestinationSettings = CaptionDestinationSettings;
Channel.CaptionLanguageMapping = CaptionLanguageMapping;
Channel.CaptionRectangle = CaptionRectangle;
Channel.CaptionSelector = CaptionSelector;
Channel.CaptionSelectorSettings = CaptionSelectorSettings;
Channel.CdiInputSpecification = CdiInputSpecification;
Channel.ColorSpacePassthroughSettings = ColorSpacePassthroughSettings;
Channel.DolbyVision81Settings = DolbyVision81Settings;
Channel.DvbNitSettings = DvbNitSettings;
Channel.DvbSdtSettings = DvbSdtSettings;
Channel.DvbSubDestinationSettings = DvbSubDestinationSettings;
Channel.DvbSubSourceSettings = DvbSubSourceSettings;
Channel.DvbTdtSettings = DvbTdtSettings;
Channel.Eac3AtmosSettings = Eac3AtmosSettings;
Channel.Eac3Settings = Eac3Settings;
Channel.EbuTtDDestinationSettings = EbuTtDDestinationSettings;
Channel.EmbeddedDestinationSettings = EmbeddedDestinationSettings;
Channel.EmbeddedPlusScte20DestinationSettings = EmbeddedPlusScte20DestinationSettings;
Channel.EmbeddedSourceSettings = EmbeddedSourceSettings;
Channel.EncoderSettings = EncoderSettings;
Channel.Esam = Esam;
Channel.FailoverCondition = FailoverCondition;
Channel.FailoverConditionSettings = FailoverConditionSettings;
Channel.FeatureActivations = FeatureActivations;
Channel.FecOutputSettings = FecOutputSettings;
Channel.Fmp4HlsSettings = Fmp4HlsSettings;
Channel.FrameCaptureCdnSettings = FrameCaptureCdnSettings;
Channel.FrameCaptureGroupSettings = FrameCaptureGroupSettings;
Channel.FrameCaptureHlsSettings = FrameCaptureHlsSettings;
Channel.FrameCaptureOutputSettings = FrameCaptureOutputSettings;
Channel.FrameCaptureS3Settings = FrameCaptureS3Settings;
Channel.FrameCaptureSettings = FrameCaptureSettings;
Channel.GlobalConfiguration = GlobalConfiguration;
Channel.H264ColorSpaceSettings = H264ColorSpaceSettings;
Channel.H264FilterSettings = H264FilterSettings;
Channel.H264Settings = H264Settings;
Channel.H265ColorSpaceSettings = H265ColorSpaceSettings;
Channel.H265FilterSettings = H265FilterSettings;
Channel.H265Settings = H265Settings;
Channel.Hdr10Settings = Hdr10Settings;
Channel.HlsAkamaiSettings = HlsAkamaiSettings;
Channel.HlsBasicPutSettings = HlsBasicPutSettings;
Channel.HlsCdnSettings = HlsCdnSettings;
Channel.HlsGroupSettings = HlsGroupSettings;
Channel.HlsInputSettings = HlsInputSettings;
Channel.HlsMediaStoreSettings = HlsMediaStoreSettings;
Channel.HlsOutputSettings = HlsOutputSettings;
Channel.HlsS3Settings = HlsS3Settings;
Channel.HlsSettings = HlsSettings;
Channel.HlsWebdavSettings = HlsWebdavSettings;
Channel.HtmlMotionGraphicsSettings = HtmlMotionGraphicsSettings;
Channel.InputAttachment = InputAttachment;
Channel.InputChannelLevel = InputChannelLevel;
Channel.InputLocation = InputLocation;
Channel.InputLossBehavior = InputLossBehavior;
Channel.InputLossFailoverSettings = InputLossFailoverSettings;
Channel.InputSettings = InputSettings;
Channel.InputSpecification = InputSpecification;
Channel.KeyProviderSettings = KeyProviderSettings;
Channel.M2tsSettings = M2tsSettings;
Channel.M3u8Settings = M3u8Settings;
Channel.MaintenanceCreateSettings = MaintenanceCreateSettings;
Channel.MaintenanceUpdateSettings = MaintenanceUpdateSettings;
Channel.MediaPackageGroupSettings = MediaPackageGroupSettings;
Channel.MediaPackageOutputDestinationSettings = MediaPackageOutputDestinationSettings;
Channel.MediaPackageOutputSettings = MediaPackageOutputSettings;
Channel.MotionGraphicsConfiguration = MotionGraphicsConfiguration;
Channel.MotionGraphicsSettings = MotionGraphicsSettings;
Channel.Mp2Settings = Mp2Settings;
Channel.Mpeg2FilterSettings = Mpeg2FilterSettings;
Channel.Mpeg2Settings = Mpeg2Settings;
Channel.MsSmoothGroupSettings = MsSmoothGroupSettings;
Channel.MsSmoothOutputSettings = MsSmoothOutputSettings;
Channel.MultiplexGroupSettings = MultiplexGroupSettings;
Channel.MultiplexOutputSettings = MultiplexOutputSettings;
Channel.MultiplexProgramChannelDestinationSettings = MultiplexProgramChannelDestinationSettings;
Channel.NetworkInputSettings = NetworkInputSettings;
Channel.NielsenCBET = NielsenCBET;
Channel.NielsenConfiguration = NielsenConfiguration;
Channel.NielsenNaesIiNw = NielsenNaesIiNw;
Channel.NielsenWatermarksSettings = NielsenWatermarksSettings;
Channel.Output = Output;
Channel.OutputDestination = OutputDestination;
Channel.OutputDestinationSettings = OutputDestinationSettings;
Channel.OutputGroup = OutputGroup;
Channel.OutputGroupSettings = OutputGroupSettings;
Channel.OutputLocationRef = OutputLocationRef;
Channel.OutputSettings = OutputSettings;
Channel.PassThroughSettings = PassThroughSettings;
Channel.RawSettings = RawSettings;
Channel.Rec601Settings = Rec601Settings;
Channel.Rec709Settings = Rec709Settings;
Channel.RemixSettings = RemixSettings;
Channel.RtmpCaptionInfoDestinationSettings = RtmpCaptionInfoDestinationSettings;
Channel.RtmpGroupSettings = RtmpGroupSettings;
Channel.RtmpOutputSettings = RtmpOutputSettings;
Channel.Scte20PlusEmbeddedDestinationSettings = Scte20PlusEmbeddedDestinationSettings;
Channel.Scte20SourceSettings = Scte20SourceSettings;
Channel.Scte27DestinationSettings = Scte27DestinationSettings;
Channel.Scte27SourceSettings = Scte27SourceSettings;
Channel.Scte35SpliceInsert = Scte35SpliceInsert;
Channel.Scte35TimeSignalApos = Scte35TimeSignalApos;
Channel.SmpteTtDestinationSettings = SmpteTtDestinationSettings;
Channel.StandardHlsSettings = StandardHlsSettings;
Channel.StaticKeySettings = StaticKeySettings;
Channel.TeletextDestinationSettings = TeletextDestinationSettings;
Channel.TeletextSourceSettings = TeletextSourceSettings;
Channel.TemporalFilterSettings = TemporalFilterSettings;
Channel.ThumbnailConfiguration = ThumbnailConfiguration;
Channel.TimecodeBurninSettings = TimecodeBurninSettings;
Channel.TimecodeConfig = TimecodeConfig;
Channel.TtmlDestinationSettings = TtmlDestinationSettings;
Channel.UdpContainerSettings = UdpContainerSettings;
Channel.UdpGroupSettings = UdpGroupSettings;
Channel.UdpOutputSettings = UdpOutputSettings;
Channel.VideoBlackFailoverSettings = VideoBlackFailoverSettings;
Channel.VideoCodecSettings = VideoCodecSettings;
Channel.VideoDescription = VideoDescription;
Channel.VideoSelector = VideoSelector;
Channel.VideoSelectorColorSpaceSettings = VideoSelectorColorSpaceSettings;
Channel.VideoSelectorPid = VideoSelectorPid;
Channel.VideoSelectorProgramId = VideoSelectorProgramId;
Channel.VideoSelectorSettings = VideoSelectorSettings;
Channel.VpcOutputSettings = VpcOutputSettings;
Channel.WavSettings = WavSettings;
Channel.WebvttDestinationSettings = WebvttDestinationSettings;
