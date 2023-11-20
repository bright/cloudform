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

export class DBClusterRole {
    RoleArn!: Value<string>
    FeatureName?: Value<string>

    constructor(properties: DBClusterRole) {
        Object.assign(this, properties)
    }
}

export class Endpoint {
    Address?: Value<string>
    Port?: Value<string>

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

export class ReadEndpoint {
    Address?: Value<string>

    constructor(properties: ReadEndpoint) {
        Object.assign(this, properties)
    }
}

export class ScalingConfiguration {
    TimeoutAction?: Value<string>
    SecondsBeforeTimeout?: Value<number>
    SecondsUntilAutoPause?: Value<number>
    AutoPause?: Value<boolean>
    MinCapacity?: Value<number>
    MaxCapacity?: Value<number>

    constructor(properties: ScalingConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServerlessV2ScalingConfiguration {
    MinCapacity?: Value<number>
    MaxCapacity?: Value<number>

    constructor(properties: ServerlessV2ScalingConfiguration) {
        Object.assign(this, properties)
    }
}

export interface DBClusterProperties {
    StorageEncrypted?: Value<boolean>
    DBSystemId?: Value<string>
    RestoreToTime?: Value<string>
    EngineMode?: Value<string>
    Port?: Value<number>
    DBClusterIdentifier?: Value<string>
    MonitoringInterval?: Value<number>
    ReplicationSourceIdentifier?: Value<string>
    Engine?: Value<string>
    Tags?: List<ResourceTag>
    EngineVersion?: Value<string>
    StorageType?: Value<string>
    KmsKeyId?: Value<string>
    ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration
    PerformanceInsightsRetentionPeriod?: Value<number>
    DatabaseName?: Value<string>
    AutoMinorVersionUpgrade?: Value<boolean>
    DBSubnetGroupName?: Value<string>
    DeletionProtection?: Value<boolean>
    AllocatedStorage?: Value<number>
    MasterUserPassword?: Value<string>
    MasterUserSecret?: MasterUserSecret
    SourceDBClusterIdentifier?: Value<string>
    MasterUsername?: Value<string>
    ScalingConfiguration?: ScalingConfiguration
    PerformanceInsightsKmsKeyId?: Value<string>
    PubliclyAccessible?: Value<boolean>
    Domain?: Value<string>
    BacktrackWindow?: Value<number>
    DBInstanceParameterGroupName?: Value<string>
    EnableGlobalWriteForwarding?: Value<boolean>
    MonitoringRoleArn?: Value<string>
    AssociatedRoles?: List<DBClusterRole>
    EnableHttpEndpoint?: Value<boolean>
    SnapshotIdentifier?: Value<string>
    PreferredBackupWindow?: Value<string>
    NetworkType?: Value<string>
    VpcSecurityGroupIds?: List<Value<string>>
    CopyTagsToSnapshot?: Value<boolean>
    GlobalClusterIdentifier?: Value<string>
    RestoreType?: Value<string>
    DomainIAMRoleName?: Value<string>
    DBClusterInstanceClass?: Value<string>
    AvailabilityZones?: List<Value<string>>
    PreferredMaintenanceWindow?: Value<string>
    Iops?: Value<number>
    SourceRegion?: Value<string>
    UseLatestRestorableTime?: Value<boolean>
    ManageMasterUserPassword?: Value<boolean>
    EnableIAMDatabaseAuthentication?: Value<boolean>
    DBClusterParameterGroupName?: Value<string>
    PerformanceInsightsEnabled?: Value<boolean>
    BackupRetentionPeriod?: Value<number>
    EnableCloudwatchLogsExports?: List<Value<string>>
}

export default class DBCluster extends ResourceBase<DBClusterProperties> {
    static DBClusterRole = DBClusterRole
    static Endpoint = Endpoint
    static MasterUserSecret = MasterUserSecret
    static ReadEndpoint = ReadEndpoint
    static ScalingConfiguration = ScalingConfiguration
    static ServerlessV2ScalingConfiguration = ServerlessV2ScalingConfiguration

    constructor(properties?: DBClusterProperties) {
        super('AWS::RDS::DBCluster', properties || {})
    }
}
