import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DashPlaylistSettings {
    ManifestWindowSeconds?: Value<number>;
    SuggestedPresentationDelaySeconds?: Value<number>;
    MinBufferTimeSeconds?: Value<number>;
    MinUpdatePeriodSeconds?: Value<number>;
    constructor(properties: DashPlaylistSettings);
}
export declare class HlsPlaylistSettings {
    ManifestWindowSeconds?: Value<number>;
    AdMarkupType?: List<Value<string>>;
    constructor(properties: HlsPlaylistSettings);
}
export declare class LogConfigurationForChannel {
    LogTypes?: List<Value<string>>;
    constructor(properties: LogConfigurationForChannel);
}
export declare class RequestOutputItem {
    ManifestName: Value<string>;
    DashPlaylistSettings?: DashPlaylistSettings;
    HlsPlaylistSettings?: HlsPlaylistSettings;
    SourceGroup: Value<string>;
    constructor(properties: RequestOutputItem);
}
export declare class SlateSource {
    VodSourceName?: Value<string>;
    SourceLocationName?: Value<string>;
    constructor(properties: SlateSource);
}
export interface ChannelProperties {
    FillerSlate?: SlateSource;
    ChannelName: Value<string>;
    Tier?: Value<string>;
    Outputs: List<RequestOutputItem>;
    LogConfiguration?: LogConfigurationForChannel;
    PlaybackMode: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Channel extends ResourceBase<ChannelProperties> {
    static DashPlaylistSettings: typeof DashPlaylistSettings;
    static HlsPlaylistSettings: typeof HlsPlaylistSettings;
    static LogConfigurationForChannel: typeof LogConfigurationForChannel;
    static RequestOutputItem: typeof RequestOutputItem;
    static SlateSource: typeof SlateSource;
    constructor(properties: ChannelProperties);
}
