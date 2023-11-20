import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DBClusterRole {
    RoleArn: Value<string>;
    FeatureName?: Value<string>;
    constructor(properties: DBClusterRole);
}
export declare class Endpoint {
    Address?: Value<string>;
    Port?: Value<string>;
    constructor(properties: Endpoint);
}
export declare class MasterUserSecret {
    SecretArn?: Value<string>;
    KmsKeyId?: Value<string>;
    constructor(properties: MasterUserSecret);
}
export declare class ReadEndpoint {
    Address?: Value<string>;
    constructor(properties: ReadEndpoint);
}
export declare class ScalingConfiguration {
    TimeoutAction?: Value<string>;
    SecondsBeforeTimeout?: Value<number>;
    SecondsUntilAutoPause?: Value<number>;
    AutoPause?: Value<boolean>;
    MinCapacity?: Value<number>;
    MaxCapacity?: Value<number>;
    constructor(properties: ScalingConfiguration);
}
export declare class ServerlessV2ScalingConfiguration {
    MinCapacity?: Value<number>;
    MaxCapacity?: Value<number>;
    constructor(properties: ServerlessV2ScalingConfiguration);
}
export interface DBClusterProperties {
    StorageEncrypted?: Value<boolean>;
    DBSystemId?: Value<string>;
    RestoreToTime?: Value<string>;
    EngineMode?: Value<string>;
    Port?: Value<number>;
    DBClusterIdentifier?: Value<string>;
    MonitoringInterval?: Value<number>;
    ReplicationSourceIdentifier?: Value<string>;
    Engine?: Value<string>;
    Tags?: List<ResourceTag>;
    EngineVersion?: Value<string>;
    StorageType?: Value<string>;
    KmsKeyId?: Value<string>;
    ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
    PerformanceInsightsRetentionPeriod?: Value<number>;
    DatabaseName?: Value<string>;
    AutoMinorVersionUpgrade?: Value<boolean>;
    DBSubnetGroupName?: Value<string>;
    DeletionProtection?: Value<boolean>;
    AllocatedStorage?: Value<number>;
    MasterUserPassword?: Value<string>;
    MasterUserSecret?: MasterUserSecret;
    SourceDBClusterIdentifier?: Value<string>;
    MasterUsername?: Value<string>;
    ScalingConfiguration?: ScalingConfiguration;
    PerformanceInsightsKmsKeyId?: Value<string>;
    PubliclyAccessible?: Value<boolean>;
    Domain?: Value<string>;
    BacktrackWindow?: Value<number>;
    DBInstanceParameterGroupName?: Value<string>;
    EnableGlobalWriteForwarding?: Value<boolean>;
    MonitoringRoleArn?: Value<string>;
    AssociatedRoles?: List<DBClusterRole>;
    EnableHttpEndpoint?: Value<boolean>;
    SnapshotIdentifier?: Value<string>;
    PreferredBackupWindow?: Value<string>;
    NetworkType?: Value<string>;
    VpcSecurityGroupIds?: List<Value<string>>;
    CopyTagsToSnapshot?: Value<boolean>;
    GlobalClusterIdentifier?: Value<string>;
    RestoreType?: Value<string>;
    DomainIAMRoleName?: Value<string>;
    DBClusterInstanceClass?: Value<string>;
    AvailabilityZones?: List<Value<string>>;
    PreferredMaintenanceWindow?: Value<string>;
    Iops?: Value<number>;
    SourceRegion?: Value<string>;
    UseLatestRestorableTime?: Value<boolean>;
    ManageMasterUserPassword?: Value<boolean>;
    EnableIAMDatabaseAuthentication?: Value<boolean>;
    DBClusterParameterGroupName?: Value<string>;
    PerformanceInsightsEnabled?: Value<boolean>;
    BackupRetentionPeriod?: Value<number>;
    EnableCloudwatchLogsExports?: List<Value<string>>;
}
export default class DBCluster extends ResourceBase<DBClusterProperties> {
    static DBClusterRole: typeof DBClusterRole;
    static Endpoint: typeof Endpoint;
    static MasterUserSecret: typeof MasterUserSecret;
    static ReadEndpoint: typeof ReadEndpoint;
    static ScalingConfiguration: typeof ScalingConfiguration;
    static ServerlessV2ScalingConfiguration: typeof ServerlessV2ScalingConfiguration;
    constructor(properties?: DBClusterProperties);
}
