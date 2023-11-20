/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CertificateDetails {
    ValidTill?: Value<string>
    CAIdentifier?: Value<string>

    constructor(properties: CertificateDetails) {
        Object.assign(this, properties)
    }
}

export class DBInstanceRole {
    RoleArn!: Value<string>
    FeatureName!: Value<string>

    constructor(properties: DBInstanceRole) {
        Object.assign(this, properties)
    }
}

export class Endpoint {
    Address?: Value<string>
    Port?: Value<string>
    HostedZoneId?: Value<string>

    constructor(properties: Endpoint) {
        Object.assign(this, properties)
    }
}

export class MasterUserSecret {
    SecretArn?: Value<string>
    KmsKeyId?: Value<string>

    constructor(properties: MasterUserSecret) {
        Object.assign(this, properties)
    }
}

export class ProcessorFeature {
    Value?: Value<string>
    Name?: Value<string>

    constructor(properties: ProcessorFeature) {
        Object.assign(this, properties)
    }
}

export interface DBInstanceProperties {
    StorageEncrypted?: Value<boolean>
    Timezone?: Value<string>
    CertificateDetails?: CertificateDetails
    Port?: Value<string>
    DBClusterIdentifier?: Value<string>
    StorageThroughput?: Value<number>
    MonitoringInterval?: Value<number>
    DBParameterGroupName?: Value<string>
    Endpoint?: Endpoint
    MultiAZ?: Value<boolean>
    Engine?: Value<string>
    Tags?: List<ResourceTag>
    PerformanceInsightsKMSKeyId?: Value<string>
    SourceDBInstanceIdentifier?: Value<string>
    EngineVersion?: Value<string>
    StorageType?: Value<string>
    KmsKeyId?: Value<string>
    DBInstanceClass?: Value<string>
    DeleteAutomatedBackups?: Value<boolean>
    PerformanceInsightsRetentionPeriod?: Value<number>
    AvailabilityZone?: Value<string>
    OptionGroupName?: Value<string>
    EnablePerformanceInsights?: Value<boolean>
    AutoMinorVersionUpgrade?: Value<boolean>
    DBSubnetGroupName?: Value<string>
    DeletionProtection?: Value<boolean>
    DBInstanceIdentifier?: Value<string>
    AllocatedStorage?: Value<string>
    MasterUserPassword?: Value<string>
    MasterUserSecret?: MasterUserSecret
    NcharCharacterSetName?: Value<string>
    SourceDBClusterIdentifier?: Value<string>
    DBSecurityGroups?: List<Value<string>>
    MasterUsername?: Value<string>
    MaxAllocatedStorage?: Value<number>
    PromotionTier?: Value<number>
    PubliclyAccessible?: Value<boolean>
    Domain?: Value<string>
    DomainFqdn?: Value<string>
    CharacterSetName?: Value<string>
    MonitoringRoleArn?: Value<string>
    AssociatedRoles?: List<DBInstanceRole>
    DomainOu?: Value<string>
    DBClusterSnapshotIdentifier?: Value<string>
    SourceDBInstanceAutomatedBackupsArn?: Value<string>
    ProcessorFeatures?: List<ProcessorFeature>
    PreferredBackupWindow?: Value<string>
    RestoreTime?: Value<string>
    CertificateRotationRestart?: Value<boolean>
    NetworkType?: Value<string>
    DedicatedLogVolume?: Value<boolean>
    CopyTagsToSnapshot?: Value<boolean>
    DomainIAMRoleName?: Value<string>
    ReplicaMode?: Value<string>
    LicenseModel?: Value<string>
    DomainDnsIps?: List<Value<string>>
    PreferredMaintenanceWindow?: Value<string>
    Iops?: Value<number>
    SourceRegion?: Value<string>
    UseLatestRestorableTime?: Value<boolean>
    CACertificateIdentifier?: Value<string>
    ManageMasterUserPassword?: Value<boolean>
    SourceDbiResourceId?: Value<string>
    DomainAuthSecretArn?: Value<string>
    AutomaticBackupReplicationRegion?: Value<string>
    VPCSecurityGroups?: List<Value<string>>
    AllowMajorVersionUpgrade?: Value<boolean>
    DBName?: Value<string>
    EnableIAMDatabaseAuthentication?: Value<boolean>
    BackupRetentionPeriod?: Value<number>
    CustomIAMInstanceProfile?: Value<string>
    DBSnapshotIdentifier?: Value<string>
    EnableCloudwatchLogsExports?: List<Value<string>>
    UseDefaultProcessorFeatures?: Value<boolean>
}

export default class DBInstance extends ResourceBase<DBInstanceProperties> {
    static CertificateDetails = CertificateDetails
    static DBInstanceRole = DBInstanceRole
    static Endpoint = Endpoint
    static MasterUserSecret = MasterUserSecret
    static ProcessorFeature = ProcessorFeature

    constructor(properties?: DBInstanceProperties) {
        super('AWS::RDS::DBInstance', properties || {})
    }
}
