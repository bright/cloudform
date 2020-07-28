/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class EngineAttribute {
    Value?: Value<string>
    Name?: Value<string>

    constructor(properties: EngineAttribute) {
        Object.assign(this, properties)
    }
}

export interface ServerProperties {
    KeyPair?: Value<string>
    EngineVersion?: Value<string>
    ServiceRoleArn: Value<string>
    DisableAutomatedBackup?: Value<boolean>
    BackupId?: Value<string>
    EngineModel?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    AssociatePublicIpAddress?: Value<boolean>
    InstanceProfileArn: Value<string>
    CustomCertificate?: Value<string>
    PreferredBackupWindow?: Value<string>
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>
    CustomDomain?: Value<string>
    CustomPrivateKey?: Value<string>
    ServerName?: Value<string>
    EngineAttributes?: List<EngineAttribute>
    BackupRetentionCount?: Value<number>
    InstanceType: Value<string>
    Tags?: List<ResourceTag>
    Engine?: Value<string>
}

export default class Server extends ResourceBase<ServerProperties> {
    static EngineAttribute = EngineAttribute

    constructor(properties: ServerProperties) {
        super('AWS::OpsWorksCM::Server', properties)
    }
}
