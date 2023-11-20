/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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

export class AttributeDetails {
    Expression!: Value<string>
    Attributes!: List<AttributeItem>

    constructor(properties: AttributeDetails) {
        Object.assign(this, properties)
    }
}

export class AttributeItem {
    Name!: Value<string>

    constructor(properties: AttributeItem) {
        Object.assign(this, properties)
    }
}

export class Conditions {
    Range?: Range
    ObjectCount?: Value<number>
    Threshold?: Threshold

    constructor(properties: Conditions) {
        Object.assign(this, properties)
    }
}

export class Range {
    Value!: Value<number>
    Unit!: Value<string>

    constructor(properties: Range) {
        Object.assign(this, properties)
    }
}

export class Threshold {
    Operator!: Value<string>
    Value!: Value<string>

    constructor(properties: Threshold) {
        Object.assign(this, properties)
    }
}

export interface CalculatedAttributeDefinitionProperties {
    Description?: Value<string>
    AttributeDetails: AttributeDetails
    Statistic: Value<string>
    DomainName: Value<string>
    DisplayName?: Value<string>
    CalculatedAttributeName: Value<string>
    Conditions?: Conditions
    Tags?: List<ResourceTag>
}

export default class CalculatedAttributeDefinition extends ResourceBase<CalculatedAttributeDefinitionProperties> {
    static AttributeDetails = AttributeDetails
    static AttributeItem = AttributeItem
    static Conditions = Conditions
    static Range = Range
    static Threshold = Threshold

    constructor(properties: CalculatedAttributeDefinitionProperties) {
        super('AWS::CustomerProfiles::CalculatedAttributeDefinition', properties)
    }
}
