import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface NodeGroupConfigurationProperties {
    PrimaryAvailabilityZone?: Value<string>;
    ReplicaAvailabilityZones?: Value<string>[];
    ReplicaCount?: Value<number>;
    Slots?: Value<string>;
}
export declare class NodeGroupConfiguration extends ResourceBase {
    constructor(properties: NodeGroupConfigurationProperties, dependsOn?: Value<string>);
}
export interface ReplicationGroupProperties {
    AtRestEncryptionEnabled?: Value<boolean>;
    AuthToken?: Value<string>;
    AutoMinorVersionUpgrade?: Value<boolean>;
    AutomaticFailoverEnabled?: Value<boolean>;
    CacheNodeType?: Value<string>;
    CacheParameterGroupName?: Value<string>;
    CacheSecurityGroupNames?: Value<string>[];
    CacheSubnetGroupName?: Value<string>;
    Engine?: Value<string>;
    EngineVersion?: Value<string>;
    NodeGroupConfiguration?: NodeGroupConfiguration[];
    NotificationTopicArn?: Value<string>;
    NumCacheClusters?: Value<number>;
    NumNodeGroups?: Value<number>;
    Port?: Value<number>;
    PreferredCacheClusterAZs?: Value<string>[];
    PreferredMaintenanceWindow?: Value<string>;
    PrimaryClusterId?: Value<string>;
    ReplicasPerNodeGroup?: Value<number>;
    ReplicationGroupDescription: Value<string>;
    ReplicationGroupId?: Value<string>;
    SecurityGroupIds?: Value<string>[];
    SnapshotArns?: Value<string>[];
    SnapshotName?: Value<string>;
    SnapshotRetentionLimit?: Value<number>;
    SnapshotWindow?: Value<string>;
    SnapshottingClusterId?: Value<string>;
    Tags?: ResourceTag[];
    TransitEncryptionEnabled?: Value<boolean>;
}
export default class ReplicationGroup extends ResourceBase {
    constructor(properties: ReplicationGroupProperties, dependsOn?: Value<string>);
}
