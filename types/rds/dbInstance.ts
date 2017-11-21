import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'


export type AvailabilityZone = "us-east-1b" | "us-east-1c" | "us-east-1d" | "us-east-1e" | "us-west-1b" | "us-west-1c" | "us-west-2a" | "us-west-2b" | "us-west-2c" | "ap-northeast-1a" | "ap-northeast-1c" | "ap-northeast-2a" | "ap-northeast-2c" | "ap-south-1a" | "ap-south-1b" | "ap-southeast-1a" | "ap-southeast-1b" | "ap-southeast-2a" | "ap-southeast-2b" | "ap-southeast-2c" | "sa-east-1a" | "sa-east-1b" | "sa-east-1c" | "eu-west-1a" | "eu-west-1b" | "eu-west-1c" | "eu-central-1a" | "eu-central-1b"
export type DBInstanceClass = "*" | "db.t1.micro" | "db.m1.small" | "db.m1.medium" | "db.m1.large" | "db.m1.xlarge" | "db.m2.xlarge" | "db.m2.2xlarge" | "db.m2.4xlarge" | "db.m3.medium" | "db.m3.large" | "db.m3.xlarge" | "db.m3.2xlarge" | "db.m4.large" | "db.m4.xlarge" | "db.m4.2xlarge" | "db.m4.4xlarge" | "db.m4.10xlarge" | "db.r3.large" | "db.r3.xlarge" | "db.r3.2xlarge" | "db.r3.4xlarge" | "db.r3.8xlarge" | "db.t2.micro" | "db.t2.small" | "db.t2.medium" | "db.t2.large"
export type Engine = "*" | "MySQL" | "mariadb" | "oracle-se1" | "oracle-se" | "oracle-ee" | "sqlserver-ee" | "sqlserver-se" | "sqlserver-ex" | "sqlserver-web" | "postgres" | "aurora"
export type StorageType = "standard" | "gp2" | "io1" | "*"

export interface DBInstanceProperties {
    AllocatedStorage: Value<string>
    AllowMajorVersionUpgrade?: Value<boolean>
    AutoMinorVersionUpgrade?: Value<boolean>
    AvailabilityZone?: Value<AvailabilityZone>
    BackupRetentionPeriod?: Value<string>
    CharacterSetName?: Value<string>
    CopyTagsToSnapshot?: Value<boolean>
    DBClusterIdentifier?: Value<string>
    DBInstanceClass: Value<DBInstanceClass>
    DBInstanceIdentifier?: Value<string>
    DBName?: Value<string>
    DBParameterGroupName?: Value<string>
    DBSecurityGroups?: Value<string>[]
    DBSnapshotIdentifier?: Value<string>
    DBSubnetGroupName?: Value<string>
    Domain?: Value<string>
    DomainIAMRoleName?: Value<string>
    Engine: Value<Engine>
    EngineVersion?: Value<string>
    Iops?: Value<string>
    KmsKeyId?: Value<string>
    LicenseModel?: Value<string>
    MasterUsername: Value<string>
    MasterUserPassword: Value<string>
    MonitoringInterval?: Value<number>
    MonitoringRoleArn?: Value<string>
    MultiAZ?: Value<boolean>
    OptionGroupName?: Value<string>
    Port?: Value<string>
    PreferredBackupWindow?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    PubliclyAccessible?: Value<boolean>
    SourceDBInstanceIdentifier?: Value<string>
    StorageEncrypted?: Value<boolean>
    StorageType?: Value<StorageType>
    Timezone?: Value<string>
    VPCSecurityGroups?: Value<string>[]
    Tags?: ResourceTag[]
}

export default class DBInstance extends ResourceBase {
    constructor(properties: DBInstanceProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::DBInstance', properties, dependsOn)
    }
}