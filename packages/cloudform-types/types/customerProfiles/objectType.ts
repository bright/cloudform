/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class KeyMap {
    Name?: Value<string>

    constructor(properties: KeyMap) {
        Object.assign(this, properties)
    }
}

export class FieldMap {
    Name?: Value<string>

    constructor(properties: FieldMap) {
        Object.assign(this, properties)
    }
}

export class ObjectTypeField {
    Source?: Value<string>
    Target?: Value<string>
    ContentType?: Value<string>

    constructor(properties: ObjectTypeField) {
        Object.assign(this, properties)
    }
}

export class ObjectTypeKey {


    constructor(properties: ObjectTypeKey) {
        Object.assign(this, properties)
    }
}

export interface ObjectTypeProperties {
    DomainName: Value<string>
    ObjectTypeName?: Value<string>
    AllowProfileCreation?: Value<boolean>
    Description?: Value<string>
    EncryptionKey?: Value<string>
    ExpirationDays?: Value<number>
    TemplateId?: Value<string>
}

export default class ObjectType extends ResourceBase<ObjectTypeProperties> {
    static KeyMap = KeyMap
    static FieldMap = FieldMap
    static ObjectTypeField = ObjectTypeField
    static ObjectTypeKey = ObjectTypeKey

    constructor(properties: ObjectTypeProperties) {
        super('AWS::CustomerProfiles::ObjectType', properties)
    }
}
