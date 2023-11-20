import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CapacityProviderStrategyItem {
    CapacityProvider?: Value<string>;
    Weight?: Value<number>;
    Base?: Value<number>;
    constructor(properties: CapacityProviderStrategyItem);
}
export declare class ClusterConfiguration {
    ExecuteCommandConfiguration?: ExecuteCommandConfiguration;
    constructor(properties: ClusterConfiguration);
}
export declare class ClusterSettings {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: ClusterSettings);
}
export declare class ExecuteCommandConfiguration {
    Logging?: Value<string>;
    KmsKeyId?: Value<string>;
    LogConfiguration?: ExecuteCommandLogConfiguration;
    constructor(properties: ExecuteCommandConfiguration);
}
export declare class ExecuteCommandLogConfiguration {
    S3EncryptionEnabled?: Value<boolean>;
    CloudWatchEncryptionEnabled?: Value<boolean>;
    CloudWatchLogGroupName?: Value<string>;
    S3KeyPrefix?: Value<string>;
    S3BucketName?: Value<string>;
    constructor(properties: ExecuteCommandLogConfiguration);
}
export declare class ServiceConnectDefaults {
    Namespace?: Value<string>;
    constructor(properties: ServiceConnectDefaults);
}
export interface ClusterProperties {
    ClusterSettings?: List<ClusterSettings>;
    DefaultCapacityProviderStrategy?: List<CapacityProviderStrategyItem>;
    Configuration?: ClusterConfiguration;
    ServiceConnectDefaults?: ServiceConnectDefaults;
    CapacityProviders?: List<Value<string>>;
    ClusterName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static CapacityProviderStrategyItem: typeof CapacityProviderStrategyItem;
    static ClusterConfiguration: typeof ClusterConfiguration;
    static ClusterSettings: typeof ClusterSettings;
    static ExecuteCommandConfiguration: typeof ExecuteCommandConfiguration;
    static ExecuteCommandLogConfiguration: typeof ExecuteCommandLogConfiguration;
    static ServiceConnectDefaults: typeof ServiceConnectDefaults;
    constructor(properties?: ClusterProperties);
}
