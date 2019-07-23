import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProcessorFeature {
    Name?: Value<string>;
    Value?: Value<string>;
    constructor(properties: ProcessorFeature);
}
export interface DBInstanceProperties {
    AllocatedStorage?: Value<string>;
    AllowMajorVersionUpgrade?: Value<boolean>;
    AutoMinorVersionUpgrade?: Value<boolean>;
    AvailabilityZone?: Value<string>;
    BackupRetentionPeriod?: Value<number>;
    CharacterSetName?: Value<string>;
    CopyTagsToSnapshot?: Value<boolean>;
    DBClusterIdentifier?: Value<string>;
    DBInstanceClass: Value<string>;
    DBInstanceIdentifier?: Value<string>;
    DBName?: Value<string>;
    DBParameterGroupName?: Value<string>;
    DBSecurityGroups?: List<Value<string>>;
    DBSnapshotIdentifier?: Value<string>;
    DBSubnetGroupName?: Value<string>;
    DeleteAutomatedBackups?: Value<boolean>;
    DeletionProtection?: Value<boolean>;
    Domain?: Value<string>;
    DomainIAMRoleName?: Value<string>;
    EnableCloudwatchLogsExports?: List<Value<string>>;
    EnableIAMDatabaseAuthentication?: Value<boolean>;
    EnablePerformanceInsights?: Value<boolean>;
    Engine?: Value<string>;
    EngineVersion?: Value<string>;
    Iops?: Value<number>;
    KmsKeyId?: Value<string>;
    LicenseModel?: Value<string>;
    MasterUserPassword?: Value<string>;
    MasterUsername?: Value<string>;
    MonitoringInterval?: Value<number>;
    MonitoringRoleArn?: Value<string>;
    MultiAZ?: Value<boolean>;
    OptionGroupName?: Value<string>;
    PerformanceInsightsKMSKeyId?: Value<string>;
    PerformanceInsightsRetentionPeriod?: Value<number>;
    Port?: Value<string>;
    PreferredBackupWindow?: Value<string>;
    PreferredMaintenanceWindow?: Value<string>;
    ProcessorFeatures?: List<ProcessorFeature>;
    PromotionTier?: Value<number>;
    PubliclyAccessible?: Value<boolean>;
    SourceDBInstanceIdentifier?: Value<string>;
    SourceRegion?: Value<string>;
    StorageEncrypted?: Value<boolean>;
    StorageType?: Value<string>;
    Tags?: List<ResourceTag>;
    Timezone?: Value<string>;
    UseDefaultProcessorFeatures?: Value<boolean>;
    VPCSecurityGroups?: List<Value<string>>;
}
export default class DBInstance extends ResourceBase<DBInstanceProperties> {
    static ProcessorFeature: typeof ProcessorFeature;
    constructor(properties: DBInstanceProperties);
}
