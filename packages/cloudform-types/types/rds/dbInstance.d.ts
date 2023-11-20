import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CertificateDetails {
    ValidTill?: Value<string>;
    CAIdentifier?: Value<string>;
    constructor(properties: CertificateDetails);
}
export declare class DBInstanceRole {
    RoleArn: Value<string>;
    FeatureName: Value<string>;
    constructor(properties: DBInstanceRole);
}
export declare class Endpoint {
    Address?: Value<string>;
    Port?: Value<string>;
    HostedZoneId?: Value<string>;
    constructor(properties: Endpoint);
}
export declare class MasterUserSecret {
    SecretArn?: Value<string>;
    KmsKeyId?: Value<string>;
    constructor(properties: MasterUserSecret);
}
export declare class ProcessorFeature {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: ProcessorFeature);
}
export interface DBInstanceProperties {
    StorageEncrypted?: Value<boolean>;
    Timezone?: Value<string>;
    CertificateDetails?: CertificateDetails;
    Port?: Value<string>;
    DBClusterIdentifier?: Value<string>;
    StorageThroughput?: Value<number>;
    MonitoringInterval?: Value<number>;
    DBParameterGroupName?: Value<string>;
    Endpoint?: Endpoint;
    MultiAZ?: Value<boolean>;
    Engine?: Value<string>;
    Tags?: List<ResourceTag>;
    PerformanceInsightsKMSKeyId?: Value<string>;
    SourceDBInstanceIdentifier?: Value<string>;
    EngineVersion?: Value<string>;
    StorageType?: Value<string>;
    KmsKeyId?: Value<string>;
    DBInstanceClass?: Value<string>;
    DeleteAutomatedBackups?: Value<boolean>;
    PerformanceInsightsRetentionPeriod?: Value<number>;
    AvailabilityZone?: Value<string>;
    OptionGroupName?: Value<string>;
    EnablePerformanceInsights?: Value<boolean>;
    AutoMinorVersionUpgrade?: Value<boolean>;
    DBSubnetGroupName?: Value<string>;
    DeletionProtection?: Value<boolean>;
    DBInstanceIdentifier?: Value<string>;
    AllocatedStorage?: Value<string>;
    MasterUserPassword?: Value<string>;
    MasterUserSecret?: MasterUserSecret;
    NcharCharacterSetName?: Value<string>;
    SourceDBClusterIdentifier?: Value<string>;
    DBSecurityGroups?: List<Value<string>>;
    MasterUsername?: Value<string>;
    MaxAllocatedStorage?: Value<number>;
    PromotionTier?: Value<number>;
    PubliclyAccessible?: Value<boolean>;
    Domain?: Value<string>;
    DomainFqdn?: Value<string>;
    CharacterSetName?: Value<string>;
    MonitoringRoleArn?: Value<string>;
    AssociatedRoles?: List<DBInstanceRole>;
    DomainOu?: Value<string>;
    DBClusterSnapshotIdentifier?: Value<string>;
    SourceDBInstanceAutomatedBackupsArn?: Value<string>;
    ProcessorFeatures?: List<ProcessorFeature>;
    PreferredBackupWindow?: Value<string>;
    RestoreTime?: Value<string>;
    CertificateRotationRestart?: Value<boolean>;
    NetworkType?: Value<string>;
    DedicatedLogVolume?: Value<boolean>;
    CopyTagsToSnapshot?: Value<boolean>;
    DomainIAMRoleName?: Value<string>;
    ReplicaMode?: Value<string>;
    LicenseModel?: Value<string>;
    DomainDnsIps?: List<Value<string>>;
    PreferredMaintenanceWindow?: Value<string>;
    Iops?: Value<number>;
    SourceRegion?: Value<string>;
    UseLatestRestorableTime?: Value<boolean>;
    CACertificateIdentifier?: Value<string>;
    ManageMasterUserPassword?: Value<boolean>;
    SourceDbiResourceId?: Value<string>;
    DomainAuthSecretArn?: Value<string>;
    AutomaticBackupReplicationRegion?: Value<string>;
    VPCSecurityGroups?: List<Value<string>>;
    AllowMajorVersionUpgrade?: Value<boolean>;
    DBName?: Value<string>;
    EnableIAMDatabaseAuthentication?: Value<boolean>;
    BackupRetentionPeriod?: Value<number>;
    CustomIAMInstanceProfile?: Value<string>;
    DBSnapshotIdentifier?: Value<string>;
    EnableCloudwatchLogsExports?: List<Value<string>>;
    UseDefaultProcessorFeatures?: Value<boolean>;
}
export default class DBInstance extends ResourceBase<DBInstanceProperties> {
    static CertificateDetails: typeof CertificateDetails;
    static DBInstanceRole: typeof DBInstanceRole;
    static Endpoint: typeof Endpoint;
    static MasterUserSecret: typeof MasterUserSecret;
    static ProcessorFeature: typeof ProcessorFeature;
    constructor(properties?: DBInstanceProperties);
}
