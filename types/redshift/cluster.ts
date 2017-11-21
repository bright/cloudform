import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type ClusterType = "single-node" | "multi-node"
export type NodeType = "dw.hs1.xlarge" | "dw.hs1.8xlarge" | "*"

export interface ClusterProperties {
    AllowVersionUpgrade?: Value<boolean>
    AutomatedSnapshotRetentionPeriod?: Value<number>
    AvailabilityZone?: Value<string>
    ClusterParameterGroupName?: Value<string>
    ClusterSecurityGroups?: Value<string>
    ClusterSubnetGroupName?: Value<string>
    ClusterType: Value<ClusterType>
    ClusterVersion?: Value<string>
    DBName: Value<string>
    ElasticIp?: Value<string>
    Encrypted?: Value<boolean>
    HsmClientCertificateIdentifier?: Value<string>
    HsmConfigurationIdentifier?: Value<string>
    IamRoles?: Value<string>[]
    KmsKeyId: Value<string>
    MasterUsername: Value<string>
    MasterUserPassword: Value<string>
    NodeType: Value<NodeType>
    NumberOfNodes?: Value<number>
    OwnerAccount?: Value<string>
    Port?: Value<number>
    PreferredMaintenanceWindow?: Value<string>
    PubliclyAccessible?: Value<boolean>
    SnapshotClusterIdentifier?: Value<string>
    SnapshotIdentifier?: Value<string>
    VpcSecurityGroupIds?: Value<string>
}

export default class Cluster extends ResourceBase {
    constructor(properties: ClusterProperties, dependsOn?: Value<string>) {
        super('AWS::Redshift::Cluster', properties, dependsOn)
    }
}