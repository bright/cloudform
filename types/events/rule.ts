import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Targets from './targets'

export type State = "*" | "ENABLED" | "DISABLED"

export interface RuleProperties {
    Description?: Value<string>
    EventPattern?: any
    Name?: Value<string>
    RoleArn?: Value<string>
    ScheduleExpression?: Value<string>
    State?: Value<State>
    Targets?: Targets
}

export default class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string>) {
        super('AWS::Events::Rule', properties, dependsOn)
    }
}