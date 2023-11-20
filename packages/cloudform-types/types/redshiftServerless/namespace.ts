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
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class NamespaceInner {
    Status?: Value<string>
    NamespaceName?: Value<string>
    AdminUsername?: Value<string>
    CreationDate?: Value<string>
    IamRoles?: List<Value<string>>
    NamespaceArn?: Value<string>
    KmsKeyId?: Value<string>
    DbName?: Value<string>
    NamespaceId?: Value<string>
    DefaultIamRoleArn?: Value<string>
    LogExports?: List<Value<string>>

    constructor(properties: NamespaceInner) {
        Object.assign(this, properties)
    }
}

export interface NamespaceProperties {
    AdminUsername?: Value<string>
    NamespaceName: Value<string>
    IamRoles?: List<Value<string>>
    KmsKeyId?: Value<string>
    FinalSnapshotName?: Value<string>
    FinalSnapshotRetentionPeriod?: Value<number>
    AdminUserPassword?: Value<string>
    DbName?: Value<string>
    DefaultIamRoleArn?: Value<string>
    Tags?: List<ResourceTag>
    LogExports?: List<Value<string>>
}

export default class Namespace extends ResourceBase<NamespaceProperties> {
    static Namespace = NamespaceInner

    constructor(properties: NamespaceProperties) {
        super('AWS::RedshiftServerless::Namespace', properties)
    }
}
