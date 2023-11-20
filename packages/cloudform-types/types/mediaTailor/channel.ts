/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DashPlaylistSettings {
    ManifestWindowSeconds?: Value<number>
    SuggestedPresentationDelaySeconds?: Value<number>
    MinBufferTimeSeconds?: Value<number>
    MinUpdatePeriodSeconds?: Value<number>

    constructor(properties: DashPlaylistSettings) {
        Object.assign(this, properties)
    }
}

export class HlsPlaylistSettings {
    ManifestWindowSeconds?: Value<number>
    AdMarkupType?: List<Value<string>>

    constructor(properties: HlsPlaylistSettings) {
        Object.assign(this, properties)
    }
}

export class LogConfigurationForChannel {
    LogTypes?: List<Value<string>>

    constructor(properties: LogConfigurationForChannel) {
        Object.assign(this, properties)
    }
}

export class RequestOutputItem {
    ManifestName!: Value<string>
    DashPlaylistSettings?: DashPlaylistSettings
    HlsPlaylistSettings?: HlsPlaylistSettings
    SourceGroup!: Value<string>

    constructor(properties: RequestOutputItem) {
        Object.assign(this, properties)
    }
}

export class SlateSource {
    VodSourceName?: Value<string>
    SourceLocationName?: Value<string>

    constructor(properties: SlateSource) {
        Object.assign(this, properties)
    }
}

export interface ChannelProperties {
    FillerSlate?: SlateSource
    ChannelName: Value<string>
    Tier?: Value<string>
    Outputs: List<RequestOutputItem>
    LogConfiguration?: LogConfigurationForChannel
    PlaybackMode: Value<string>
    Tags?: List<ResourceTag>
}

export default class Channel extends ResourceBase<ChannelProperties> {
    static DashPlaylistSettings = DashPlaylistSettings
    static HlsPlaylistSettings = HlsPlaylistSettings
    static LogConfigurationForChannel = LogConfigurationForChannel
    static RequestOutputItem = RequestOutputItem
    static SlateSource = SlateSource

    constructor(properties: ChannelProperties) {
        super('AWS::MediaTailor::Channel', properties)
    }
}
