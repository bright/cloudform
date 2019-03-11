/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class XssMatchTuple {
    TextTransformation!: Value<string>
    FieldToMatch!: FieldToMatch

    constructor(properties: XssMatchTuple) {
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

export interface XssMatchSetProperties {
    XssMatchTuples?: List<XssMatchTuple>
    Name: Value<string>
}

export default class XssMatchSet extends ResourceBase {
    static XssMatchTuple = XssMatchTuple
    static FieldToMatch = FieldToMatch

    constructor(properties?: XssMatchSetProperties) {
        super('AWS::WAFRegional::XssMatchSet', properties)
    }
}
