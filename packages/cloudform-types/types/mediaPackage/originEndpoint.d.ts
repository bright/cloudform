import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Authorization {
    SecretsRoleArn: Value<string>;
    CdnIdentifierSecret: Value<string>;
    constructor(properties: Authorization);
}
export declare class CmafEncryption {
    KeyRotationIntervalSeconds?: Value<number>;
    SpekeKeyProvider: SpekeKeyProvider;
    ConstantInitializationVector?: Value<string>;
    EncryptionMethod?: Value<string>;
    constructor(properties: CmafEncryption);
}
export declare class CmafPackage {
    SegmentPrefix?: Value<string>;
    StreamSelection?: StreamSelection;
    SegmentDurationSeconds?: Value<number>;
    Encryption?: CmafEncryption;
    HlsManifests?: List<HlsManifest>;
    constructor(properties: CmafPackage);
}
export declare class DashEncryption {
    KeyRotationIntervalSeconds?: Value<number>;
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: DashEncryption);
}
export declare class DashPackage {
    ManifestWindowSeconds?: Value<number>;
    AdsOnDeliveryRestrictions?: Value<string>;
    ManifestLayout?: Value<string>;
    StreamSelection?: StreamSelection;
    IncludeIframeOnlyStream?: Value<boolean>;
    SegmentTemplateFormat?: Value<string>;
    Encryption?: DashEncryption;
    AdTriggers?: List<Value<string>>;
    Profile?: Value<string>;
    PeriodTriggers?: List<Value<string>>;
    SuggestedPresentationDelaySeconds?: Value<number>;
    UtcTiming?: Value<string>;
    MinBufferTimeSeconds?: Value<number>;
    SegmentDurationSeconds?: Value<number>;
    MinUpdatePeriodSeconds?: Value<number>;
    UtcTimingUri?: Value<string>;
    constructor(properties: DashPackage);
}
export declare class EncryptionContractConfiguration {
    constructor(properties: EncryptionContractConfiguration);
}
export declare class HlsEncryption {
    KeyRotationIntervalSeconds?: Value<number>;
    RepeatExtXKey?: Value<boolean>;
    ConstantInitializationVector?: Value<string>;
    SpekeKeyProvider: SpekeKeyProvider;
    EncryptionMethod?: Value<string>;
    constructor(properties: HlsEncryption);
}
export declare class HlsManifest {
    AdsOnDeliveryRestrictions?: Value<string>;
    ManifestName?: Value<string>;
    AdMarkers?: Value<string>;
    ProgramDateTimeIntervalSeconds?: Value<number>;
    PlaylistWindowSeconds?: Value<number>;
    IncludeIframeOnlyStream?: Value<boolean>;
    Id: Value<string>;
    PlaylistType?: Value<string>;
    AdTriggers?: List<Value<string>>;
    Url?: Value<string>;
    constructor(properties: HlsManifest);
}
export declare class HlsPackage {
    AdsOnDeliveryRestrictions?: Value<string>;
    AdMarkers?: Value<string>;
    ProgramDateTimeIntervalSeconds?: Value<number>;
    StreamSelection?: StreamSelection;
    PlaylistWindowSeconds?: Value<number>;
    IncludeIframeOnlyStream?: Value<boolean>;
    UseAudioRenditionGroup?: Value<boolean>;
    SegmentDurationSeconds?: Value<number>;
    Encryption?: HlsEncryption;
    PlaylistType?: Value<string>;
    AdTriggers?: List<Value<string>>;
    IncludeDvbSubtitles?: Value<boolean>;
    constructor(properties: HlsPackage);
}
export declare class MssEncryption {
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: MssEncryption);
}
export declare class MssPackage {
    ManifestWindowSeconds?: Value<number>;
    StreamSelection?: StreamSelection;
    SegmentDurationSeconds?: Value<number>;
    Encryption?: MssEncryption;
    constructor(properties: MssPackage);
}
export declare class SpekeKeyProvider {
    ResourceId: Value<string>;
    SystemIds: List<Value<string>>;
    EncryptionContractConfiguration?: EncryptionContractConfiguration;
    Url: Value<string>;
    RoleArn: Value<string>;
    CertificateArn?: Value<string>;
    constructor(properties: SpekeKeyProvider);
}
export declare class StreamSelection {
    MinVideoBitsPerSecond?: Value<number>;
    StreamOrder?: Value<string>;
    MaxVideoBitsPerSecond?: Value<number>;
    constructor(properties: StreamSelection);
}
export interface OriginEndpointProperties {
    MssPackage?: MssPackage;
    Description?: Value<string>;
    ChannelId: Value<string>;
    TimeDelaySeconds?: Value<number>;
    Origination?: Value<string>;
    Authorization?: Authorization;
    ManifestName?: Value<string>;
    CmafPackage?: CmafPackage;
    Whitelist?: List<Value<string>>;
    Id: Value<string>;
    HlsPackage?: HlsPackage;
    DashPackage?: DashPackage;
    Tags?: List<ResourceTag>;
    StartoverWindowSeconds?: Value<number>;
}
export default class OriginEndpoint extends ResourceBase<OriginEndpointProperties> {
    static Authorization: typeof Authorization;
    static CmafEncryption: typeof CmafEncryption;
    static CmafPackage: typeof CmafPackage;
    static DashEncryption: typeof DashEncryption;
    static DashPackage: typeof DashPackage;
    static EncryptionContractConfiguration: typeof EncryptionContractConfiguration;
    static HlsEncryption: typeof HlsEncryption;
    static HlsManifest: typeof HlsManifest;
    static HlsPackage: typeof HlsPackage;
    static MssEncryption: typeof MssEncryption;
    static MssPackage: typeof MssPackage;
    static SpekeKeyProvider: typeof SpekeKeyProvider;
    static StreamSelection: typeof StreamSelection;
    constructor(properties: OriginEndpointProperties);
}
