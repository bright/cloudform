import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CloudWatchLogsDestinationDetails {
    LogGroup: Value<string>;
    constructor(properties: CloudWatchLogsDestinationDetails);
}
export declare class DestinationDetails {
    CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails;
    KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails;
    constructor(properties: DestinationDetails);
}
export declare class KinesisFirehoseDestinationDetails {
    DeliveryStream: Value<string>;
    constructor(properties: KinesisFirehoseDestinationDetails);
}
export declare class LogDeliveryConfigurationRequest {
    DestinationDetails: DestinationDetails;
    DestinationType: Value<string>;
    LogFormat: Value<string>;
    LogType: Value<string>;
    constructor(properties: LogDeliveryConfigurationRequest);
}
export declare class NodeGroupConfiguration {
    NodeGroupId?: Value<string>;
    PrimaryAvailabilityZone?: Value<string>;
    ReplicaAvailabilityZones?: List<Value<string>>;
    ReplicaCount?: Value<number>;
    Slots?: Value<string>;
    constructor(properties: NodeGroupConfiguration);
}
export interface ReplicationGroupProperties {
    AtRestEncryptionEnabled?: Value<boolean>;
    AuthToken?: Value<string>;
    AutoMinorVersionUpgrade?: Value<boolean>;
    AutomaticFailoverEnabled?: Value<boolean>;
    CacheNodeType?: Value<string>;
    CacheParameterGroupName?: Value<string>;
    CacheSecurityGroupNames?: List<Value<string>>;
    CacheSubnetGroupName?: Value<string>;
    ClusterMode?: Value<string>;
    DataTieringEnabled?: Value<boolean>;
    Engine?: Value<string>;
    EngineVersion?: Value<string>;
    GlobalReplicationGroupId?: Value<string>;
    IpDiscovery?: Value<string>;
    KmsKeyId?: Value<string>;
    LogDeliveryConfigurations?: List<LogDeliveryConfigurationRequest>;
    MultiAZEnabled?: Value<boolean>;
    NetworkType?: Value<string>;
    NodeGroupConfiguration?: List<NodeGroupConfiguration>;
    NotificationTopicArn?: Value<string>;
    NumCacheClusters?: Value<number>;
    NumNodeGroups?: Value<number>;
    Port?: Value<number>;
    PreferredCacheClusterAZs?: List<Value<string>>;
    PreferredMaintenanceWindow?: Value<string>;
    PrimaryClusterId?: Value<string>;
    ReplicasPerNodeGroup?: Value<number>;
    ReplicationGroupDescription: Value<string>;
    ReplicationGroupId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    SnapshotArns?: List<Value<string>>;
    SnapshotName?: Value<string>;
    SnapshotRetentionLimit?: Value<number>;
    SnapshotWindow?: Value<string>;
    SnapshottingClusterId?: Value<string>;
    Tags?: List<ResourceTag>;
    TransitEncryptionEnabled?: Value<boolean>;
    TransitEncryptionMode?: Value<string>;
    UserGroupIds?: List<Value<string>>;
}
export default class ReplicationGroup extends ResourceBase<ReplicationGroupProperties> {
    static CloudWatchLogsDestinationDetails: typeof CloudWatchLogsDestinationDetails;
    static DestinationDetails: typeof DestinationDetails;
    static KinesisFirehoseDestinationDetails: typeof KinesisFirehoseDestinationDetails;
    static LogDeliveryConfigurationRequest: typeof LogDeliveryConfigurationRequest;
    static NodeGroupConfiguration: typeof NodeGroupConfiguration;
    constructor(properties: ReplicationGroupProperties);
}
