/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AttributesItems {
    AttributeType?: Value<string>
    AttributeName?: Value<string>

    constructor(properties: AttributesItems) {
        Object.assign(this, properties)
    }
}

export class EncryptionConfig {
    KmsKeyArn?: Value<string>
    RoleArn?: Value<string>

    constructor(properties: EncryptionConfig) {
        Object.assign(this, properties)
    }
}

export class Schema {
    Attributes?: List<AttributesItems>

    constructor(properties: Schema) {
        Object.assign(this, properties)
    }
}

export class TagsItems {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: TagsItems) {
        Object.assign(this, properties)
    }
}

export interface DatasetProperties {
    DataFrequency?: Value<string>
    DatasetName: Value<string>
    Schema: Schema
    DatasetType: Value<string>
    Domain: Value<string>
    EncryptionConfig?: EncryptionConfig
    Tags?: List<TagsItems>
}

export default class Dataset extends ResourceBase<DatasetProperties> {
    static AttributesItems = AttributesItems
    static EncryptionConfig = EncryptionConfig
    static Schema = Schema
    static TagsItems = TagsItems

    constructor(properties: DatasetProperties) {
        super('AWS::Forecast::Dataset', properties)
    }
}
