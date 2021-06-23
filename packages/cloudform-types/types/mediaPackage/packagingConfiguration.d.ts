import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DashEncryption {
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: DashEncryption);
}
export declare class SpekeKeyProvider {
    RoleArn: Value<string>;
    SystemIds: List<Value<string>>;
    Url: Value<string>;
    constructor(properties: SpekeKeyProvider);
}
export declare class CmafPackage {
    Encryption?: CmafEncryption;
    HlsManifests: List<HlsManifest>;
    SegmentDurationSeconds?: Value<number>;
    IncludeEncoderConfigurationInSegments?: Value<boolean>;
    constructor(properties: CmafPackage);
}
export declare class DashPackage {
    DashManifests: List<DashManifest>;
    Encryption?: DashEncryption;
    PeriodTriggers?: List<Value<string>>;
    SegmentDurationSeconds?: Value<number>;
    SegmentTemplateFormat?: Value<string>;
    IncludeEncoderConfigurationInSegments?: Value<boolean>;
    constructor(properties: DashPackage);
}
export declare class DashManifest {
    ManifestLayout?: Value<string>;
    ManifestName?: Value<string>;
    MinBufferTimeSeconds?: Value<number>;
    Profile?: Value<string>;
    StreamSelection?: StreamSelection;
    constructor(properties: DashManifest);
}
export declare class HlsEncryption {
    ConstantInitializationVector?: Value<string>;
    EncryptionMethod?: Value<string>;
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: HlsEncryption);
}
export declare class MssManifest {
    ManifestName?: Value<string>;
    StreamSelection?: StreamSelection;
    constructor(properties: MssManifest);
}
export declare class CmafEncryption {
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: CmafEncryption);
}
export declare class MssEncryption {
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: MssEncryption);
}
export declare class StreamSelection {
    MaxVideoBitsPerSecond?: Value<number>;
    MinVideoBitsPerSecond?: Value<number>;
    StreamOrder?: Value<string>;
    constructor(properties: StreamSelection);
}
export declare class MssPackage {
    Encryption?: MssEncryption;
    MssManifests: List<MssManifest>;
    SegmentDurationSeconds?: Value<number>;
    constructor(properties: MssPackage);
}
export declare class HlsPackage {
    Encryption?: HlsEncryption;
    HlsManifests: List<HlsManifest>;
    SegmentDurationSeconds?: Value<number>;
    UseAudioRenditionGroup?: Value<boolean>;
    constructor(properties: HlsPackage);
}
export declare class HlsManifest {
    AdMarkers?: Value<string>;
    IncludeIframeOnlyStream?: Value<boolean>;
    ManifestName?: Value<string>;
    ProgramDateTimeIntervalSeconds?: Value<number>;
    RepeatExtXKey?: Value<boolean>;
    StreamSelection?: StreamSelection;
    constructor(properties: HlsManifest);
}
export interface PackagingConfigurationProperties {
    Id: Value<string>;
    PackagingGroupId: Value<string>;
    CmafPackage?: CmafPackage;
    DashPackage?: DashPackage;
    HlsPackage?: HlsPackage;
    MssPackage?: MssPackage;
    Tags?: List<ResourceTag>;
}
export default class PackagingConfiguration extends ResourceBase<PackagingConfigurationProperties> {
    static DashEncryption: typeof DashEncryption;
    static SpekeKeyProvider: typeof SpekeKeyProvider;
    static CmafPackage: typeof CmafPackage;
    static DashPackage: typeof DashPackage;
    static DashManifest: typeof DashManifest;
    static HlsEncryption: typeof HlsEncryption;
    static MssManifest: typeof MssManifest;
    static CmafEncryption: typeof CmafEncryption;
    static MssEncryption: typeof MssEncryption;
    static StreamSelection: typeof StreamSelection;
    static MssPackage: typeof MssPackage;
    static HlsPackage: typeof HlsPackage;
    static HlsManifest: typeof HlsManifest;
    constructor(properties: PackagingConfigurationProperties);
}
