/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ByteMatchTuple {
    TargetString?: Value<string>
    TargetStringBase64?: Value<string>
    PositionalConstraint!: Value<string>
    TextTransformation!: Value<string>
    FieldToMatch!: FieldToMatch

    constructor(properties: ByteMatchTuple) {
        Object.assign(this, properties)
    }
}

export class FieldToMatch {
    Type!: Value<string>
    Data?: Value<string>

    constructor(properties: FieldToMatch) {
        Object.assign(this, properties)
    }
}

export interface ByteMatchSetProperties {
    ByteMatchTuples?: List<ByteMatchTuple>
    Name: Value<string>
}

export default class ByteMatchSet extends ResourceBase {
    static ByteMatchTuple = ByteMatchTuple
    static FieldToMatch = FieldToMatch

    constructor(properties?: ByteMatchSetProperties) {
        super('AWS::WAFRegional::ByteMatchSet', properties)
    }
}
