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
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CmafEncryption {
    SpekeKeyProvider!: SpekeKeyProvider

    constructor(properties: CmafEncryption) {
        Object.assign(this, properties)
    }
}

export class CmafPackage {
    SegmentDurationSeconds?: Value<number>
    Encryption?: CmafEncryption
    HlsManifests!: List<HlsManifest>
    IncludeEncoderConfigurationInSegments?: Value<boolean>

    constructor(properties: CmafPackage) {
        Object.assign(this, properties)
    }
}

export class DashEncryption {
    SpekeKeyProvider!: SpekeKeyProvider

    constructor(properties: DashEncryption) {
        Object.assign(this, properties)
    }
}

export class DashManifest {
    ScteMarkersSource?: Value<string>
    ManifestName?: Value<string>
    ManifestLayout?: Value<string>
    StreamSelection?: StreamSelection
    MinBufferTimeSeconds?: Value<number>
    Profile?: Value<string>

    constructor(properties: DashManifest) {
        Object.assign(this, properties)
    }
}

export class DashPackage {
    PeriodTriggers?: List<Value<string>>
    IncludeIframeOnlyStream?: Value<boolean>
    SegmentDurationSeconds?: Value<number>
    Encryption?: DashEncryption
    SegmentTemplateFormat?: Value<string>
    IncludeEncoderConfigurationInSegments?: Value<boolean>
    DashManifests!: List<DashManifest>

    constructor(properties: DashPackage) {
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

export class HlsEncryption {
    ConstantInitializationVector?: Value<string>
    SpekeKeyProvider!: SpekeKeyProvider
    EncryptionMethod?: Value<string>

    constructor(properties: HlsEncryption) {
        Object.assign(this, properties)
    }
}

export class HlsManifest {
    AdMarkers?: Value<string>
    ManifestName?: Value<string>
    ProgramDateTimeIntervalSeconds?: Value<number>
    StreamSelection?: StreamSelection
    RepeatExtXKey?: Value<boolean>
    IncludeIframeOnlyStream?: Value<boolean>

    constructor(properties: HlsManifest) {
        Object.assign(this, properties)
    }
}

export class HlsPackage {
    UseAudioRenditionGroup?: Value<boolean>
    SegmentDurationSeconds?: Value<number>
    Encryption?: HlsEncryption
    HlsManifests!: List<HlsManifest>
    IncludeDvbSubtitles?: Value<boolean>

    constructor(properties: HlsPackage) {
        Object.assign(this, properties)
    }
}

export class MssEncryption {
    SpekeKeyProvider!: SpekeKeyProvider

    constructor(properties: MssEncryption) {
        Object.assign(this, properties)
    }
}

export class MssManifest {
    ManifestName?: Value<string>
    StreamSelection?: StreamSelection

    constructor(properties: MssManifest) {
        Object.assign(this, properties)
    }
}

export class MssPackage {
    MssManifests!: List<MssManifest>
    SegmentDurationSeconds?: Value<number>
    Encryption?: MssEncryption

    constructor(properties: MssPackage) {
        Object.assign(this, properties)
    }
}

export class SpekeKeyProvider {
    SystemIds!: List<Value<string>>
    EncryptionContractConfiguration?: EncryptionContractConfiguration
    RoleArn!: Value<string>
    Url!: Value<string>

    constructor(properties: SpekeKeyProvider) {
        Object.assign(this, properties)
    }
}

export class StreamSelection {
    MinVideoBitsPerSecond?: Value<number>
    StreamOrder?: Value<string>
    MaxVideoBitsPerSecond?: Value<number>

    constructor(properties: StreamSelection) {
        Object.assign(this, properties)
    }
}

export interface PackagingConfigurationProperties {
    MssPackage?: MssPackage
    CmafPackage?: CmafPackage
    Id: Value<string>
    HlsPackage?: HlsPackage
    PackagingGroupId: Value<string>
    DashPackage?: DashPackage
    Tags?: List<ResourceTag>
}

export default class PackagingConfiguration extends ResourceBase<PackagingConfigurationProperties> {
    static CmafEncryption = CmafEncryption
    static CmafPackage = CmafPackage
    static DashEncryption = DashEncryption
    static DashManifest = DashManifest
    static DashPackage = DashPackage
    static EncryptionContractConfiguration = EncryptionContractConfiguration
    static HlsEncryption = HlsEncryption
    static HlsManifest = HlsManifest
    static HlsPackage = HlsPackage
    static MssEncryption = MssEncryption
    static MssManifest = MssManifest
    static MssPackage = MssPackage
    static SpekeKeyProvider = SpekeKeyProvider
    static StreamSelection = StreamSelection

    constructor(properties: PackagingConfigurationProperties) {
        super('AWS::MediaPackage::PackagingConfiguration', properties)
    }
}
