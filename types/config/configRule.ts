import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Scope from './scope'

export type MaximumExecutionFrequency = "*" | "One_Hour" | "Three_Hours" | "Six_Hours" | "Twelve_Hours" | "TwentyFour_Hours"

export interface ConfigRuleProperties {
    ConfigRuleName?: Value<string>
    Description?: Value<string>
    InputParameters?: any
    MaximumExecutionFrequency?: Value<MaximumExecutionFrequency>
    Scope?: Scope
}

export default class ConfigRule extends ResourceBase {
    constructor(properties: ConfigRuleProperties, dependsOn?: Value<string>) {
        super('AWS::Config::ConfigRule', properties, dependsOn)
    }
}