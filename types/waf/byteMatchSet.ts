/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface ByteMatchTupleProperties {
    FieldToMatch: FieldToMatch
    PositionalConstraint: Value<string>
    TargetString?: Value<string>
    TargetStringBase64?: Value<string>
    TextTransformation: Value<string>
}

export class ByteMatchTuple extends ResourceBase {
    constructor(properties: ByteMatchTupleProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::ByteMatchTuple', properties, dependsOn)
    }
}

export interface FieldToMatchProperties {
    Data?: Value<string>
    Type: Value<string>
}

export class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::FieldToMatch', properties, dependsOn)
    }
}

export interface ByteMatchSetProperties {
    ByteMatchTuples?: ByteMatchTuple[]
    Name: Value<string>
}

export default class ByteMatchSet extends ResourceBase {
    constructor(properties: ByteMatchSetProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::ByteMatchSet', properties, dependsOn)
    }
}