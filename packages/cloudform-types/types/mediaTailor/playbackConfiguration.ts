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

export class AdMarkerPassthrough {
    Enabled?: Value<boolean>

    constructor(properties: AdMarkerPassthrough) {
        Object.assign(this, properties)
    }
}

export class AvailSuppression {
    Mode?: Value<string>
    Value?: Value<string>

    constructor(properties: AvailSuppression) {
        Object.assign(this, properties)
    }
}

export class Bumper {
    StartUrl?: Value<string>
    EndUrl?: Value<string>

    constructor(properties: Bumper) {
        Object.assign(this, properties)
    }
}

export class CdnConfiguration {
    AdSegmentUrlPrefix?: Value<string>
    ContentSegmentUrlPrefix?: Value<string>

    constructor(properties: CdnConfiguration) {
        Object.assign(this, properties)
    }
}

export class DashConfiguration {
    MpdLocation?: Value<string>
    ManifestEndpointPrefix?: Value<string>
    OriginManifestType?: Value<string>

    constructor(properties: DashConfiguration) {
        Object.assign(this, properties)
    }
}

export class HlsConfiguration {
    ManifestEndpointPrefix?: Value<string>

    constructor(properties: HlsConfiguration) {
        Object.assign(this, properties)
    }
}

export class LivePreRollConfiguration {
    AdDecisionServerUrl?: Value<string>
    MaxDurationSeconds?: Value<number>

    constructor(properties: LivePreRollConfiguration) {
        Object.assign(this, properties)
    }
}

export class ManifestProcessingRules {
    AdMarkerPassthrough?: AdMarkerPassthrough

    constructor(properties: ManifestProcessingRules) {
        Object.assign(this, properties)
    }
}

export interface PlaybackConfigurationProperties {
    Bumper?: Bumper
    DashConfiguration?: DashConfiguration
    CdnConfiguration?: CdnConfiguration
    ManifestProcessingRules?: ManifestProcessingRules
    PersonalizationThresholdSeconds?: Value<number>
    LivePreRollConfiguration?: LivePreRollConfiguration
    HlsConfiguration?: HlsConfiguration
    VideoContentSourceUrl: Value<string>
    Name: Value<string>
    TranscodeProfileName?: Value<string>
    ConfigurationAliases?: {[key: string]: {[key: string]: any}}
    AdDecisionServerUrl: Value<string>
    SlateAdUrl?: Value<string>
    AvailSuppression?: AvailSuppression
    Tags?: List<ResourceTag>
}

export default class PlaybackConfiguration extends ResourceBase<PlaybackConfigurationProperties> {
    static AdMarkerPassthrough = AdMarkerPassthrough
    static AvailSuppression = AvailSuppression
    static Bumper = Bumper
    static CdnConfiguration = CdnConfiguration
    static DashConfiguration = DashConfiguration
    static HlsConfiguration = HlsConfiguration
    static LivePreRollConfiguration = LivePreRollConfiguration
    static ManifestProcessingRules = ManifestProcessingRules

    constructor(properties: PlaybackConfigurationProperties) {
        super('AWS::MediaTailor::PlaybackConfiguration', properties)
    }
}
