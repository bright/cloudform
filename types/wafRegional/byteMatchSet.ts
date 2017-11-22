/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface ByteMatchTupleProperties {
    TargetString?: Value<string>
    TargetStringBase64?: Value<string>
    PositionalConstraint: Value<string>
    TextTransformation: Value<string>
    FieldToMatch: FieldToMatch
}

export class ByteMatchTuple extends ResourceBase {
    constructor(properties: ByteMatchTupleProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::ByteMatchTuple', properties, dependsOn)
    }
}

export interface FieldToMatchProperties {
    Type: Value<string>
    Data?: Value<string>
}

export class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::FieldToMatch', properties, dependsOn)
    }
}

export interface ByteMatchSetProperties {
    ByteMatchTuples?: ByteMatchTuple[]
    Name: Value<string>
}

export default class ByteMatchSet extends ResourceBase {
    constructor(properties: ByteMatchSetProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::ByteMatchSet', properties, dependsOn)
    }
}