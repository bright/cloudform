/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Encryption {
    KeyRotationIntervalSeconds?: Value<number>
    ConstantInitializationVector?: Value<string>
    SpekeKeyProvider!: SpekeKeyProvider
    EncryptionMethod!: EncryptionMethod

    constructor(properties: Encryption) {
        Object.assign(this, properties)
    }
}

export class EncryptionContractConfiguration {
    PresetSpeke20Audio!: Value<string>
    PresetSpeke20Video!: Value<string>

    constructor(properties: EncryptionContractConfiguration) {
        Object.assign(this, properties)
    }
}

export class EncryptionMethod {
    CmafEncryptionMethod?: Value<string>
    TsEncryptionMethod?: Value<string>

    constructor(properties: EncryptionMethod) {
        Object.assign(this, properties)
    }
}

export class FilterConfiguration {
    Start?: Value<string>
    End?: Value<string>
    TimeDelaySeconds?: Value<number>
    ManifestFilter?: Value<string>

    constructor(properties: FilterConfiguration) {
        Object.assign(this, properties)
    }
}

export class HlsManifestConfiguration {
    ManifestWindowSeconds?: Value<number>
    ManifestName!: Value<string>
    ProgramDateTimeIntervalSeconds?: Value<number>
    ChildManifestName?: Value<string>
    ScteHls?: ScteHls
    FilterConfiguration?: FilterConfiguration
    Url?: Value<string>

    constructor(properties: HlsManifestConfiguration) {
        Object.assign(this, properties)
    }
}

export class LowLatencyHlsManifestConfiguration {
    ManifestWindowSeconds?: Value<number>
    ManifestName!: Value<string>
    ProgramDateTimeIntervalSeconds?: Value<number>
    ChildManifestName?: Value<string>
    ScteHls?: ScteHls
    FilterConfiguration?: FilterConfiguration
    Url?: Value<string>

    constructor(properties: LowLatencyHlsManifestConfiguration) {
        Object.assign(this, properties)
    }
}

export class Scte {
    ScteFilter?: List<Value<string>>

    constructor(properties: Scte) {
        Object.assign(this, properties)
    }
}

export class ScteHls {
    AdMarkerHls?: Value<string>

    constructor(properties: ScteHls) {
        Object.assign(this, properties)
    }
}

export class Segment {
    SegmentName?: Value<string>
    TsUseAudioRenditionGroup?: Value<boolean>
    IncludeIframeOnlyStreams?: Value<boolean>
    Scte?: Scte
    TsIncludeDvbSubtitles?: Value<boolean>
    SegmentDurationSeconds?: Value<number>
    Encryption?: Encryption

    constructor(properties: Segment) {
        Object.assign(this, properties)
    }
}

export class SpekeKeyProvider {
    DrmSystems!: List<Value<string>>
    ResourceId!: Value<string>
    EncryptionContractConfiguration!: EncryptionContractConfiguration
    RoleArn!: Value<string>
    Url!: Value<string>

    constructor(properties: SpekeKeyProvider) {
        Object.assign(this, properties)
    }
}

export interface OriginEndpointProperties {
    Description?: Value<string>
    ChannelName?: Value<string>
    LowLatencyHlsManifests?: List<LowLatencyHlsManifestConfiguration>
    ContainerType: Value<string>
    OriginEndpointName?: Value<string>
    HlsManifests?: List<HlsManifestConfiguration>
    ChannelGroupName?: Value<string>
    Segment?: Segment
    Tags?: List<ResourceTag>
    StartoverWindowSeconds?: Value<number>
}

export default class OriginEndpoint extends ResourceBase<OriginEndpointProperties> {
    static Encryption = Encryption
    static EncryptionContractConfiguration = EncryptionContractConfiguration
    static EncryptionMethod = EncryptionMethod
    static FilterConfiguration = FilterConfiguration
    static HlsManifestConfiguration = HlsManifestConfiguration
    static LowLatencyHlsManifestConfiguration = LowLatencyHlsManifestConfiguration
    static Scte = Scte
    static ScteHls = ScteHls
    static Segment = Segment
    static SpekeKeyProvider = SpekeKeyProvider

    constructor(properties: OriginEndpointProperties) {
        super('AWS::MediaPackageV2::OriginEndpoint', properties)
    }
}
