/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface FieldToMatchProperties {
    Data?: Value<string>
    Type: Value<string>
}

export class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAF::FieldToMatch', properties, dependsOn)
    }
}

export interface XssMatchTupleProperties {
    FieldToMatch: FieldToMatch
    TextTransformation: Value<string>
}

export class XssMatchTuple extends ResourceBase {
    constructor(properties: XssMatchTupleProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAF::XssMatchTuple', properties, dependsOn)
    }
}

export interface XssMatchSetProperties {
    Name: Value<string>
    XssMatchTuples: XssMatchTuple[]
}

export default class XssMatchSet extends ResourceBase {
    constructor(properties: XssMatchSetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAF::XssMatchSet', properties, dependsOn)
    }
}
