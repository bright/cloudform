import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class KinesisFirehoseDestinationDetails {
    DeliveryStream?: Value<string>;
    constructor(properties: KinesisFirehoseDestinationDetails);
}
export declare class LogDeliveryConfigurationRequest {
    DestinationDetails?: DestinationDetails;
    DestinationType?: Value<string>;
    LogFormat?: Value<string>;
    LogType?: Value<string>;
    constructor(properties: LogDeliveryConfigurationRequest);
}
export declare class DestinationDetails {
    CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails;
    KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails;
    constructor(properties: DestinationDetails);
}
export declare class CloudWatchLogsDestinationDetails {
    LogGroup?: Value<string>;
    constructor(properties: CloudWatchLogsDestinationDetails);
}
export interface CacheClusterProperties {
    AZMode?: Value<string>;
    AutoMinorVersionUpgrade?: Value<boolean>;
    CacheNodeType: Value<string>;
    CacheParameterGroupName?: Value<string>;
    CacheSecurityGroupNames?: List<Value<string>>;
    CacheSubnetGroupName?: Value<string>;
    ClusterName?: Value<string>;
    Engine: Value<string>;
    EngineVersion?: Value<string>;
    LogDeliveryConfigurations?: List<LogDeliveryConfigurationRequest>;
    NotificationTopicArn?: Value<string>;
    NumCacheNodes: Value<number>;
    Port?: Value<number>;
    PreferredAvailabilityZone?: Value<string>;
    PreferredAvailabilityZones?: List<Value<string>>;
    PreferredMaintenanceWindow?: Value<string>;
    SnapshotArns?: List<Value<string>>;
    SnapshotName?: Value<string>;
    SnapshotRetentionLimit?: Value<number>;
    SnapshotWindow?: Value<string>;
    Tags?: List<ResourceTag>;
    VpcSecurityGroupIds?: List<Value<string>>;
}
export default class CacheCluster extends ResourceBase<CacheClusterProperties> {
    static KinesisFirehoseDestinationDetails: typeof KinesisFirehoseDestinationDetails;
    static LogDeliveryConfigurationRequest: typeof LogDeliveryConfigurationRequest;
    static DestinationDetails: typeof DestinationDetails;
    static CloudWatchLogsDestinationDetails: typeof CloudWatchLogsDestinationDetails;
    constructor(properties: CacheClusterProperties);
}
