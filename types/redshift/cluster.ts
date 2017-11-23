/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface LoggingPropertiesProperties {
    BucketName: Value<string>
    S3KeyPrefix?: Value<string>
}

export class LoggingProperties extends ResourceBase {
    constructor(properties: LoggingPropertiesProperties, dependsOn?: Value<string>) {
        super('AWS::Redshift::LoggingProperties', properties, dependsOn)
    }
}

export interface ClusterProperties {
    AllowVersionUpgrade?: Value<boolean>
    AutomatedSnapshotRetentionPeriod?: Value<number>
    AvailabilityZone?: Value<string>
    ClusterParameterGroupName?: Value<string>
    ClusterSecurityGroups?: Value<string>[]
    ClusterSubnetGroupName?: Value<string>
    ClusterType: Value<string>
    ClusterVersion?: Value<string>
    DBName: Value<string>
    ElasticIp?: Value<string>
    Encrypted?: Value<boolean>
    HsmClientCertificateIdentifier?: Value<string>
    HsmConfigurationIdentifier?: Value<string>
    IamRoles?: Value<string>[]
    KmsKeyId?: Value<string>
    LoggingProperties?: LoggingProperties
    MasterUserPassword: Value<string>
    MasterUsername: Value<string>
    NodeType: Value<string>
    NumberOfNodes?: Value<number>
    OwnerAccount?: Value<string>
    Port?: Value<number>
    PreferredMaintenanceWindow?: Value<string>
    PubliclyAccessible?: Value<boolean>
    SnapshotClusterIdentifier?: Value<string>
    SnapshotIdentifier?: Value<string>
    Tags?: ResourceTag[]
    VpcSecurityGroupIds?: Value<string>[]
}

export default class Cluster extends ResourceBase {
    constructor(properties: ClusterProperties, dependsOn?: Value<string>) {
        super('AWS::Redshift::Cluster', properties, dependsOn)
    }
}