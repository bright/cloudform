import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CmafEncryption {
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: CmafEncryption);
}
export declare class CmafPackage {
    SegmentDurationSeconds?: Value<number>;
    Encryption?: CmafEncryption;
    HlsManifests: List<HlsManifest>;
    IncludeEncoderConfigurationInSegments?: Value<boolean>;
    constructor(properties: CmafPackage);
}
export declare class DashEncryption {
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: DashEncryption);
}
export declare class DashManifest {
    ScteMarkersSource?: Value<string>;
    ManifestName?: Value<string>;
    ManifestLayout?: Value<string>;
    StreamSelection?: StreamSelection;
    MinBufferTimeSeconds?: Value<number>;
    Profile?: Value<string>;
    constructor(properties: DashManifest);
}
export declare class DashPackage {
    PeriodTriggers?: List<Value<string>>;
    IncludeIframeOnlyStream?: Value<boolean>;
    SegmentDurationSeconds?: Value<number>;
    Encryption?: DashEncryption;
    SegmentTemplateFormat?: Value<string>;
    IncludeEncoderConfigurationInSegments?: Value<boolean>;
    DashManifests: List<DashManifest>;
    constructor(properties: DashPackage);
}
export declare class EncryptionContractConfiguration {
    PresetSpeke20Audio: Value<string>;
    PresetSpeke20Video: Value<string>;
    constructor(properties: EncryptionContractConfiguration);
}
export declare class HlsEncryption {
    ConstantInitializationVector?: Value<string>;
    SpekeKeyProvider: SpekeKeyProvider;
    EncryptionMethod?: Value<string>;
    constructor(properties: HlsEncryption);
}
export declare class HlsManifest {
    AdMarkers?: Value<string>;
    ManifestName?: Value<string>;
    ProgramDateTimeIntervalSeconds?: Value<number>;
    StreamSelection?: StreamSelection;
    RepeatExtXKey?: Value<boolean>;
    IncludeIframeOnlyStream?: Value<boolean>;
    constructor(properties: HlsManifest);
}
export declare class HlsPackage {
    UseAudioRenditionGroup?: Value<boolean>;
    SegmentDurationSeconds?: Value<number>;
    Encryption?: HlsEncryption;
    HlsManifests: List<HlsManifest>;
    IncludeDvbSubtitles?: Value<boolean>;
    constructor(properties: HlsPackage);
}
export declare class MssEncryption {
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: MssEncryption);
}
export declare class MssManifest {
    ManifestName?: Value<string>;
    StreamSelection?: StreamSelection;
    constructor(properties: MssManifest);
}
export declare class MssPackage {
    MssManifests: List<MssManifest>;
    SegmentDurationSeconds?: Value<number>;
    Encryption?: MssEncryption;
    constructor(properties: MssPackage);
}
export declare class SpekeKeyProvider {
    SystemIds: List<Value<string>>;
    EncryptionContractConfiguration?: EncryptionContractConfiguration;
    RoleArn: Value<string>;
    Url: Value<string>;
    constructor(properties: SpekeKeyProvider);
}
export declare class StreamSelection {
    MinVideoBitsPerSecond?: Value<number>;
    StreamOrder?: Value<string>;
    MaxVideoBitsPerSecond?: Value<number>;
    constructor(properties: StreamSelection);
}
export interface PackagingConfigurationProperties {
    MssPackage?: MssPackage;
    CmafPackage?: CmafPackage;
    Id: Value<string>;
    HlsPackage?: HlsPackage;
    PackagingGroupId: Value<string>;
    DashPackage?: DashPackage;
    Tags?: List<ResourceTag>;
}
export default class PackagingConfiguration extends ResourceBase<PackagingConfigurationProperties> {
    static CmafEncryption: typeof CmafEncryption;
    static CmafPackage: typeof CmafPackage;
    static DashEncryption: typeof DashEncryption;
    static DashManifest: typeof DashManifest;
    static DashPackage: typeof DashPackage;
    static EncryptionContractConfiguration: typeof EncryptionContractConfiguration;
    static HlsEncryption: typeof HlsEncryption;
    static HlsManifest: typeof HlsManifest;
    static HlsPackage: typeof HlsPackage;
    static MssEncryption: typeof MssEncryption;
    static MssManifest: typeof MssManifest;
    static MssPackage: typeof MssPackage;
    static SpekeKeyProvider: typeof SpekeKeyProvider;
    static StreamSelection: typeof StreamSelection;
    constructor(properties: PackagingConfigurationProperties);
}
