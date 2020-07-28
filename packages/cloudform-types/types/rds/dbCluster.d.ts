import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ScalingConfiguration {
    AutoPause?: Value<boolean>;
    MaxCapacity?: Value<number>;
    MinCapacity?: Value<number>;
    SecondsUntilAutoPause?: Value<number>;
    constructor(properties: ScalingConfiguration);
}
export declare class DBClusterRole {
    FeatureName?: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: DBClusterRole);
}
export interface DBClusterProperties {
    AssociatedRoles?: List<DBClusterRole>;
    AvailabilityZones?: List<Value<string>>;
    BacktrackWindow?: Value<number>;
    BackupRetentionPeriod?: Value<number>;
    DBClusterIdentifier?: Value<string>;
    DBClusterParameterGroupName?: Value<string>;
    DBSubnetGroupName?: Value<string>;
    DatabaseName?: Value<string>;
    DeletionProtection?: Value<boolean>;
    EnableCloudwatchLogsExports?: List<Value<string>>;
    EnableHttpEndpoint?: Value<boolean>;
    EnableIAMDatabaseAuthentication?: Value<boolean>;
    Engine: Value<string>;
    EngineMode?: Value<string>;
    EngineVersion?: Value<string>;
    KmsKeyId?: Value<string>;
    MasterUserPassword?: Value<string>;
    MasterUsername?: Value<string>;
    Port?: Value<number>;
    PreferredBackupWindow?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    ReplicationSourceIdentifier?: Value<string>;
    RestoreType?: Value<string>;
    ScalingConfiguration?: ScalingConfiguration;
    SnapshotIdentifier?: Value<string>;
    SourceDBClusterIdentifier?: Value<string>;
    SourceRegion?: Value<string>;
    StorageEncrypted?: Value<boolean>;
    Tags?: List<ResourceTag>;
    UseLatestRestorableTime?: Value<boolean>;
    VpcSecurityGroupIds?: List<Value<string>>;
}
export default class DBCluster extends ResourceBase<DBClusterProperties> {
    static ScalingConfiguration: typeof ScalingConfiguration;
    static DBClusterRole: typeof DBClusterRole;
    constructor(properties: DBClusterProperties);
}
