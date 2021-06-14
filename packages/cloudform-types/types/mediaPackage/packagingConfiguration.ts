/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DashEncryption {


    constructor(properties: DashEncryption) {
        Object.assign(this, properties)
    }
}

export class SpekeKeyProvider {
    RoleArn!: Value<string>
    Url!: Value<string>

    constructor(properties: SpekeKeyProvider) {
        Object.assign(this, properties)
    }
}

export class CmafPackage {
    SegmentDurationSeconds?: Value<number>
    IncludeEncoderConfigurationInSegments?: Value<boolean>

    constructor(properties: CmafPackage) {
        Object.assign(this, properties)
    }
}

export class DashPackage {
    SegmentDurationSeconds?: Value<number>
    SegmentTemplateFormat?: Value<string>
    IncludeEncoderConfigurationInSegments?: Value<boolean>

    constructor(properties: DashPackage) {
        Object.assign(this, properties)
    }
}

export class DashManifest {
    ManifestLayout?: Value<string>
    ManifestName?: Value<string>
    MinBufferTimeSeconds?: Value<number>
    Profile?: Value<string>

    constructor(properties: DashManifest) {
        Object.assign(this, properties)
    }
}

export class HlsEncryption {
    ConstantInitializationVector?: Value<string>
    EncryptionMethod?: Value<string>

    constructor(properties: HlsEncryption) {
        Object.assign(this, properties)
    }
}

export class MssManifest {
    ManifestName?: Value<string>

    constructor(properties: MssManifest) {
        Object.assign(this, properties)
    }
}

export class CmafEncryption {


    constructor(properties: CmafEncryption) {
        Object.assign(this, properties)
    }
}

export class MssEncryption {


    constructor(properties: MssEncryption) {
        Object.assign(this, properties)
    }
}

export class StreamSelection {
    MaxVideoBitsPerSecond?: Value<number>
    MinVideoBitsPerSecond?: Value<number>
    StreamOrder?: Value<string>

    constructor(properties: StreamSelection) {
        Object.assign(this, properties)
    }
}

export class MssPackage {
    SegmentDurationSeconds?: Value<number>

    constructor(properties: MssPackage) {
        Object.assign(this, properties)
    }
}

export class HlsPackage {
    SegmentDurationSeconds?: Value<number>
    UseAudioRenditionGroup?: Value<boolean>

    constructor(properties: HlsPackage) {
        Object.assign(this, properties)
    }
}

export class HlsManifest {
    AdMarkers?: Value<string>
    IncludeIframeOnlyStream?: Value<boolean>
    ManifestName?: Value<string>
    ProgramDateTimeIntervalSeconds?: Value<number>
    RepeatExtXKey?: Value<boolean>

    constructor(properties: HlsManifest) {
        Object.assign(this, properties)
    }
}

export interface PackagingConfigurationProperties {
    Id: Value<string>
    PackagingGroupId: Value<string>
}

export default class PackagingConfiguration extends ResourceBase<PackagingConfigurationProperties> {
    static DashEncryption = DashEncryption
    static SpekeKeyProvider = SpekeKeyProvider
    static CmafPackage = CmafPackage
    static DashPackage = DashPackage
    static DashManifest = DashManifest
    static HlsEncryption = HlsEncryption
    static MssManifest = MssManifest
    static CmafEncryption = CmafEncryption
    static MssEncryption = MssEncryption
    static StreamSelection = StreamSelection
    static MssPackage = MssPackage
    static HlsPackage = HlsPackage
    static HlsManifest = HlsManifest

    constructor(properties: PackagingConfigurationProperties) {
        super('AWS::MediaPackage::PackagingConfiguration', properties)
    }
}
