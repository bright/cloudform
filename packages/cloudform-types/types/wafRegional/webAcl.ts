/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Rule {
    Action!: Action
    Priority!: Value<number>
    RuleId!: Value<string>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class Action {
    Type!: Value<string>

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export interface WebACLProperties {
    MetricName: Value<string>
    DefaultAction: Action
    Rules?: List<Rule>
    Name: Value<string>
}

export default class WebACL extends ResourceBase {
    static Rule = Rule
    static Action = Action

    constructor(properties?: WebACLProperties) {
        super('AWS::WAFRegional::WebACL', properties)
    }
}
