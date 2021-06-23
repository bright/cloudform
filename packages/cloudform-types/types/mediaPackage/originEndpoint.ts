/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class StreamSelection {
    MinVideoBitsPerSecond?: Value<number>
    MaxVideoBitsPerSecond?: Value<number>
    StreamOrder?: Value<string>

    constructor(properties: StreamSelection) {
        Object.assign(this, properties)
    }
}

export class CmafPackage {
    SegmentDurationSeconds?: Value<number>
    SegmentPrefix?: Value<string>
    Encryption?: CmafEncryption
    StreamSelection?: StreamSelection
    HlsManifests?: List<HlsManifest>

    constructor(properties: CmafPackage) {
        Object.assign(this, properties)
    }
}

export class MssEncryption {
    SpekeKeyProvider!: SpekeKeyProvider

    constructor(properties: MssEncryption) {
        Object.assign(this, properties)
    }
}

export class Authorization {
    SecretsRoleArn!: Value<string>
    CdnIdentifierSecret!: Value<string>

    constructor(properties: Authorization) {
        Object.assign(this, properties)
    }
}

export class DashPackage {
    SegmentDurationSeconds?: Value<number>
    ManifestWindowSeconds?: Value<number>
    Profile?: Value<string>
    MinUpdatePeriodSeconds?: Value<number>
    MinBufferTimeSeconds?: Value<number>
    SuggestedPresentationDelaySeconds?: Value<number>
    PeriodTriggers?: List<Value<string>>
    ManifestLayout?: Value<string>
    SegmentTemplateFormat?: Value<string>
    AdTriggers?: List<Value<string>>
    AdsOnDeliveryRestrictions?: Value<string>
    Encryption?: DashEncryption
    StreamSelection?: StreamSelection
    UtcTiming?: Value<string>
    UtcTimingUri?: Value<string>

    constructor(properties: DashPackage) {
        Object.assign(this, properties)
    }
}

export class DashEncryption {
    KeyRotationIntervalSeconds?: Value<number>
    SpekeKeyProvider!: SpekeKeyProvider

    constructor(properties: DashEncryption) {
        Object.assign(this, properties)
    }
}

export class HlsManifest {
    Id!: Value<string>
    ManifestName?: Value<string>
    Url?: Value<string>
    PlaylistWindowSeconds?: Value<number>
    PlaylistType?: Value<string>
    AdMarkers?: Value<string>
    ProgramDateTimeIntervalSeconds?: Value<number>
    IncludeIframeOnlyStream?: Value<boolean>
    AdTriggers?: List<Value<string>>
    AdsOnDeliveryRestrictions?: Value<string>

    constructor(properties: HlsManifest) {
        Object.assign(this, properties)
    }
}

export class SpekeKeyProvider {
    ResourceId!: Value<string>
    SystemIds!: List<Value<string>>
    Url!: Value<string>
    RoleArn!: Value<string>
    CertificateArn?: Value<string>

    constructor(properties: SpekeKeyProvider) {
        Object.assign(this, properties)
    }
}

export class CmafEncryption {
    KeyRotationIntervalSeconds?: Value<number>
    SpekeKeyProvider!: SpekeKeyProvider
    ConstantInitializationVector?: Value<string>

    constructor(properties: CmafEncryption) {
        Object.assign(this, properties)
    }
}

export class HlsEncryption {
    EncryptionMethod?: Value<string>
    ConstantInitializationVector?: Value<string>
    KeyRotationIntervalSeconds?: Value<number>
    RepeatExtXKey?: Value<boolean>
    SpekeKeyProvider!: SpekeKeyProvider

    constructor(properties: HlsEncryption) {
        Object.assign(this, properties)
    }
}

export class MssPackage {
    ManifestWindowSeconds?: Value<number>
    SegmentDurationSeconds?: Value<number>
    Encryption?: MssEncryption
    StreamSelection?: StreamSelection

    constructor(properties: MssPackage) {
        Object.assign(this, properties)
    }
}

export class HlsPackage {
    SegmentDurationSeconds?: Value<number>
    PlaylistWindowSeconds?: Value<number>
    PlaylistType?: Value<string>
    AdMarkers?: Value<string>
    AdTriggers?: List<Value<string>>
    AdsOnDeliveryRestrictions?: Value<string>
    ProgramDateTimeIntervalSeconds?: Value<number>
    IncludeIframeOnlyStream?: Value<boolean>
    UseAudioRenditionGroup?: Value<boolean>
    Encryption?: HlsEncryption
    StreamSelection?: StreamSelection

    constructor(properties: HlsPackage) {
        Object.assign(this, properties)
    }
}

export interface OriginEndpointProperties {
    Id: Value<string>
    ChannelId: Value<string>
    Description?: Value<string>
    Whitelist?: List<Value<string>>
    StartoverWindowSeconds?: Value<number>
    TimeDelaySeconds?: Value<number>
    ManifestName?: Value<string>
    Origination?: Value<string>
    Authorization?: Authorization
    HlsPackage?: HlsPackage
    DashPackage?: DashPackage
    MssPackage?: MssPackage
    CmafPackage?: CmafPackage
    Tags?: List<ResourceTag>
}

export default class OriginEndpoint extends ResourceBase<OriginEndpointProperties> {
    static StreamSelection = StreamSelection
    static CmafPackage = CmafPackage
    static MssEncryption = MssEncryption
    static Authorization = Authorization
    static DashPackage = DashPackage
    static DashEncryption = DashEncryption
    static HlsManifest = HlsManifest
    static SpekeKeyProvider = SpekeKeyProvider
    static CmafEncryption = CmafEncryption
    static HlsEncryption = HlsEncryption
    static MssPackage = MssPackage
    static HlsPackage = HlsPackage

    constructor(properties: OriginEndpointProperties) {
        super('AWS::MediaPackage::OriginEndpoint', properties)
    }
}
