import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'


export type Engine = "MySQL" | "mariadb" | "oracle-se1" | "oracle-se" | "oracle-ee" | "sqlserver-ee" | "sqlserver-se" | "sqlserver-ex" | "sqlserver-web" | "postgres" | "aurora" | "*"

export interface DBClusterProperties {
    AvailabilityZones?: Value<string>
    BackupRetentionPeriod?: Value<number>
    DatabaseName?: Value<string>
    DBClusterParameterGroupName?: Value<string>
    DBSubnetGroupName?: Value<string>
    Engine: Value<Engine>
    EngineVersion?: Value<string>
    KmsKeyId?: Value<string>
    MasterUsername?: Value<string>
    MasterUserPassword?: Value<string>
    Port?: Value<number>
    PreferredBackupWindow?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    SnapshotIdentifier?: Value<string>
    StorageEncrypted?: Value<boolean>
    VpcSecurityGroupIds?: Value<string>[]
    Tags?: ResourceTag[]
}

export default class DBCluster extends ResourceBase {
    constructor(properties: DBClusterProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::DBCluster', properties, dependsOn)
    }
}