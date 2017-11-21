import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Action = "ALLOW" | "BLOCK" | "COUNT" | "*"

export interface RuleProperties {
    Action: Value<Action>
    Priority: Value<number>
    RuleId: Value<string>
}

export default class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::Rule', properties, dependsOn)
    }
}