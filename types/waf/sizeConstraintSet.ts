/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface FieldToMatchProperties {
    Data?: Value<string>
    Type: Value<string>
}

export class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAF::FieldToMatch', properties, dependsOn)
    }
}

export interface SizeConstraintProperties {
    ComparisonOperator: Value<string>
    FieldToMatch: FieldToMatch
    Size: Value<number>
    TextTransformation: Value<string>
}

export class SizeConstraint extends ResourceBase {
    constructor(properties: SizeConstraintProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAF::SizeConstraint', properties, dependsOn)
    }
}

export interface SizeConstraintSetProperties {
    Name: Value<string>
    SizeConstraints: List<SizeConstraint>
}

export default class SizeConstraintSet extends ResourceBase {
    constructor(properties: SizeConstraintSetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAF::SizeConstraintSet', properties, dependsOn)
    }
}
