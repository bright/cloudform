import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Encryption {
    KeyRotationIntervalSeconds?: Value<number>;
    ConstantInitializationVector?: Value<string>;
    SpekeKeyProvider: SpekeKeyProvider;
    EncryptionMethod: EncryptionMethod;
    constructor(properties: Encryption);
}
export declare class EncryptionContractConfiguration {
    PresetSpeke20Audio: Value<string>;
    PresetSpeke20Video: Value<string>;
    constructor(properties: EncryptionContractConfiguration);
}
export declare class EncryptionMethod {
    CmafEncryptionMethod?: Value<string>;
    TsEncryptionMethod?: Value<string>;
    constructor(properties: EncryptionMethod);
}
export declare class FilterConfiguration {
    Start?: Value<string>;
    End?: Value<string>;
    TimeDelaySeconds?: Value<number>;
    ManifestFilter?: Value<string>;
    constructor(properties: FilterConfiguration);
}
export declare class HlsManifestConfiguration {
    ManifestWindowSeconds?: Value<number>;
    ManifestName: Value<string>;
    ProgramDateTimeIntervalSeconds?: Value<number>;
    ChildManifestName?: Value<string>;
    ScteHls?: ScteHls;
    FilterConfiguration?: FilterConfiguration;
    Url?: Value<string>;
    constructor(properties: HlsManifestConfiguration);
}
export declare class LowLatencyHlsManifestConfiguration {
    ManifestWindowSeconds?: Value<number>;
    ManifestName: Value<string>;
    ProgramDateTimeIntervalSeconds?: Value<number>;
    ChildManifestName?: Value<string>;
    ScteHls?: ScteHls;
    FilterConfiguration?: FilterConfiguration;
    Url?: Value<string>;
    constructor(properties: LowLatencyHlsManifestConfiguration);
}
export declare class Scte {
    ScteFilter?: List<Value<string>>;
    constructor(properties: Scte);
}
export declare class ScteHls {
    AdMarkerHls?: Value<string>;
    constructor(properties: ScteHls);
}
export declare class Segment {
    SegmentName?: Value<string>;
    TsUseAudioRenditionGroup?: Value<boolean>;
    IncludeIframeOnlyStreams?: Value<boolean>;
    Scte?: Scte;
    TsIncludeDvbSubtitles?: Value<boolean>;
    SegmentDurationSeconds?: Value<number>;
    Encryption?: Encryption;
    constructor(properties: Segment);
}
export declare class SpekeKeyProvider {
    DrmSystems: List<Value<string>>;
    ResourceId: Value<string>;
    EncryptionContractConfiguration: EncryptionContractConfiguration;
    RoleArn: Value<string>;
    Url: Value<string>;
    constructor(properties: SpekeKeyProvider);
}
export interface OriginEndpointProperties {
    Description?: Value<string>;
    ChannelName?: Value<string>;
    LowLatencyHlsManifests?: List<LowLatencyHlsManifestConfiguration>;
    ContainerType: Value<string>;
    OriginEndpointName?: Value<string>;
    HlsManifests?: List<HlsManifestConfiguration>;
    ChannelGroupName?: Value<string>;
    Segment?: Segment;
    Tags?: List<ResourceTag>;
    StartoverWindowSeconds?: Value<number>;
}
export default class OriginEndpoint extends ResourceBase<OriginEndpointProperties> {
    static Encryption: typeof Encryption;
    static EncryptionContractConfiguration: typeof EncryptionContractConfiguration;
    static EncryptionMethod: typeof EncryptionMethod;
    static FilterConfiguration: typeof FilterConfiguration;
    static HlsManifestConfiguration: typeof HlsManifestConfiguration;
    static LowLatencyHlsManifestConfiguration: typeof LowLatencyHlsManifestConfiguration;
    static Scte: typeof Scte;
    static ScteHls: typeof ScteHls;
    static Segment: typeof Segment;
    static SpekeKeyProvider: typeof SpekeKeyProvider;
    constructor(properties: OriginEndpointProperties);
}
