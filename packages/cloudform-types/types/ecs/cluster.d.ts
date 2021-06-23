import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ClusterSettings {
    Name?: Value<string>;
    Value?: Value<string>;
    constructor(properties: ClusterSettings);
}
export declare class ExecuteCommandLogConfiguration {
    CloudWatchLogGroupName?: Value<string>;
    CloudWatchEncryptionEnabled?: Value<boolean>;
    S3BucketName?: Value<string>;
    S3EncryptionEnabled?: Value<boolean>;
    S3KeyPrefix?: Value<string>;
    constructor(properties: ExecuteCommandLogConfiguration);
}
export declare class ExecuteCommandConfiguration {
    KmsKeyId?: Value<string>;
    Logging?: Value<string>;
    LogConfiguration?: ExecuteCommandLogConfiguration;
    constructor(properties: ExecuteCommandConfiguration);
}
export declare class ClusterConfiguration {
    ExecuteCommandConfiguration?: ExecuteCommandConfiguration;
    constructor(properties: ClusterConfiguration);
}
export declare class CapacityProviderStrategyItem {
    CapacityProvider?: Value<string>;
    Weight?: Value<number>;
    Base?: Value<number>;
    constructor(properties: CapacityProviderStrategyItem);
}
export interface ClusterProperties {
    Tags?: List<ResourceTag>;
    ClusterName?: Value<string>;
    ClusterSettings?: List<ClusterSettings>;
    Configuration?: ClusterConfiguration;
    CapacityProviders?: List<Value<string>>;
    DefaultCapacityProviderStrategy?: List<CapacityProviderStrategyItem>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static ClusterSettings: typeof ClusterSettings;
    static ExecuteCommandLogConfiguration: typeof ExecuteCommandLogConfiguration;
    static ExecuteCommandConfiguration: typeof ExecuteCommandConfiguration;
    static ClusterConfiguration: typeof ClusterConfiguration;
    static CapacityProviderStrategyItem: typeof CapacityProviderStrategyItem;
    constructor(properties?: ClusterProperties);
}
