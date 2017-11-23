/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface FieldToMatchProperties {
    Type: Value<string>
    Data?: Value<string>
}

export class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::FieldToMatch', properties, dependsOn)
    }
}

export interface SqlInjectionMatchTupleProperties {
    TextTransformation: Value<string>
    FieldToMatch: FieldToMatch
}

export class SqlInjectionMatchTuple extends ResourceBase {
    constructor(properties: SqlInjectionMatchTupleProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::SqlInjectionMatchTuple', properties, dependsOn)
    }
}

export interface SqlInjectionMatchSetProperties {
    SqlInjectionMatchTuples?: SqlInjectionMatchTuple[]
    Name: Value<string>
}

export default class SqlInjectionMatchSet extends ResourceBase {
    constructor(properties: SqlInjectionMatchSetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::SqlInjectionMatchSet', properties, dependsOn)
    }
}
