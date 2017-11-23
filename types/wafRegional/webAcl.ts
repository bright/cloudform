/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface RuleProperties {
    Action: Action
    Priority: Value<number>
    RuleId: Value<string>
}

export class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::Rule', properties, dependsOn)
    }
}

export interface ActionProperties {
    Type: Value<string>
}

export class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::Action', properties, dependsOn)
    }
}

export interface WebACLProperties {
    MetricName: Value<string>
    DefaultAction: Action
    Rules?: Rule[]
    Name: Value<string>
}

export default class WebACL extends ResourceBase {
    constructor(properties: WebACLProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::WebACL', properties, dependsOn)
    }
}
