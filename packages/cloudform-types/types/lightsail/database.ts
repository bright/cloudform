/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class RelationalDatabaseParameter {
    ApplyMethod?: Value<string>
    IsModifiable?: Value<boolean>
    ApplyType?: Value<string>
    AllowedValues?: Value<string>
    Description?: Value<string>
    ParameterValue?: Value<string>
    DataType?: Value<string>
    ParameterName?: Value<string>

    constructor(properties: RelationalDatabaseParameter) {
        Object.assign(this, properties)
    }
}

export interface DatabaseProperties {
    RelationalDatabaseName: Value<string>
    CaCertificateIdentifier?: Value<string>
    AvailabilityZone?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    RelationalDatabaseBlueprintId: Value<string>
    PreferredBackupWindow?: Value<string>
    MasterDatabaseName: Value<string>
    MasterUserPassword?: Value<string>
    RelationalDatabaseParameters?: List<RelationalDatabaseParameter>
    RotateMasterUserPassword?: Value<boolean>
    MasterUsername: Value<string>
    PubliclyAccessible?: Value<boolean>
    RelationalDatabaseBundleId: Value<string>
    BackupRetention?: Value<boolean>
    Tags?: List<ResourceTag>
}

export default class Database extends ResourceBase<DatabaseProperties> {
    static RelationalDatabaseParameter = RelationalDatabaseParameter

    constructor(properties: DatabaseProperties) {
        super('AWS::Lightsail::Database', properties)
    }
}
