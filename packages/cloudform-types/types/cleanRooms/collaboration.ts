/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DataEncryptionMetadata {
    AllowCleartext!: Value<boolean>
    PreserveNulls!: Value<boolean>
    AllowJoinsOnColumnsWithDifferentNames!: Value<boolean>
    AllowDuplicates!: Value<boolean>

    constructor(properties: DataEncryptionMetadata) {
        Object.assign(this, properties)
    }
}

export class MemberSpecification {
    AccountId!: Value<string>
    DisplayName!: Value<string>
    MemberAbilities!: List<Value<string>>

    constructor(properties: MemberSpecification) {
        Object.assign(this, properties)
    }
}

export interface CollaborationProperties {
    CreatorDisplayName: Value<string>
    CreatorMemberAbilities: List<Value<string>>
    Description: Value<string>
    QueryLogStatus: Value<string>
    DataEncryptionMetadata?: DataEncryptionMetadata
    Tags?: List<ResourceTag>
    Members: List<MemberSpecification>
    Name: Value<string>
}

export default class Collaboration extends ResourceBase<CollaborationProperties> {
    static DataEncryptionMetadata = DataEncryptionMetadata
    static MemberSpecification = MemberSpecification

    constructor(properties: CollaborationProperties) {
        super('AWS::CleanRooms::Collaboration', properties)
    }
}
