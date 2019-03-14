import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DBClusterProperties {
    StorageEncrypted?: Value<boolean>;
    EngineVersion?: Value<string>;
    KmsKeyId?: Value<string>;
    AvailabilityZones?: List<Value<string>>;
    SnapshotIdentifier?: Value<string>;
    Port?: Value<number>;
    DBClusterIdentifier?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    DBSubnetGroupName?: Value<string>;
    PreferredBackupWindow?: Value<string>;
    MasterUserPassword?: Value<string>;
    VpcSecurityGroupIds?: List<Value<string>>;
    MasterUsername?: Value<string>;
    DBClusterParameterGroupName?: Value<string>;
    BackupRetentionPeriod?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class DBCluster extends ResourceBase<DBClusterProperties> {
    constructor(properties?: DBClusterProperties);
}
