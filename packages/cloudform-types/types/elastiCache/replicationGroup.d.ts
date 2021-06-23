import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LogDeliveryConfigurationRequest {
    DestinationDetails?: DestinationDetails;
    DestinationType?: Value<string>;
    LogFormat?: Value<string>;
    LogType?: Value<string>;
    constructor(properties: LogDeliveryConfigurationRequest);
}
export declare class CloudWatchLogsDestinationDetails {
    LogGroup?: Value<string>;
    constructor(properties: CloudWatchLogsDestinationDetails);
}
export declare class NodeGroupConfiguration {
    NodeGroupId?: Value<string>;
    PrimaryAvailabilityZone?: Value<string>;
    ReplicaAvailabilityZones?: List<Value<string>>;
    ReplicaCount?: Value<number>;
    Slots?: Value<string>;
    constructor(properties: NodeGroupConfiguration);
}
export declare class DestinationDetails {
    CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails;
    KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails;
    constructor(properties: DestinationDetails);
}
export declare class KinesisFirehoseDestinationDetails {
    DeliveryStream?: Value<string>;
    constructor(properties: KinesisFirehoseDestinationDetails);
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
    Engine?: Value<string>;
    EngineVersion?: Value<string>;
    GlobalReplicationGroupId?: Value<string>;
    KmsKeyId?: Value<string>;
    LogDeliveryConfigurations?: List<LogDeliveryConfigurationRequest>;
    MultiAZEnabled?: Value<boolean>;
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
    UserGroupIds?: List<Value<string>>;
}
export default class ReplicationGroup extends ResourceBase<ReplicationGroupProperties> {
    static LogDeliveryConfigurationRequest: typeof LogDeliveryConfigurationRequest;
    static CloudWatchLogsDestinationDetails: typeof CloudWatchLogsDestinationDetails;
    static NodeGroupConfiguration: typeof NodeGroupConfiguration;
    static DestinationDetails: typeof DestinationDetails;
    static KinesisFirehoseDestinationDetails: typeof KinesisFirehoseDestinationDetails;
    constructor(properties: ReplicationGroupProperties);
}
