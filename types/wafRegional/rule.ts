/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Predicate {
    Type!: Value<string>
    DataId!: Value<string>
    Negated!: Value<boolean>

    constructor(properties: Predicate) {
        Object.assign(this, properties)
    }
}

export interface RuleProperties {
    MetricName: Value<string>
    Predicates?: List<Predicate>
    Name: Value<string>
}

export default class Rule extends ResourceBase {
    static Predicate = Predicate

    constructor(properties?: RuleProperties) {
        super('AWS::WAFRegional::Rule', properties)
    }
}
