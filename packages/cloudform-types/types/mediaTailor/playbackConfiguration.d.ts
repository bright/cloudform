import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdMarkerPassthrough {
    Enabled?: Value<boolean>;
    constructor(properties: AdMarkerPassthrough);
}
export declare class AvailSuppression {
    Mode?: Value<string>;
    Value?: Value<string>;
    constructor(properties: AvailSuppression);
}
export declare class Bumper {
    StartUrl?: Value<string>;
    EndUrl?: Value<string>;
    constructor(properties: Bumper);
}
export declare class CdnConfiguration {
    AdSegmentUrlPrefix?: Value<string>;
    ContentSegmentUrlPrefix?: Value<string>;
    constructor(properties: CdnConfiguration);
}
export declare class DashConfiguration {
    MpdLocation?: Value<string>;
    ManifestEndpointPrefix?: Value<string>;
    OriginManifestType?: Value<string>;
    constructor(properties: DashConfiguration);
}
export declare class HlsConfiguration {
    ManifestEndpointPrefix?: Value<string>;
    constructor(properties: HlsConfiguration);
}
export declare class LivePreRollConfiguration {
    AdDecisionServerUrl?: Value<string>;
    MaxDurationSeconds?: Value<number>;
    constructor(properties: LivePreRollConfiguration);
}
export declare class ManifestProcessingRules {
    AdMarkerPassthrough?: AdMarkerPassthrough;
    constructor(properties: ManifestProcessingRules);
}
export interface PlaybackConfigurationProperties {
    Bumper?: Bumper;
    DashConfiguration?: DashConfiguration;
    CdnConfiguration?: CdnConfiguration;
    ManifestProcessingRules?: ManifestProcessingRules;
    PersonalizationThresholdSeconds?: Value<number>;
    LivePreRollConfiguration?: LivePreRollConfiguration;
    HlsConfiguration?: HlsConfiguration;
    VideoContentSourceUrl: Value<string>;
    Name: Value<string>;
    TranscodeProfileName?: Value<string>;
    ConfigurationAliases?: {
        [key: string]: {
            [key: string]: any;
        };
    };
    AdDecisionServerUrl: Value<string>;
    SlateAdUrl?: Value<string>;
    AvailSuppression?: AvailSuppression;
    Tags?: List<ResourceTag>;
}
export default class PlaybackConfiguration extends ResourceBase<PlaybackConfigurationProperties> {
    static AdMarkerPassthrough: typeof AdMarkerPassthrough;
    static AvailSuppression: typeof AvailSuppression;
    static Bumper: typeof Bumper;
    static CdnConfiguration: typeof CdnConfiguration;
    static DashConfiguration: typeof DashConfiguration;
    static HlsConfiguration: typeof HlsConfiguration;
    static LivePreRollConfiguration: typeof LivePreRollConfiguration;
    static ManifestProcessingRules: typeof ManifestProcessingRules;
    constructor(properties: PlaybackConfigurationProperties);
}
