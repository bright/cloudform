/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface PredicateProperties {
    Type: Value<string>
    DataId: Value<string>
    Negated: Value<boolean>
}

export class Predicate extends ResourceBase {
    constructor(properties: PredicateProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::Predicate', properties, dependsOn)
    }
}

export interface RuleProperties {
    MetricName: Value<string>
    Predicates?: Predicate[]
    Name: Value<string>
}

export default class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::Rule', properties, dependsOn)
    }
}
