/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface DBClusterProperties {
    StorageEncrypted?: Value<boolean>
    EngineVersion?: Value<string>
    KmsKeyId?: Value<string>
    AvailabilityZones?: List<Value<string>>
    SnapshotIdentifier?: Value<string>
    Port?: Value<number>
    DBClusterIdentifier?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    IamAuthEnabled?: Value<boolean>
    DBSubnetGroupName?: Value<string>
    DeletionProtection?: Value<boolean>
    PreferredBackupWindow?: Value<string>
    VpcSecurityGroupIds?: List<Value<string>>
    DBClusterParameterGroupName?: Value<string>
    BackupRetentionPeriod?: Value<number>
    Tags?: List<ResourceTag>
    EnableCloudwatchLogsExports?: List<Value<string>>
}

export default class DBCluster extends ResourceBase<DBClusterProperties> {


    constructor(properties?: DBClusterProperties) {
        super('AWS::Neptune::DBCluster', properties || {})
    }
}
