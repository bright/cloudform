import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DBClusterRole {
    RoleArn: Value<string>;
    FeatureName?: Value<string>;
    constructor(properties: DBClusterRole);
}
export declare class ServerlessScalingConfiguration {
    MinCapacity: Value<number>;
    MaxCapacity: Value<number>;
    constructor(properties: ServerlessScalingConfiguration);
}
export interface DBClusterProperties {
    StorageEncrypted?: Value<boolean>;
    RestoreToTime?: Value<string>;
    AssociatedRoles?: List<DBClusterRole>;
    SnapshotIdentifier?: Value<string>;
    DBClusterIdentifier?: Value<string>;
    PreferredBackupWindow?: Value<string>;
    DBPort?: Value<number>;
    VpcSecurityGroupIds?: List<Value<string>>;
    CopyTagsToSnapshot?: Value<boolean>;
    RestoreType?: Value<string>;
    Tags?: List<ResourceTag>;
    EngineVersion?: Value<string>;
    KmsKeyId?: Value<string>;
    AvailabilityZones?: List<Value<string>>;
    ServerlessScalingConfiguration?: ServerlessScalingConfiguration;
    PreferredMaintenanceWindow?: Value<string>;
    IamAuthEnabled?: Value<boolean>;
    DBSubnetGroupName?: Value<string>;
    DeletionProtection?: Value<boolean>;
    UseLatestRestorableTime?: Value<boolean>;
    SourceDBClusterIdentifier?: Value<string>;
    DBClusterParameterGroupName?: Value<string>;
    BackupRetentionPeriod?: Value<number>;
    DBInstanceParameterGroupName?: Value<string>;
    EnableCloudwatchLogsExports?: List<Value<string>>;
}
export default class DBCluster extends ResourceBase<DBClusterProperties> {
    static DBClusterRole: typeof DBClusterRole;
    static ServerlessScalingConfiguration: typeof ServerlessScalingConfiguration;
    constructor(properties?: DBClusterProperties);
}
