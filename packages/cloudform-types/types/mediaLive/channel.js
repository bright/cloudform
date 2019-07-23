"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MediaPackageOutputDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MediaPackageOutputDestinationSettings = MediaPackageOutputDestinationSettings;
class HlsInputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsInputSettings = HlsInputSettings;
class VideoSelectorProgramId {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoSelectorProgramId = VideoSelectorProgramId;
class InputAttachment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputAttachment = InputAttachment;
class EmbeddedSourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EmbeddedSourceSettings = EmbeddedSourceSettings;
class InputSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputSpecification = InputSpecification;
class Scte27SourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Scte27SourceSettings = Scte27SourceSettings;
class VideoSelectorPid {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoSelectorPid = VideoSelectorPid;
class InputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputSettings = InputSettings;
class AudioSelector {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioSelector = AudioSelector;
class AudioLanguageSelection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioLanguageSelection = AudioLanguageSelection;
class AribSourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AribSourceSettings = AribSourceSettings;
class AudioPidSelection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioPidSelection = AudioPidSelection;
class DvbSubSourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DvbSubSourceSettings = DvbSubSourceSettings;
class CaptionSelectorSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptionSelectorSettings = CaptionSelectorSettings;
class VideoSelectorSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoSelectorSettings = VideoSelectorSettings;
class TeletextSourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TeletextSourceSettings = TeletextSourceSettings;
class NetworkInputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkInputSettings = NetworkInputSettings;
class Scte20SourceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Scte20SourceSettings = Scte20SourceSettings;
class AudioSelectorSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioSelectorSettings = AudioSelectorSettings;
class VideoSelector {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VideoSelector = VideoSelector;
class OutputDestinationSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputDestinationSettings = OutputDestinationSettings;
class OutputDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputDestination = OutputDestination;
class CaptionSelector {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CaptionSelector = CaptionSelector;
class Channel extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MediaLive::Channel', properties || {});
    }
}
Channel.MediaPackageOutputDestinationSettings = MediaPackageOutputDestinationSettings;
Channel.HlsInputSettings = HlsInputSettings;
Channel.VideoSelectorProgramId = VideoSelectorProgramId;
Channel.InputAttachment = InputAttachment;
Channel.EmbeddedSourceSettings = EmbeddedSourceSettings;
Channel.InputSpecification = InputSpecification;
Channel.Scte27SourceSettings = Scte27SourceSettings;
Channel.VideoSelectorPid = VideoSelectorPid;
Channel.InputSettings = InputSettings;
Channel.AudioSelector = AudioSelector;
Channel.AudioLanguageSelection = AudioLanguageSelection;
Channel.AribSourceSettings = AribSourceSettings;
Channel.AudioPidSelection = AudioPidSelection;
Channel.DvbSubSourceSettings = DvbSubSourceSettings;
Channel.CaptionSelectorSettings = CaptionSelectorSettings;
Channel.VideoSelectorSettings = VideoSelectorSettings;
Channel.TeletextSourceSettings = TeletextSourceSettings;
Channel.NetworkInputSettings = NetworkInputSettings;
Channel.Scte20SourceSettings = Scte20SourceSettings;
Channel.AudioSelectorSettings = AudioSelectorSettings;
Channel.VideoSelector = VideoSelector;
Channel.OutputDestinationSettings = OutputDestinationSettings;
Channel.OutputDestination = OutputDestination;
Channel.CaptionSelector = CaptionSelector;
exports.default = Channel;
