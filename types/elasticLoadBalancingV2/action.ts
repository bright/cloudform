import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Type = "*" | "forward"

export interface ActionProperties {
    TargetGroupArn: Value<string>
    Type: Value<Type>
}

export default class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancingV2::Action', properties, dependsOn)
    }
}