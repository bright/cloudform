import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
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
    Engine?: Value<string>;
    EngineVersion?: Value<string>;
    KmsKeyId?: Value<string>;
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
}
export default class ReplicationGroup extends ResourceBase<ReplicationGroupProperties> {
    static NodeGroupConfiguration: typeof NodeGroupConfiguration;
    constructor(properties: ReplicationGroupProperties);
}
