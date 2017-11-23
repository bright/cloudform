/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface PredicateProperties {
    DataId: Value<string>
    Negated: Value<boolean>
    Type: Value<string>
}

export class Predicate extends ResourceBase {
    constructor(properties: PredicateProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAF::Predicate', properties, dependsOn)
    }
}

export interface RuleProperties {
    MetricName: Value<string>
    Name: Value<string>
    Predicates?: List<Predicate>
}

export default class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAF::Rule', properties, dependsOn)
    }
}
