import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DestinationConfiguration {
    S3?: S3DestinationConfiguration;
    constructor(properties: DestinationConfiguration);
}
export declare class RenditionConfiguration {
    RenditionSelection?: Value<string>;
    Renditions?: List<Value<string>>;
    constructor(properties: RenditionConfiguration);
}
export declare class S3DestinationConfiguration {
    BucketName: Value<string>;
    constructor(properties: S3DestinationConfiguration);
}
export declare class ThumbnailConfiguration {
    TargetIntervalSeconds?: Value<number>;
    Storage?: List<Value<string>>;
    RecordingMode?: Value<string>;
    Resolution?: Value<string>;
    constructor(properties: ThumbnailConfiguration);
}
export interface RecordingConfigurationProperties {
    DestinationConfiguration: DestinationConfiguration;
    RenditionConfiguration?: RenditionConfiguration;
    RecordingReconnectWindowSeconds?: Value<number>;
    Tags?: List<ResourceTag>;
    ThumbnailConfiguration?: ThumbnailConfiguration;
    Name?: Value<string>;
}
export default class RecordingConfiguration extends ResourceBase<RecordingConfigurationProperties> {
    static DestinationConfiguration: typeof DestinationConfiguration;
    static RenditionConfiguration: typeof RenditionConfiguration;
    static S3DestinationConfiguration: typeof S3DestinationConfiguration;
    static ThumbnailConfiguration: typeof ThumbnailConfiguration;
    constructor(properties: RecordingConfigurationProperties);
}
