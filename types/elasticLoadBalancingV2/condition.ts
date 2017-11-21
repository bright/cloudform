import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Field = "*" | "path-pattern"

export interface ConditionProperties {
    Field?: Value<Field>
    Values?: Value<string>[]
}

export default class Condition extends ResourceBase {
    constructor(properties: ConditionProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancingV2::Condition', properties, dependsOn)
    }
}