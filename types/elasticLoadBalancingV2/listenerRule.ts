/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface ActionProperties {
    TargetGroupArn: Value<string>
    Type: Value<string>
}

export class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancingV2::Action', properties, dependsOn)
    }
}

export interface RuleConditionProperties {
    Field?: Value<string>
    Values?: Value<string>[]
}

export class RuleCondition extends ResourceBase {
    constructor(properties: RuleConditionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancingV2::RuleCondition', properties, dependsOn)
    }
}

export interface ListenerRuleProperties {
    Actions: Action[]
    Conditions: RuleCondition[]
    ListenerArn: Value<string>
    Priority: Value<number>
}

export default class ListenerRule extends ResourceBase {
    constructor(properties: ListenerRuleProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancingV2::ListenerRule', properties, dependsOn)
    }
}
