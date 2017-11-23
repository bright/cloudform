/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface SizeConstraintProperties {
    ComparisonOperator: Value<string>
    Size: Value<number>
    TextTransformation: Value<string>
    FieldToMatch: FieldToMatch
}

export class SizeConstraint extends ResourceBase {
    constructor(properties: SizeConstraintProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::SizeConstraint', properties, dependsOn)
    }
}

export interface FieldToMatchProperties {
    Type: Value<string>
    Data?: Value<string>
}

export class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::FieldToMatch', properties, dependsOn)
    }
}

export interface SizeConstraintSetProperties {
    SizeConstraints?: SizeConstraint[]
    Name: Value<string>
}

export default class SizeConstraintSet extends ResourceBase {
    constructor(properties: SizeConstraintSetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::SizeConstraintSet', properties, dependsOn)
    }
}
