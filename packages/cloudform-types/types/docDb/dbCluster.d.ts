import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DBClusterProperties {
    StorageEncrypted?: Value<boolean>;
    RestoreToTime?: Value<string>;
    EngineVersion?: Value<string>;
    KmsKeyId?: Value<string>;
    AvailabilityZones?: List<Value<string>>;
    SnapshotIdentifier?: Value<string>;
    Port?: Value<number>;
    DBClusterIdentifier?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    DBSubnetGroupName?: Value<string>;
    DeletionProtection?: Value<boolean>;
    PreferredBackupWindow?: Value<string>;
    UseLatestRestorableTime?: Value<boolean>;
    MasterUserPassword?: Value<string>;
    VpcSecurityGroupIds?: List<Value<string>>;
    SourceDBClusterIdentifier?: Value<string>;
    MasterUsername?: Value<string>;
    DBClusterParameterGroupName?: Value<string>;
    CopyTagsToSnapshot?: Value<boolean>;
    BackupRetentionPeriod?: Value<number>;
    RestoreType?: Value<string>;
    Tags?: List<ResourceTag>;
    EnableCloudwatchLogsExports?: List<Value<string>>;
}
export default class DBCluster extends ResourceBase<DBClusterProperties> {
    constructor(properties?: DBClusterProperties);
}
