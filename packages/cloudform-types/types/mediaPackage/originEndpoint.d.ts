import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class StreamSelection {
    MinVideoBitsPerSecond?: Value<number>;
    MaxVideoBitsPerSecond?: Value<number>;
    StreamOrder?: Value<string>;
    constructor(properties: StreamSelection);
}
export declare class CmafPackage {
    SegmentDurationSeconds?: Value<number>;
    SegmentPrefix?: Value<string>;
    Encryption?: CmafEncryption;
    StreamSelection?: StreamSelection;
    HlsManifests?: List<HlsManifest>;
    constructor(properties: CmafPackage);
}
export declare class MssEncryption {
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: MssEncryption);
}
export declare class Authorization {
    SecretsRoleArn: Value<string>;
    CdnIdentifierSecret: Value<string>;
    constructor(properties: Authorization);
}
export declare class DashPackage {
    SegmentDurationSeconds?: Value<number>;
    ManifestWindowSeconds?: Value<number>;
    Profile?: Value<string>;
    MinUpdatePeriodSeconds?: Value<number>;
    MinBufferTimeSeconds?: Value<number>;
    SuggestedPresentationDelaySeconds?: Value<number>;
    PeriodTriggers?: List<Value<string>>;
    ManifestLayout?: Value<string>;
    SegmentTemplateFormat?: Value<string>;
    AdTriggers?: List<Value<string>>;
    AdsOnDeliveryRestrictions?: Value<string>;
    Encryption?: DashEncryption;
    StreamSelection?: StreamSelection;
    UtcTiming?: Value<string>;
    UtcTimingUri?: Value<string>;
    constructor(properties: DashPackage);
}
export declare class DashEncryption {
    KeyRotationIntervalSeconds?: Value<number>;
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: DashEncryption);
}
export declare class HlsManifest {
    Id: Value<string>;
    ManifestName?: Value<string>;
    Url?: Value<string>;
    PlaylistWindowSeconds?: Value<number>;
    PlaylistType?: Value<string>;
    AdMarkers?: Value<string>;
    ProgramDateTimeIntervalSeconds?: Value<number>;
    IncludeIframeOnlyStream?: Value<boolean>;
    AdTriggers?: List<Value<string>>;
    AdsOnDeliveryRestrictions?: Value<string>;
    constructor(properties: HlsManifest);
}
export declare class SpekeKeyProvider {
    ResourceId: Value<string>;
    SystemIds: List<Value<string>>;
    Url: Value<string>;
    RoleArn: Value<string>;
    CertificateArn?: Value<string>;
    constructor(properties: SpekeKeyProvider);
}
export declare class CmafEncryption {
    KeyRotationIntervalSeconds?: Value<number>;
    SpekeKeyProvider: SpekeKeyProvider;
    ConstantInitializationVector?: Value<string>;
    constructor(properties: CmafEncryption);
}
export declare class HlsEncryption {
    EncryptionMethod?: Value<string>;
    ConstantInitializationVector?: Value<string>;
    KeyRotationIntervalSeconds?: Value<number>;
    RepeatExtXKey?: Value<boolean>;
    SpekeKeyProvider: SpekeKeyProvider;
    constructor(properties: HlsEncryption);
}
export declare class MssPackage {
    ManifestWindowSeconds?: Value<number>;
    SegmentDurationSeconds?: Value<number>;
    Encryption?: MssEncryption;
    StreamSelection?: StreamSelection;
    constructor(properties: MssPackage);
}
export declare class HlsPackage {
    SegmentDurationSeconds?: Value<number>;
    PlaylistWindowSeconds?: Value<number>;
    PlaylistType?: Value<string>;
    AdMarkers?: Value<string>;
    AdTriggers?: List<Value<string>>;
    AdsOnDeliveryRestrictions?: Value<string>;
    ProgramDateTimeIntervalSeconds?: Value<number>;
    IncludeIframeOnlyStream?: Value<boolean>;
    UseAudioRenditionGroup?: Value<boolean>;
    Encryption?: HlsEncryption;
    StreamSelection?: StreamSelection;
    constructor(properties: HlsPackage);
}
export interface OriginEndpointProperties {
    Id: Value<string>;
    ChannelId: Value<string>;
    Description?: Value<string>;
    Whitelist?: List<Value<string>>;
    StartoverWindowSeconds?: Value<number>;
    TimeDelaySeconds?: Value<number>;
    ManifestName?: Value<string>;
    Origination?: Value<string>;
    Authorization?: Authorization;
    HlsPackage?: HlsPackage;
    DashPackage?: DashPackage;
    MssPackage?: MssPackage;
    CmafPackage?: CmafPackage;
    Tags?: List<ResourceTag>;
}
export default class OriginEndpoint extends ResourceBase<OriginEndpointProperties> {
    static StreamSelection: typeof StreamSelection;
    static CmafPackage: typeof CmafPackage;
    static MssEncryption: typeof MssEncryption;
    static Authorization: typeof Authorization;
    static DashPackage: typeof DashPackage;
    static DashEncryption: typeof DashEncryption;
    static HlsManifest: typeof HlsManifest;
    static SpekeKeyProvider: typeof SpekeKeyProvider;
    static CmafEncryption: typeof CmafEncryption;
    static HlsEncryption: typeof HlsEncryption;
    static MssPackage: typeof MssPackage;
    static HlsPackage: typeof HlsPackage;
    constructor(properties: OriginEndpointProperties);
}
