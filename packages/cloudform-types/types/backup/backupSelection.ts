/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class BackupSelectionResourceType {
    ListOfTags?: List<ConditionResourceType>
    SelectionName!: Value<string>
    IamRoleArn!: Value<string>
    Resources?: List<Value<string>>

    constructor(properties: BackupSelectionResourceType) {
        Object.assign(this, properties)
    }
}

export class ConditionResourceType {
    ConditionValue!: Value<string>
    ConditionKey!: Value<string>
    ConditionType!: Value<string>

    constructor(properties: ConditionResourceType) {
        Object.assign(this, properties)
    }
}

export interface BackupSelectionProperties {
    BackupSelection: BackupSelectionResourceType
    BackupPlanId: Value<string>
}

export default class BackupSelection extends ResourceBase<BackupSelectionProperties> {
    static BackupSelectionResourceType = BackupSelectionResourceType
    static ConditionResourceType = ConditionResourceType

    constructor(properties: BackupSelectionProperties) {
        super('AWS::Backup::BackupSelection', properties)
    }
}
