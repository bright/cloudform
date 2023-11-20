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

export class Endpoint {
    Address?: Value<string>
    Port?: Value<string>

    constructor(properties: Endpoint) {
        Object.assign(this, properties)
    }
}

export class LoggingProperties {
    BucketName!: Value<string>
    S3KeyPrefix?: Value<string>

    constructor(properties: LoggingProperties) {
        Object.assign(this, properties)
    }
}

export interface ClusterProperties {
    RevisionTarget?: Value<string>
    AutomatedSnapshotRetentionPeriod?: Value<number>
    Encrypted?: Value<boolean>
    Port?: Value<number>
    NumberOfNodes?: Value<number>
    DestinationRegion?: Value<string>
    AllowVersionUpgrade?: Value<boolean>
    Endpoint?: Endpoint
    MaintenanceTrackName?: Value<string>
    OwnerAccount?: Value<string>
    MultiAZ?: Value<boolean>
    Tags?: List<ResourceTag>
    SnapshotClusterIdentifier?: Value<string>
    IamRoles?: List<Value<string>>
    KmsKeyId?: Value<string>
    SnapshotCopyManual?: Value<boolean>
    AvailabilityZone?: Value<string>
    ClusterSecurityGroups?: List<Value<string>>
    ClusterIdentifier?: Value<string>
    MasterUserPassword: Value<string>
    ClusterSubnetGroupName?: Value<string>
    LoggingProperties?: LoggingProperties
    DeferMaintenance?: Value<boolean>
    NodeType: Value<string>
    MasterUsername: Value<string>
    PubliclyAccessible?: Value<boolean>
    ManualSnapshotRetentionPeriod?: Value<number>
    ResourceAction?: Value<string>
    HsmClientCertificateIdentifier?: Value<string>
    ElasticIp?: Value<string>
    AvailabilityZoneRelocationStatus?: Value<string>
    AquaConfigurationStatus?: Value<string>
    SnapshotIdentifier?: Value<string>
    AvailabilityZoneRelocation?: Value<boolean>
    SnapshotCopyGrantName?: Value<string>
    EnhancedVpcRouting?: Value<boolean>
    ClusterParameterGroupName?: Value<string>
    DeferMaintenanceEndTime?: Value<string>
    RotateEncryptionKey?: Value<boolean>
    VpcSecurityGroupIds?: List<Value<string>>
    ClusterVersion?: Value<string>
    HsmConfigurationIdentifier?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    DeferMaintenanceStartTime?: Value<string>
    ClusterType: Value<string>
    Classic?: Value<boolean>
    DeferMaintenanceDuration?: Value<number>
    DBName: Value<string>
    SnapshotCopyRetentionPeriod?: Value<number>
}

export default class Cluster extends ResourceBase<ClusterProperties> {
    static Endpoint = Endpoint
    static LoggingProperties = LoggingProperties

    constructor(properties: ClusterProperties) {
        super('AWS::Redshift::Cluster', properties)
    }
}
