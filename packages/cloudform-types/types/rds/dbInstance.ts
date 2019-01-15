/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ProcessorFeature {
    Name?: Value<string>
    Value?: Value<string>

    constructor(properties: ProcessorFeature) {
        Object.assign(this, properties)
    }
}

export interface DBInstanceProperties {
    AllocatedStorage?: Value<string>
    AllowMajorVersionUpgrade?: Value<boolean>
    AutoMinorVersionUpgrade?: Value<boolean>
    AvailabilityZone?: Value<string>
    BackupRetentionPeriod?: Value<string>
    CharacterSetName?: Value<string>
    CopyTagsToSnapshot?: Value<boolean>
    DBClusterIdentifier?: Value<string>
    DBInstanceClass: Value<string>
    DBInstanceIdentifier?: Value<string>
    DBName?: Value<string>
    DBParameterGroupName?: Value<string>
    DBSecurityGroups?: List<Value<string>>
    DBSnapshotIdentifier?: Value<string>
    DBSubnetGroupName?: Value<string>
    DeleteAutomatedBackups?: Value<boolean>
    DeletionProtection?: Value<boolean>
    Domain?: Value<string>
    DomainIAMRoleName?: Value<string>
    EnableCloudwatchLogsExports?: List<Value<string>>
    EnableIAMDatabaseAuthentication?: Value<boolean>
    EnablePerformanceInsights?: Value<boolean>
    Engine?: Value<string>
    EngineVersion?: Value<string>
    Iops?: Value<number>
    KmsKeyId?: Value<string>
    LicenseModel?: Value<string>
    MasterUserPassword?: Value<string>
    MasterUsername?: Value<string>
    MonitoringInterval?: Value<number>
    MonitoringRoleArn?: Value<string>
    MultiAZ?: Value<boolean>
    OptionGroupName?: Value<string>
    PerformanceInsightsKMSKeyId?: Value<string>
    PerformanceInsightsRetentionPeriod?: Value<number>
    Port?: Value<string>
    PreferredBackupWindow?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    ProcessorFeatures?: List<ProcessorFeature>
    PromotionTier?: Value<number>
    PubliclyAccessible?: Value<boolean>
    SourceDBInstanceIdentifier?: Value<string>
    SourceRegion?: Value<string>
    StorageEncrypted?: Value<boolean>
    StorageType?: Value<string>
    Tags?: List<ResourceTag>
    Timezone?: Value<string>
    UseDefaultProcessorFeatures?: Value<boolean>
    VPCSecurityGroups?: List<Value<string>>
}

export default class DBInstance extends ResourceBase {
    static ProcessorFeature = ProcessorFeature

    constructor(properties?: DBInstanceProperties) {
        super('AWS::RDS::DBInstance', properties)
    }
}
