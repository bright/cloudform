/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Constraints {
    ReadOnlyFields?: List<ReadOnlyFieldInfo>
    InvisibleFields?: List<InvisibleFieldInfo>
    RequiredFields?: List<RequiredFieldInfo>

    constructor(properties: Constraints) {
        Object.assign(this, properties)
    }
}

export class DefaultFieldValue {
    DefaultValue!: Value<string>
    Id!: FieldIdentifier

    constructor(properties: DefaultFieldValue) {
        Object.assign(this, properties)
    }
}

export class Field {
    Type!: Value<string>
    Description?: Value<string>
    Id!: FieldIdentifier
    SingleSelectOptions?: List<Value<string>>

    constructor(properties: Field) {
        Object.assign(this, properties)
    }
}

export class FieldIdentifier {
    Name!: Value<string>

    constructor(properties: FieldIdentifier) {
        Object.assign(this, properties)
    }
}

export class InvisibleFieldInfo {
    Id!: FieldIdentifier

    constructor(properties: InvisibleFieldInfo) {
        Object.assign(this, properties)
    }
}

export class ReadOnlyFieldInfo {
    Id!: FieldIdentifier

    constructor(properties: ReadOnlyFieldInfo) {
        Object.assign(this, properties)
    }
}

export class RequiredFieldInfo {
    Id!: FieldIdentifier

    constructor(properties: RequiredFieldInfo) {
        Object.assign(this, properties)
    }
}

export interface TaskTemplateProperties {
    Status?: Value<string>
    Description?: Value<string>
    Constraints?: Constraints
    Defaults?: List<DefaultFieldValue>
    Fields?: List<Field>
    InstanceArn: Value<string>
    ContactFlowArn?: Value<string>
    ClientToken?: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class TaskTemplate extends ResourceBase<TaskTemplateProperties> {
    static Constraints = Constraints
    static DefaultFieldValue = DefaultFieldValue
    static Field = Field
    static FieldIdentifier = FieldIdentifier
    static InvisibleFieldInfo = InvisibleFieldInfo
    static ReadOnlyFieldInfo = ReadOnlyFieldInfo
    static RequiredFieldInfo = RequiredFieldInfo

    constructor(properties: TaskTemplateProperties) {
        super('AWS::Connect::TaskTemplate', properties)
    }
}
