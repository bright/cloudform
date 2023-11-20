import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Endpoint {
    Address?: Value<string>;
    Port?: Value<string>;
    constructor(properties: Endpoint);
}
export declare class LoggingProperties {
    BucketName: Value<string>;
    S3KeyPrefix?: Value<string>;
    constructor(properties: LoggingProperties);
}
export interface ClusterProperties {
    RevisionTarget?: Value<string>;
    AutomatedSnapshotRetentionPeriod?: Value<number>;
    Encrypted?: Value<boolean>;
    Port?: Value<number>;
    NumberOfNodes?: Value<number>;
    DestinationRegion?: Value<string>;
    AllowVersionUpgrade?: Value<boolean>;
    Endpoint?: Endpoint;
    MaintenanceTrackName?: Value<string>;
    OwnerAccount?: Value<string>;
    MultiAZ?: Value<boolean>;
    Tags?: List<ResourceTag>;
    SnapshotClusterIdentifier?: Value<string>;
    IamRoles?: List<Value<string>>;
    KmsKeyId?: Value<string>;
    SnapshotCopyManual?: Value<boolean>;
    AvailabilityZone?: Value<string>;
    ClusterSecurityGroups?: List<Value<string>>;
    ClusterIdentifier?: Value<string>;
    MasterUserPassword: Value<string>;
    ClusterSubnetGroupName?: Value<string>;
    LoggingProperties?: LoggingProperties;
    DeferMaintenance?: Value<boolean>;
    NodeType: Value<string>;
    MasterUsername: Value<string>;
    PubliclyAccessible?: Value<boolean>;
    ManualSnapshotRetentionPeriod?: Value<number>;
    ResourceAction?: Value<string>;
    HsmClientCertificateIdentifier?: Value<string>;
    ElasticIp?: Value<string>;
    AvailabilityZoneRelocationStatus?: Value<string>;
    AquaConfigurationStatus?: Value<string>;
    SnapshotIdentifier?: Value<string>;
    AvailabilityZoneRelocation?: Value<boolean>;
    SnapshotCopyGrantName?: Value<string>;
    EnhancedVpcRouting?: Value<boolean>;
    ClusterParameterGroupName?: Value<string>;
    DeferMaintenanceEndTime?: Value<string>;
    RotateEncryptionKey?: Value<boolean>;
    VpcSecurityGroupIds?: List<Value<string>>;
    ClusterVersion?: Value<string>;
    HsmConfigurationIdentifier?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    DeferMaintenanceStartTime?: Value<string>;
    ClusterType: Value<string>;
    Classic?: Value<boolean>;
    DeferMaintenanceDuration?: Value<number>;
    DBName: Value<string>;
    SnapshotCopyRetentionPeriod?: Value<number>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static Endpoint: typeof Endpoint;
    static LoggingProperties: typeof LoggingProperties;
    constructor(properties: ClusterProperties);
}
