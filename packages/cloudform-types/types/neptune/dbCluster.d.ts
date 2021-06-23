import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DBClusterRole {
    RoleArn: Value<string>;
    FeatureName?: Value<string>;
    constructor(properties: DBClusterRole);
}
export interface DBClusterProperties {
    StorageEncrypted?: Value<boolean>;
    RestoreToTime?: Value<string>;
    EngineVersion?: Value<string>;
    KmsKeyId?: Value<string>;
    AssociatedRoles?: List<DBClusterRole>;
    AvailabilityZones?: List<Value<string>>;
    SnapshotIdentifier?: Value<string>;
    Port?: Value<number>;
    DBClusterIdentifier?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    IamAuthEnabled?: Value<boolean>;
    DBSubnetGroupName?: Value<string>;
    DeletionProtection?: Value<boolean>;
    PreferredBackupWindow?: Value<string>;
    UseLatestRestorableTime?: Value<boolean>;
    VpcSecurityGroupIds?: List<Value<string>>;
    SourceDBClusterIdentifier?: Value<string>;
    DBClusterParameterGroupName?: Value<string>;
    BackupRetentionPeriod?: Value<number>;
    RestoreType?: Value<string>;
    Tags?: List<ResourceTag>;
    EnableCloudwatchLogsExports?: List<Value<string>>;
}
export default class DBCluster extends ResourceBase<DBClusterProperties> {
    static DBClusterRole: typeof DBClusterRole;
    constructor(properties?: DBClusterProperties);
}
