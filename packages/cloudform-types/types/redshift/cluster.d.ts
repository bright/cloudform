import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoggingProperties {
    BucketName: Value<string>;
    S3KeyPrefix?: Value<string>;
    constructor(properties: LoggingProperties);
}
export interface ClusterProperties {
    ClusterIdentifier?: Value<string>;
    MasterUsername: Value<string>;
    MasterUserPassword: Value<string>;
    NodeType: Value<string>;
    AllowVersionUpgrade?: Value<boolean>;
    AutomatedSnapshotRetentionPeriod?: Value<number>;
    AvailabilityZone?: Value<string>;
    ClusterParameterGroupName?: Value<string>;
    ClusterType: Value<string>;
    ClusterVersion?: Value<string>;
    ClusterSubnetGroupName?: Value<string>;
    DBName: Value<string>;
    ElasticIp?: Value<string>;
    Encrypted?: Value<boolean>;
    HsmClientCertificateIdentifier?: Value<string>;
    HsmConfigurationIdentifier?: Value<string>;
    KmsKeyId?: Value<string>;
    NumberOfNodes?: Value<number>;
    Port?: Value<number>;
    PreferredMaintenanceWindow?: Value<string>;
    PubliclyAccessible?: Value<boolean>;
    ClusterSecurityGroups?: List<Value<string>>;
    IamRoles?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    VpcSecurityGroupIds?: List<Value<string>>;
    SnapshotClusterIdentifier?: Value<string>;
    SnapshotIdentifier?: Value<string>;
    Endpoint?: {
        [key: string]: any;
    };
    OwnerAccount?: Value<string>;
    LoggingProperties?: LoggingProperties;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static LoggingProperties: typeof LoggingProperties;
    constructor(properties: ClusterProperties);
}
