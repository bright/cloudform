/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface WafActionProperties {
    Type: Value<string>
}

export class WafAction extends ResourceBase {
    constructor(properties: WafActionProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::WafAction', properties, dependsOn)
    }
}

export interface ActivatedRuleProperties {
    Action: WafAction
    Priority: Value<number>
    RuleId: Value<string>
}

export class ActivatedRule extends ResourceBase {
    constructor(properties: ActivatedRuleProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::ActivatedRule', properties, dependsOn)
    }
}

export interface WebACLProperties {
    DefaultAction: WafAction
    MetricName: Value<string>
    Name: Value<string>
    Rules?: ActivatedRule[]
}

export default class WebACL extends ResourceBase {
    constructor(properties: WebACLProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::WebACL', properties, dependsOn)
    }
}