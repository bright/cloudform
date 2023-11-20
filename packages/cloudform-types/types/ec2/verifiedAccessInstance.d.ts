import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CloudWatchLogs {
    LogGroup?: Value<string>;
    Enabled?: Value<boolean>;
    constructor(properties: CloudWatchLogs);
}
export declare class KinesisDataFirehose {
    DeliveryStream?: Value<string>;
    Enabled?: Value<boolean>;
    constructor(properties: KinesisDataFirehose);
}
export declare class S3 {
    BucketName?: Value<string>;
    Enabled?: Value<boolean>;
    Prefix?: Value<string>;
    BucketOwner?: Value<string>;
    constructor(properties: S3);
}
export declare class VerifiedAccessLogs {
    S3?: S3;
    LogVersion?: Value<string>;
    KinesisDataFirehose?: KinesisDataFirehose;
    CloudWatchLogs?: CloudWatchLogs;
    IncludeTrustContext?: Value<boolean>;
    constructor(properties: VerifiedAccessLogs);
}
export declare class VerifiedAccessTrustProvider {
    Description?: Value<string>;
    DeviceTrustProviderType?: Value<string>;
    VerifiedAccessTrustProviderId?: Value<string>;
    TrustProviderType?: Value<string>;
    UserTrustProviderType?: Value<string>;
    constructor(properties: VerifiedAccessTrustProvider);
}
export interface VerifiedAccessInstanceProperties {
    VerifiedAccessTrustProviders?: List<VerifiedAccessTrustProvider>;
    Description?: Value<string>;
    FipsEnabled?: Value<boolean>;
    LoggingConfigurations?: VerifiedAccessLogs;
    VerifiedAccessTrustProviderIds?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class VerifiedAccessInstance extends ResourceBase<VerifiedAccessInstanceProperties> {
    static CloudWatchLogs: typeof CloudWatchLogs;
    static KinesisDataFirehose: typeof KinesisDataFirehose;
    static S3: typeof S3;
    static VerifiedAccessLogs: typeof VerifiedAccessLogs;
    static VerifiedAccessTrustProvider: typeof VerifiedAccessTrustProvider;
    constructor(properties?: VerifiedAccessInstanceProperties);
}
