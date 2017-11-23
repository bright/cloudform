/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface SqlInjectionMatchTupleProperties {
    FieldToMatch: FieldToMatch
    TextTransformation: Value<string>
}

export class SqlInjectionMatchTuple extends ResourceBase {
    constructor(properties: SqlInjectionMatchTupleProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::SqlInjectionMatchTuple', properties, dependsOn)
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

export interface SqlInjectionMatchSetProperties {
    Name: Value<string>
    SqlInjectionMatchTuples?: SqlInjectionMatchTuple[]
}

export default class SqlInjectionMatchSet extends ResourceBase {
    constructor(properties: SqlInjectionMatchSetProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::SqlInjectionMatchSet', properties, dependsOn)
    }
}
