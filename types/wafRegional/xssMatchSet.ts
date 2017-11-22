/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface XssMatchTupleProperties {
    TextTransformation: Value<string>
    FieldToMatch: FieldToMatch
}

export class XssMatchTuple extends ResourceBase {
    constructor(properties: XssMatchTupleProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::XssMatchTuple', properties, dependsOn)
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

export interface XssMatchSetProperties {
    XssMatchTuples?: XssMatchTuple[]
    Name: Value<string>
}

export default class XssMatchSet extends ResourceBase {
    constructor(properties: XssMatchSetProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::XssMatchSet', properties, dependsOn)
    }
}